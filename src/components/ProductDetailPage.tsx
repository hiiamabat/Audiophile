import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Products from './ProductsData';
import { CartContext } from './CartContext';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';

interface Product {
  id: number;
  name: string;
  slug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  newProduct: boolean;
  description: string;
  price: number;
  category: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: { mobile: string; tablet: string; desktop: string }[];
  suggestions: {
    slug: string;
    name: string;
    category: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const foundProduct = Products.find((item) => item.slug === id) as
      | Product
      | undefined;
    if (foundProduct) {
      setProduct(foundProduct);
      setError(null);
    } else {
      setError('Product not found');
      setProduct(null);
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      const item = {
        title: product.name,
        price: product.price,
        quantity: quantity,
      };
      addToCart(item);
    }
  };

  const {
    image: { mobile: imageMobile, tablet: imageTablet, desktop: imageDesktop },
    newProduct,
    name: title,
    description,
    price,
    features,
    includes: included = [],
    gallery = [],
    suggestions = [],
  } = product;

  return (
    <main className="flex flex-col px-3 pt-4 mx-6 mx-auto bg-white max-w-7xl lg:mx-auto">
      <button
        className="flex justify-start mb-6 transition duration-300 ease-in-out hover:text-primary sm:text-xl sm:py-6 lg:py-12 lg:mx-6 xl:mx-0 xl:pt-12 xl:pb-0"
        onClick={goBack}
      >
        Go Back
      </button>
      <section className="w-full sm:flex lg:mx-6 xl:mx-0 xl:py-20">
        <div className="sm:w-1/2">
          <picture className="w-auto mx-auto mb-10 rounded-default 2xl:ml-auto 2xl:mr-0">
            <source media="(min-width: 1024px)" srcSet={imageDesktop} />
            <source media="(min-width: 640px)" srcSet={imageTablet} />
            <img
              src={imageMobile}
              alt={title}
              className="object-cover w-full mx-auto"
            />
          </picture>
        </div>

        <div className="flex flex-col justify-start w-full text-left sm:ml-10 sm:w-1/2 sm:justify-center lg:ml-0 lg:pl-16">
          {newProduct && (
            <h3 className="mt-6 text-sm font-normal text-primary tracking-1em">
              NEW PRODUCT
            </h3>
          )}
          <h2 className="py-6 text-2xl font-bold tracking-wide text-black sm:text-4xl lg:w-4/5">
            {title}
          </h2>
          <p className="mb-6 text-sm font-normal tracking-widest text-secondary-darkest sm:w-full sm:m-0 sm:mb-8 lg:m-0 lg:mb-8">
            {description}
          </p>
          <p className="font-bold text-secondary-black sm:text-xl sm:tracking-widest">
            ${price}
          </p>
          <div className="flex items-center mt-6">
            <div className="flex items-center mr-4">
              <button
                className="px-2 py-1 text-gray-600 bg-gray-200 rounded-l hover:bg-gray-300 focus:outline-none"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="px-4 py-1 font-semibold text-gray-800 bg-gray-100">
                {quantity}
              </span>
              <button
                className="px-2 py-1 text-gray-600 bg-gray-200 rounded-r hover:bg-gray-300 focus:outline-none"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <button className="uppercase btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <div className="m-auto xl:flex xl:w-full">
        <section className="lg:mx-6 xl:w-3/5 xl:m-0">
          <h3 className="mb-6 text-left h3-default mt-14 sm:text-3xl">
            Features
          </h3>
          <p className="mb-8 text-sm font-normal tracking-widest text-left whitespace-pre-line text-secondary-darkest sm:w-full sm:m-0 sm:mb-10">
            {features}
          </p>
        </section>
        <section className="sm:flex sm:my-10 lg:mx-6 xl:w-1/2 xl:flex xl:flex-col xl:w-2/5 xl:mx-0 xl:pl-20">
          <div className="sm:w-1/2 xl:w-full">
            <h3 className="mt-6 text-lg font-bold text-left sm:text-3xl xl:mb-6">
              In the box
            </h3>
          </div>
          <div className="sm:w-1/2 xl:w-full">
            <ul className="text-sm font-normal text-left text-secondary-darkest sm:w-4/5 lg:m-0">
              {included.map((item, index) => (
                <li key={index} className="mt-2">
                  <span className="mr-6 font-bold text-primary">
                    {item.quantity}x
                  </span>{' '}
                  {item.item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section className="w-full mt-10 lg:px-6 lg:my-20 xl:px-0">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
          <div className="flex flex-col gap-4 sm:grid">
            <img
              src={gallery[0].mobile}
              srcSet={`${gallery[0].tablet} 640w, ${gallery[0].desktop} 1024w`}
              sizes="(min-width: 1024px) 512px, (min-width: 640px) 320px, 50vw"
              alt={`${title} gallery image 1`}
              className="w-full rounded-lg"
            />
            <img
              src={gallery[1].mobile}
              srcSet={`${gallery[1].tablet} 640w, ${gallery[1].desktop} 1024w`}
              sizes="(min-width: 1024px) 512px, (min-width: 640px) 320px, 50vw"
              alt={`${title} gallery image 2`}
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <img
              src={gallery[2].mobile}
              srcSet={`${gallery[2].tablet} 640w, ${gallery[2].desktop} 1024w`}
              sizes="(min-width: 1024px) 512px, (min-width: 640px) 320px, 50vw"
              alt={`${title} gallery image 3`}
              className="object-cover w-full h-full rounded-lg lg:w-auto"
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 lg:mt-0">
        <h3 className="mt-6 mb-8 text-lg font-bold sm:text-3xl">
          You may also like
        </h3>
        <div className="grid grid-cols-1 mb-12 sm:flex sm:gap-3 md:grid-cols-3 gap-14">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="text-center">
              <picture className="w-auto mx-auto mb-10 rounded-default">
                <source
                  media="(min-width: 1024px)"
                  srcSet={suggestion.image.desktop}
                />
                <source
                  media="(min-width: 640px)"
                  srcSet={suggestion.image.tablet}
                />
                <img
                  src={suggestion.image.mobile}
                  alt={suggestion.name}
                  className="object-cover w-full rounded-default"
                />
              </picture>
              <h4 className="my-8 text-xl font-bold tracking-widest uppercase text-secondary-black sm:text-2xl">
                {suggestion.name.split(' ').slice(0, -1).join(' ')}
              </h4>
              <button
                className="uppercase btn"
                onClick={() =>
                  navigate(`/${suggestion.category}/${suggestion.slug}`)
                }
              >
                See Product
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="xl:mx-0">
        <CategoryCards />
      </div>
      <AudioGear />
    </main>
  );
};

export default ProductDetailPage;
