import mongoose from "mongoose";
import dotenv from "dotenv"
import { seedAdmin } from "./middlewares/seedAdmin.js";


dotenv.config();

export const connectDb = async(req, res) => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        seedAdmin()
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error)
      
    }
}