// const express = require("express");
import express from "express";
import "dotenv/config";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5001

// middleware
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json()); // this middleware will parse the JSON bodies: allowing you to get access to body using req.body
app.use(rateLimiter);

app.use("/api/notes",  notesRoutes);

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log("Server started on PORT:", PORT));
  } catch (err) {
    console.warn("Server failed to start", err);
    process.exit(1);
  }
})();
