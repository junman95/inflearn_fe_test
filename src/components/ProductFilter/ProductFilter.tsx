import React from "react";

/**
 * ProductFilterProps는 ProductFilter 컴포넌트에 전달되는 props의 타입을 정의합니다.
 */
interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

/**
 * ProductFilter 컴포넌트는 카테고리 선택을 통해 상품 목록을 필터링할 수 있게 해줍니다.
 */
const ProductFilter: React.FC<ProductFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center my-4">
      <select
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        data-testid="category-select"
      >
        <option value="">모두 보기</option>
        {categories.map((category) => (
          <option key={category} value={category} data-testid={`category-${category}`}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
