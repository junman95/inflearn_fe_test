import React from "react";
import { Product as ProductType } from "../../types";
import Product from "../Product/Product";

/**
 * ProductListProps는 ProductList 컴포넌트에 전달되는 props의 타입을 정의합니다.
 */
interface ProductListProps {
  products: ProductType[];
}

/**
 * ProductList 컴포넌트는 전달된 상품 목록을 그리드 형태로 표시합니다.
 */
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
