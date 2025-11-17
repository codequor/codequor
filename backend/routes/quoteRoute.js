// routes/quote.js
import express from "express";
import Quote from "../models/quoteModel.js";
import sendEmail from "../middlewares/sendEmail.js";
import { protect } from "../middlewares/protect.js";
const router = express.Router();

// POST: Submit Quote
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const quote = await Quote.create({ name, email, phone, service, budget, message });

    // === ADMIN EMAILS (3 recipients) ===
    const adminRecipients = [
      process.env.EMAIL_USER,
      "webmasterjdd@gmail.com",
      "Ademolawaliyu1@gmail.com"
    ].filter(Boolean).join(", ");

    const adminHtml = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
      <p><strong>Message:</strong> ${message}</p>
      <hr>
      <small>Submitted on: ${new Date().toLocaleString()}</small>
    `;

    await sendEmail(adminRecipients, "New Quote Request - CodeQuor", adminHtml);

    // === USER CONFIRMATION ===
    const userHtml = `
      <h3>Thank You, ${name}!</h3>
      <p>We received your quote request for <strong>${service}</strong>.</p>
      <p>We'll review and send you a detailed quote within 24 hours.</p>
      <p>Have a great day!</p>
      <hr>
      <small>CodeQuor Team</small>
    `;
 try {
     await sendEmail(email, "Your Quote Request Received", userHtml);
 } catch (error) {
    console.log("email sendin error", error)
 }
   

    res.status(201).json({ message: "Quote submitted successfully!", quote });
  } catch (error) {
    console.error("Quote Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET: All Quotes (Admin Only - Add JWT auth later)
router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


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