import {createClient} from "@supabase/supabase-js"
console.log(   process.env.SUPA_URL,
  process.env.SUPA_KEY);

// Create a single supabase client for interacting with your database
export const  supabase= createClient(
  import.meta.env.SUPA_URL,
  import.meta.env.SUPA_KEY
  )
