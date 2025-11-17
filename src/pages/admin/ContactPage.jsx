// src/admin/pages/ContactsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReplyModal from "./ReplyModal";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const token = localStorage.getItem("adminToken");
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setContacts(res.data);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Contact Messages</h2>
      <div className="grid gap-4">
        {contacts.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No messages yet.</p>
        ) : (
          contacts.map((c) => (
            <div key={c._id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-lg">{c.name}</p>
                  <p className="text-sm text-gray-600">{c.email}</p>
                  <p className="mt-3 text-gray-700 italic">"{c.message}"</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(c.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(c)}
                  className="bg-[#1065c0] text-[#fff] px-5 py-2 rounded-lg hover:bg-[#0e55a0] transition text-sm font-medium"
                >
                  Reply
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Reuse same ReplyModal */}
      {selected && (
        <ReplyModal
          contact={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default ContactsPage;