import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;