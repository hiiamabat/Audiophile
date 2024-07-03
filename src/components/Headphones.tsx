import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';
import Products from './ProductsData';

const Headphones: React.FC = () => {
  const navigate = useNavigate();
  const headphones = Products.filter(
    (product) => product.category === 'headphones',
  );

  const handleProductClick = (slug?: string) => {
    if (slug) {
      navigate(`/headphones/${slug}`);
    }
  };

  return (
    <main>
      <section className="product-page-section">
        <h1 className="product-page-h1">HEADPHONES</h1>
      </section>
      <section aria-labelledby="headphones-list">
        <h2 id="headphones-list" className="sr-only">
          List of Headphones
        </h2>
        {headphones.map((headphone, index) => (
          <div
            key={headphone.id}
            role="button"
            tabIndex={0}
            onClick={() => handleProductClick(headphone.slug)}
            onKeyDown={(e) =>
              e.key === 'Enter' && handleProductClick(headphone.slug)
            }
            className="cursor-pointer"
          >
            <Product
              name={headphone.name}
              slug={headphone.slug || ''}
              image={{
                mobile: headphone.image.mobile,
                tablet: headphone.image.tabletPreview,
                desktop: headphone.image.desktop,
              }}
              newProduct={headphone.newProduct}
              description={headphone.description}
              isFlipped={index % 2 !== 0}
            />
          </div>
        ))}
      </section>
      <CategoryCards />
      <AudioGear />
    </main>
  );
};

export default Headphones;
