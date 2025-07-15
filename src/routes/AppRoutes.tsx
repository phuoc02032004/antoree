import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";
import Courses from "@/pages/Courses";
import Favorites from "@/pages/Favorites";
import ViewedHistory from "@/pages/ViewedHistory";
import Cart from "@/pages/Cart";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/viewed-history" element={<ViewedHistory />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );  
};

export default AppRoutes;