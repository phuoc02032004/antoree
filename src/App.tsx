import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import './App.css';
import { Toaster } from "@/components/ui/sonner"

const App: React.FC = () => {

  return (
    <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
          <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;