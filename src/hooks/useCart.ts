import { useCartContext } from "../contexts/CartContext";
import { CartItem, Product } from "../types";

/**
 * useCart 훅은 장바구니 상태와 관련된 기능을 제공합니다.
 */
const useCart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCartContext();

  /**
   * total은 장바구니에 담긴 모든 상품의 총 가격을 계산합니다.
   */
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { cartItems, addToCart, removeFromCart, clearCart, total };
};

export default useCart;
