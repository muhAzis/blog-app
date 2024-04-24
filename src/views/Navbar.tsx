'use client';
import React from 'react';
import '@/styles/views/Navbar.scss';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav id="navbar">
      <ul className="menu-links">
        {pathname.includes('users/') && (
          <li
            className="menu-link"
            style={{
              position: 'absolute',
              width: '100px',
              left: '2rem',
            }}
          >
            <Link href="/users" className="item">
              <i className="bi bi-arrow-left" />
            </Link>
          </li>
        )}
        <li className="menu-link">
          <Link href="/" className="item">
            <i className="bi bi-house-door-fill" />
          </Link>
        </li>
        <li className="menu-link">
          <Link href="/users" className="item">
            <i className="bi bi-people-fill" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
