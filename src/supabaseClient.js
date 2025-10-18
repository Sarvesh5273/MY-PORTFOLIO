import { createClient } from '@supabase/supabase-js'

// Get Supabase URL and Key from environment variables defined in .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create and export the Supabase client instance
// This instance will be imported by other components (like Contact.jsx)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)