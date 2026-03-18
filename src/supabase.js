import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://XXXX.supabase.co'
const supabaseAnonKey = 'ANON_PUBLIC_KEY'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
