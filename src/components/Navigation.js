  import React from 'react';
import './Navigation.css';

const Navigation = ({ selectedCategory, setSelectedCategory, allCakes }) => {
  const categories = ['ALL', 'CAKES', 'CUP CAKES', 'CHEESE CAKES', 'COOKIES', 'BROWNIES', 'CHOCOLATES'];

  return (
    <nav className="navigation">
      {categories.map(category => (
        <button
          key={category}
          className={`nav-item ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category} ({allCakes.filter(cake => category === 'ALL' ||
            cake.category.toLowerCase().replace(/\s+/g, '') === category.toLowerCase().replace(/\s+/g, '')).length})
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
