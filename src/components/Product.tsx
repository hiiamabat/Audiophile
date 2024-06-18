import * as React from 'react';

interface ProductProps {
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
  newProduct: boolean;
  title: string;
  content: string;
  linkTo: string;
  isFlipped?: boolean;
}

const Product: React.FC<ProductProps> = ({
  imageMobile,
  imageTablet,
  imageDesktop,
  newProduct,
  title,
  content,
  linkTo,
  isFlipped,
}) => {
  return (
    <section className={`product-section ${isFlipped ? 'flipped' : ''}`}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={imageDesktop} />
        <source media="(min-width: 640px)" srcSet={imageTablet} />
        <img src={imageMobile} alt={title} />
      </picture>
      <div className="product-details">
        {newProduct && <span>NEW PRODUCT</span>}
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={linkTo}>See Product</a>
      </div>
    </section>
  );
};

export default Product;
