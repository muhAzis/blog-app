import { User } from '@/types/user.type';
import '@/styles/components/UserCard.scss';
import Link from 'next/link';
import React from 'react';

const UserCard = ({ id, name, email, gender, status }: User) => {
  const generateWarmRGB = () => {
    const r = Math.floor(Math.random() * 150) + 40;
    const g = Math.floor(Math.random() * 150) + 40;
    const b = Math.floor(Math.random() * 150) + 40;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="user-card">
      <Link href="" className="profile-pict" style={{ backgroundColor: generateWarmRGB() }}>
        {name.slice(0, 2)}
        <span className={status === 'active' ? 'status active' : 'status inactive'} />
      </Link>
      <div className="user-info">
        <Link href="" className="user-name">
          {name}
        </Link>
        <span className="user-email">{email}</span>
        <span className="user-gender">Gender: {gender}</span>
      </div>
    </div>
  );
};

export default UserCard;
