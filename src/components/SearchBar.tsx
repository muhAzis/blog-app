'use client';
import React, { useEffect, useState } from 'react';
import '@/styles/components/SearchBar.scss';
import { useUsers } from '@/hooks/useUsers';

const SearchBar = () => {
  const { fetchUsersByName } = useUsers();
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    fetchUsersByName(input);
  }, [input]);

  return (
    <div id="searchBar">
      <i className="bi bi-search search-icon" />
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search users..." className="input-col" />
      {input.length > 0 && <i className="bi bi-x-circle clear-btn" onClick={() => setInput('')} />}
    </div>
  );
};

export default SearchBar;
