import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId) => {
    // Add to cart logic here
  };

  const handleRemoveFromCart = (productId) => {
    // Remove from cart logic here
  };

  const handleCheckout = () => {
    // Checkout logic here
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.productId}>
            <span>{item.name}</span>
            <span> x {item.quantity}</span>
            <button onClick={() => handleRemoveFromCart(item.productId)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      <button onClick={() => handleCheckout()}>Checkout</button>
    </div>
  );
}

export default Cart;