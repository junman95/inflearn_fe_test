import { rest } from "msw";
import { Product } from "../types";

const products: Product[] = [
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
  // 추가 제품...
];

/**
 * handlers는 MSW에서 사용할 API 요청 핸들러들을 정의합니다.
 */
export const handlers = [
  // GET /api/products 요청을 처리합니다.
  rest.get("/api/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),

  // 추가적인 API 요청 핸들러를 여기에 정의할 수 있습니다.
];
