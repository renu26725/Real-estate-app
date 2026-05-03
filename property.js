const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['House', 'Apartment', 'Villa', 'Land'], required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: Number, required: true }, // sq ft
  description: String,
  images: [String],
  status: { type: String, enum: ['For Sale', 'For Rent', 'Sold', 'Rented'], default: 'For Sale' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);