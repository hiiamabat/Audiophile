import * as React from 'react';
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
      <section className="bg-black text-white px-4 py-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center tracking-widest sm:text-3xl sm:p-10">
          HEADPHONES
        </h1>
      </section>
      <section>
        {headphones.map((headphone, index) => (
          <div
            key={headphone.id}
            onClick={() => handleProductClick(headphone.slug)}
          >
            <Product
              name={headphone.name}
              slug={headphone.slug || ''}
              image={{
                mobile: headphone.image.mobile,
                tablet: headphone.image.tablet,
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
