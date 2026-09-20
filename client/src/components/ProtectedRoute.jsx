import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { isAdminLoggedIn, loading } = useAuth();

  // Initial Auth Check / Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
        <p>Checking Authentication...</p>
      </div>
    );
  }

  // Admin logged in hai toh child routes render honge, nahi toh Login page par redirect
  return isAdminLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace />;
}