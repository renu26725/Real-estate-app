import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/properties/${id}`);
        setProperty(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!property) {
    return <div className="text-center mt-10">Property not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      {/* Image */}
      <img
        src={property.image || "https://via.placeholder.com/800"}
        alt={property.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />

      {/* Details */}
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-xl text-blue-600 font-semibold mb-4">
        ₹ {property.price}
      </p>

      <p className="text-gray-700 mb-4">{property.description}</p>

      {/* Extra Info */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold">Location</p>
          <p>{property.location}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold">Type</p>
          <p>{property.type}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold">Bedrooms</p>
          <p>{property.bedrooms || "N/A"}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold">Bathrooms</p>
          <p>{property.bathrooms || "N/A"}</p>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-8">
        <button className="btn-primary w-full">
          Contact Owner
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;