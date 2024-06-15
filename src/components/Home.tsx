import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/home/mobile/audiophile.svg';
import headphonesImage from '../assets/images/product-xx99-mark-one-headphones/mobile/headphones-cta.png';
import speakersImage from '../assets/images/product-zx9-speaker/mobile/speakers-cta.png';
import earphonesImage from '../assets/images/product-yx1-earphones/mobile/earphones-cta.png';
import speakerImage from '../assets/images/home/mobile/speaker.png';
import audioGearImageMobile from '../assets/images/shared/mobile/image-best-gear.jpg';
import audioGearImageTablet from '../assets/images/shared/tablet/image-best-gear.jpg';
import audioGearImageDesktop from '../assets/images/shared/desktop/image-best-gear.jpg';
import fbIcon from '../assets/images/home/mobile/fb.svg';
import instaIcon from '../assets/images/home/mobile/insta.svg';
import twitterIcon from '../assets/images/home/mobile/twitter.png';
import fbIconHover from '../assets/images/home/mobile/fb-orange.svg';
import instaIconHover from '../assets/images/home/mobile/insta-orange.svg';
import twitterIconHover from '../assets/images/home/mobile/twitter-orange.svg';

interface CardProps {
  imageSrc: string;
  title: string;
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, linkTo }) => {
  return (
    <section className="bg-white pt-20 px-3 flex sm:pt-10 sm:w-full sm:flex sm:justify-between sm:m-0">
      <div className="card mt-10 pt-24 bg-secondary-darker rounded-default flex flex-col relative w-full h-full sm:h-fit">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-4/5 xs:w-2/5 xs:-top-15 m-auto absolute -top-20 sm:-top-10 sm:w-4/5 left-1/2 -translate-x-1/2 md:w-3/5 lg:-top-16"
        />
        <h2 className="text-xl text-black font-bold tracking-wide">{title}</h2>
        <Link
          to={linkTo}
          className="flex items-center justify-center text-sm font-semibold tracking-wide text-secondary-darkest hover:text-primary transition duration-300 ease-in-out py-3 px-6"
        >
          SHOP{' '}
          <span className="text-primary ml-1 text-xl font-semibold">&gt;</span>
        </Link>
      </div>
    </section>
  );
};
export { Card };

const AudioGear: React.FC = () => {
  return (
    <section className="max-w-7xl 2xl:mx-auto bg-white pt-0 pb-20 px-7 2xl:p-0 2xl:flex 2xl:flex-row-reverse 2xl:my-16">
      <div className="2xl:w-1/2 2xl:flex">
        <picture className="w-auto rounded-default mb-10 mx-auto 2xl:ml-auto 2xl:mr-0">
          <source media="(min-width: 1024px)" srcSet={audioGearImageDesktop} />
          <source media="(min-width: 640px)" srcSet={audioGearImageTablet} />
          <img
            src={audioGearImageMobile}
            alt="Man listening to headphones"
            className="w-auto rounded-default mb-10 mx-auto"
          />
        </picture>
      </div>
      <div className="2xl:w-1/2 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:text-left">
        <h3 className="text-3xl text-secondary-black font-semibold tracking-wide pb-4">
          BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO GEAR
        </h3>
        <p className="">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export { AudioGear };

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-black px-5 md:text-left md:px-7 pb-6">
      <div className="max-w-7xl 2xl:mx-auto">
        <div className="bg-primary h-1 px-4 px-6 lg:px-8 w-24 m-auto md:m-0 md:w-24"></div>
        <Link to="/">
          <img
            src={logo}
            alt="Audiophile Logo"
            className="w-32 h-16 pt-6 m-auto md:m-0"
          />
        </Link>
        <ul className="text-white text-xs tracking-widest font-bold pt-6 md:flex md:gap-6">
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
        <p className="text-secondary-darkest pb-6">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="md:flex md:justify-between">
          <p className="pb-6">Copyright 2021. All Rights Reserved</p>
          <ul className="flex gap-4 items-center justify-center md:items-start pb-6">
            <li>
              <Link className="hover:fill-primary" to="/">
                <img src={fbIcon} alt="Facebook Icon" />
              </Link>
            </li>
            <li>
              <Link className="hover:fill-primary" to="/">
                <img src={twitterIcon} alt="Twitter Icon" />
              </Link>
            </li>
            <li>
              <Link className="hover:fill-primary" to="/">
                <img src={instaIcon} alt="Instagram Icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

const Home: React.FC = () => {
  return (
    <main>
      {/* HERO */}
      <section className="bg-hero-bg-mobile bg-cover bg-bottom bg-black text-white py-20 px-4 h-fit xs:h-[35vh] sm:flex sm:items-center sm:justify-between sm:flex-col sm:bg-hero-bg-tablet md:h-[40vh] md:justify-center lg:h-[55vh] xl:bg-hero-bg-desktop xl:flex-row">
        <div className="max-w-7xl mx-auto xl:flex xl:w-full">
          <div className="xl:justify-start xl:flex-col xl:items-start xl:w-full xl:w-1/2 xl:text-left xl:px-4">
            <h3 className="text-sm text-secondary-darkest font-semibold tracking-1em pb-4">
              NEW PRODUCT
            </h3>
            <h1 className="text-4xl md:text-6xl font-semibold mb-4 uppercase sm:text-7xl xl:text-left">
              XX99 Mark II Headphones
            </h1>
            <p className="text-lg w-4/5 m-auto mb-8 text-secondary-medium sm:w-2/3 sm:text-xl md:m-0 md:mb-8 xl:text-left">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              to="/headphones"
              className="bg-primary py-2 px-4 text-white text-sm font-normal tracking-widest hover:bg-primary-light transition duration-300 ease-in-out py-3 px-6"
            >
              SEE PRODUCT
            </Link>
          </div>
          <div className="xl:w-1/2 xl:h-full"></div>
        </div>
      </section>
      {/* CTAS */}
      <section className="max-w-7xl mx-auto bg-white pb-20 px-4 sm:flex justify-center sm:pt-1 md:mt-20 md:mb-20 md:p-0">
        <Card
          imageSrc={headphonesImage}
          title="HEADPHONES"
          linkTo="/headphones"
        />
        <Card imageSrc={speakersImage} title="SPEAKERS" linkTo="/speakers" />
        <Card imageSrc={earphonesImage} title="EARPHONES" linkTo="/earphones" />
      </section>
      {/* ZX9 SPEAKER SECTION */}
      <section className="max-w-7xl rounded-default bg-primary bg-cover bg-speaker-bg-mobile text-white py-20 mx-7 w-auto md:bg-speaker-bg-tablet xl:mx-auto">
        <img
          src={speakerImage}
          alt="ZX9 Speaker"
          className="object-cover -mt-10 w-4/5 m-auto md:w-3/5 md:-mt-20"
        />
        <h3 className="text-3xl text-white font-semibold tracking-widest pb-4 uppercase md:text-6xl md:w-1/2 md:m-auto md:mt-10 md:pb-0">
          ZX9 Speaker
        </h3>
        <p className="text-md w-4/5 m-auto text-white mb-8 md:w-1/2 md:my-8">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <div className="flex justify-center">
          <Link
            to="/speakers"
            className="bg-secondary-black text-white text-sm font-normal tracking-widest hover:bg-primary transition duration-300 ease-in-out py-4 px-7"
          >
            SEE PRODUCT
          </Link>
        </div>
      </section>
      {/* ZX7 SPEAKER SECTION */}
      <section className="max-w-7xl bg-speaker-pic-mobile bg-cover bg-right-top xs:bg-speaker-pic-tablet xs:bg-cover xs:bg-center flex rounded-lg w-auto m-auto mx-7 mt-8 pb-20 px-6 h-96 relative xl:mx-auto">
        <div className="absolute top-[30%] flex justify-start items-start flex-col 2xl:p-20 2xl:top-14">
          <h3 className="text-2xl text-black font-bold tracking-widest pb-4 uppercase justify-flex-start md:text-3xl md:mb-6">
            ZX7 SPEAKER
          </h3>
          <Link
            to="/speakers"
            className="border-1 border-secondary-black border-solid text-secondary-black text-sm font-bold tracking-wide hover:bg-primary transition duration-300 ease-in-out py-3 px-6"
          >
            SEE PRODUCT
          </Link>
        </div>
      </section>
      {/* YX1 EARPHONES SECTION */}
      <section className="max-w-7xl md:flex xl:mx-auto">
        <div className="bg-earphone-mobile bg-cover bg-center flex rounded-default m-auto w-auto mt-8 pb-20 px-4 h-60 mx-7 md:bg-earphone-tablet md:w-full md:ml-7 md:mr-2 md:h-[22rem] 2xl:mx-0 2xl:mr-8"></div>
        <div className="bg-secondary-darker flex rounded-default m-auto w-auto mt-8 mb-20 pb-20 px-4 h-60 mx-7 relative md:w-full md:mr-7 md:ml-2 md:h-[22rem] 2xl:mx-0 2xl:p-8">
          <div className="absolute top-[30%] flex justify-start items-start flex-col content-center">
            <h3 className="text-2xl text-black font-bold tracking-widest pb-4 uppercase md:mb-6">
              YX1 EARPHONES
            </h3>
            <Link
              to="/earphones"
              className="border-1 border-secondary-black border-solid text-secondary-black text-sm font-bold tracking-wide hover:bg-primary transition duration-300 ease-in-out py-3 px-6"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>
      <AudioGear />
      <Footer />
    </main>
  );
};

export default Home;