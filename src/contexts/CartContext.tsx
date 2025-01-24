import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, Product } from "../types";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * CartProvider는 자식 컴포넌트들에게 장바구니 상태를 제공합니다.
 */
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  /**
   * addToCart 함수는 상품을 장바구니에 추가합니다.
   * 이미 장바구니에 존재하는 상품인 경우 수량을 증가시킵니다.
   */
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  /**
   * removeFromCart 함수는 상품을 장바구니에서 제거합니다.
   * 수량이 1보다 큰 경우 수량을 감소시키고, 그렇지 않으면 상품을 완전히 제거합니다.
   */
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0)
    );
  };

  /**
   * clearCart 함수는 장바구니를 비웁니다.
   */
  const clearCart = () => {
    setCartItems([]);
  };

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};

/**
 * useCartContext 훅은 CartContext를 사용할 수 있게 해줍니다.
 * CartProvider 내부에서만 사용할 수 있습니다.
 */
export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
