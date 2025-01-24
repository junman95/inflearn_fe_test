import React from "react";
import { CartItem } from "../../types";
import useCart from "../../hooks/useCart";

/**
 * CartProps는 Cart 컴포넌트에 전달되는 props의 타입을 정의합니다.
 */
interface CartProps {
  items: CartItem[];
}

/**
 * Cart 컴포넌트는 장바구니에 담긴 상품들을 표시하고, 제거하거나 전체를 비울 수 있게 해줍니다.
 */
const Cart: React.FC<CartProps> = ({ items }) => {
  const { removeFromCart, clearCart, total } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">장바구니</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">장바구니가 비어 있습니다.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">수량: {item.quantity}</p>
                  <p className="text-gray-600">가격: ${item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  data-testid={`remove-button-${item.id}`}
                >
                  제거
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold">총 합계: ${total}</p>
            <button onClick={clearCart} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              장바구니 비우기
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
