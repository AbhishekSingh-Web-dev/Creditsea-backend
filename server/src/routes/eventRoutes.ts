import express from 'express';
import { createEvents } from '../controllers/eventController';

const eventsrouter = express.Router();

eventsrouter.post("/",createEvents);

export default eventsrouter;