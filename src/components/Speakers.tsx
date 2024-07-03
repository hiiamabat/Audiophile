import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';
import Products from './ProductsData';

const Speakers: React.FC = () => {
  const navigate = useNavigate();
  const speakers = Products.filter(
    (product) => product.category === 'speakers',
  );

  const handleProductClick = useCallback(
    (slug?: string) => {
      if (slug) {
        navigate(`/speakers/${slug}`);
      }
    },
    [navigate],
  );

  return (
    <main>
      <section className="product-page-section">
        <h1 className="product-page-h1">SPEAKERS</h1>
      </section>
      <section>
        {speakers.map((speaker, index) => (
          <div
            key={speaker.id}
            onClick={() => handleProductClick(speaker.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleProductClick(speaker.slug);
              }
            }}
            className="cursor-pointer"
          >
            <Product
              name={speaker.name}
              slug={speaker.slug || ''}
              image={{
                mobile: speaker.image.mobile,
                tablet: speaker.image.tabletPreview,
                desktop: speaker.image.desktop,
              }}
              newProduct={speaker.newProduct}
              description={speaker.description}
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

export default Speakers;
