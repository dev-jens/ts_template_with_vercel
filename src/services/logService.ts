import { log } from "../interfaces/log";
import { logQuerries } from "../persistance/querries/logQuerries";


const fetchLogs = () => {
    return logQuerries.fetchLogs( );

};

const insertLog = (log:log) => {

    return logQuerries.insertLog (
        {  
            date: log.date,
            description: log.description, 
        }
    );

};

export const logService = {
    fetchLogs,
    insertLog
};