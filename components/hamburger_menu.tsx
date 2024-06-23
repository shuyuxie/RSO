import React, { useState } from 'react';
import Link from 'next/link';
import '../app/globals.css';
import Image from 'next/image';
import logo from './logo.jpg';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Image src={logo} alt="Logo" style={{ position: 'absolute', left: 10, top: 10, width: '50px', height: '50px' }} />
      <button onClick={toggleMenu}>
        <div style={{ width: '30px', height: '2px', backgroundColor: '#333', marginBottom: '6px' }}></div>
        <div style={{ width: '30px', height: '2px', backgroundColor: '#333', marginBottom: '6px' }}></div>
        <div style={{ width: '30px', height: '2px', backgroundColor: '#333' }}></div>
      </button>

      {isOpen && (
        <div style={{ position: 'absolute', right: 0, backgroundColor: '#fff', color: 'rgb(19, 41, 75)', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <div>
            <Link href="/">
              <div onClick={closeMenu}>Organizations</div>
            </Link>
          </div>
          <div>
            <Link href="/user_profile_account">
              <div onClick={closeMenu}>Profile</div>
            </Link>
          </div>
          <div> {/* Update button below when we have log out function */}
            <Link href="/rso_login">
              <div onClick={closeMenu}>Log out</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
