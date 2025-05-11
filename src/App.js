import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await axios.get('http://localhost:3002/cakes');
        setCakes(response.data);
      } catch (error) {
        console.error('Error fetching cakes:', error);
      }
    };

    fetchCakes();
  }, []);

  const filteredCakes = cakes
    .filter((cake) => {
      const categoryMatch =
        selectedCategory === 'ALL' ||
        cake.category.toLowerCase().split(' ').join('') ===
          selectedCategory.toLowerCase().split(' ').join('');
      const searchMatch = cake.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div className="app-container">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Navigation
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        allCakes={cakes}
      />
      <Hero />
      <ProductGrid cakes={filteredCakes} setSortBy={setSortBy} />
      <Footer />
    </div>
  );
};

export default App;
