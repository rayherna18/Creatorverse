import { createClient } from "@supabase/supabase-js";

const URL = 'https://mmrlmhbyfumfneilpezb.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tcmxtaGJ5ZnVtZm5laWxwZXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0MzU4MzQsImV4cCI6MjAzOTAxMTgzNH0.JYMJSTU__WPHsZdeTUWG0Iz5oFJasaY4oLQ8J3D1Pdw'

export const supabase = createClient(URL, API_KEY);
