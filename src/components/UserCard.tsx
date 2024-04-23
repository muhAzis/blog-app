import { User } from '@/types/user.type';
import '@/styles/components/UserCard.scss';
import Link from 'next/link';
import React from 'react';
import { useUsers } from '@/hooks/useUsers';
import ProfilePict from './ProfilePict';
import { usePopup } from '@/hooks/usePopup';

const UserCard = ({ id, name, email, gender, status }: User) => {
  const { deleteUser } = useUsers();
  const { setIsVisible, setPopupData } = usePopup();

  const handleDelete = () => {
    const response = confirm(`Are you sure you want to delete ${name}?`);
    if (response) {
      deleteUser(id);
    }
  };

  const handleEdit = () => {
    setPopupData({
      id,
      name,
      email,
      gender,
      status,
    });
    setIsVisible(true);
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
        <button className="bi bi-pencil-fill action-btn" onClick={handleEdit} />
        <button className="bi bi-trash3-fill action-btn" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default UserCard;
