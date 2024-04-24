'use client';
import ProfilePict from '@/components/ProfilePict';
import React, { useEffect, useState } from 'react';
import '@/styles/views/User.scss';
import { User } from '@/types/user.type';
import UserDetail from '@/components/UserDetail';

interface Props {
  user_id: string;
}

const UserContainer = ({ user_id }: Props) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: 'Unkown User',
    email: 'unknownuser@example.com',
    gender: 'male',
    status: 'inactive',
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://gorest.co.in/public/v2/users/${user_id}`);
        const data = await response.json();

        if (data.name !== undefined) setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user_id]);

  return (
    <main id="user">
      <ProfilePict
        name={user.name}
        status={user.status}
        style={{
          width: 100,
          height: 100,
          fontSize: '3rem',
        }}
      />
      <h1 className="user-detail-name">{user.name}</h1>
      <h4 className="user-detail-email">{user.email}</h4>
      <UserDetail {...user} />
    </main>
  );
};

export default UserContainer;
