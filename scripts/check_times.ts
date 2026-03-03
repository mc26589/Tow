import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function checkTimestamps() {
    const { data } = await supabase
        .from("garage_outreach")
        .select("name, contacted_at")
        .gte("contacted_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
        .order("contacted_at", { ascending: false });
    console.log(JSON.stringify(data, null, 2));
    process.exit(0);
}

checkTimestamps();
