import express from 'express';
import { getAnalytics } from '../controllers/analyticsController';

const analyticsrouter = express.Router();
analyticsrouter.get("/",getAnalytics);

export default analyticsrouter;