import express from 'express';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv';
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app =express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api', contactRoutes);

app.get('/health',(req,res)=>{
   res.send("<h2>Backend running Successfully</h2>")
})

app.listen(PORT,()=>{
    console.log("server running port is", PORT);
    connectDB();
})