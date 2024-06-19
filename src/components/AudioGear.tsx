import * as React from 'react';
import audioGearImageMobile from '../assets/images/shared/mobile/image-best-gear.jpg';
import audioGearImageTablet from '../assets/images/shared/tablet/image-best-gear.jpg';
import audioGearImageDesktop from '../assets/images/shared/desktop/image-best-gear.jpg';

const AudioGear: React.FC = () => {
  return (
    <section className="max-w-7xl 2xl:mx-auto bg-white pt-0 pb-20 mx-3 md:mx-10 xl:m-auto 2xl:mt-32 2xl:p-0 2xl:flex 2xl:flex-row-reverse 2xl:my-16">
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
      <div className="2xl:w-1/2 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:text-left 2xl:px-10">
        <h3 className="text-3xl text-secondary-black font-semibold tracking-wide pb-4 xl:text-5xl 2xl:w-full">
          BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO GEAR
        </h3>
        <p className="text-md xl:text-lg xl:w-3/4 xl:m-auto 2xl:m-0 2xl:w-full">
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

export default AudioGear;
