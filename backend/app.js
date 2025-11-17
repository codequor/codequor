// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes.js"
import authRoutes from "./routes/adminRoute.js"
import { seedAdmin } from "./middlewares/seedAdmin.js";
import morgan from "morgan"
import quoteroutes from "./routes/quoteRoute.js"
import contactroutes from "./routes/contactRoute.js"
import { connectDb } from "./db.js";
dotenv.config();
connectDb()
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.send("Codequor backend is listening on port....");
});
// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactroutes)
app.use("/api/quote", quoteroutes)


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));