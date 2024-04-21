'use client';
import React, { useEffect, useState } from 'react';
import '@/styles/views/Users.scss';
import { User } from '@/types/user.type';
import UserCard from '@/components/UserCard';
import SearchBar from '@/components/SearchBar';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://gorest.co.in/public/v2/users?page=1&per_page=10');
        const data = await response.json();

        setUsers(data.sort((a: User, b: User) => a.name > b.name));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main id="user">
      <SearchBar setUsers={setUsers} />
      <div className="users-container">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  );
};

export default Users;
