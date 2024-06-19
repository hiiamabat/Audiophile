import getImageSources from './utils/getImageSources';
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
}

const products: Product[] = data.map(async (item) => ({
  id: item.id,
  slug: item.slug,
  name: item.name,
  image: await getImageSources(`product-${item.slug}/image-product`),
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
    first: await getImageSources(`product-${item.slug}/image-gallery-1`),
    second: await getImageSources(`product-${item.slug}/image-gallery-2`),
    third: await getImageSources(`product-${item.slug}/image-gallery-3`),
  },
  suggestions: item.others.map((other) => ({
    slug: other.slug,
    name: other.name,
    image: {
      mobile: other.image.mobile,
      tablet: other.image.tablet,
      desktop: other.image.desktop,
    },
  })),
}));

export default products;
