import * as React from 'react';
import audioGearImageMobile from '../assets/images/shared/mobile/image-best-gear.jpg';
import audioGearImageTablet from '../assets/images/shared/tablet/image-best-gear.jpg';
import audioGearImageDesktop from '../assets/images/shared/desktop/image-best-gear.jpg';

const AudioGear: React.FC = () => {
  return (
    <section className="audio-gear-section" aria-labelledby="audio-gear-title">
      <div className="image-container">
        <picture>
          <source media="(min-width: 1024px)" srcSet={audioGearImageDesktop} />
          <source media="(min-width: 640px)" srcSet={audioGearImageTablet} />
          <img
            src={audioGearImageMobile}
            alt="Man enjoying music with headphones"
            className="audio-gear-image"
          />
        </picture>
      </div>
      <div className="content-container">
        <h2 id="audio-gear-title" className="title">
          BRINGING YOU THE <span className="highlight">BEST</span> AUDIO GEAR
        </h2>
        <p className="description">
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
