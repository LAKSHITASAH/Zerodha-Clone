import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import KiteLayout from "./layout/KiteLayout";
import DashboardPage from "./pages/DashboardPage";
import HoldingsPage from "./pages/HoldingsPage";
import SimplePage from "./pages/SimplePage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/Login";

import Positions from "./components/Positions";
import Funds from "./components/Funds";

import RequireAuth from "./RequireAuth";
import { isLoggedIn } from "./auth";

// ✅ Landing pages (copied from frontend -> dashboard/src/landing_page)
import ProductsPage from "./landing_page/Product/ProductsPage";

import HomePage from "./landing_page/Home/HomePage";
import AboutPage from "./landing_page/About/AboutPage";

import PricingPage from "./landing_page/Pricing/PricingPage";
import SupportPage from "./landing_page/SupportPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<h1 style={{ padding: 40 }}>TEST OK ✅</h1>} />

        {/* ✅ Public landing pages (Zerodha site) */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />

        {/* ✅ Auth pages */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* ✅ Root */}
        <Route
          path="/"
          element={
            isLoggedIn() ? (
              <Navigate to="/app" replace />
            ) : (
              <Navigate to="/home" replace />
            )
          }
        />

        {/* ✅ Protected Kite app */}
        <Route
          path="/app"
          element={
            <RequireAuth>
              <KiteLayout />
            </RequireAuth>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="holdings" element={<HoldingsPage />} />
          <Route path="orders" element={<SimplePage title="Orders" />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<SimplePage title="Apps" />} />
        </Route>

        {/* ✅ Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
