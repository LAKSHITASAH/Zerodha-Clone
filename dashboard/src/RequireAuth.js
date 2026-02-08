import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "./auth";

export default function RequireAuth({ children }) {
  const loc = useLocation();
  if (!isLoggedIn()) return <Navigate to="/login" replace state={{ from: loc }} />;
  return children;
}
