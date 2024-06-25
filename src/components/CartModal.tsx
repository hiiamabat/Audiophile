import React from 'react';
import { useCart } from './CartContext';

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full max-w-md mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <button
            onClick={onClose}
            className="absolute text-xl font-semibold leading-none top-2 right-2 hover:text-gray-600"
          >
            &times;
          </button>
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
            <h3 className="text-2xl font-semibold">Cart ({totalQuantity})</h3>
            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Remove all
            </button>
          </div>
          <div className="relative flex-auto p-6 max-h-[60vh] overflow-y-auto">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-16 h-16 rounded"
                    />
                    <div className="flex-grow">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p>${item.price}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-2 py-1 bg-gray-100">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="p-6 border-t border-solid rounded-b border-blueGray-200">
            <div className="flex justify-between mb-4">
              <p className="text-lg">Total:</p>
              <p className="text-xl font-semibold">${total.toFixed(2)}</p>
            </div>
            <button className="w-full px-6 py-3 text-sm font-bold text-white uppercase rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
