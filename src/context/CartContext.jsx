import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('urbane_cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart on change
  useEffect(() => {
    localStorage.setItem('urbane_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, color = null) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedColor === color);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedColor === color 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, selectedColor: color }];
    });
  };

  const removeFromCart = (id, color) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedColor === color)));
  };

  const updateQuantity = (id, color, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, color);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id && item.selectedColor === color ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
