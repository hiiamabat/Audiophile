import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import CheckmarkIcon from '../assets/images/shared/mobile/check.png';

const formatPrice = (price: number): string => {
  return price.toFixed(2).replace(/\.00$/, '');
};

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping + vat;

  const firstItem = cartItems[0];
  const remainingItemsCount = cartItems.length - 1;

  const handleBackToHome = () => {
    clearCart();
    onClose();
    navigate('/');
  };

  return (
    <div
      className="confirmation-modal"
      role="dialog"
      aria-labelledby="confirmation-dialog-title"
      aria-describedby="confirmation-dialog-description"
      aria-modal="true"
    >
      <div className="modal-container">
        <img
          src={CheckmarkIcon}
          alt="Order confirmation checkmark"
          className="mb-6"
        />
        <div className="thank-you-container">
          <h2 id="confirmation-dialog-title" className="thank-you-text">
            Thank you <br /> for your order
          </h2>
          <p
            id="confirmation-dialog-description"
            className="thank-you-description"
          >
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="summary-container">
          <div className="summary-details">
            <div className="first-item">
              <img
                src={firstItem.image}
                alt={firstItem.title}
                className="summary-items-image"
              />
              <div className="item-name-price">
                <p className="summary-items-name">{firstItem.shortenedName}</p>
                <p className="summary-items-price">
                  ${formatPrice(firstItem.price)}
                </p>
              </div>
              <p className="summary-items-quantity">x {firstItem.quantity}</p>
            </div>
            <div className="">
              <div className="summary-rest-of-items" />
              {remainingItemsCount > 0 && (
                <p className="summary-rest-of-items-p">
                  and {remainingItemsCount} other item
                  {remainingItemsCount > 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>

          <div className="grand-total-container">
            <div className="grand-total-bg">
              <div className="grand-total-content">
                <p className="grand-total-label">Grand Total</p>
                <p className="grand-total-amount">
                  $ {formatPrice(grandTotal)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleBackToHome}
          className="w-full btn"
          aria-label="Back to Home"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
