import React from 'react';
import '@/styles/views/Navbar.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul className="menu-links">
        <li className="menu-link">
          <Link href="/" className="bi bi-house-door-fill" />
        </li>
        <li className="menu-link">
          <Link href="/users" className="bi bi-people-fill" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
