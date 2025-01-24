import { Product } from "../types";

/**
 * fetchProducts 함수는 상품 데이터를 비동기적으로 가져옵니다.
 * 실제 API 호출 대신 더미 데이터를 반환합니다.
 */
export const fetchProducts = async (): Promise<Product[]> => {
  // 실제 API 호출 대신 더미 데이터 반환
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Product A",
          price: 100,
          category: "Category 1",
          description: "Description for Product A",
          image: "/images/product-a.jpg",
        },
        {
          id: 2,
          name: "Product B",
          price: 200,
          category: "Category 2",
          description: "Description for Product B",
          image: "/images/product-b.jpg",
        },
        {
          id: 3,
          name: "Product C",
          price: 150,
          category: "Category 1",
          description: "Description for Product C",
          image: "/images/product-c.jpg",
        },
        {
          id: 4,
          name: "Product D",
          price: 250,
          category: "Category 3",
          description: "Description for Product D",
          image: "/images/product-d.jpg",
        },
        // 추가 제품...
      ]);
    }, 500); // 500ms 지연 후 데이터 반환
  });
};
