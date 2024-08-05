import * as React from 'react';
import { Link } from 'react-router-dom';
import headphonesImage from '../assets/images/shared/mobile/headphones.webp';
import speakersImage from '../assets/images/shared/mobile/speakers.webp';
import earphonesImage from '../assets/images/shared/mobile/earphones.webp';

interface CategoryItem {
  imageSrc: string;
  title: string;
  linkTo: string;
}

const CATEGORY_ITEMS: CategoryItem[] = [
  { imageSrc: headphonesImage, title: 'HEADPHONES', linkTo: '/headphones' },
  { imageSrc: speakersImage, title: 'SPEAKERS', linkTo: '/speakers' },
  { imageSrc: earphonesImage, title: 'EARPHONES', linkTo: '/earphones' },
];

const Card: React.FC<CategoryItem> = ({ imageSrc, title, linkTo }) => (
  <Link to={linkTo} className="category-card" aria-label={`Shop for ${title}`}>
    <div className="card-content">
      <img src={imageSrc} alt={`${title}`} className="category-image" />
      <h2 className="category-title">{title}</h2>
      <div className="shop-link">
        SHOP
        <span className="shop-icon" aria-hidden="true">
          &gt;
        </span>
      </div>
    </div>
  </Link>
);

const CategoryCards: React.FC = () => (
  <section className="category-section" aria-label="Product Categories">
    {CATEGORY_ITEMS.map((item) => (
      <Card key={item.title} {...item} />
    ))}
  </section>
);

export default CategoryCards;
