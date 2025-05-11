// components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>BakeMyCake!</h1>
        <p>Celebrate Your Moment</p>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search cakes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className="clear-button" onClick={() => setSearchQuery('')}>
            &times;
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
