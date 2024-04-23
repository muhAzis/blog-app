import { PopupContext } from '@/contexts/PopupContextProvider';
import { useContext } from 'react';

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupContextProvider');
  }

  return context;
};
