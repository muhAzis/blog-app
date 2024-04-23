import User from '@/views/User';
import React from 'react';
import '@/styles/views/UserPage.scss';

interface Props {
  params: {
    user_id: string;
  };
}

const UserPage = ({ params }: Props) => {
  return (
    <main id="userPage">
      <User user_id={params.user_id} />
    </main>
  );
};

export default UserPage;
