// const express = require("express");
import "dotenv/config";
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

// middleware
app.use(express.json());

app.use("/api/notes",  notesRoutes);

app.listen(PORT, () => {
  console.log('Server started on PORT:', PORT);
});