import React from 'react';

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
      {/* <button onClick={() => props.addToCart((link unavailable))}>Add to Cart</button> */}
    </div>
  );
}

export default ProductCard;