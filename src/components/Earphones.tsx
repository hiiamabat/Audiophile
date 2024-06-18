import * as React from 'react';
import Product from './Product';
import { Card } from './Home';
import { AudioGear } from './Home';
import headphonesImage from '../assets/images/product-xx99-mark-one-headphones/mobile/headphones-cta.png';
import speakersImage from '../assets/images/product-zx9-speaker/mobile/speakers-cta.png';
import earphonesImage from '../assets/images/product-yx1-earphones/mobile/earphones-cta.png';
import YX1ImageMobile from '../assets/images/product-yx1-earphones/mobile/image-category-page-preview.jpg';
import YX1ImageTablet from '../assets/images/product-yx1-earphones/tablet/image-category-page-preview.jpg';
import YX1ImageDesktop from '../assets/images/product-yx1-earphones/desktop/image-category-page-preview.jpg';

const Earphones: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white px-4 py-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center tracking-widest sm:text-3xl sm:p-10">
          EARPHONES
        </h1>
      </section>
      <Product
        imageMobile={YX1ImageMobile}
        imageTablet={YX1ImageTablet}
        imageDesktop={YX1ImageDesktop}
        title="YX1 EARPHONES"
        newProduct={true}
        content="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        linkTo="/yx1-speaker"
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

export default Earphones;
