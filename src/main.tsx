import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";

// // 개발 환경에서만 MSW 워커를 활성화합니다.
// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./mocks/browser");
//   worker.start();
// }

/**
 * React 애플리케이션을 렌더링합니다.
 * CartProvider를 사용하여 장바구니 상태를 전역으로 관리합니다.
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
