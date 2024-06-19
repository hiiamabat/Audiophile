import * as React from 'react';
import Products from './ProductsData';
import Product from './Product';
import CategoryCards from './CategoryCards';
import AudioGear from './AudioGear';
const Earphones: React.FC = () => {
  const earphones = Products.filter((product) => {
    return product.category === 'earphones';
  });

  return (
    <main>
      <section className="bg-black text-white px-4 py-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center tracking-widest sm:text-3xl sm:p-10">
          EARPHONES
        </h1>
      </section>
      {earphones.map((earphone, index) => (
        <Product
          key={earphone.id}
          imageMobile={earphone.imageMobile}
          imageTablet={earphone.imageTablet}
          imageDesktop={earphone.imageDesktop}
          title={earphone.name}
          newProduct={earphone.newProduct}
          description={earphone.description}
          linkTo={earphone.linkTo}
          isFlipped={index % 2 !== 0}
        />
      ))}
      <CategoryCards />
      <AudioGear />
    </main>
  );
};

export default Earphones;
