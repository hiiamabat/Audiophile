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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg p-6 mx-auto bg-white rounded-lg shadow-xl">
        <img src={CheckmarkIcon} alt="Checkmark" className="mb-6" />
        <div className="text-left">
          <h2 className="mb-4 text-3xl font-bold uppercase text-secondary-black">
            Thank you <br /> for your order
          </h2>
          <p className="mb-6 text-gray-600">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="md:flex md:w-full">
          <div className="p-4 bg-gray-100 rounded-default md:w-1/2 md:h-32">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <img
                  src={firstItem.image}
                  alt={firstItem.title}
                  className="w-16 h-16"
                />
                <div>
                  <p className="font-bold text-secondary-black">
                    {firstItem.shortenedName}
                  </p>
                  <p className="text-sm font-semibold tracking-widest text-left text-gray-600">
                    ${formatPrice(firstItem.price)}
                  </p>
                </div>
              </div>
              <p className="font-semibold">x {firstItem.quantity}</p>
            </div>
            <div className="border-t border-gray-300" />
            {remainingItemsCount > 0 && (
              <p className="p-3 text-sm text-gray-600">
                and {remainingItemsCount} other item
                {remainingItemsCount > 1 ? 's' : ''}
              </p>
            )}
          </div>

          <div className="md:w-1/2">
            <div className="p-4 mb-6 text-white bg-black rounded-b-default md:rounded-r-default md:rounded-bl-none md:h-32 md:flex md:content-center">
              <div className="flex flex-col flex-wrap content-start justify-start">
                <p className="m-2 uppercase text-[#828282]">Grand Total</p>
                <p className="text-xl font-bold">$ {formatPrice(grandTotal)}</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleBackToHome} className="w-full uppercase btn">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
