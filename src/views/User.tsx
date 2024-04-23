import ProfilePict from '@/components/ProfilePict';
import React from 'react';
import '@/styles/views/User.scss';

const User = () => {
  return (
    <div id="user-container">
      <ProfilePict name="John Doe" status="active" href="" />
    </div>
  );
};

export default User;
