import express from 'express';
import { helloWorldController } from "../controllers/helloWorldController";


const helloWorldRouter = express.Router();

helloWorldRouter
    .route('/hello')
    .get(helloWorldController.sayHello)


export default helloWorldRouter;