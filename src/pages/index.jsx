import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Footer />
    </div>
  );
}

export default HomePage;