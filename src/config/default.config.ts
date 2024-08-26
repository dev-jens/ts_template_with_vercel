import dotenv from 'dotenv';
dotenv.config();

export const defaultConfig = {
  PORT: process.env.PORT,
  PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY
};

