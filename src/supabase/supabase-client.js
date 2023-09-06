import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://urdpjjvpbigelyvpsslw.supabase.co'
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZHBqanZwYmlnZWx5dnBzc2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3Mjk5OTcsImV4cCI6MjAwODMwNTk5N30.PzlkDTdTY5eYV-hxUxixoxAObwWnU0l49s0AmSMfDVU'
export const supabase = createClient(supabaseUrl, supabaseKey);
