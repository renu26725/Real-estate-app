import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/properties", formData);
      alert("✅ Property Added Successfully!");
      console.log(res.data);

      // Clear form
      setFormData({
        title: "",
        price: "",
        location: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Error adding property");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Property</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={formData.title}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <button type="submit" className="btn btn-primary">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;