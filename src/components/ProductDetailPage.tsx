import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Products from './ProductsData';
import { CartContext } from './CartContext';

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
    <main className="max-w-6xl lg:mx-auto bg-white pt-4 px-3 flex flex-col mx-6 lg:flex-row lg:justify-start lg:text-left lg:items-center">
      <button
        className="flex justify-start mb-6 hover:text-primary transition duration-300 ease-in-out"
        onClick={goBack}
      >
        Go Back
      </button>
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
      <div className="w-full lg:w-1/2 flex flex-col justify-start text-left">
        {newProduct && (
          <h3 className="mt-6 text-sm text-primary font-normal tracking-1em">
            NEW PRODUCT
          </h3>
        )}
        <h2 className="text-2xl text-black font-bold tracking-wide py-6 sm:text-4xl lg:w-4/5">
          {title}
        </h2>
        <p className="text-sm text-secondary-darkest mb-6 font-normal tracking-widest sm:w-4/5 sm:m-auto lg:m-0">
          {description}
        </p>
        <p className="font-bold text-secondary-black">${price}</p>
        <div className="mt-6 flex items-center">
          <div className="flex items-center mr-4">
            <button
              className="bg-gray-200 text-gray-600 rounded-l px-2 py-1 hover:bg-gray-300 focus:outline-none"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="bg-gray-100 text-gray-800 font-semibold px-4 py-1">
              {quantity}
            </span>
            <button
              className="bg-gray-200 text-gray-600 rounded-r px-2 py-1 hover:bg-gray-300 focus:outline-none"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          <button className="btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
        <div>
          <h3 className="text-lg mt-7 mb-3">Features</h3>
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
                onClick={() => navigate(`/products/${suggestion.slug}`)}
              >
                See Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
