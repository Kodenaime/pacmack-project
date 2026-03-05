import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import communityRoutes from "./routes/communityRoutes";
import contactRoutes from "./routes/contactRoutes";
import exportRoutes from "./routes/exportRoutes";

connectDB();

const app = express();

const allowedOrigins = {
  origin: [
    "https://pacmack.com",
    "https://www.pacmack.com",
    "http://localhost:5173",
    "http://localhost:5174",
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(allowedOrigins));
app.use(express.json());

app.use("/api/community", communityRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/export", exportRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);