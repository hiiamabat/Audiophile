import * as React from 'react';
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

  const handleProductClick = (slug?: string) => {
    if (slug) {
      navigate(`/speakers/${slug}`);
    }
  };

  return (
    <main>
      <section className="flex flex-col px-4 py-6 text-white bg-black">
        <h1 className="text-2xl font-bold tracking-widest text-center sm:text-3xl sm:p-10">
          SPEAKERS
        </h1>
      </section>
      <section>
        {speakers.map((speaker, index) => (
          <div
            key={speaker.id}
            onClick={() => handleProductClick(speaker.slug)}
          >
            <Product
              name={speaker.name}
              slug={speaker.slug || ''}
              image={{
                mobile: speaker.image.mobile,
                tablet: speaker.image.tablet,
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
