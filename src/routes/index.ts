import express from 'express';
import logRouter from './logRoutes';

const router = express.Router();


router.use('/', logRouter);

export default router;

