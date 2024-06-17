import * as React from 'react';
import Product from './Product';
import { Card } from './Home';
import { AudioGear } from './Home';
import headphonesImage from '../assets/images/product-xx99-mark-one-headphones/mobile/headphones-cta.png';
import speakersImage from '../assets/images/product-zx9-speaker/mobile/speakers-cta.png';
import earphonesImage from '../assets/images/product-yx1-earphones/mobile/earphones-cta.png';
import xx992ImageMobile from '../assets/images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';
import xx992ImageTablet from '../assets/images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg';
import xx992ImageDesktop from '../assets/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import xx991ImageMobile from '../assets/images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg';
import xx991ImageTablet from '../assets/images/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg';
import xx991ImageDesktop from '../assets/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import xx59ImageMobile from '../assets/images/product-xx59-headphones/mobile/image-category-page-preview.jpg';
import xx59ImageTablet from '../assets/images/product-xx59-headphones/tablet/image-category-page-preview.jpg';
import xx59ImageDesktop from '../assets/images/product-xx59-headphones/desktop/image-category-page-preview.jpg';

const Headphones: React.FC = () => {
  return (
    <main>
      <section className="bg-black text-white px-4 py-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center tracking-widest sm:text-3xl sm:p-10">
          HEADPHONES
        </h1>
      </section>
      <Product
        imageMobile={xx992ImageMobile}
        imageTablet={xx992ImageTablet}
        imageDesktop={xx992ImageDesktop}
        title="XX99 MARK II HEADPHONES"
        newProduct={true}
        content="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium 
  headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        linkTo="/xx99-mark-2-headphones"
      />
      <Product
        imageMobile={xx991ImageMobile}
        imageTablet={xx991ImageTablet}
        imageDesktop={xx991ImageDesktop}
        title="XX99 MARK I HEADPHONES"
        newProduct={false}
        content="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        linkTo="/xx99-mark-1-headphones"
      />
      <Product
        imageMobile={xx59ImageMobile}
        imageTablet={xx59ImageTablet}
        imageDesktop={xx59ImageDesktop}
        title="XX59 HEADPHONES"
        newProduct={false}
        content="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        linkTo="/xx59-headphones"
      />
      <section className="max-w-7xl mx-auto bg-white pb-20 px-4 sm:flex justify-center sm:pt-1 md:mt-20 md:mb-20 md:p-0">
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

export default Headphones;
