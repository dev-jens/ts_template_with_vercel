import { Request, Response } from 'express';
import { logService } from '../services/logService';


export const insertLog = (req: Request, res: Response) => {

  let log = req.body

  logService.insertLog(log)
    .then((result) => {
      console.log(result)
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });

};

export const fetchLogs = (req: Request, res: Response) => {

  console.log("fetching")
  logService.fetchLogs()

    .then((result) => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });

};


export const logController = {
  fetchLogs,
  insertLog
};


