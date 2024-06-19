import getGalleryImagePaths from './getGalleryImagePaths';

type ImageSource = {
  mobile: string;
  tablet: string;
  desktop: string;
};

const getImageSources = async (
  basePath: string,
  type: 'product' | 'preview' | 'gallery',
  category: 'headphones' | 'speakers' | 'earphones',
): Promise<ImageSource | string> => {
  const deviceTypes = ['mobile', 'tablet', 'desktop'];
  const modules = await import(
    `../assets/images/products/${basePath}/images.ts`
  );
  const {
    productImageMobile,
    productImageTablet,
    productImageDesktop,
    previewImage,
  } = modules;

  if (type === 'preview') {
    switch (category) {
      case 'headphones':
        return import(
          '../assets/images/categories/headphones/preview.jpg'
        ).then((module) => module.default);
      case 'speakers':
        return import('../assets/images/categories/speakers/preview.jpg').then(
          (module) => module.default,
        );
      case 'earphones':
        return import('../assets/images/categories/earphones/preview.jpg').then(
          (module) => module.default,
        );
      default:
        return previewImage; // Fallback to the product-specific preview image
    }
  }

  if (type === 'product') {
    return {
      mobile: productImageMobile,
      tablet: productImageTablet,
      desktop: productImageDesktop,
    };
  }

  const galleryImages = getGalleryImagePaths(basePath, deviceTypes);
  return {
    mobile: galleryImages.mobile[0],
    tablet: galleryImages.tablet[0],
    desktop: galleryImages.desktop[0],
  };
};

export default getImageSources;
