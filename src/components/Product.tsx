import React from 'react';
import { Link } from 'react-router-dom';

interface ProductProps {
  name: string;
  slug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  newProduct: boolean;
  description: string;
  isFlipped?: boolean;
}

const Product: React.FC<ProductProps> = ({
  name,
  slug,
  image,
  newProduct,
  description,
  isFlipped = false,
}) => {
  return (
    <section
      className={`product-container-section ${
        isFlipped ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className="product-image-container">
        <picture className="product-image">
          <source srcSet={image.desktop} media="(min-width: 1024px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <img
            src={image.mobile}
            alt={name}
            className="object-cover w-full mx-auto"
          />
        </picture>
      </div>
      <div
        className={`w-full lg:w-1/2 text-left ${isFlipped ? '' : 'lg:ml-20'}`}
      >
        {newProduct && <h3 className="product-content-h3">NEW PRODUCT</h3>}
        <h2 className="product-content-h2">{name}</h2>
        <p className="product-description">{description}</p>
        <Link to={slug} className="product-button">
          SEE PRODUCT
        </Link>
      </div>
    </section>
  );
};

export default Product;
