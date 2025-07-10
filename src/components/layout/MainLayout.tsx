import React, { type ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; 

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/register', '/cart'];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="relative w-full min-h-screen bg-[#FFEFEC]">
        <div className=" inset-0 min-h-screen">
          {children || <Outlet />}
        </div>
        {!shouldHideFooter && (
          <div>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;