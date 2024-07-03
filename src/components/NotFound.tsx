import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <main className="not-found-page-section">
      <section className="text-center">
        <h1 className="not-found-h1">404</h1>
        <p className="not-found-subtitle">Page Not Found</p>
        <p className="not-found-p">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn">
          Go to Homepage
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
