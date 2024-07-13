import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xcscskzreghznmhbqzyp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjc2Nza3pyZWdoem5taGJxenlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NTMwNjUsImV4cCI6MjAzNTUyOTA2NX0.fmAWGrvdXLk7ZZS-mXEayDzlmpB2DdOuhPT1yVXnxvk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
