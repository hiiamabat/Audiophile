import * as React from 'react';
import { Link } from 'react-router-dom';
import speakerImage from '../assets/images/home/mobile/speaker.png';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';

const Home: React.FC = () => {
  return (
    <main>
      {/* HERO */}
      <section className="bg-hero-bg-mobile bg-cover bg-bottom bg-black text-white py-20 px-4 h-fit xs:h-[40vh] sm:flex sm:items-center sm:justify-between sm:flex-col sm:bg-hero-bg-tablet sm:h-[50vh] md:h-[45vh] md:justify-center lg:h-[55vh] xl:bg-hero-bg-desktop xl:flex-row">
        <div className="max-w-7xl mx-auto xl:flex xl:w-full">
          <div className="flex flex-col items-center justify-center xl:justify-start xl:flex-col xl:items-start xl:w-full xl:w-1/2 xl:text-left xl:px-4">
            <h3 className="text-sm text-secondary-darkest font-semibold tracking-1em pb-4">
              NEW PRODUCT
            </h3>
            <h1 className="text-5xl font-semibold mb-4 uppercase sm:text-7xl md:w-2/3 xl:text-left">
              XX99 Mark II Headphones
            </h1>
            <p className="text-lg w-3/5 m-auto mb-8 text-secondary-light sm:w-3/4 sm:text-xl md:w-7/12 md:m-0 md:mb-8 xl:text-left">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              to="/headphones"
              className="bg-primary py-2 px-4 text-white text-sm font-normal tracking-widest hover:bg-primary-light hover:text-secondary-black transition duration-300 ease-in-out py-3 px-6"
            >
              SEE PRODUCT
            </Link>
          </div>
          <div className="xl:w-1/2 xl:h-full"></div>
        </div>
      </section>
      {/* CATEGORY CARDS */}
      <CategoryCards />

      {/* ZX9 SPEAKER SECTION */}
      <section className="max-w-7xl rounded-default bg-primary bg-cover bg-speaker-bg-mobile bg-center text-white py-20 mx-3 w-auto sm:bg-[center_top_-6rem] md:bg-speaker-bg-tablet md:mx-10 xl:m-auto 2xl:flex 2xl:justify-center 2xl:items-center 2xl:bg-speaker-bg-desktop 2xl:bg-bottom 2xl:p-0">
        <div className="sm:w-3/4 sm:m-auto sm:-mt-20 2xl:w-3/5 2xl:flex 2xl:flex-col 2xl:items-end 2xl:relative 2xl:overflow-hidden">
          <img
            src={speakerImage}
            alt="ZX9 Speaker"
            className="object-cover -mt-10 w-4/5 m-auto md:w-3/5 md:-mt-20 2xl:w-4/5 2xl:mt-0 2xl:mt-auto 2xl:-mb-[6rem] 2xl:pt-[5.5rem]"
          />
        </div>
        <div className="2xl:w-2/5  2xl:justify-start 2xl:text-left 2xl:justify-self-start">
          <h3 className="text-3xl text-white font-semibold tracking-widest pb-4 uppercase sm:text-5xl md:text-6xl md:w-1/2 md:m-auto md:mt-10 md:pb-0 2xl:m-0 2xl:mb-6">
            ZX9 Speaker
          </h3>
          <p className="text-lg w-4/5 m-auto text-white mb-8 md:w-1/2 md:my-8 lg:text-xl 2xl:m-0 2xl:mb-8">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div className="flex justify-center 2xl:justify-start">
            <Link
              to="/speakers"
              className="bg-secondary-black text-white text-sm font-normal tracking-widest hover:bg-secondary-medium transition duration-300 ease-in-out py-4 px-7"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>
      {/* ZX7 SPEAKER SECTION */}
      <section className="max-w-7xl bg-speaker-pic-mobile bg-cover bg-right-top xs:bg-speaker-pic-tablet xs:bg-cover xs:bg-center flex rounded-lg w-auto m-auto mx-3 mt-8 pb-20 px-6 h-96 relative md:mx-10 xl:m-auto xl:mt-10">
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
      <section className="max-w-7xl mx-3 md:flex xl:justify-center xl:items-center xl:m-auto">
        <div className="bg-earphone-mobile bg-cover bg-center flex rounded-default m-auto w-auto mt-8 pb-20 px-4 h-60 md:bg-earphone-tablet md:w-full md:ml-7 md:mr-2 md:h-[22rem] xl:mx-1 2xl:mx-0 2xl:mr-8"></div>
        <div className="bg-secondary-darker flex rounded-default m-auto w-auto mt-8 mb-20 pb-20 px-4 h-60 relative md:w-full md:mr-7 md:ml-2 md:h-[22rem] xl:mx-auto xl:ml-6 2xl:mx-0 2xl:p-8">
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
    </main>
  );
};

export default Home;
