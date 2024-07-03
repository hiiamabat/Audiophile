import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Products from './ProductsData';
import { useCart } from './CartContext';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';
import CartModal from './CartModal';
import GoBack from './GoBack';

// Types

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

// Types
interface SuggestionItem {
  slug: string;
  name: string;
  category: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

// Helper Components
const SkipLink: React.FC = () => (
  <a href="#main-content" className="skip-link visually-hidden">
    Skip to main content
  </a>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div role="alert" aria-live="assertive" className="error-message">
    {message}
  </div>
);

const LoadingMessage: React.FC = () => (
  <div aria-live="polite" className="loading-message">
    Loading product details...
  </div>
);

// Main Component
const ProductDetailPage: React.FC = () => {
  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [showCartModal, setShowCartModal] = useState(false);

  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const addToCartButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const loadProduct = () => {
      const foundProduct = Products.find((item) => item.slug === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setError(null);
      } else {
        setError('Product not found. Please check the URL and try again.');
        setProduct(null);
      }
    };

    loadProduct();
  }, [id]);

  useEffect(() => {
    if (mainHeadingRef.current) {
      mainHeadingRef.current.focus();
    }
  }, [product]);

  if (error) return <ErrorMessage message={error} />;
  if (!product) return <LoadingMessage />;

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity));
  };

  const handleAddToCart = () => {
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
  };

  const handleCartModalClose = () => {
    setShowCartModal(false);
    addToCartButtonRef.current?.focus();
  };

  return (
    <>
      <SkipLink />
      <main id="main-content" className="product-detail-page">
        <GoBack />
        <ProductContent
          product={product}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
          onAddToCart={handleAddToCart}
          mainHeadingRef={mainHeadingRef}
          addToCartButtonRef={addToCartButtonRef}
        />
        <ProductFeatures
          features={product.features}
          included={product.includes}
        />
        <ProductGallery gallery={product.gallery} title={product.name} />
        <ProductSuggestions suggestions={product.suggestions} />
        <CategoryCards />
        <AudioGear />
        <CartModal isOpen={showCartModal} onClose={handleCartModalClose} />
      </main>
    </>
  );
};

// Sub-components

const ProductContent: React.FC<{
  product: Product;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  onAddToCart: () => void;
  mainHeadingRef: React.RefObject<HTMLHeadingElement>;
  addToCartButtonRef: React.RefObject<HTMLButtonElement>;
}> = ({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
  mainHeadingRef,
  addToCartButtonRef,
}) => (
  <article className="product-content">
    <ProductImage images={product.image} title={product.name} />
    <ProductInfo
      product={product}
      quantity={quantity}
      onQuantityChange={onQuantityChange}
      onAddToCart={onAddToCart}
      mainHeadingRef={mainHeadingRef}
      addToCartButtonRef={addToCartButtonRef}
    />
  </article>
);

const ProductImage: React.FC<{ images: Product['image']; title: string }> = ({
  images,
  title,
}) => (
  <div className="product-detail-image">
    <picture>
      <source media="(min-width: 1024px)" srcSet={images.desktop} />
      <source media="(min-width: 640px)" srcSet={images.tablet} />
      <img
        src={images.mobile}
        alt={`${title} product`}
        className="product-detail-img"
      />
    </picture>
  </div>
);

const ProductInfo: React.FC<{
  product: Product;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  onAddToCart: () => void;
  mainHeadingRef: React.RefObject<HTMLHeadingElement>;
  addToCartButtonRef: React.RefObject<HTMLButtonElement>;
}> = ({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
  mainHeadingRef,
  addToCartButtonRef,
}) => (
  <div className="product-detail-info">
    {product.newProduct && <p className="new-product-label">NEW PRODUCT</p>}
    <h1 ref={mainHeadingRef} tabIndex={-1} className="product-detail-title">
      {product.name}
    </h1>
    <p className="product-detail-description">{product.description}</p>
    <p className="product-detail-price">${product.price}</p>
    <div className="detail-add-to-cart">
      <div className="detail-quantity">
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
      </div>
      <div>
        <button
          ref={addToCartButtonRef}
          className="add-to-cart-button"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const QuantitySelector: React.FC<{
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}> = ({ quantity, onQuantityChange }) => (
  <div className="quantity-selector">
    <label id="quantity-label" className="sr-only">
      Quantity
    </label>
    <button
      className="quantity-button"
      onClick={() => onQuantityChange(quantity - 1)}
      aria-label="Decrease quantity"
      aria-controls="quantity-input"
    >
      -
    </button>
    <input
      id="quantity-input"
      type="number"
      value={quantity}
      onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
      aria-labelledby="quantity-label"
      className="quantity-input"
      min="1"
    />
    <button
      className="quantity-button"
      onClick={() => onQuantityChange(quantity + 1)}
      aria-label="Increase quantity"
      aria-controls="quantity-input"
    >
      +
    </button>
  </div>
);

const ProductFeatures: React.FC<{
  features: string;
  included: { quantity: number; item: string }[];
}> = ({ features, included }) => (
  <div className="features-and-box">
    <section className="features-section">
      <h2 className="section-title">Features</h2>
      <p className="features-description">{features}</p>
    </section>
    <aside className="in-the-box-section">
      <div className="in-the-box-title">
        <h2 className="section-title">In the box</h2>
      </div>
      <div className="in-the-box-list">
        <ul className="included-items-list">
          {included.map((item, index) => (
            <li key={index} className="included-item">
              <span className="item-quantity">{item.quantity}x</span>{' '}
              {item.item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  </div>
);

const ProductGallery: React.FC<{
  gallery: Product['gallery'];
  title: string;
}> = ({ gallery, title }) => (
  <section className="gallery-section" aria-labelledby="gallery-heading">
    <h2 id="gallery-heading" className="sr-only">
      Product Gallery
    </h2>
    <div className="gallery-grid">
      <div className="gallery-column">
        {gallery.slice(0, 2).map((image, index) => (
          <img
            key={index}
            src={image.mobile}
            srcSet={`${image.tablet} 640w, ${image.desktop} 1024w`}
            sizes="(min-width: 1024px) 512px, (min-width: 640px) 320px, 100vw"
            alt={`${title} in use, view ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
      <div className="gallery-large-image">
        <img
          src={gallery[2].mobile}
          srcSet={`${gallery[2].tablet} 640w, ${gallery[2].desktop} 1024w`}
          sizes="(min-width: 1024px) 512px, (min-width: 640px) 320px, 100vw"
          alt={`${title} in use, view 3`}
          className="gallery-image-large"
        />
      </div>
    </div>
  </section>
);

const ProductSuggestions: React.FC<{ suggestions: SuggestionItem[] }> = ({
  suggestions,
}) => {
  const navigate = useNavigate();

  return (
    <section className="suggestions-section">
      <h2 className="suggestions-section-title">You may also like</h2>
      <div className="suggestions-grid">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="suggestion-item">
            <picture className="suggestion-image">
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
                className="suggestion-image"
              />
            </picture>
            <h3 className="suggestion-title">
              {suggestion.name.split(' ').slice(0, -1).join(' ')}
            </h3>
            <button
              className="btn"
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
  );
};

export default ProductDetailPage;
