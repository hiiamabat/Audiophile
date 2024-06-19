import * as React from 'react';
import { Link } from 'react-router-dom';
import headphonesImage from '../assets/images/product-xx99-mark-one-headphones/mobile/headphones-cta.png';
import speakersImage from '../assets/images/product-zx9-speaker/mobile/speakers-cta.png';
import earphonesImage from '../assets/images/product-yx1-earphones/mobile/earphones-cta.png';

interface CardProps {
  imageSrc: string;
  title: string;
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, linkTo }) => {
  return (
    <div className="mt-24 bg-secondary-darker rounded-default flex flex-col relative w-full h-full sm:h-fit sm:mx-3 sm:first:ml-0 sm:last:mr-0">
      <img
        src={imageSrc}
        alt={`${title} image`}
        className="object-cover w-4/5 xs:w-2/5 xs:-top-15 m-auto absolute -top-20 sm:-top-10 sm:w-4/5 left-1/2 -translate-x-1/2 md:w-3/5 lg:-top-16"
      />
      <h2 className="text-xl text-black font-bold tracking-wide mt-24">
        {title}
      </h2>
      <Link
        to={linkTo}
        className="flex items-center justify-center text-sm font-semibold tracking-wide text-secondary-darkest hover:text-primary transition duration-300 ease-in-out py-3 px-6 mt-4"
        aria-label={`Shop for ${title}`}
      >
        SHOP
        <span className="text-primary ml-1 text-xl font-semibold">&gt;</span>
      </Link>
    </div>
  );
};

const CategoryCards: React.FC = () => {
  return (
    <section className="max-w-7xl 2xl:mx-auto bg-white pb-20 px-3 flex flex-col sm:flex-row sm:pt-10 sm:w-full sm:justify-between sm:m-0 md:w-auto md:mx-6 md:m-auto xl:m-auto">
      <Card
        imageSrc={headphonesImage}
        title="HEADPHONES"
        linkTo="/headphones"
      />
      <Card imageSrc={speakersImage} title="SPEAKERS" linkTo="/speakers" />
      <Card imageSrc={earphonesImage} title="EARPHONES" linkTo="/earphones" />
    </section>
  );
};

export default CategoryCards;
