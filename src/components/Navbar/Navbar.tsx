import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

/**
 * Navbar 컴포넌트는 애플리케이션의 상단에 위치하며, 페이지 간의 네비게이션을 제공합니다.
 */
const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-bold text-gray-800">
          쇼핑몰
        </Link>
        <Link to="/" className="text-gray-600 hover:text-gray-800">
          홈
        </Link>
        <Link to="/purchase" className="text-gray-600 hover:text-gray-800">
          구매하기
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Link to="/purchase" className="relative">
          <svg
            className="w-6 h-6 text-gray-600 hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
            />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
