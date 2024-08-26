import express from 'express';
import { logController } from "../controllers/logController";


const logRouter = express.Router();

logRouter
    .route('/')
    .post(logController.insertLog)
    .get(logController.fetchLogs)



export default logRouter;