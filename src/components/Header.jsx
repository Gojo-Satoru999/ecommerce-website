import React from 'react';
import SearchBar from './SearchBar';
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;