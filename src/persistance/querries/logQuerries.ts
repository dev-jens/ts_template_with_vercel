import supabase from "../../client/supabaseClient";
import { httpResponse } from "../../interfaces/httpResponse";
import { log } from "../../interfaces/log";

const fetchLogs = async (): Promise<log[] | httpResponse> => {
  const { data, error } = await supabase
    .from('td_log')
    .select('*');
    
  if (error) {
    console.error('Error fetching logs:', error.message);
    return { 
      status: 500, 
      statusText: `'Error fetching log: ${error.message}`,
      object: error
    };
  }

  return data;
};

const insertLog = async (log: log): Promise<httpResponse> => {
  const { data, error } = await supabase
    .from('td_log')
    .insert(log)
    .select()

 
  if (error) {
    console.error('Error inserting log:', error.message);
    return { 
      status: 500, 
      statusText: `'Error inserting log: ${error.message}`,
      object: error
    };
  }

  return { 
    status: 201, 
    statusText: 'Created',
    object: data
  };
};


const updateLog = async (log: log): Promise<log[] | httpResponse> => {

  const { data, error } = await supabase
    .from('td_log')
    .update(log)
    .eq('id', log.id)
  

  if (error) {
    console.error('Error updating log:', error.message);
    
    return { 
      status: 500, 
      statusText: `'Error updating log: ${error.message}`,
      object: error 
    };
  }

  return { 
    status: 201, 
    statusText: 'Created',
    object: data
  };
};


export const logQuerries = {
    fetchLogs,
    insertLog,
    updateLog
};