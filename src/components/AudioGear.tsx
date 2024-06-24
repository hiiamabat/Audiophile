import * as React from 'react';
import audioGearImageMobile from '../assets/images/shared/mobile/image-best-gear.jpg';
import audioGearImageTablet from '../assets/images/shared/tablet/image-best-gear.jpg';
import audioGearImageDesktop from '../assets/images/shared/desktop/image-best-gear.jpg';

const AudioGear: React.FC = () => {
  return (
    <section className="pt-0 pb-20 mx-3 bg-white max-w-7xl md:mx-10 xl:m-auto xl:mt-32 xl:p-0 xl:flex xl:flex-row-reverse xl:my-16">
      <div className="xl:w-1/2 xl:flex">
        <picture className="w-auto mx-auto mb-10 rounded-default xl:ml-auto xl:mr-0">
          <source media="(min-width: 1024px)" srcSet={audioGearImageDesktop} />
          <source media="(min-width: 640px)" srcSet={audioGearImageTablet} />
          <img
            src={audioGearImageMobile}
            alt="Man listening to headphones"
            className="w-auto mx-auto mb-10 rounded-default"
          />
        </picture>
      </div>
      <div className="xl:w-1/2 xl:flex xl:flex-col xl:justify-center xl:items-start xl:text-left">
        <h3 className="pb-4 text-3xl font-semibold tracking-wide text-secondary-black xl:text-5xl xl:w-4/5">
          BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO GEAR
        </h3>
        <p className="text-md xl:text-lg xl:w-4/5">
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
