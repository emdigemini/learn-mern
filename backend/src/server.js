// const express = require("express");
import express from "express";
import "dotenv/config";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve();

// middleware
if(process.env.NODE_ENV !== "production"){
  app.use(cors({
    origin: "http://localhost:5173",
  }));
};
app.use(express.json()); // this middleware will parse the JSON bodies: allowing you to get access to body using req.body
app.use(rateLimiter);

app.use("/api/notes",  notesRoutes);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*path", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
  })
}

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log("Server started on PORT:", PORT));
  } catch (err) {
    console.warn("Server failed to start", err);
    process.exit(1);
  }
})();
