import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import dotenv from 'dotenv';
import eventsrouter from './routes/eventRoutes';
import analyticsrouter from './routes/analyticsRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/events",eventsrouter);
app.use("/api/analytics",analyticsrouter);

const PORT=process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

const startServer = async () =>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");

        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`);
            
        });
        
    } catch(error){
        console.error("MongoDB connection error:",error);
    }
}

startServer();



