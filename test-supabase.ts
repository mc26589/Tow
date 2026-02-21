import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
    console.log("Testing insert...");
    const { data, error } = await supabase.from('sessions').insert({ phone_number: '1234', step: 'TEST' }).select();
    console.log('Result:', data);
    console.log('Error:', error);
}

test();
