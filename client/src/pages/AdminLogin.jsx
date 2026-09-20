import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(email, password);
    if (result.success) {
      navigate("/admin/dashboard");
    } else {
      console.log("Login failed:", result);
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-white">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-neutral-200 w-full max-w-md shadow-xl">
        <h2 className="text-blue-600 text-4xl font-bold mb-6 text-center">Admin Login</h2>

        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

        <div className="mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-50 border border-neutral-200 text-black focus:outline-none focus:border-emerald-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-50 border border-neutral-200 text-black focus:outline-none focus:border-emerald-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-emerald-500 rounded font-semibold transition-all"
        >
          Login to Dashboard
        </button>
      </form>
    </div>
  );
}