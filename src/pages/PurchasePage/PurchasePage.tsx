import React from "react";
import Cart from "../../components/Cart/Cart";
import useCart from "../../hooks/useCart";

/**
 * PurchasePage 컴포넌트는 장바구니의 내용을 확인하고, 구매를 진행할 수 있게 해줍니다.
 */
const PurchasePage: React.FC = () => {
  const { cartItems, total, clearCart } = useCart();

  /**
   * handlePurchase 함수는 구매 로직을 처리합니다.
   * 실제 애플리케이션에서는 API 호출 등을 통해 구매를 처리해야 합니다.
   * 여기서는 간단하게 알림창을 표시하고 장바구니를 비웁니다.
   */
  const handlePurchase = () => {
    // 구매 로직 (예: API 호출)
    alert("구매가 완료되었습니다!");
    clearCart();
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">구매 페이지</h1>
      <Cart items={cartItems} />
      {cartItems.length > 0 && (
        <div className="flex justify-end mt-4">
          <button onClick={handlePurchase} className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            구매하기
          </button>
        </div>
      )}
    </div>
  );
};

export default PurchasePage;
