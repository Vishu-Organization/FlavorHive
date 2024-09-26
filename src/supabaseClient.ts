import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/supabase";
import { TypedSupabaseClient } from "./types/types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase: TypedSupabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  if (session && session.provider_token) {
    window.localStorage.setItem("oauth_provider_token", session.provider_token);
  }

  if (session && session.refresh_token) {
    window.localStorage.setItem("oauth_refresh_token", session.refresh_token);
  }

  if (event === "SIGNED_OUT") {
    window.localStorage.removeItem("oauth_provider_token");
    window.localStorage.removeItem("oauth_refresh_token");
  }
});


export default supabase;
