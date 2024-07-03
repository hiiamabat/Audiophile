import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/home/mobile/audiophile.svg';
import cartIcon from '../assets/images/home/mobile/cart.svg';
import menuIcon from '../assets/images/home/mobile/menu.svg';
import cartIconHover from '../assets/images/home/mobile/cart-orange.svg';
import menuIconHover from '../assets/images/home/mobile/menu-orange.svg';
import CartModal from './CartModal';

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/headphones', label: 'HEADPHONES' },
  { to: '/speakers', label: 'SPEAKERS' },
  { to: '/earphones', label: 'EARPHONES' },
];

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <header className="bg-black">
      <nav className="nav-container">
        <div className="nav-items">
          {/* Left side (Menu button) */}
          <div className="nav-menu">
            <button
              onClick={toggleMenu}
              className="nav-menu-button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <img src={menuIcon} alt="Menu" className="nav-menu-image" />
              <img
                src={menuIconHover}
                alt="Menu Hover"
                className="nav-menu-image-hover"
              />
            </button>
          </div>

          {/* Center (Logo) */}
          <div className="nav-logo-container">
            <Link to="/" aria-label="Audiophile Home">
              <img src={logo} alt="Audiophile Logo" className="w-auto h-8" />
            </Link>
          </div>

          {/* Center (Nav at xl screens) */}
          <div className="navigation-container">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="navigation-links">
                {label}
              </Link>
            ))}
          </div>

          {/* Right side (Cart icon) */}
          <div className="relative flex items-center">
            <button
              onClick={toggleCartModal}
              className="relative"
              aria-label="View cart"
            >
              <img src={cartIcon} alt="Cart" className="nav-cart-image" />
              <img
                src={cartIconHover}
                alt="Cart Hover"
                className="nav-cart-image-hover"
              />
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="xl:hidden">
          <div className=".nav-mobile-menu">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="nav-mobile-menu-links">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <CartModal
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}
      />
    </header>
  );
};

export default Nav;
