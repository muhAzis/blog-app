import { User } from '@/types/user.type';
import React from 'react';
import '@/styles/components/UserDetail.scss';

const UserDetail = ({ id, name, email, gender, status }: User) => {
  return (
    <div id="userDetail">
      <div className="item">
        <div className="label">ID</div>
        <div className="value">: {id}</div>
      </div>
      <div className="item">
        <div className="label">Name</div>
        <div className="value">: {name}</div>
      </div>
      <div className="item">
        <div className="label">Email</div>
        <div className="value">: {email}</div>
      </div>
      <div className="item">
        <div className="label">Gender</div>
        <div className="value">: {gender}</div>
      </div>
      <div className="item">
        <div className="label">Status</div>
        <div className="value">: {status}</div>
      </div>
    </div>
  );
};

export default UserDetail;
