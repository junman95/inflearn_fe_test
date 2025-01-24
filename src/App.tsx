import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import PurchasePage from "./pages/PurchasePage/PurchasePage";

/**
 * App 컴포넌트는 애플리케이션의 라우팅과 네비게이션을 설정합니다.
 */
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/purchase" element={<PurchasePage />} />
      </Routes>
    </Router>
  );
};

export default App;
