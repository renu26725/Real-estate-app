const express = require('express');
const auth = require('../middleware/auth');
const Property = require('../models/Property');
const router = express.Router();

// Get all properties with filters
router.get('/', async (req, res) => {
  try {
    const { type, location, minPrice, maxPrice, bedrooms, page = 1, limit = 9 } = req.query;
    const filters = {};
    
    if (type) filters.type = type;
    if (location) filters.location = { $regex: location, $options: 'i' };
    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.$gte = minPrice;
      if (maxPrice) filters.price.$lte = maxPrice;
    }
    if (bedrooms) filters.bedrooms = { $gte: bedrooms };

    const properties = await Property.find(filters)
      .populate('owner', 'name avatar')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Property.countDocuments(filters);
    
    res.json({
      properties,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single property
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('owner', 'name avatar');
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add property (protected)
router.post('/', auth, async (req, res) => {
  try {
    const property = new Property({ ...req.body, owner: req.user._id });
    await property.save();
    await property.populate('owner', 'name avatar');
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update property (protected)
router.put('/:id', auth, async (req, res) => {
  try {
    const property = await Property.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      req.body,
      { new: true }
    ).populate('owner', 'name avatar');
    
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;