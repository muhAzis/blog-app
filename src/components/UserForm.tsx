'use client';
import React, { useEffect, useState } from 'react';
import '@/styles/components/UserForm.scss';
import ProfilePict from './ProfilePict';
import { useUsers } from '@/hooks/useUsers';
import { usePopup } from '@/hooks/usePopup';

const UserForm = () => {
  const { addUser, updateUser } = useUsers();
  const { isVisible, popupData, setIsVisible, setPopupData } = usePopup();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [active, setActive] = useState<boolean>(false);
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    setName(popupData.name);
    setEmail(popupData.email);
    setGender(popupData.gender);
    setActive(popupData.status === 'active');
  }, [popupData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (popupData.id > 0) {
      updateUser({
        id: popupData.id,
        name,
        email,
        gender,
        status: active ? 'active' : 'inactive',
      });
    } else {
      addUser({
        name,
        email,
        gender,
        status: active ? 'active' : 'inactive',
      });
    }
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    setPopupData({
      id: 0,
      name: '',
      email: '',
      gender: 'male',
      status: 'inactive',
    });
  };

  return (
    isVisible && (
      <div className="form-container" onClick={handleClose}>
        <form className="user-form" onClick={(e) => e.stopPropagation()} onSubmit={(e) => handleSubmit(e)}>
          <div className="profile-header">
            <ProfilePict status={active ? 'active' : 'inactive'} name={name.length > 0 ? name : 'Us'} href="" color={color} setColor={setColor} style={{ minWidth: 80, height: 80, fontSize: '2rem' }} />
            <div className="info">
              <input value={name} className="input-name" type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} required />
              <input value={email} className="input-email" type="text" placeholder="username@example.com" onChange={(e) => setEmail(e.target.value)} required />
              <div className="detail">
                <select value={gender} name="Gender" onChange={(e) => setGender(e.target.value as 'male' | 'female')}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <span className="active">Active</span>
                <div className="active-ckbx" onClick={() => setActive((prev) => !prev)} style={active ? { backgroundColor: 'var(--clr-green)', outline: 'var(--clr-green)' } : {}} />
              </div>
            </div>
          </div>
          <div className="action-buttons">
            <button className="bi bi-x-circle-fill cancel-btn" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="bi bi-check-circle-fill save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default UserForm;
