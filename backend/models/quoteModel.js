// models/Quote.js
import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    budget: { type: String },
    message: { type: String,  },
  },
  { timestamps: true }
);

export default mongoose.model("Quote", quoteSchema);