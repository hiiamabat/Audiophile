import * as React from 'react';
import { Link } from 'react-router-dom';
import headphonesImage from '../assets/images/shared/mobile/headphones.png';
import speakersImage from '../assets/images/shared/mobile/speakers.png';
import earphonesImage from '../assets/images/shared/mobile/earphones.png';

interface CardProps {
  imageSrc: string;
  title: string;
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, linkTo }) => {
  return (
    <div className="relative flex flex-col w-full h-full mt-24 bg-secondary-darker rounded-default sm:h-fit sm:mx-3 sm:first:ml-0 sm:last:mr-0">
      <img
        src={imageSrc}
        alt={`${title} image`}
        className="absolute object-cover w-4/5 m-auto -translate-x-1/2 xs:w-2/5 xs:-top-15 -top-20 sm:-top-10 sm:w-4/5 left-1/2 md:w-3/5 lg:-top-16"
      />
      <h2 className="mt-24 text-xl font-bold tracking-wide text-black">
        {title}
      </h2>
      <Link
        to={linkTo}
        className="flex items-center justify-center px-6 py-3 mt-4 text-sm font-semibold tracking-wide transition duration-300 ease-in-out text-secondary-darkest hover:text-primary"
        aria-label={`Shop for ${title}`}
      >
        SHOP
        <span className="ml-1 text-xl font-semibold text-primary">&gt;</span>
      </Link>
    </div>
  );
};

const CategoryCards: React.FC = () => {
  return (
    <section className="flex flex-col px-3 pt-10 pb-20 bg-white max-w-7xl sm:flex-row sm:pt-10 sm:w-full sm:justify-between sm:m-0 md:w-auto md:mx-6 md:m-auto lg:mx-auto">
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
