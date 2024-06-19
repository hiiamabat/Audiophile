import previewImage from '../../categories/speakers/preview.jpg';
import getGalleryImagePaths from '../../../../utils/getGalleryImagePaths';

const deviceTypes = ['mobile', 'tablet', 'desktop'];
const basePath = '.';

export const productImageMobile = './mobile/product.jpg';
export const productImageTablet = './tablet/product.jpg';
export const productImageDesktop = './desktop/product.jpg';
export { previewImage };

const galleryImages = getGalleryImagePaths(basePath, deviceTypes);
export const galleryImagesMobile = galleryImages.mobile;
export const galleryImagesTablet = galleryImages.tablet;
export const galleryImagesDesktop = galleryImages.desktop;
