import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rkeyjfpbcrzelasgzzwz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZXlqZnBiY3J6ZWxhc2d6end6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyMzMwNjgsImV4cCI6MjA0ODgwOTA2OH0.OXSFpbUeeD_sEBTB7-1zxvYHRASAxuKcXFWvDfcSE38";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
