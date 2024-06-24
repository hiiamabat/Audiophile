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
      <nav className="px-4 py-5 py-6 mx-auto border-solid max-w-7xl sm:px-6 lg:px-8 border-b-1 border-secondary-medium xl:px-0">
        <div className="flex items-center justify-between h-16">
          {/* Left side (Menu button) */}
          <div className="relative flex items-center md:flex-grow-0 xl:hidden">
            <button
              onClick={toggleMenu}
              className="relative text-gray-300 hover:text-white"
            >
              <img
                src={menuIcon}
                alt="Menu"
                className="w-6 h-6 transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img
                src={menuIconHover}
                alt="Menu Hover"
                className="absolute top-0 left-0 w-6 h-6 transition-opacity duration-300 opacity-0 hover:opacity-100"
              />
            </button>
          </div>

          {/* Center (Logo) */}
          <div className="flex justify-center md:justify-start">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-auto h-8" />
            </Link>
          </div>

          {/* Center (Nav at xl screens) */}
          <div className="items-center justify-center hidden xl:flex md:justify-start">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-bold tracking-widest text-white rounded-md hover:text-primary"
            >
              HOME
            </Link>
            <Link
              to="/headphones"
              className="px-3 py-2 text-sm font-bold tracking-widest text-white rounded-md hover:text-primary"
            >
              HEADPHONES
            </Link>
            <Link
              to="/speakers"
              className="px-3 py-2 text-sm font-bold tracking-widest text-white rounded-md hover:text-primary"
            >
              SPEAKERS
            </Link>
            <Link
              to="/earphones"
              className="px-3 py-2 text-sm font-bold tracking-widest text-white rounded-md hover:text-primary"
            >
              EARPHONES
            </Link>
          </div>

          {/* Right side (Cart icon) */}
          <div className="relative flex items-center md:flex-grow-0">
            <Link
              to="/cart"
              className="relative text-gray-300 hover:text-white"
            >
              <img
                src={cartIcon}
                alt="Cart"
                className="w-6 h-6 transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img
                src={cartIconHover}
                alt="Cart Hover"
                className="absolute top-0 left-0 w-6 h-6 transition-opacity duration-300 opacity-0 hover:opacity-100"
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
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-secondary-black hover:bg-primary hover:text-white"
            >
              HOME
            </Link>
            <Link
              to="/headphones"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-secondary-black hover:bg-primary hover:text-white"
            >
              HEADPHONES
            </Link>
            <Link
              to="/speakers"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-secondary-black hover:bg-primary hover:text-white"
            >
              SPEAKERS
            </Link>
            <Link
              to="/earphones"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-secondary-black hover:bg-primary hover:text-white"
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
