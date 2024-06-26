import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number): string => {
    return price.toFixed(2).replace(/\.00$/, '');
  };

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

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="w-full max-w-md md:absolute md:top-40 md:right-20">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg">
          <button
            onClick={onClose}
            className="absolute text-4xl font-semibold leading-none top-2 right-4 hover:text-gray-600"
          >
            &times;
          </button>
          <div className="flex items-start justify-between px-12 rounded-t pt-14">
            <h3 className="text-2xl font-semibold">Cart ({totalQuantity})</h3>
            <button
              onClick={clearCart}
              className="text-gray-400 underline text-md hover:text-primary"
            >
              Remove all
            </button>
          </div>
          <div className="relative py-10 max-h-[60vh] overflow-y-auto flex w-full px-8">
            {cartItems.length === 0 ? (
              <p className="flex justify-center text-xl">Your cart is empty.</p>
            ) : (
              <ul className="w-full space-y-10">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-24 h-24 rounded-default"
                    />
                    <div className="flex-grow">
                      <h4 className="flex justify-start text-xl font-bold text-secondary-black">
                        {item.shortenedName}
                      </h4>
                      <p className="flex justify-start text-xl font-semibold tracking-wide text-gray-400">
                        ${formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-1 w-28 bg-secondary-darker">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 text-xl rounded-l text-secondary-darkest"
                      >
                        -
                      </button>
                      <span className="px-2 py-1 text-xl font-semibold text-secondary-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 text-xl rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="p-8 rounded-b border-blueGray-200">
            <div className="flex justify-between mb-4">
              <p className="pb-6 text-lg">TOTAL</p>
              <p className="text-2xl font-extrabold text-secondary-black">
                ${formatPrice(total)}
              </p>
            </div>
            <button onClick={handleCheckout} className="w-full uppercase btn">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
