import { createClient } from "@supabase/supabase-js"
console.log(import.meta.env);

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  import.meta.env.PUBLIC_SUPA_URL,
  import.meta.env.PUBLIC_SUPA_KEY
)
