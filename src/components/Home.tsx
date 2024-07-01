import * as React from 'react';
import { Link } from 'react-router-dom';
import speakerImage from '../assets/images/home/mobile/speakerfeatimg.png';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';

const Home: React.FC = () => (
  <main>
    <HeroSection />
    <CategoryCards />
    <FeaturedProducts />
    <AudioGear />
  </main>
);

const HeroSection: React.FC = () => (
  <section className="hero-section" aria-labelledby="hero-title">
    <div className="hero-content">
      <div className="hero-text-container">
        <h1 id="hero-title" className="sr-only">
          Audiophile Home Page
        </h1>
        <p className="hero-new-product-label">NEW PRODUCT</p>
        <h2 className="hero-product-title">XX99 Mark II Headphones</h2>
        <p className="hero-product-description">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          to="/headphones"
          className="btn"
          aria-label="See XX99 Mark II Headphones"
        >
          SEE PRODUCT
        </Link>
      </div>
      <div className="hero-image" aria-hidden="true"></div>
    </div>
  </section>
);

const FeaturedProducts: React.FC = () => (
  <>
    <ZX9SpeakerSection />
    <ZX7SpeakerSection />
    <YX1EarphonesSection />
  </>
);

const ZX9SpeakerSection: React.FC = () => (
  <section className="zx9-speaker-section" aria-labelledby="zx9-speaker-title">
    <div className="zx9-speaker-image-container">
      <img src={speakerImage} alt="ZX9 Speaker" className="zx9-speaker-image" />
    </div>
    <div className="zx9-speaker-content">
      <h2 id="speaker-title" className="zx9-speaker-title">
        ZX9 Speaker
      </h2>
      <p className="zx9-speaker-description">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <Link
        to="/speakers"
        className="btn btn-dark"
        aria-label="See ZX9 Speaker product"
      >
        SEE PRODUCT
      </Link>
    </div>
  </section>
);

const ZX7SpeakerSection: React.FC = () => (
  <section className="zx7-speaker-section" aria-labelledby="zx7-speaker-title">
    <div className="zx7-speaker-content">
      <h2 id="zx7-speaker-title" className="zx7-speaker-title">
        ZX7 SPEAKER
      </h2>
      <Link
        to="/speakers"
        className="btn btn-outline"
        aria-label="See ZX7 Speaker product"
      >
        SEE PRODUCT
      </Link>
    </div>
  </section>
);

const YX1EarphonesSection: React.FC = () => (
  <section className="earphones-section" aria-labelledby="yx1-earphones-title">
    <div className="earphone-image" aria-hidden="true"></div>
    <div className="earphone-content-background">
      <div className="earphone-content">
        <h2 id="yx1-earphones-title" className="earphone-title">
          YX1 EARPHONES
        </h2>
        <Link
          to="/earphones"
          className="btn btn-outline"
          aria-label="See YX1 Earphones product"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  </section>
);

export default Home;
