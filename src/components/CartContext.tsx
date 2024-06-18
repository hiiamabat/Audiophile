import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (itemId: string) => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const removeFromCart = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.title === item.title,
    );

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.title === item.title) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...item, id: uuidv4(), quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
