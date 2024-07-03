import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('(link unavailable)')
      .then(response => response.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="product-listing">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map(product => (
          <ProductCard key={(link)} {...product} />
        ))
      )}
    </div>
  );
}

export default ProductListing;