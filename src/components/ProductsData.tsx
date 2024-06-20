interface Products {
  id: number;
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  newProduct: boolean;
  description: string;
  price: number;
  category: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: { mobile: string; tablet: string; desktop: string }[];
  suggestions: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
}

const generateImagePath = (productSlug: string, device: string) => {
  return `../src/assets/images/products/${productSlug}/${device}/product.jpg`;
};

const generateGalleryPath = (
  productSlug: string,
  device: string,
  index: string,
) => {
  return `../src/assets/images/products/${productSlug}/${device}/gallery/${index}.jpg`;
};

const generateSuggestionImagePath = (productSlug: string, device: string) => {
  return `../src/assets/images/shared/${device}/${productSlug}.jpg`;
};

const Products = [
  {
    id: 1,
    name: 'XX99 MARK II HEADPHONES',
    slug: 'xx99-mark-two-headphones',
    image: {
      mobile: generateImagePath(
        'xx99-mark-two-headphones',

        'mobile',
      ),
      tablet: generateImagePath(
        'xx99-mark-two-headphones',

        'tablet',
      ),
      desktop: generateImagePath(
        'xx99-mark-two-headphones',

        'desktop',
      ),
    },
    newProduct: true,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: 2999,
    category: 'headphones',
    features:
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    includes: [
      {
        quantity: 2,
        item: 'Earphone Unit',
      },
      {
        quantity: 6,
        item: 'Multi-size Earplugs',
      },
      {
        quantity: 1,
        item: 'User Manual',
      },
      {
        quantity: 1,
        item: 'USB-C Charging Cable',
      },
      {
        quantity: 1,
        item: 'Travel Pouch',
      },
    ],
    gallery: [
      {
        mobile: generateGalleryPath('xx99-mark-two-headphones', 'mobile', '1'),
        tablet: generateGalleryPath('xx99-mark-two-headphones', 'tablet', '1'),
        desktop: generateGalleryPath(
          'xx99-mark-two-headphones',
          'desktop',
          '1',
        ),
      },
      {
        mobile: generateGalleryPath('xx99-mark-two-headphones', 'mobile', '2'),
        tablet: generateGalleryPath('xx99-mark-two-headphones', 'tablet', '2'),
        desktop: generateGalleryPath(
          'xx99-mark-two-headphones',
          'desktop',
          '2',
        ),
      },
      {
        mobile: generateGalleryPath('xx99-mark-two-headphones', 'mobile', '3'),
        tablet: generateGalleryPath('xx99-mark-two-headphones', 'tablet', '3'),
        desktop: generateGalleryPath(
          'xx99-mark-two-headphones',
          'desktop',
          '3',
        ),
      },
    ],
    suggestions: [
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I Headphones',
        image: {
          mobile: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'mobile',
          ),
          tablet: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'tablet',
          ),
          desktop: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'desktop',
          ),
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59 Headphones',
        image: {
          mobile: generateSuggestionImagePath('xx59-headphones', 'mobile'),
          tablet: generateSuggestionImagePath('xx59-headphones', 'tablet'),
          desktop: generateSuggestionImagePath('xx59-headphones', 'desktop'),
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        image: {
          mobile: generateSuggestionImagePath('zx9-speaker', 'mobile'),
          tablet: generateSuggestionImagePath('zx9-speaker', 'tablet'),
          desktop: generateSuggestionImagePath('zx9-speaker', 'desktop'),
        },
      },
    ],
  },
  {
    id: 2,
    name: 'XX99 MARK I HEADPHONES',
    slug: 'xx99-mark-one-headphones',
    image: {
      mobile: generateImagePath(
        'xx99-mark-one-headphones',

        'mobile',
      ),
      tablet: generateImagePath(
        'xx99-mark-one-headphones',

        'tablet',
      ),
      desktop: generateImagePath(
        'xx99-mark-one-headphones',

        'desktop',
      ),
    },
    newProduct: false,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    price: 1750,
    category: 'headphones',
    gallery: [
      {
        mobile: generateGalleryPath('xx99-mark-one-headphones', 'mobile', '1'),
        tablet: generateGalleryPath('xx99-mark-one-headphones', 'tablet', '1'),
        desktop: generateGalleryPath(
          'xx99-mark-one-headphones',
          'desktop',
          '1',
        ),
      },
      {
        mobile: generateGalleryPath('xx99-mark-one-headphones', 'mobile', '2'),
        tablet: generateGalleryPath('xx99-mark-one-headphones', 'tablet', '2'),
        desktop: generateGalleryPath(
          'xx99-mark-one-headphones',
          'desktop',
          '2',
        ),
      },
      {
        mobile: generateGalleryPath('xx99-mark-one-headphones', 'mobile', '3'),
        tablet: generateGalleryPath('xx99-mark-one-headphones', 'tablet', '3'),
        desktop: generateGalleryPath(
          'xx99-mark-one-headphones',
          'desktop',
          '3',
        ),
      },
    ],
    suggestions: [
      {
        slug: 'xx99-mark-two-headphones',
        name: 'XX99 Mark II Headphones',
        image: {
          mobile: generateSuggestionImagePath(
            'xx99-mark-two-headphones',
            'mobile',
          ),
          tablet: generateSuggestionImagePath(
            'xx99-mark-two-headphones',
            'tablet',
          ),
          desktop: generateSuggestionImagePath(
            'xx99-mark-two-headphones',
            'desktop',
          ),
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59 Headphones',
        image: {
          mobile: generateSuggestionImagePath('xx59-headphones', 'mobile'),
          tablet: generateSuggestionImagePath('xx59-headphones', 'tablet'),
          desktop: generateSuggestionImagePath('xx59-headphones', 'desktop'),
        },
      },
      {
        slug: 'zx7-speaker',
        name: 'ZX7 Speaker',
        image: {
          mobile: generateSuggestionImagePath('zx7-speaker', 'mobile'),
          tablet: generateSuggestionImagePath('zx7-speaker', 'tablet'),
          desktop: generateSuggestionImagePath('zx7-speaker', 'desktop'),
        },
      },
    ],
  },
  {
    id: 3,
    name: 'XX59 HEADPHONES',
    slug: 'xx59-headphones',
    image: {
      mobile: generateImagePath(
        'xx59-headphones',

        'mobile',
      ),
      tablet: generateImagePath(
        'xx59-headphones',

        'tablet',
      ),
      desktop: generateImagePath(
        'xx59-headphones',

        'desktop',
      ),
    },
    newProduct: false,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    price: 899,
    category: 'headphones',
    gallery: [
      {
        mobile: generateGalleryPath('xx59-headphones', 'mobile', '1'),
        tablet: generateGalleryPath('xx59-headphones', 'tablet', '1'),
        desktop: generateGalleryPath('xx59-headphones', 'desktop', '1'),
      },
      {
        mobile: generateGalleryPath('xx59-headphones', 'mobile', '2'),
        tablet: generateGalleryPath('xx59-headphones', 'tablet', '2'),
        desktop: generateGalleryPath('xx59-headphones', 'desktop', '2'),
      },
      {
        mobile: generateGalleryPath('xx59-headphones', 'mobile', '3'),
        tablet: generateGalleryPath('xx59-headphones', 'tablet', '3'),
        desktop: generateGalleryPath('xx59-headphones', 'desktop', '3'),
      },
    ],
    suggestions: [
      {
        slug: 'xx99-mark-two-headphones',
        name: 'XX99 Mark II Headphones',
        image: {
          mobile: generateSuggestionImagePath(
            'xx99-mark-two-headphones',
            'mobile',
          ),
          tablet: generateSuggestionImagePath(
            'xx99-mark-two-headphones',
            'tablet',
          ),
          desktop: generateSuggestionImagePath(
            'xx99-mark-two-headphones',
            'desktop',
          ),
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I Headphones',
        image: {
          mobile: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'mobile',
          ),
          tablet: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'tablet',
          ),
          desktop: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'desktop',
          ),
        },
      },
      {
        slug: 'zx7-speaker',
        name: 'ZX7 Speaker',
        image: {
          mobile: generateSuggestionImagePath('zx7-speaker', 'mobile'),
          tablet: generateSuggestionImagePath('zx7-speaker', 'tablet'),
          desktop: generateSuggestionImagePath('zx7-speaker', 'desktop'),
        },
      },
    ],
  },
  {
    id: 4,
    name: 'ZX9 SPEAKER',
    slug: 'zx9-speaker',
    image: {
      mobile: generateImagePath('zx9-speaker', 'mobile'),
      tablet: generateImagePath('zx9-speaker', 'tablet'),
      desktop: generateImagePath(
        'zx9-speaker',

        'desktop',
      ),
    },
    newProduct: true,
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    price: 4500,
    category: 'speakers',
    gallery: [
      {
        mobile: generateGalleryPath('zx9-speaker', 'mobile', '1'),
        tablet: generateGalleryPath('zx9-speaker', 'tablet', '1'),
        desktop: generateGalleryPath('zx9-speaker', 'desktop', '1'),
      },
      {
        mobile: generateGalleryPath('zx9-speaker', 'mobile', '2'),
        tablet: generateGalleryPath('zx9-speaker', 'tablet', '2'),
        desktop: generateGalleryPath('zx9-speaker', 'desktop', '2'),
      },
      {
        mobile: generateGalleryPath('zx9-speaker', 'mobile', '3'),
        tablet: generateGalleryPath('zx9-speaker', 'tablet', '3'),
        desktop: generateGalleryPath('zx9-speaker', 'desktop', '3'),
      },
    ],
    suggestions: [
      {
        slug: 'zx7-speaker',
        name: 'ZX7 Speaker',
        image: {
          mobile: generateSuggestionImagePath('zx7-speaker', 'mobile'),
          tablet: generateSuggestionImagePath('zx7-speaker', 'tablet'),
          desktop: generateSuggestionImagePath('zx7-speaker', 'desktop'),
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I Headphones',
        image: {
          mobile: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'mobile',
          ),
          tablet: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'tablet',
          ),
          desktop: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'desktop',
          ),
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59 Headphones',
        image: {
          mobile: generateSuggestionImagePath('xx59-headphones', 'mobile'),
          tablet: generateSuggestionImagePath('xx59-headphones', 'tablet'),
          desktop: generateSuggestionImagePath('xx59-headphones', 'desktop'),
        },
      },
    ],
  },
  {
    id: 5,
    name: 'ZX7 SPEAKER',
    slug: 'zx7-speaker',
    image: {
      mobile: generateImagePath('zx7-speaker', 'mobile'),
      tablet: generateImagePath('zx7-speaker', 'tablet'),
      desktop: generateImagePath(
        'zx7-speaker',

        'desktop',
      ),
    },
    newProduct: false,
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    price: 3500,
    category: 'speakers',
    gallery: [
      {
        mobile: generateGalleryPath('zx7-speaker', 'mobile', '1'),
        tablet: generateGalleryPath('zx7-speaker', 'tablet', '1'),
        desktop: generateGalleryPath('zx7-speaker', 'desktop', '1'),
      },
      {
        mobile: generateGalleryPath('zx7-speaker', 'mobile', '2'),
        tablet: generateGalleryPath('zx7-speaker', 'tablet', '2'),
        desktop: generateGalleryPath('zx7-speaker', 'desktop', '2'),
      },
      {
        mobile: generateGalleryPath('zx7-speaker', 'mobile', '3'),
        tablet: generateGalleryPath('zx7-speaker', 'tablet', '3'),
        desktop: generateGalleryPath('zx7-speaker', 'desktop', '3'),
      },
    ],
    suggestions: [
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        image: {
          mobile: generateSuggestionImagePath('zx9-speaker', 'mobile'),
          tablet: generateSuggestionImagePath('zx9-speaker', 'tablet'),
          desktop: generateSuggestionImagePath('zx9-speaker', 'desktop'),
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I Headphones',
        image: {
          mobile: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'mobile',
          ),
          tablet: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'tablet',
          ),
          desktop: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'desktop',
          ),
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59 Headphones',
        image: {
          mobile: generateSuggestionImagePath('xx59-headphones', 'mobile'),
          tablet: generateSuggestionImagePath('xx59-headphones', 'tablet'),
          desktop: generateSuggestionImagePath('xx59-headphones', 'desktop'),
        },
      },
    ],
  },
  {
    id: 6,
    name: 'YX1 WIRELESS EARPHONES',
    slug: 'yx1-wireless-earphones',
    image: {
      mobile: generateImagePath(
        'yx1-wireless-earphones',

        'mobile',
      ),
      tablet: generateImagePath(
        'yx1-wireless-earphones',

        'tablet',
      ),
      desktop: generateImagePath(
        'yx1-wireless-earphones',

        'desktop',
      ),
    },
    newProduct: true,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    price: 599,
    category: 'earphones',
    gallery: [
      {
        mobile: generateGalleryPath('yx1-wireless-earphones', 'mobile', '1'),
        tablet: generateGalleryPath('yx1-wireless-earphones', 'tablet', '1'),
        desktop: generateGalleryPath('yx1-wireless-earphones', 'desktop', '1'),
      },
      {
        mobile: generateGalleryPath('yx1-wireless-earphones', 'mobile', '2'),
        tablet: generateGalleryPath('yx1-wireless-earphones', 'tablet', '2'),
        desktop: generateGalleryPath('yx1-wireless-earphones', 'desktop', '2'),
      },
      {
        mobile: generateGalleryPath('yx1-wireless-earphones', 'mobile', '3'),
        tablet: generateGalleryPath('yx1-wireless-earphones', 'tablet', '3'),
        desktop: generateGalleryPath('yx1-wireless-earphones', 'desktop', '3'),
      },
    ],
    suggestions: [
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I Headphones',
        image: {
          mobile: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'mobile',
          ),
          tablet: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'tablet',
          ),
          desktop: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'desktop',
          ),
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59 Headphones',
        image: {
          mobile: generateSuggestionImagePath('xx59-headphones', 'mobile'),
          tablet: generateSuggestionImagePath('xx59-headphones', 'tablet'),
          desktop: generateSuggestionImagePath('xx59-headphones', 'desktop'),
        },
      },
      {
        slug: 'zx7-speaker',
        name: 'ZX7 Speaker',
        image: {
          mobile: generateSuggestionImagePath('zx7-speaker', 'mobile'),
          tablet: generateSuggestionImagePath('zx7-speaker', 'tablet'),
          desktop: generateSuggestionImagePath('zx7-speaker', 'desktop'),
        },
      },
    ],
  },
  {
    id: 7,
    name: 'ZX9 EARPHONES',
    image: {
      mobile: generateImagePath(
        'zx9-earphones',

        'mobile',
      ),
      tablet: generateImagePath(
        'zx9-earphones',

        'tablet',
      ),
      desktop: generateImagePath(
        'zx9-earphones',

        'desktop',
      ),
    },
    newProduct: false,
    description:
      'Featuring enhanced audio drivers and improved wireless connectivity, the ZX9 earphones are perfect for both personal and professional use. Enjoy superior sound quality with minimal distortion.',
    price: 799,
    category: 'earphones',
    gallery: [
      {
        mobile: generateGalleryPath('zx9-earphones', 'mobile', '1'),
        tablet: generateGalleryPath('zx9-earphones', 'tablet', '1'),
        desktop: generateGalleryPath('zx9-earphones', 'desktop', '1'),
      },
      {
        mobile: generateGalleryPath('zx9-earphones', 'mobile', '2'),
        tablet: generateGalleryPath('zx9-earphones', 'tablet', '2'),
        desktop: generateGalleryPath('zx9-earphones', 'desktop', '2'),
      },
      {
        mobile: generateGalleryPath('zx9-earphones', 'mobile', '3'),
        tablet: generateGalleryPath('zx9-earphones', 'tablet', '3'),
        desktop: generateGalleryPath('zx9-earphones', 'desktop', '3'),
      },
    ],
    suggestions: [
      {
        slug: 'xx99-mark-two-headphones',
        name: 'XX99 Mark II Headphones',
        image: {
          mobile: generateSuggestionImagePath(
            'xx99-mark-two-headphones',
            'mobile',
          ),
          tablet: generateSuggestionImagePath(
            'xx99-mark-two-headphones',
            'tablet',
          ),
          desktop: generateSuggestionImagePath(
            'xx99-mark-two-headphones',
            'desktop',
          ),
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I Headphones',
        image: {
          mobile: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'mobile',
          ),
          tablet: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'tablet',
          ),
          desktop: generateSuggestionImagePath(
            'xx99-mark-one-headphones',
            'desktop',
          ),
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59 Headphones',
        image: {
          mobile: generateSuggestionImagePath('xx59-headphones', 'mobile'),
          tablet: generateSuggestionImagePath('xx59-headphones', 'tablet'),
          desktop: generateSuggestionImagePath('xx59-headphones', 'desktop'),
        },
      },
    ],
  },
];

export default Products;
