import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Headphones from './components/Headphones';
import Speakers from './components/Speakers';
import Earphones from './components/Earphones';
import NotFound from './components/NotFound';
import ProductDetailPage from './components/ProductDetailPage';
import { CartProvider } from './components/CartContext';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import CheckoutPage from './components/CheckoutPage';

import './App.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Nav />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/headphones/:id" element={<ProductDetailPage />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/speakers/:id" element={<ProductDetailPage />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/earphones/:id" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
