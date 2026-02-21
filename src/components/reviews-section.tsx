import { supabase } from "@/lib/supabase";
import type { Review } from "@/lib/types";

// Star rating component
function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`דירוג ${rating} מתוך 5`}>
            {[1, 2, 3, 4, 5].map((i) => (
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={i <= rating ? "#f59e0b" : "#e2e8f0"}
                    className={i <= rating ? "star-filled" : "star-empty"}
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
}

// Single review card
function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm card-hover">
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h4 className="font-rubik font-semibold text-slate-900">{review.author}</h4>
                </div>
                <Stars rating={review.rating} />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{review.body}</p>
        </div>
    );
}

interface ReviewsSectionProps {
    cityId?: string;
}

export async function ReviewsSection({ cityId }: ReviewsSectionProps) {
    // Fetch reviews from Supabase (optionally filter by city)
    let query = supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(8);

    if (cityId) {
        query = query.eq("city_id", cityId);
    }

    const { data: reviews } = await query;

    if (!reviews || reviews.length === 0) {
        return null;
    }

    return (
        <section className="py-16 bg-slate-50" id="reviews">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="font-rubik font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                        💬 מה הלקוחות שלנו אומרים
                    </h2>
                    <p className="text-slate-500">
                        מאות לקוחות מרוצים בצפון הארץ
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reviews.map((review: Review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
