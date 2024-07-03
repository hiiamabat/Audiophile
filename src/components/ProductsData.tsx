interface Products {
  id: number;
  slug: string;
  name: string;
  shortenedName: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    tabletPreview: string;
  };
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

const generateImagePath = (
  productSlug: string,
  device: string,
  isPreview: boolean = false,
) => {
  const previewSuffix = isPreview ? '-preview' : '';
  return new URL(
    `../assets/images/products/${productSlug}/${device}/product${previewSuffix}.jpg`,
    import.meta.url,
  ).href;
};

const generateGalleryPath = (
  productSlug: string,
  device: string,
  index: string,
) => {
  return new URL(
    `../assets/images/products/${productSlug}/${device}/gallery/${index}.jpg`,
    import.meta.url,
  ).href;
};

const generateSuggestionImagePath = (productSlug: string, device: string) => {
  return new URL(
    `../assets/images/shared/${device}/${productSlug}.jpg`,
    import.meta.url,
  ).href;
};

const Products = [
  {
    id: 1,
    name: 'XX99 MARK II HEADPHONES',
    shortenedName: 'XX99 MK II',
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
      tabletPreview: generateImagePath(
        'xx99-mark-two-headphones',
        'tablet',
        true,
      ),
    },
    newProduct: true,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: 2999,
    category: 'headphones',
    features:
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
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
        category: 'headphones',
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
        category: 'headphones',
        image: {
          mobile: generateSuggestionImagePath('xx59-headphones', 'mobile'),
          tablet: generateSuggestionImagePath('xx59-headphones', 'tablet'),
          desktop: generateSuggestionImagePath('xx59-headphones', 'desktop'),
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        category: 'speakers',
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
    shortenedName: 'XX99 MARK I',
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
      tabletPreview: generateImagePath(
        'xx99-mark-one-headphones',
        'tablet',
        true,
      ),
    },
    newProduct: false,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    price: 1750,
    category: 'headphones',
    features:
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.',
    includes: [
      {
        quantity: 1,
        item: 'Headphone Unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User Manual',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
    ],
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
        category: 'headphones',
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
        category: 'headphones',
        image: {
          mobile: generateSuggestionImagePath('xx59-headphones', 'mobile'),
          tablet: generateSuggestionImagePath('xx59-headphones', 'tablet'),
          desktop: generateSuggestionImagePath('xx59-headphones', 'desktop'),
        },
      },
      {
        slug: 'zx7-speaker',
        name: 'ZX7 Speaker',
        category: 'speakers',
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
    shortenedName: 'XX59',
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
      tabletPreview: generateImagePath('xx59-headphones', 'tablet', true),
    },
    newProduct: false,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    price: 899,
    category: 'headphones',
    features:
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    includes: [
      {
        quantity: 1,
        item: 'Headphone Unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User Manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
    ],
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
        category: 'headphones',
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
        category: 'headphones',
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
        category: 'speakers',
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
    shortenedName: 'ZX9',
    slug: 'zx9-speaker',
    image: {
      mobile: generateImagePath('zx9-speaker', 'mobile'),
      tablet: generateImagePath('zx9-speaker', 'tablet'),
      desktop: generateImagePath(
        'zx9-speaker',

        'desktop',
      ),
      tabletPreview: generateImagePath('zx9-speaker', 'tablet', true),
    },
    newProduct: true,
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    price: 4500,
    category: 'speakers',
    features:
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
    includes: [
      {
        quantity: 1,
        item: 'Speaker unit',
      },
      {
        quantity: 2,
        item: 'Speaker cloth panel',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
      {
        quantity: 1,
        item: '10m optical cable',
      },
    ],
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
        category: 'speakers',
        image: {
          mobile: generateSuggestionImagePath('zx7-speaker', 'mobile'),
          tablet: generateSuggestionImagePath('zx7-speaker', 'tablet'),
          desktop: generateSuggestionImagePath('zx7-speaker', 'desktop'),
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I Headphones',
        category: 'headphones',
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
        category: 'headphones',
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
    shortenedName: 'ZX7',
    slug: 'zx7-speaker',
    image: {
      mobile: generateImagePath('zx7-speaker', 'mobile'),
      tablet: generateImagePath('zx7-speaker', 'tablet'),
      desktop: generateImagePath(
        'zx7-speaker',

        'desktop',
      ),
      tabletPreview: generateImagePath('zx7-speaker', 'tablet', true),
    },
    newProduct: false,
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    price: 3500,
    category: 'speakers',
    features:
      'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
    includes: [
      {
        quantity: 2,
        item: 'Speaker unit',
      },
      {
        quantity: 2,
        item: 'Speaker cloth panel',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 7.5m audio cable',
      },
      {
        quantity: 1,
        item: '7.5m optical cable',
      },
    ],
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
        category: 'speakers',
        image: {
          mobile: generateSuggestionImagePath('zx9-speaker', 'mobile'),
          tablet: generateSuggestionImagePath('zx9-speaker', 'tablet'),
          desktop: generateSuggestionImagePath('zx9-speaker', 'desktop'),
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I Headphones',
        category: 'headphones',
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
        category: 'headphones',
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
    shortenedName: 'YX1',
    slug: 'yx1-earphones',
    image: {
      mobile: generateImagePath(
        'yx1-earphones',

        'mobile',
      ),
      tablet: generateImagePath(
        'yx1-earphones',

        'tablet',
      ),
      desktop: generateImagePath(
        'yx1-earphones',

        'desktop',
      ),
      tabletPreview: generateImagePath('yx1-earphones', 'tablet', true),
    },
    newProduct: true,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    price: 599,
    category: 'earphones',
    features:
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    includes: [
      {
        quantity: 2,
        item: 'Earphone unit',
      },
      {
        quantity: 6,
        item: 'Multi-size Earplugs',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: 'USB-C charging cable',
      },
      {
        quantity: 1,
        item: 'Travel Pouch',
      },
    ],
    gallery: [
      {
        mobile: generateGalleryPath('yx1-earphones', 'mobile', '1'),
        tablet: generateGalleryPath('yx1-earphones', 'tablet', '1'),
        desktop: generateGalleryPath('yx1-earphones', 'desktop', '1'),
      },
      {
        mobile: generateGalleryPath('yx1-earphones', 'mobile', '2'),
        tablet: generateGalleryPath('yx1-earphones', 'tablet', '2'),
        desktop: generateGalleryPath('yx1-earphones', 'desktop', '2'),
      },
      {
        mobile: generateGalleryPath('yx1-earphones', 'mobile', '3'),
        tablet: generateGalleryPath('yx1-earphones', 'tablet', '3'),
        desktop: generateGalleryPath('yx1-earphones', 'desktop', '3'),
      },
    ],
    suggestions: [
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I Headphones',
        category: 'headphones',
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
        category: 'headphones',
        image: {
          mobile: generateSuggestionImagePath('xx59-headphones', 'mobile'),
          tablet: generateSuggestionImagePath('xx59-headphones', 'tablet'),
          desktop: generateSuggestionImagePath('xx59-headphones', 'desktop'),
        },
      },
      {
        slug: 'zx7-speaker',
        name: 'ZX7 Speaker',
        category: 'speakers',
        image: {
          mobile: generateSuggestionImagePath('zx7-speaker', 'mobile'),
          tablet: generateSuggestionImagePath('zx7-speaker', 'tablet'),
          desktop: generateSuggestionImagePath('zx7-speaker', 'desktop'),
        },
      },
    ],
  },
];

export default Products;
