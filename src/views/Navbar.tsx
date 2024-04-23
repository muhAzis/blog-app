import React from 'react';
import '@/styles/views/Navbar.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul className="menu-links">
        <li className="menu-link">
          <Link href="/" className="item">
            <i className="bi bi-house-door-fill" />
          </Link>
        </li>
        {/* <li className="menu-link">
          <div className="item">
            <i className="bi bi-plus-lg" />
          </div>
        </li> */}
        <li className="menu-link">
          <Link href="/users" className="item">
            <i className="bi bi-people-fill" />
          </Link>
        </li>
        {/* <li className="menu-link">
          <div className="item">
            <i className="bi bi-person-plus-fill" />
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
