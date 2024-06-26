'use client';
import React, { useEffect, useRef } from 'react';
import '@/styles/views/Users.scss';
import UserCard from '@/components/UserCard';
import SearchBar from '@/components/SearchBar';
import { useUsers } from '@/hooks/useUsers';
import ButtonCTA from '@/components/ButtonCTA';
import { usePopup } from '@/hooks/usePopup';

const Users = () => {
  const { users, loading, endOfPage, setLoading, nextPage, deleteUser } = useUsers();
  const { setIsVisible } = usePopup();
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isInView = () => {
      if (loaderRef.current) {
        const rect = loaderRef.current.getBoundingClientRect();

        if (rect.top < window.innerHeight) {
          setLoading(true);
          nextPage();
        }
      }
    };

    window.addEventListener('scroll', () => isInView());

    return () => window.removeEventListener('scroll', () => isInView());
  }, []);

  return (
    <main id="users">
      <SearchBar />
      <div className="cta-container">
        <ButtonCTA action={() => setIsVisible(true)} bi_icon="bi bi-person-fill-add">
          Add user
        </ButtonCTA>
      </div>
      <div className="users-container">
        {users.length > 0 ? users.map((user) => <UserCard key={user.id} {...user} />) : 'user not found'}
        {loading && <div className="loading-spinner" />}
      </div>
      {!loading && !endOfPage && <div ref={loaderRef} className="loader" style={{ width: 100, height: 50 }} />}
    </main>
  );
};

export default Users;
