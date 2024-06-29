import React, { useEffect, createContext, useState, useContext } from 'react';

// Types
type CartItem = {
  id: string;
  title: string;
  shortenedName: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity: number }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

// Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper functions
const getInitialCart = (): CartItem[] => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

// Provider Component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCart);

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  const addToCart = (
    newItem: Omit<CartItem, 'quantity'> & { quantity: number },
  ) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        );
      }
      return [...prevItems, newItem as CartItem];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => setCartItems([]);

  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
