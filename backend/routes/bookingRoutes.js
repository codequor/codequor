// routes/bookings.js
import express from "express";
import Booking from "../models/bookingModel.js";
import { protect } from "../middlewares/protect.js";
const router = express.Router();

// POST: Create booking (public)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, date, message } = req.body;

    if (!name || !email || !phone || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = await Booking.create({ name, email, phone, date, message });
    res.status(201).json({ message: "Booking saved!", booking });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


// routes/quote.js
router.post("/postquote", async (req, res) => {
  const { name, email, phone, service, budget, message } = req.body;
  // Save or email
  console.log("Quote Request:", { name, email, phone, service, budget, message });
  res.json({ success: true });
});

// GET: All bookings (admin only)
router.get("/", protect, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;