import BlogManager from "@/components/admin/BlogManager";
import HeroManager from "@/components/admin/HeroManager";
import PopupManager from "@/components/admin/popup/PopupManager";
import UtilityManager from "@/components/admin/UtilityManager";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("utilities");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false); // Mobile drawer closes on click
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col md:flex-row">
      {/* Mobile Top Navigation Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-neutral-900 border-b border-neutral-800">
        <h1 className="text-lg font-bold text-emerald-500">TA SIGN Admin</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-neutral-800 rounded text-neutral-300"
        >
          {sidebarOpen ? "✕ Close" : "☰ Menu"}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-neutral-900 border-r border-neutral-800 p-6 flex flex-col justify-between transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          <h1 className="hidden md:block text-xl font-bold text-emerald-500 mb-8">TA SIGN Admin</h1>
          <nav className="space-y-2 mt-4 md:mt-0">
            <button
              onClick={() => handleTabChange("utilities")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                activeTab === "utilities" ? "bg-emerald-600 text-white" : "text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              📁 Utilities & Drivers
            </button>

            <button
              onClick={() => handleTabChange("hero")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                activeTab === "hero" ? "bg-emerald-600 text-white" : "text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              🖼️ Hero Section
            </button>

            <button
              onClick={() => handleTabChange("blogs")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                activeTab === "blogs" ? "bg-emerald-600 text-white" : "text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              📝 Manage Blogs
            </button>

             <button
              onClick={() => handleTabChange("popup")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                activeTab === "popup" ? "bg-emerald-600 text-white" : "text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              📝 Manage offers
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
          <span className="text-xs text-neutral-400">Admin Session</span>
          <button
            onClick={logout}
            className="text-xs bg-red-600/20 text-red-400 px-3 py-1.5 rounded hover:bg-red-600/30 transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {activeTab === "utilities" && <UtilityManager />}
        {activeTab === "hero" && <HeroManager />}
        {activeTab === "blogs" && <BlogManager />}
        {activeTab === "popup" && <PopupManager />}
      </main>
    </div>
  );
}