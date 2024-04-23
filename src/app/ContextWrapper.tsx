import UsersContextProvider from '@/contexts/UsersContextProvider';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ContextWrapper = ({ children }: Props) => {
  return <UsersContextProvider>{children}</UsersContextProvider>;
};

export default ContextWrapper;
