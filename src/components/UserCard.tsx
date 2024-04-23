import { User } from '@/types/user.type';
import '@/styles/components/UserCard.scss';
import Link from 'next/link';
import React from 'react';
import { useUsers } from '@/hooks/useUsers';
import ProfilePict from './ProfilePict';

const UserCard = ({ id, name, email, gender, status }: User) => {
  const { deleteUser } = useUsers();

  const generateWarmRGB = () => {
    const r = Math.floor(Math.random() * 150) + 40;
    const g = Math.floor(Math.random() * 150) + 40;
    const b = Math.floor(Math.random() * 150) + 40;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="user-card">
      <ProfilePict name={name} status={status} href="" />
      <div className="user-info">
        <Link href="" className="user-name">
          {name}
        </Link>
        <span className="user-email">{email}</span>
        <span className="user-gender">Gender: {gender}</span>
      </div>
      <div className="action-buttons">
        <button className="bi bi-pencil-fill action-btn" />
        <button className="bi bi-trash3-fill action-btn" onClick={() => deleteUser(id)} />
      </div>
    </div>
  );
};

export default UserCard;
