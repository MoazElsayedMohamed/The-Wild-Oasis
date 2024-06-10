import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hpypmyvrijocdsutkpvx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhweXBteXZyaWpvY2RzdXRrcHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4ODQzMDUsImV4cCI6MjAzMzQ2MDMwNX0.uEGkXq89JhW1EtzywLd11QL3iesMwAYWiZcPyBjmjpk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
