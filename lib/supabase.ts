import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xcalaserffdbnivruafv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjYWxhc2VyZmZkYm5pdnJ1YWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE1MjYzODgsImV4cCI6MTk3NzEwMjM4OH0.fTZ3Af1xNLlRkFuagAlaHfexaR2HNYZc12KWAtbN8Ds'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage as any,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});