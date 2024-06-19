import * as React from 'react';
import Products from './ProductsData';
import Product from './Product';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';

const Speakers: React.FC = () => {
  const speakers = Products.filter((product) => {
    return product.category === 'speakers';
  });

  return (
    <main>
      <section className="bg-black text-white px-4 py-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center tracking-widest sm:text-3xl sm:p-10">
          SPEAKERS
        </h1>
      </section>
      {speakers.map((speaker, index) => (
        <Product
          key={speaker.id}
          imageMobile={speaker.imageMobile}
          imageTablet={speaker.imageTablet}
          imageDesktop={speaker.imageDesktop}
          title={speaker.name}
          newProduct={speaker.newProduct}
          content={speaker.content}
          linkTo={speaker.linkTo}
          isFlipped={index % 2 !== 0}
        />
      ))}

      <CategoryCards />
      <AudioGear />
    </main>
  );
};

export default Speakers;
