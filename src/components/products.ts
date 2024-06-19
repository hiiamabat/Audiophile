import getImageSources from '../utils/getImageSources';
import data from '../data.json';

interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  newProduct: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  suggestions: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
  previewImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const products: Promise<Product[]> = Promise.all(
  data.map(async (item) => {
    const image = await getImageSources(item.slug, 'product', item.category);
    const galleryFirst = await getImageSources(item.slug, 'gallery', 'first');
    const gallerySecond = await getImageSources(item.slug, 'gallery', 'second');
    const galleryThird = await getImageSources(item.slug, 'gallery', 'third');
    const suggestions = await Promise.all(
      item.others.map(async (other) => ({
        slug: other.slug,
        name: other.name,
        image: await getImageSources(
          `shared/${other.slug}`,
          'product',
          item.category,
        ), // Use the parent item's category for suggestions
      })),
    );
    const previewImage = await getImageSources(
      item.slug,
      'preview',
      item.category,
    );

    return {
      id: item.id,
      slug: item.slug,
      name: item.name,
      image,
      categoryImage: {
        mobile: item.categoryImage.mobile,
        tablet: item.categoryImage.tablet,
        desktop: item.categoryImage.desktop,
      },
      newProduct: item.new,
      price: item.price,
      description: item.description,
      features: item.features,
      includes: item.includes,
      gallery: {
        first: galleryFirst,
        second: gallerySecond,
        third: galleryThird,
      },
      suggestions,
      previewImage,
    };
  }),
);

export default products;
