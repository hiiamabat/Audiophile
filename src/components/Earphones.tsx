import * as React from 'react';
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
      <section className="flex flex-col px-4 py-6 text-white bg-black">
        <h1 className="text-2xl font-bold tracking-widest text-center sm:text-3xl sm:p-10">
          EARPHONES
        </h1>
      </section>
      <section>
        {earphones.map((earphone, index) => (
          <div
            key={earphone.id}
            onClick={() => handleProductClick(earphone.slug)}
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
          </div>
        ))}
      </section>
      <CategoryCards />
      <AudioGear />
    </main>
  );
};

export default Earphones;
