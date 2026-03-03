import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function checkActivity() {
    console.log("--- Marketing Agent Activity (garage_outreach) ---");
    const { data: outreach } = await supabase
        .from("garage_outreach")
        .select("*")
        .gte("contacted_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
    console.log(outreach ? `${outreach.length} records found in the last 24h` : "None");
    if (outreach && outreach.length > 0) {
        console.log("Sample:", outreach.slice(0, 2));
    }

    console.log("\n--- SEO Content Builder Activity (seo_content) ---");
    const { data: seo } = await supabase
        .from("seo_content")
        .select("id, created_at, title")
        .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
    console.log(seo ? `${seo.length} pages built in the last 24h` : "None");
    if (seo && seo.length > 0) {
        console.log("Sample:", seo.slice(0, 2));
    }

    process.exit(0);
}

checkActivity();
