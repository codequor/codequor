// seed/admin.js
import bcrypt from "bcryptjs";
import Admin from "../models/adminModel.js";


export const seedAdmin = async () => {
  try {
    const existing = await Admin.findOne({ email: "codequor@gmail.com" });
    if (existing) return;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("codequor3216549870", salt);

    await Admin.create({
      email: "codequor@gmail.com",
      password: hashedPassword,
    });

    console.log("Admin created: codequor@gmail.com");
  } catch (error) {
    console.log("Seed error:", error.message);
  }
};