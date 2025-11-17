// src/admin/pages/DashboardHome.jsx
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

const DashboardHome = () => {
  const [stats, setStats] = useState({ quotes: 0, contacts: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("adminToken");
      const [q, c] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/quote`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      setStats({ quotes: q.data.length, contacts: c.data.length });
    };
    fetchStats();
  }, []);

  const data = [
    { name: "Quotes", value: stats.quotes },
    { name: "Contacts", value: stats.contacts },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Overview</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-[#1065c0]">Total Quotes</h3>
          <p className="text-4xl font-bold mt-2">{stats.quotes}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-[#1065c0]">Total Contacts</h3>
          <p className="text-4xl font-bold mt-2">{stats.contacts}</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">Activity Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#1065c0" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardHome;