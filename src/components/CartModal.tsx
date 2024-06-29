import React, { useMemo } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CartItemType {
  id: string;
  title: string;
  shortenedName: string;
  price: number;
  quantity: number;
  image: string;
}

const useFormatPrice = () => {
  return (price: number): string => {
    return price.toFixed(2).replace(/\.00$/, '');
  };
};

const CartItem: React.FC<{
  item: CartItemType;
  onQuantityChange: (id: string, newQuantity: number) => void;
}> = ({ item, onQuantityChange }) => {
  const formatPrice = useFormatPrice();

  return (
    <li className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.shortenedName}</h4>
        <p className="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      <div className="cart-item-quantity">
        <button
          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
          className="quantity-button"
          aria-label={`Decrease quantity of ${item.shortenedName}`}
        >
          -
        </button>
        <span className="quantity-display">{item.quantity}</span>
        <button
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
          className="quantity-button"
          aria-label={`Increase quantity of ${item.shortenedName}`}
        >
          +
        </button>
      </div>
    </li>
  );
};

const CartSummary: React.FC<{ total: number; onCheckout: () => void }> = ({
  total,
  onCheckout,
}) => {
  const formatPrice = useFormatPrice();

  return (
    <div className="cart-summary">
      <div className="total-container">
        <p className="total-label">TOTAL</p>
        <p className="total-amount">${formatPrice(total)}</p>
      </div>
      <button onClick={onCheckout} className="checkout-button">
        Checkout
      </button>
    </div>
  );
};

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const { total, totalQuantity } = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => ({
        total: acc.total + item.price * item.quantity,
        totalQuantity: acc.totalQuantity + item.quantity,
      }),
      { total: 0, totalQuantity: 0 },
    );
  }, [cartItems]);

  if (!isOpen) return null;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div
      className="cart-modal-overlay"
      onClick={handleBackgroundClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-modal-title"
    >
      <div className="cart-modal-container">
        <div className="cart-modal">
          <button
            onClick={onClose}
            className="close-button"
            aria-label="Close cart"
          >
            &times;
          </button>
          <div className="cart-header">
            <h3 id="cart-modal-title" className="cart-title">
              Cart ({totalQuantity})
            </h3>
            <button onClick={clearCart} className="remove-all-button">
              Remove all
            </button>
          </div>
          <div className="cart-items-container">
            {cartItems.length === 0 ? (
              <p className="empty-cart-message">Your cart is empty.</p>
            ) : (
              <ul className="cart-items-list">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                  />
                ))}
              </ul>
            )}
          </div>
          <CartSummary total={total} onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
