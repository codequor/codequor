// middleware/auth.js
import jwt from "jsonwebtoken";

import Admin from "../models/adminModel.js";

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    if (!admin) return res.status(401).json({ message: "Not authorized" });

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalid" });
  }
};