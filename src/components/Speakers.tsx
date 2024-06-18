import * as React from 'react';
import Product from './Product';
import { Card } from './Home';
import { AudioGear } from './Home';
import headphonesImage from '../assets/images/product-xx99-mark-one-headphones/mobile/headphones-cta.png';
import speakersImage from '../assets/images/product-zx9-speaker/mobile/speakers-cta.png';
import earphonesImage from '../assets/images/product-yx1-earphones/mobile/earphones-cta.png';
import ZX9ImageMobile from '../assets/images/product-zx9-speaker/mobile/image-category-page-preview.jpg';
import ZX9ImageTablet from '../assets/images/product-zx9-speaker/tablet/image-category-page-preview.jpg';
import ZX9ImageDesktop from '../assets/images/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import ZX7ImageMobile from '../assets/images/product-zx7-speaker/mobile/image-category-page-preview.jpg';
import ZX7ImageTablet from '../assets/images/product-zx7-speaker/tablet/image-category-page-preview.jpg';
import ZX7ImageDesktop from '../assets/images/product-zx7-speaker/desktop/image-category-page-preview.jpg';

const Speakers: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white px-4 py-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center tracking-widest sm:text-3xl sm:p-10">
          SPEAKERS
        </h1>
      </section>
      <Product
        imageMobile={ZX9ImageMobile}
        imageTablet={ZX9ImageTablet}
        imageDesktop={ZX9ImageDesktop}
        title="ZX9 SPEAKER"
        newProduct={true}
        content="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        linkTo="/zx9-speaker"
      />
      <Product
        imageMobile={ZX7ImageMobile}
        imageTablet={ZX7ImageTablet}
        imageDesktop={ZX7ImageDesktop}
        title="ZX7 SPEAKER"
        newProduct={false}
        content="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        linkTo="/zx7-speaker"
        isFlipped={true}
      />
      <section className="max-w-7xl mx-auto bg-white pb-20 px-4 sm:flex justify-center sm:pt-1 md:mt-20 md:mb-20 md:p-0 lg:my-24">
        <Card
          imageSrc={headphonesImage}
          title="HEADPHONES"
          linkTo="/headphones"
        />
        <Card imageSrc={speakersImage} title="SPEAKERS" linkTo="/speakers" />
        <Card imageSrc={earphonesImage} title="EARPHONES" linkTo="/earphones" />
      </section>
      <AudioGear />
    </main>
  );
};

export default Speakers;
