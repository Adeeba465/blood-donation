// ✅ SAHI tarika — Named import
import  { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ngmytjxajgzdcwzecrmh.supabase.co";
const supabaseKey = "sb_publishable_J5tLRVnWzoVL-rf1tNgKQw_EV56e62Cf";

export const supabase = createClient(supabaseUrl,supabaseKey);

