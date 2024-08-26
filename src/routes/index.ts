import express from 'express';
import helloWorldRouter from './helloworldRoutes';

const router = express.Router();


router.use('/', helloWorldRouter);

export default router;

