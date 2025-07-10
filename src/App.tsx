import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import './App.css';

const App: React.FC = () => {

  return (
    <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
    </BrowserRouter>
  );
}

export default App;