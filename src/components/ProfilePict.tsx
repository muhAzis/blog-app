import Link from 'next/link';
import React from 'react';
import '@/styles/components/ProfilePict.scss';

interface Props {
  name: string;
  status?: string;
  href: string;
}

const ProfilePict = ({ name, status, href }: Props) => {
  const generateWarmRGB = () => {
    const r = Math.floor(Math.random() * 150) + 40;
    const g = Math.floor(Math.random() * 150) + 40;
    const b = Math.floor(Math.random() * 150) + 40;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <Link href={href} className="profile-pict" style={{ backgroundColor: generateWarmRGB() }}>
      {name.slice(0, 2)}
      {status && <span className={status === 'active' ? 'status active' : 'status inactive'} />}
    </Link>
  );
};

export default ProfilePict;
