import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();


app.use(express.json());
app.use(
  cors({
    origin: "*", // allow all (safe for demo)
  })
);


app.use("/api/contacts", contactRoutes);

app.get("/health", (req, res) => {
  res.send("Backend running successfully");
});


connectDB();


if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 7000;
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
}


export default app;
