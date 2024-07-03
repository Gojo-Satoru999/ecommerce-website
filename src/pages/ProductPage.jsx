import React from 'react';
import Header from '../components/Header';
import ProductInfo from '../components/ProductInfo';
import ProductDescription from '../components/ProductDescription';
import AddToCart from '../components/AddToCart';
import RelatedProducts from '../components/RelatedProducts';
import Footer from '../components/Footer';

function ProductPage() {
  return (
    <div>
      <Header />
      <ProductInfo />
      <ProductDescription />
      <AddToCart />
      <RelatedProducts />
      <Footer />
    </div>
  );
}

export default ProductPage;