import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/shared/desktop/logo.svg';
import fbIcon from '../assets/images/home/mobile/fb.svg';
import instaIcon from '../assets/images/home/mobile/insta.svg';
import twitterIcon from '../assets/images/home/mobile/twitter.png';
import fbIconHover from '../assets/images/home/mobile/fb-orange.svg';
import instaIconHover from '../assets/images/home/mobile/insta-orange.svg';
import twitterIconHover from '../assets/images/home/mobile/twitter-orange.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-black px-5 md:text-left md:px-10 pb-6">
      <div className="max-w-7xl xl:mx-auto">
        <div className="bg-primary h-1 px-4 px-6 lg:px-8 w-24 m-auto md:m-0 md:w-24"></div>
        <div className="xl:flex xl:justify-between xl:items-center xl:mb-6">
          <Link to="/">
            <img
              src={logo}
              alt="Audiophile Logo"
              className="pt-6 m-auto md:m-0"
            />
          </Link>

          <ul className="text-white text-xs tracking-widest font-bold pt-6 md:flex md:gap-6 xl:text-sm">
            <li className="py-3">
              <Link className="hover:text-primary" to="/">
                HOME
              </Link>
            </li>
            <li className="py-3">
              <Link className="hover:text-primary" to="/headphones">
                HEADPHONES
              </Link>
            </li>
            <li className="py-3">
              <Link className="hover:text-primary" to="/speakers">
                SPEAKERS
              </Link>
            </li>
            <li className="pt-3 pb-6">
              <Link className="hover:text-primary" to="/earphones">
                EARPHONES
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-secondary-darkest pb-6 xl:w-3/4 xl:text-lg">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="md:flex md:justify-between">
          <p className="pb-6">Copyright 2021. All Rights Reserved</p>
          <ul className="flex gap-4 items-center justify-center md:items-start pb-6">
            <li className="relative">
              <Link to="/">
                <img
                  src={fbIcon}
                  alt="Facebook Icon"
                  className="h-6 w-6 transition-opacity duration-300 opacity-100 hover:opacity-0"
                />
                <img
                  src={fbIconHover}
                  alt="Facebook Icon Hover"
                  className="h-6 w-6 transition-opacity duration-300 opacity-0 hover:opacity-100 absolute top-0 left-0"
                />
              </Link>
            </li>
            <li className="relative">
              <Link to="/">
                <img
                  src={twitterIcon}
                  alt="Twitter Icon"
                  className="h-6 w-6 transition-opacity duration-300 opacity-100 hover:opacity-0"
                />
                <img
                  src={twitterIconHover}
                  alt="Twitter Icon Hover"
                  className="h-6 w-6 transition-opacity duration-300 opacity-0 hover:opacity-100 absolute top-0 left-0"
                />
              </Link>
            </li>
            <li className="relative">
              <Link to="/">
                <img
                  src={instaIcon}
                  alt="Instagram Icon"
                  className="h-6 w-6 transition-opacity duration-300 opacity-100 hover:opacity-0"
                />
                <img
                  src={instaIconHover}
                  alt="Instagram Icon Hover"
                  className="h-6 w-6 transition-opacity duration-300 opacity-0 hover:opacity-100 absolute top-0 left-0"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
