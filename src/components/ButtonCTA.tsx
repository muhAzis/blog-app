import React from 'react';
import '@/styles/components/ButtonCTA.scss';

interface Props {
  children: React.ReactNode;
  bi_icon?: string;
  iconPos?: 'left' | 'right';
  action: () => {};
}

const ButtonCTA = ({ children, bi_icon, iconPos = 'left', action }: Props) => {
  return (
    <button className="call-to-action" onClick={action}>
      {iconPos === 'left' && <i className={bi_icon + ' cta-icon'} />}
      {children}
      {iconPos === 'right' && <i className={bi_icon + ' cta-icon'} />}
    </button>
  );
};

export default ButtonCTA;
