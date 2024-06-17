import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/supabase";
import { TypedSupabaseClient } from "./types/types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase: TypedSupabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
