import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://bvellrcxvkrpfghylkfx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2ZWxscmN4dmtycGZnaHlsa2Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MzY3MTgsImV4cCI6MjAxODMxMjcxOH0.xbwKx1-tiDuN0Xvvie4jgo_r-buuXWYue3s0ynfKCwI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
