import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';
import Products from './ProductsData';

const Earphones: React.FC = () => {
  const navigate = useNavigate();
  const earphones = Products.filter(
    (product) => product.category === 'earphones',
  );

  const handleProductClick = (slug?: string) => {
    if (slug) {
      navigate(`/earphones/${slug}`);
    }
  };

  return (
    <main>
      <section className="product-page-section">
        <h1 className="product-page-h1">EARPHONES</h1>
      </section>
      <section>
        {earphones.map((earphone, index) => (
          <article
            key={earphone.id}
            className="cursor-pointer"
            onClick={() => handleProductClick(earphone.slug)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) =>
              e.key === 'Enter' && handleProductClick(earphone.slug)
            }
          >
            <Product
              name={earphone.name}
              slug={earphone.slug || ''}
              image={{
                mobile: earphone.image.mobile,
                tablet: earphone.image.tabletPreview,
                desktop: earphone.image.desktop,
              }}
              newProduct={earphone.newProduct}
              description={earphone.description}
              isFlipped={index % 2 !== 0}
            />
          </article>
        ))}
      </section>
      <CategoryCards />
      <AudioGear />
    </main>
  );
};

export default Earphones;
