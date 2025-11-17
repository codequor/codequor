// src/admin/pages/QuotesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReplyModal from "./ReplyModal";

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const token = localStorage.getItem("adminToken");
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/quote`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setQuotes(res.data);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Quote Requests</h2>
      <div className="grid gap-4">
        {quotes.map((q) => (
          <div key={q._id} className="bg-white p-6 rounded-xl shadow">
            <p><strong>{q.name}</strong> ({q.email})</p>
            <p className="text-sm text-gray-600">Service: {q.service}</p>
            <p className="text-sm">Budget: {q.budget || "N/A"}</p>
            <button
              onClick={() => setSelected(q)}
              className="mt-3 bg-[#1065c0] text-[#fff] px-4 py-2 rounded-lg hover:bg-[#0e55a0]"
            >
              Reply
            </button>
          </div>
        ))}
      </div>
      {selected && <ReplyModal quote={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default QuotesPage;