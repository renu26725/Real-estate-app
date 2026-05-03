import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="card shadow-sm m-3" style={{ width: "18rem" }}>
      
      <img
        src={property.image || "https://via.placeholder.com/300"}
        className="card-img-top"
        alt={property.title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>

        <p className="card-text text-muted">
          📍 {property.location}
        </p>

        <h6 className="text-primary">
          ₹ {property.price}
        </h6>

        <Link
          to={`/property/${property._id}`}
          className="btn btn-sm btn-outline-primary mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;