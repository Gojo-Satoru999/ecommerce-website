import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Search logic here
  };

  return (
    <form>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}

export default SearchBar;