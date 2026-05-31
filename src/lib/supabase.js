import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cuikxqmhhjqzafkcsofh.supabase.co'; 
const supabaseAnonKey = 'sb_publishable_wdllLAlYe8KjrbakeHrbtg_Ohke4k43';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);