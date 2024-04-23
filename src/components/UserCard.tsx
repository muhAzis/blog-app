import { User } from '@/types/user.type';
import '@/styles/components/UserCard.scss';
import Link from 'next/link';
import React from 'react';
import { useUsers } from '@/hooks/useUsers';

const UserCard = ({ id, name, email, gender, status }: User) => {
  const { deleteUser } = useUsers();

  const generateWarmRGB = () => {
    const r = Math.floor(Math.random() * 150) + 40;
    const g = Math.floor(Math.random() * 150) + 40;
    const b = Math.floor(Math.random() * 150) + 40;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // const handleDelete = async () => {
  //   try {
  //     const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //       },
  //     });

  //     if (response.status === 204) {
  //       alert('User deleted');
  //     } else {
  //       console.log(response);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      <div className="action-buttons">
        <button className="bi bi-pencil-fill action-btn" />
        <button className="bi bi-trash3-fill action-btn" onClick={() => deleteUser(id)} />
      </div>
    </div>
  );
};

export default UserCard;
