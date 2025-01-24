import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import { Product } from "../../types";
import { fetchProducts } from "../../api/products";

/**
 * HomePage 컴포넌트는 상품 목록을 표시하고, 카테고리별로 필터링할 수 있게 해줍니다.
 */
const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      const uniqueCategories = Array.from(new Set(data.map((p) => p.category)));
      setCategories(uniqueCategories);
    };

    loadProducts();
  }, []);

  /**
   * handleSelectCategory 함수는 사용자가 선택한 카테고리에 따라 상품 목록을 필터링합니다.
   */
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">상품 목록</h1>
      <ProductFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
