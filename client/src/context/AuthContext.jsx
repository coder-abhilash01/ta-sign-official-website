import React, { createContext, useContext, useState, useEffect } from "react";
import API from "../../api/axios";
import { toast } from 'sonner';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // App load hone par Cookie Verify karein
  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const response = await API.get("/api/auth/admin/me"); // Backend status route
        if (response.data.success) {
          setIsAdminLoggedIn(true);
        }
      } catch (error) {
        setIsAdminLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await API.post("/api/auth/login", { email, password });
      if (response.data.success) {
        toast.success("Login successful!");
        setIsAdminLoggedIn(true);
        return { success: true };

      }
    } catch (error) {
        toast.error("Login failed");
        console.log("Login failed:", error.response?.data?.message);
      return {
        success: false,
        message: error.response?.data.message ||error.response?.data.error || "Login failed",
      };
    }
  };

  const logout = async () => {
    try {
      await API.post("/admin/logout");
    } finally {
      setIsAdminLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAdminLoggedIn, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);