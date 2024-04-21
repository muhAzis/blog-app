import React, { useEffect, useState } from 'react';
import '@/styles/components/SearchBar.scss';
import { User } from '@/types/user.type';

interface Props {
  setUsers: (users: User[]) => void;
  setLoading: (loading: boolean) => void;
}

const SearchBar = ({ setUsers, setLoading }: Props) => {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        if (input.length > 0) {
          setLoading(true);
          const response = await fetch(`https://gorest.co.in/public/v2/users?name=${input}`);
          const data = await response.json();

          setUsers(data.sort((a: User, b: User) => a.name > b.name));
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [input, setUsers, setLoading]);

  return (
    <div id="searchBar">
      <i className="bi bi-search search-icon" />
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search users..." className="input-col" />
      {input.length > 0 && <i className="bi bi-x-circle clear-btn" onClick={() => setInput('')} />}
    </div>
  );
};

export default SearchBar;
