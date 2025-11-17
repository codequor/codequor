// src/admin/components/Sidebar.jsx
import React from "react";
import { FaHome, FaEnvelope, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activePage, setActivePage }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: "home", label: "Dashboard", icon: <FaHome /> },
    { id: "quotes", label: "Quotes", icon: <FaChartBar /> },
    { id: "contacts", label: "Contacts", icon: <FaEnvelope /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="w-64 bg-[#9BAABAFF] text-[#fff] flex flex-col">
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">CodeQuor</h2>
      </div>
      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`w-full flex items-center gap-3 p-4 rounded-lg mb-2 transition ${
              activePage === item.id
                ? "bg-white text-[#1065c0] shadow-lg"
                : "hover:bg-[#0e55a0]"
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="m-4 p-4 bg-red-600 rounded-lg hover:bg-red-700 flex items-center justify-center gap-2"
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;