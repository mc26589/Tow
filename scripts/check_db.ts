import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkDb() {
    const { data, error } = await supabase
        .from("garage_outreach")
        .select("*")
        .order("id", { ascending: false })
        .limit(20);

    if (error) {
        console.error("Error fetching data:", error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
    process.exit(0);
    process.exit(0);
}

checkDb();
