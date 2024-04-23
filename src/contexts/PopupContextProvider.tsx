'use client';
import { User } from '@/types/user.type';
import React, { createContext, useState } from 'react';

export const PopupContext = createContext({
  isVisible: false,
  popupData: {
    id: 0,
    name: '',
    email: '',
    gender: 'male',
    status: 'inactive',
  } as User,
  setIsVisible: (isVisible: boolean) => {},
  setPopupData: (popupData: User) => {},
});

interface Props {
  children: React.ReactNode;
}

const PopupContextProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [popupData, setPopupData] = useState<User>({
    id: 0,
    name: '',
    email: '',
    gender: 'male',
    status: 'inactive',
  });

  const value = {
    isVisible,
    popupData,
    setIsVisible,
    setPopupData,
  };

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
};

export default PopupContextProvider;
