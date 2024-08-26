import { createClient } from '@supabase/supabase-js';
import { defaultConfig } from '../config/default.config';

const supabaseUrl = defaultConfig.PUBLIC_SUPABASE_URL;
const supabaseKey = defaultConfig.PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
