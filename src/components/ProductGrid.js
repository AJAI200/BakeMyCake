// components/ProductGrid.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ cakes, setSortBy }) => {
  return (
    <div className="product-grid-container">
      <div className="sort-buttons">
        <button onClick={() => setSortBy('price')}>Sort by Price</button>
        <button onClick={() => setSortBy('rating')}>Sort by Rating</button>
      </div>
      <div className="product-grid">
        {cakes.length > 0 ? (
          cakes.map(cake => <ProductCard key={cake.id} cake={cake} />)
        ) : (
          <p>No cakes found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
