const getGalleryImagePaths = (basePath: string, deviceTypes: string[]) => {
  const galleryImages: Record<string, string[]> = {};

  deviceTypes.forEach((deviceType) => {
    galleryImages[deviceType] = [];

    for (let i = 1; i <= 3; i++) {
      galleryImages[deviceType].push(
        `${basePath}/${deviceType}/gallery/${i}.jpg`,
      );
    }
  });

  return galleryImages;
};

export default getGalleryImagePaths;
