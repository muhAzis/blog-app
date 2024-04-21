import React from 'react';
import '@/styles/components/SearchBar.scss';

const SearchBar = () => {
  return (
    <form id="searchBar">
      <input type="text" placeholder="Search users..." className="input-col" />
      <button type="submit" className="bi bi-search submit-btn" />
    </form>
  );
};

export default SearchBar;
