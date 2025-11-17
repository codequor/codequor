// routes/contact.js
import express from "express";
import sendEmail from "../middlewares/sendEmail.js";
import Contact from "../models/contactModel.js";


const router = express.Router();

// POST: Contact Message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Save to DB
    const contact = await Contact.create({ name, email, message });

    // === ADMIN EMAILS (3 recipients) ===
    const adminRecipients = [
      process.env.EMAIL_USER,
      "webmasterjdd@gmail.com",
      "Ademolawaliyu1@gmail.com"
    ].filter(Boolean).join(", ");

    const adminHtml = `
      <h2>New Contact Message</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Message:</strong></p>
      <blockquote>${message}</blockquote>
      <hr>
      <small>Received: ${new Date().toLocaleString()}</small>
    `;

    await sendEmail(adminRecipients, "New Contact Form Message", adminHtml);

    // === USER CONFIRMATION ===
    const userHtml = `
      <h3>Hi ${name},</h3>
      <p>Thanks for reaching out! We’ve received your message and will reply within 24 hours.</p>
      <p>Best regards,<br><strong>CodeQuor Team</strong></p>
    `;

    await sendEmail(email, "We Received Your Message", userHtml);

    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET: All Contacts (Admin Only)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;