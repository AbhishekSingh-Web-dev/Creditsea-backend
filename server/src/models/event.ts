import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    userId:String,
    sessionId: String,
    type:String,
    page:String,
    timestamp: Date,
    metadata: mongoose.Schema.Types.Mixed,
});

export const Event =mongoose.model("Event", eventSchema);