import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/shared/desktop/logo.svg';
import fbIcon from '../assets/images/home/mobile/fb.svg';
import instaIcon from '../assets/images/home/mobile/insta.svg';
import twitterIcon from '../assets/images/home/mobile/twitter.png';
import fbIconHover from '../assets/images/home/mobile/fb-orange.svg';
import instaIconHover from '../assets/images/home/mobile/insta-orange.svg';
import twitterIconHover from '../assets/images/home/mobile/twitter-orange.svg';

const socialIcons = [
  { icon: fbIcon, hoverIcon: fbIconHover, alt: 'Facebook Icon', link: '/' },
  {
    icon: twitterIcon,
    hoverIcon: twitterIconHover,
    alt: 'Twitter Icon',
    link: '/',
  },
  {
    icon: instaIcon,
    hoverIcon: instaIconHover,
    alt: 'Instagram Icon',
    link: '/',
  },
];

const Footer: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-bar"></div>
      <div className="footer-nav">
        <Link to="/" aria-label="Audiophile Home">
          <img src={logo} alt="Audiophile Logo" className="footer-logo" />
        </Link>
        <nav aria-label="Footer navigation">
          <ul className="footer-nav-ul">
            {['HOME', 'HEADPHONES', 'SPEAKERS', 'EARPHONES'].map(
              (item, index) => (
                <li className="py-3" key={index}>
                  <Link
                    className="hover:text-primary"
                    to={`/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
      <p className="footer-p">
        Audiophile is an all-in-one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="footer-desc">
        <p className="pb-6">&copy; 2021 Audiophile. All Rights Reserved</p>
        <ul className="footer-social" aria-label="Social media links">
          {socialIcons.map(({ icon, hoverIcon, alt, link }, index) => (
            <li className="relative" key={index}>
              <Link to={link} aria-label={alt}>
                <img src={icon} alt={alt} className="footer-social-icon" />
                <img
                  src={hoverIcon}
                  alt={`${alt} Hover`}
                  className="footer-social-icon-hover"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
