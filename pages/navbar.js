import { useUser } from '@/lib/firebase/useUser'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const { user,logout } = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <a className="logo">My Logo</a>
        </Link>
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
        {user && (
          <div class="user-card">
            <img class="user-logo" src="userlogo.png" alt="User Logo"></img>
            <h2 class="user-name">{user.name}</h2>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;