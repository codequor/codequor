// src/admin/AdminDashboard.jsx
import React, { useState } from "react";
import DashboardHome from "./Dasboardome";
import QuotesPage from "./QuotePage";
import ContactsPage from "./ContactPage";
import Sidebar from "./Sidebar";
const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <DashboardHome />;
      case "quotes":
        return <QuotesPage />;
      case "contacts":
        return <ContactsPage />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </header>
        <main className="p-6">{renderPage()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;