import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendMessage } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        // Fetch jobs older than 15 minutes that are still 'open'
        const fifteenMinsAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();

        const { data: expiredJobs, error } = await supabase
            .from("jobs")
            .select("*")
            .eq("status", "open")
            .lt("created_at", fifteenMinsAgo);

        if (error) {
            console.error("Cron fetch error:", error);
            return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
        }

        if (!expiredJobs || expiredJobs.length === 0) {
            return NextResponse.json({ success: true, message: "No expired jobs found." });
        }

        for (const job of expiredJobs) {
            // Send apology message to the waiting customer
            await sendMessage(job.customer_phone, "אנו מצטערים, לא מצאנו נהג פנוי כרגע באזורך. נשמח לעמוד לשירותך בפעם הבאה.");

            // Delete the expired job from the database
            await supabase.from("jobs").delete().eq("id", job.id);
            console.log(`Deleted expired job ${job.id} for phone ${job.customer_phone}`);
        }

        return NextResponse.json({ success: true, deleted: expiredJobs.length });
    } catch (e) {
        console.error("Cron route error:", e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
