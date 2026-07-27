import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailsPage from "@/pages/ProductDetailsPage";

import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import OrderSuccessPage from "@/pages/OrderSuccessPage";

import HomePage from "@/pages/HomePage";
import MarketplacePage from "@/pages/MarketplacePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import NotFoundPage from "@/pages/NotFoundPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/products/:id"element={<ProductDetailsPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
        <Route path="/order-success" element={<OrderSuccessPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;