import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailsPage from "@/pages/ProductDetailsPage";

import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import OrderSuccessPage from "@/pages/OrderSuccessPage";
import DashboardPage from "@/pages/DashboardPage";
import ProfilePage from "@/pages/ProfilePage";
import OrdersPage from "@/pages/OrdersPage";
import OrderDetailsPage from "@/pages/OrderDetailsPage";

import HomePage from "@/pages/HomePage";
import MarketplacePage from "@/pages/MarketplacePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/ResetPasswordPage";
import VerifyEmailPage from "@/pages/VerifyEmailPage";
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
          <Route
  path="/forgot-password"
  element={<ForgotPasswordPage />}
/>
<Route
  path="/reset-password"
  element={<ResetPasswordPage />}
/><Route
  path="/verify-email"
  element={<VerifyEmailPage />}
/>
<Route
  path="/dashboard"
  element={<DashboardPage />}
/>
<Route
  path="/profile"
  element={<ProfilePage />}
/>
<Route
  path="/orders"
  element={<OrdersPage />}
/>
<Route
  path="/orders/:id"
  element={<OrderDetailsPage />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;