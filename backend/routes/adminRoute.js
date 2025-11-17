// routes/auth.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";
import { protect } from "../middlewares/protect.js";


const router = express.Router();

// POST: Admin Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Login successful",
      token,
      admin: { email: admin.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});




// routes/contact.js
router.post("/reply", protect, async (req, res) => {
  const { email, message } = req.body;
  const html = `
    <h3>Reply from CodeQuor</h3>
    <p>${message}</p>
    <hr>
    <small>CodeQuor Team</small>
  `;
  await sendEmail(email, "We've Replied to Your Message", html);
  res.json({ success: true });
});


export default router;