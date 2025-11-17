/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";

const ReplyModal = ({ quote, contact, onClose }) => {
  const [message, setMessage] = useState("");
  const data = quote || contact;
  const endpoint = quote ? "/api/quote/reply" : "/api/contact/reply";

  const sendReply = async () => {
    if (!message.trim()) {
      toast.error("Message cannot be empty");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
        { email: data.email, message },
        { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } }
      );
      toast.success("Reply sent successfully!");
      setMessage("");
      onClose();
    } catch {
      toast.error("Failed to send reply");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-2">
          Reply to <span className="text-[#1065c0]">{data.name}</span>
        </h3>
        <p className="text-sm text-gray-600 mb-4">{data.email}</p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1065c0] resize-none"
          placeholder="Write your reply here..."
        />

        <div className="flex gap-3 mt-5">
          <button
            onClick={sendReply}
            className="flex-1 bg-[#1065c0] text-[#fff] py-3 rounded-xl font-semibold hover:bg-[#0e55a0] transition"
          >
            Send Reply
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReplyModal;