import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

interface DetailProps {
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
  newProduct: boolean;
  title: string;
  content: string;
  price: number;
}

const ProductDetail: React.FC<DetailProps> = ({
  imageMobile,
  imageTablet,
  imageDesktop,
  newProduct,
  title,
  content,
  price,
}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = {
      title,
      price,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <section className="max-w-6xl lg:mx-auto bg-white pt-20 px-3 flex flex-col mx-6 lg:flex-row lg:justify-start lg:text-left lg:items-center">
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
      <div className="w-full lg:w-1/2">
        {newProduct && (
          <h3 className="mt-6 text-sm text-primary font-normal tracking-1em">
            NEW PRODUCT
          </h3>
        )}
        <h2 className="text-2xl text-black font-bold tracking-wide py-6 sm:text-4xl lg:w-4/5">
          {title}
        </h2>
        <p className="text-sm text-secondary-darkest font-normal tracking-widest sm:w-4/5 sm:m-auto lg:m-0">
          {content}
        </p>
        <p className="font-bold text-secondary-black">${price}</p>
        <button
          className="mt-6 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
