import { envs } from '@/configs/envs';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = envs.supabase.supabaseURL || '';
const supabaseAnonKey = envs.supabase.supabaseAnonKey || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
