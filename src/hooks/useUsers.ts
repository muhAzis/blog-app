import { UsersContext } from '@/contexts/UsersContextProvider';
import { useContext } from 'react';

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsers must be used within an UsersContextProvider');
  }

  return context;
};
