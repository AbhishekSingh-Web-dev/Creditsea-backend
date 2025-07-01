import { Request, Response } from "express";
import { Event } from "../models/Event";


export const createEvents = async (req:Request, res:Response)=>{
    try{
        const {events}=req.body;
        if(!Array.isArray(events)){
            return res.status(400).json({success:false, message:"Invalid events format"})
        }
        await Event.insertMany(events);
        res.json({success: true, message: "Events created successfully"})
    }catch(error){
        console.error("Error inserting events:",error);
        res.status(500).json({success: false,error:error})     
    }
}