import * as React from 'react';
import { Link } from 'react-router-dom';

interface ProductProps {
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
  newProduct: boolean;
  title: string;
  description: string;
  isFlipped?: boolean;
}

const Product: React.FC<ProductProps> = ({
  imageMobile,
  imageTablet,
  imageDesktop,
  newProduct,
  title,
  description,
  isFlipped = false,
}) => {
  return (
    <section
      className={`max-w-7xl lg:mx-auto bg-white pt-20 px-3 flex flex-col mx-6 lg:flex-row lg:justify-start lg:text-left lg:items-center ${isFlipped ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="w-full lg:w-1/2">
        <picture className="w-auto rounded-default mb-10 mx-auto 2xl:ml-auto 2xl:mr-0">
          <source media="(min-width: 1024px)" srcSet={imageDesktop} />
          <source media="(min-width: 640px)" srcSet={imageTablet} />
          <img
            src={imageMobile}
            alt={title}
            className="object-cover w-full mx-auto"
          />
        </picture>
      </div>
      <div className={`w-full lg:w-1/2 ${isFlipped ? '' : 'lg:ml-20'}`}>
        {newProduct && (
          <h3 className="mt-6 text-sm text-primary font-normal tracking-1em">
            NEW PRODUCT
          </h3>
        )}
        <h2 className="text-2xl text-black font-bold tracking-wide py-6 sm:text-4xl lg:w-4/5">
          {title}
        </h2>
        <p className="text-sm text-secondary-darkest font-normal tracking-widest sm:w-4/5 sm:m-auto lg:m-0">
          {description}
        </p>
        <Link
          to={linkTo}
          className="inline-flex items-center justify-center text-sm font-semibold tracking-wide bg-primary flex-auto my-6 mx-auto text-white hover:text-secondary-black hover:bg-primary-light transition duration-300 ease-in-out py-3 px-6"
        >
          SEE PRODUCT
        </Link>
      </div>
    </section>
  );
};

export default Product;
