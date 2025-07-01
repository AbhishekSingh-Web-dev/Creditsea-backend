import { Request, Response } from "express";
import { Event } from "../models/Event";

export const getAnalytics = async (req: Request, res:Response)=>{
    try{
        const data = await Event.aggregate([
            {
                $group: {
                    _id: {$substr: ["$timestamp",0,10]},
                    count:{$sum:1},
                },
            },
            { $sort: {_id:1}}
        ])
        res.json({success:true, data});
    } catch(error){
        console.error("Error fetching analytics:",error);
        res.status(500).json({success: false,error:error}) 
    }
}