import React from 'react';

interface Props {
  params: {
    user_id: string;
  };
}

const UserPage = ({ params }: Props) => {
  return <main id="userPage">{params.user_id}</main>;
};

export default UserPage;
