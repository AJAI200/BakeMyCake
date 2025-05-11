// components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ cake }) => {
  const getRatingColor = (rating) => {
    if (rating < 4.0) return 'low-rating'; 
    if (rating >= 4.0 && rating < 4.5) return 'medium-rating'; 
    return 'high-rating'; 
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={cake.image} alt={cake.name} />
      </div>
      <div className="product-info">
        <h3>{cake.name}</h3>
        <div className="price-rating">
          <p className="price">Rs {cake.price}</p>
          <span className={`rating-banner ${getRatingColor(cake.rating)}`}>
            ⭐ {cake.rating}
          </span>
        </div>
      </div>
      <div className="product-description">
        <p>{cake.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
