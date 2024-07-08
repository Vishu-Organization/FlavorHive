import { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from './supabase';

export type TypedSupabaseClient = SupabaseClient<Database>

export enum LinkType  {
    Link = 1,
    Email,
    Phone
}