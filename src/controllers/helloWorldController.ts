import { Request, Response } from 'express';
import { helloWorldService } from '../services/helloWorldService';




export const sayHello = (req: Request, res: Response) => {
  
  helloWorldService.sayHellos()
    .then((data) => {
     
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};


export const helloWorldController = { 
    sayHello
};


