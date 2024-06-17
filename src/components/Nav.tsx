import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/home/mobile/audiophile.svg';
import cartIcon from '../assets/images/home/mobile/cart.svg';
import menuIcon from '../assets/images/home/mobile/menu.svg';
import cartIconHover from '../assets/images/home/mobile/cart-orange.svg';
import menuIconHover from '../assets/images/home/mobile/menu-orange.svg';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 border-solid border-b-1 border-secondary-medium xl:px-0 py-6">
        <div className="flex items-center justify-between h-16">
          {/* Left side (Menu button) */}
          <div className="flex items-center md:flex-grow-0 xl:hidden relative">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white relative"
            >
              <img
                src={menuIcon}
                alt="Menu"
                className="h-6 w-6 transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img
                src={menuIconHover}
                alt="Menu Hover"
                className="h-6 w-6 transition-opacity duration-300 opacity-0 hover:opacity-100 absolute top-0 left-0"
              />
            </button>
          </div>

          {/* Center (Logo) */}
          <div className="flex justify-center md:justify-start">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto md:ml-14 xl:m-0"
              />
            </Link>
          </div>

          {/* Center (Nav at xl screens) */}
          <div className="hidden xl:flex items-center justify-center md:justify-start">
            <Link
              to="/"
              className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-bold tracking-widest"
            >
              HOME
            </Link>
            <Link
              to="/headphones"
              className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-bold tracking-widest"
            >
              HEADPHONES
            </Link>
            <Link
              to="/speakers"
              className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-bold tracking-widest"
            >
              SPEAKERS
            </Link>
            <Link
              to="/earphones"
              className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-bold tracking-widest"
            >
              EARPHONES
            </Link>
          </div>

          {/* Right side (Cart icon) */}
          <div className="flex items-center md:flex-grow-0 relative">
            <Link
              to="/cart"
              className="text-gray-300 hover:text-white relative"
            >
              <img
                src={cartIcon}
                alt="Cart"
                className="h-6 w-6 transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img
                src={cartIconHover}
                alt="Cart Hover"
                className="h-6 w-6 transition-opacity duration-300 opacity-0 hover:opacity-100 absolute top-0 left-0"
              />
            </Link>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="xl:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-white hover:text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              HOME
            </Link>
            <Link
              to="/headphones"
              className="text-white hover:text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              HEADPHONES
            </Link>
            <Link
              to="/speakers"
              className="text-white hover:text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              SPEAKERS
            </Link>
            <Link
              to="/earphones"
              className="text-white hover:text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              EARPHONES
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
