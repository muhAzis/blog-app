import PopupContextProvider from '@/contexts/PopupContextProvider';
import UsersContextProvider from '@/contexts/UsersContextProvider';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ContextWrapper = ({ children }: Props) => {
  return (
    <UsersContextProvider>
      <PopupContextProvider>{children}</PopupContextProvider>
    </UsersContextProvider>
  );
};

export default ContextWrapper;
