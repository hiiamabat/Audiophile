import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Products from './ProductsData';
import { useCart } from './CartContext';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';
import CartModal from './CartModal';

interface Product {
  id: number;
  name: string;
  shortenedName: string;
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
  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [showCartModal, setShowCartModal] = useState(false);

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

  const SkipLink = () => (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:p-4"
    >
      Skip to main content
    </a>
  );

  if (error) {
    return (
      <div
        role="alert"
        aria-live="assertive"
        className="p-4 font-bold text-red-600"
      >
        {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div aria-live="polite" className="p-4 text-center">
        Loading...
      </div>
    );
  }

  const handleGoBack = () => {
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
        id: product.id.toString(),
        title: product.name,
        shortenedName: product.shortenedName,
        price: product.price,
        quantity: quantity,
        image: product.image.mobile,
      };
      addToCart(item);
      setShowCartModal(true);
      setQuantity(1);
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
    <>
      <SkipLink />
      <main className="flex flex-col px-3 pt-4 mx-6 mx-auto bg-white max-w-7xl lg:mx-auto">
        <nav aria-label="Breadcrumb">
          <button
            className="flex justify-start mb-6 transition duration-300 ease-in-out hover:text-primary sm:text-xl sm:py-6 lg:py-12 lg:mx-6 xl:mx-0 xl:pt-12 xl:pb-0"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </nav>
        <article
          id="main-content"
          className="w-full sm:flex lg:mx-6 xl:mx-0 xl:py-20"
        >
          <div className="sm:w-1/2">
            <picture className="w-auto mx-auto mb-10 rounded-default 2xl:ml-auto 2xl:mr-0">
              <source media="(min-width: 1024px)" srcSet={imageDesktop} />
              <source media="(min-width: 640px)" srcSet={imageTablet} />
              <img
                src={imageMobile}
                alt={`${title} product`}
                className="object-cover w-full mx-auto"
              />
            </picture>
          </div>

          <div className="flex flex-col justify-start w-full text-left sm:ml-10 sm:w-1/2 sm:justify-center lg:ml-0 lg:pl-16">
            {newProduct && (
              <p className="mt-6 font-normal text-primary tracking-1em">
                NEW PRODUCT
              </p>
            )}
            <h1
              ref={mainHeadingRef}
              className="py-6 text-2xl font-bold tracking-wide text-black sm:text-4xl lg:w-4/5"
            >
              {title}
            </h1>
            <p className="mb-6 font-normal tracking-widest text-secondary-darkest sm:w-full sm:m-0 sm:mb-8 lg:m-0 lg:mb-8">
              {description}
            </p>
            <p className="font-bold text-secondary-black sm:text-xl sm:tracking-widest">
              ${price}
            </p>
            <div className="flex items-center mt-6">
              <div className="flex items-center px-3 py-2 mr-4 bg-secondary-darker">
                <span id="quantity-label" className="sr-only">
                  Quantity
                </span>
                <button
                  className="px-2 py-1 text-gray-600 rounded-l hover:bg-gray-300 focus:outline-none"
                  onClick={decrementQuantity}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-1 font-bold bg-gray-100 text-secondary-black">
                  {quantity}
                </span>
                <button
                  className="px-2 py-1 text-gray-600 rounded-r hover:bg-gray-300 focus:outline-none"
                  onClick={incrementQuantity}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button className="uppercase btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </article>
        <div className="m-auto xl:flex xl:w-full">
          <section className="lg:mx-6 xl:w-3/5 xl:m-0">
            <h2 className="mb-6 text-left h3-default mt-14 sm:text-3xl">
              Features
            </h2>
            <p className="mb-8 font-normal tracking-widest text-left whitespace-pre-line text-secondary-darkest sm:w-full sm:m-0 sm:mb-10">
              {features}
            </p>
          </section>
          <aside className="sm:flex sm:my-10 lg:mx-6 xl:w-1/2 xl:flex xl:flex-col xl:w-2/5 xl:mx-0 xl:pl-20">
            <div className="sm:w-1/2 xl:w-full">
              <h2 className="mt-6 text-lg font-bold text-left sm:text-3xl xl:mb-6">
                In the box
              </h2>
            </div>
            <div className="sm:w-1/2 xl:w-full">
              <ul className="font-normal text-left text-secondary-darkest sm:w-4/5 lg:m-0">
                {included.map((item, index) => (
                  <li key={index} className="mt-2">
                    <span className="mr-6 text-base font-bold text-primary">
                      {item.quantity}x
                    </span>{' '}
                    {item.item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
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
        <CartModal
          isOpen={showCartModal}
          onClose={() => setShowCartModal(false)}
        />
      </main>
    </>
  );
};

export default ProductDetailPage;
