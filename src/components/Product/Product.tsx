import React from "react";
import { Product } from "../../types";
import useCart from "../../hooks/useCart";

/**
 * ProductProps는 Product 컴포넌트에 전달되는 props의 타입을 정의합니다.
 */
interface ProductProps {
  product: Product;
}

/**
 * Product 컴포넌트는 개별 상품의 상세 정보를 표시하고, 장바구니에 추가할 수 있는 버튼을 제공합니다.
 */
const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-blue-600 font-bold">${product.price}</p>
        <button onClick={() => addToCart(product)} className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          장바구니에 추가
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
