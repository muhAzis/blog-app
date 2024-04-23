'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import '@/styles/components/ProfilePict.scss';

interface Props {
  name: string;
  status?: string;
  href?: string;
  style?: React.CSSProperties;
  color?: string;
  setColor?: (color: string) => void;
}

const ProfilePict = ({ name, status, href, style, color, setColor }: Props) => {
  const generateWarmRGB = () => {
    const r = Math.floor(Math.random() * 150) + 40;
    const g = Math.floor(Math.random() * 150) + 40;
    const b = Math.floor(Math.random() * 150) + 40;
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    if (setColor !== undefined) setColor(generateWarmRGB());
  }, [setColor]);

  return name !== 'Unknown' && href ? (
    <Link href={href} className="profile-pict" style={{ ...style, backgroundColor: color !== undefined ? color : generateWarmRGB() }}>
      {name.slice(0, 2)}
      {status && <span className={status === 'active' ? 'status active' : 'status inactive'} />}
    </Link>
  ) : (
    <div className="profile-pict" style={{ ...style, backgroundColor: color !== undefined ? color : generateWarmRGB() }}>
      {name.slice(0, 2)}
      {status && <span className={status === 'active' ? 'status active' : 'status inactive'} />}
    </div>
  );
};

export default ProfilePict;
