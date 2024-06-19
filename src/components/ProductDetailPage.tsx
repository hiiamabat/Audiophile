import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useParams } from 'react-router-dom';
import Products from './ProductsData';

interface DetailProps {
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
  newProduct: boolean;
  title: string;
  description: string;
  price: number;
  features: string;
  included: { quantity: number; item: string }[];
  gallery: { mobile: string; tablet: string; desktop: string }[];
  suggestions: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

const ProductDetailPage: React.FC<DetailProps> = ({
  imageMobile,
  imageTablet,
  imageDesktop,
  newProduct,
  title,
  description,
  price,
  features,
  included,
  gallery,
  suggestions,
}) => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams<{ id: string }>();
  const product = productData.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

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
          {description}
        </p>
        <p className="font-bold text-secondary-black">${price}</p>
        <button
          className="mt-6 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <div>
          <h3 className="text-lg font-bold mt-6">Features</h3>
          <p className="text-sm text-secondary-darkest font-normal tracking-widest sm:w-4/5 sm:m-auto lg:m-0">
            {features}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mt-6">In the box</h3>
          <ul className="text-sm text-secondary-darkest font-normal tracking-widest sm:w-4/5 sm:m-auto lg:m-0">
            {included.map((item, index) => (
              <li key={index} className="mt-2">
                {item.quantity}x {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full mt-10 lg:mt-0">
        <h3 className="text-lg font-bold mt-6">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gallery.map((image, index) => (
            <img
              key={index}
              src={image.mobile}
              srcSet={`${image.tablet} 640w, ${image.desktop} 1024w`}
              alt={`${title} gallery image ${index + 1}`}
              className="object-cover w-full rounded-default"
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-10 lg:mt-0">
        <h3 className="text-lg font-bold mt-6">You may also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="text-center">
              <img
                src={suggestion.image.mobile}
                srcSet={`${suggestion.image.tablet} 640w, ${suggestion.image.desktop} 1024w`}
                alt={suggestion.name}
                className="object-cover w-full rounded-default"
              />
              <h4 className="text-sm font-bold mt-2">{suggestion.name}</h4>
              <button
                className="mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                onClick={() =>
                  (window.location.href = `/product/${suggestion.slug}`)
                }
              >
                See Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
