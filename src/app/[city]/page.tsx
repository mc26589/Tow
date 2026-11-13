import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, VEHICLES, findCity, getWhatsAppLink, BUSINESS_INFO } from "@/lib/data";
import { NEIGHBORHOODS } from "@/lib/data-pseo";
import { generateFAQs } from "@/lib/seo-content";
import { JsonLd } from "@/components/json-ld";
import { FAQSection } from "@/components/faq-section";
import { ReviewsSection } from "@/components/reviews-section";

const KRAYOT_CITY_SLUGS = [
    "kiryat-ata",
    "kiryat-motzkin",
    "kiryat-bialik",
    "kiryat-yam",
    "kiryat-haim",
    "kiryat-shmuel",
] as const;

export async function generateStaticParams() {
    return CITIES.map((city) => ({ city: city.slug }));
}

interface PageProps {
    params: { city: string };
}

function getCityLocationPhrase(citySlug: string, cityName: string) {
    return citySlug === "krayot" ? "בקריות" : `ב${cityName}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const city = findCity(params.city);
    if (!city) return {};

    const locationPhrase = getCityLocationPhrase(city.slug, city.name_he);
    let title: string;
    if (city.slug === "haifa") {
        title = "גרר בחיפה 24/7 — הגעה תוך 25 דק' | החל מ-150 ₪ ⭐ 4.9";
    } else if (city.slug === "krayot") {
        title = "גרר בקריות 24/7 — הגעה תוך 20 דק' | החל מ-150 ₪ ⭐ 4.9";
    } else {
        title = `גרר ${locationPhrase} 24/7 — הגעה ב-25 דק' | מ-150 ₪ ⭐ 4.9`;
    }

    const eta = city.slug === "krayot" ? "20 דקות" : "25 דקות";
    const description = `נתקעתם ומחפשים גרר ${locationPhrase}? 🚛 הגעה תוך ${eta} 24/7 לכל שכונות ${city.name_he}. מחיר הוגן מ-150 ₪ בטלפון ללא הפתעות (4.9★): ${BUSINESS_INFO.displayPhone}`;

    return {
        title: {
            absolute: title,
        },
        description,
        openGraph: {
            title,
            description,
            type: "website",
            locale: "he_IL",
        },
        alternates: {
            canonical: `/${city.slug}`,
        },
    };
}

export default function CityPillarPage({ params }: PageProps) {
    const city = findCity(params.city);
    if (!city) {
        notFound();
    }

    const locationPhrase = getCityLocationPhrase(city.slug, city.name_he);
    const eta = city.slug === "krayot" ? "20 דקות" : "25 דקות";
    const faqs = generateFAQs(city.name_he, "רכבים");
    const whatsappLink = getWhatsAppLink(city.name_he);

    const krayotCities = city.slug === "krayot"
        ? CITIES.filter((c) => (KRAYOT_CITY_SLUGS as readonly string[]).includes(c.slug))
        : [];

    const neighborhoods = city.slug === "krayot"
        ? NEIGHBORHOODS.filter((n) => (KRAYOT_CITY_SLUGS as readonly string[]).includes(n.city_slug))
        : NEIGHBORHOODS.filter((n) => n.city_slug === city.slug);

    const nearbyCities = CITIES.filter((c) => c.slug !== city.slug).slice(0, 6);

    const localPricingRows = [
        { service: `גרירת רכב פרטי ${locationPhrase} (מקומי)`, price: "150 – 300 ₪", notes: "כולל הגעה עד 25 דק' וביטוח מלא" },
        { service: `גרירת רכב חשמלי / היברידי ${locationPhrase}`, price: "250 – 400 ₪", notes: "משאית גרירה בהרמה מלאה (Flatbed)" },
        { service: `חילוץ מחניון תת-קרקעי ${locationPhrase}`, price: "300 – 450 ₪", notes: "ציוד חילוץ נמוך-קומה + גלגליות" },
        { service: `חילוץ שטח 4x4 והתחפרות ${locationPhrase}`, price: "350 – 600 ₪", notes: "כננת כבדה לחול, בוץ ושבילי כרמל" },
    ];

    return (
        <>
            <JsonLd
                cityName={city.name_he}
                citySlug={city.slug}
                faqs={faqs}
                breadcrumbs={[
                    { name: "עמוד הבית", item: "/" },
                    { name: `גרר ${locationPhrase}`, item: `/${city.slug}` },
                ]}
            />

            {/* Hero */}
            <section className="gradient-trust text-white py-14 md:py-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        ניידת פנויה עכשיו {locationPhrase} — הגעה מהירה 24/7
                    </div>

                    <h1 className="font-rubik font-black text-3xl md:text-5xl lg:text-6xl leading-tight mb-5">
                        גרר {locationPhrase} 24/7 — שירותי גרירה וחילוץ תוך {eta}
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                        נתקעתם עם הרכב {locationPhrase}? גרר מפרץ אקספרס זמין 24 שעות ביממה להגעה תוך {eta} לכל שכונה וציר מרכזי.
                        גרירת רכבים פרטיים, חשמליים ומסחריים, חילוצי חניונים ותקלות בדרך — מחיר סופי ושקוף בטלפון.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-whatsapp text-white rounded-full px-8 py-4 font-bold text-lg shadow-lg hover:bg-green-600 transition-all w-full sm:w-auto justify-center focus-ring"
                        >
                            שלחו WhatsApp — גרר {locationPhrase} עכשיו
                        </a>
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-8 py-4 font-bold text-lg border-2 border-white/30 hover:bg-white/25 transition-all w-full sm:w-auto justify-center focus-ring"
                        >
                            📞 {BUSINESS_INFO.displayPhone}
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-blue-100 font-medium">
                        <span>⭐ 4.9/5 דירוג לקוחות</span>
                        <span>⚡ {eta} ממוצע הגעה</span>
                        <span>💰 החל מ-150 ₪</span>
                    </div>
                </div>
            </section>

            {/* Local Pricing Table */}
            <section className="py-14 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="font-rubik font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                            מחירון גרר {locationPhrase} 2026
                        </h2>
                        <p className="text-slate-600">
                            טווחי מחירים שקופים לשירותי גרירה וחילוץ {locationPhrase}. למרחקים מיוחדים ניתן להשתמש ב{" "}
                            <Link href="/milon/towing-cost" className="text-trust-blue-600 font-semibold hover:underline">
                                מחשבון ומחירון הגרירה המלא
                            </Link>.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                        <table className="w-full text-right border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white text-sm md:text-base">
                                    <th className="py-3.5 px-4 font-bold">סוג השירות</th>
                                    <th className="py-3.5 px-4 font-bold">טווח מחיר משוער</th>
                                    <th className="py-3.5 px-4 font-bold">פרטים ודגשים</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-sm md:text-base">
                                {localPricingRows.map((row) => (
                                    <tr key={row.service} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-3.5 px-4 font-semibold text-slate-900">{row.service}</td>
                                        <td className="py-3.5 px-4 font-bold text-trust-blue-700 whitespace-nowrap">{row.price}</td>
                                        <td className="py-3.5 px-4 text-slate-600">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Vehicles Grid */}
            <section className="py-14 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="font-rubik font-bold text-2xl md:text-3xl text-slate-900 mb-3 text-center">
                        שירותי גרירה {locationPhrase} לפי סוג ויצרן רכב
                    </h2>
                    <p className="text-slate-600 text-center mb-8">
                        בחרו את סוג הרכב או היצרן לקבלת מידע מותאם לשירותי גרר {locationPhrase}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {VEHICLES.map((vehicle) => (
                            <Link
                                key={vehicle.slug}
                                href={`/${city.slug}/${vehicle.slug}`}
                                className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 hover:border-trust-blue-400 hover:text-trust-blue-700 shadow-sm transition-all"
                            >
                                <span aria-hidden="true">🚛</span>
                                <span className="truncate">גרר ל{vehicle.name_he}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Neighborhoods / Krayot Cities */}
            {(krayotCities.length > 0 || neighborhoods.length > 0) && (
                <section className="py-14 bg-white">
                    <div className="max-w-5xl mx-auto px-4 space-y-8">
                        {krayotCities.length > 0 && (
                            <div>
                                <h2 className="font-rubik font-bold text-2xl md:text-3xl text-slate-900 mb-4 text-center">
                                    פריסת גרר בכל ערי הקריות
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {krayotCities.map((kCity) => (
                                        <Link
                                            key={kCity.slug}
                                            href={`/${kCity.slug}`}
                                            className="bg-trust-blue-50 border border-trust-blue-100 rounded-xl px-4 py-3 text-center font-bold text-trust-blue-800 hover:bg-trust-blue-100 transition-colors"
                                        >
                                            גרר ב{kCity.name_he}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {neighborhoods.length > 0 && (
                            <div>
                                <h2 className="font-rubik font-bold text-2xl md:text-3xl text-slate-900 mb-4 text-center">
                                    שכונות ומוקדי שירות מרכזיים {locationPhrase}
                                </h2>
                                <div className="flex flex-wrap justify-center gap-2.5">
                                    {neighborhoods.map((hood) => (
                                        <Link
                                            key={`${hood.city_slug}-${hood.slug}`}
                                            href={`/locations/${hood.city_slug}/${hood.slug}`}
                                            className="bg-slate-100 text-slate-700 hover:bg-trust-blue-50 hover:text-trust-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                                        >
                                            גרר ב{hood.name_he}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Nearby Cities */}
            <section className="py-10 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="font-rubik font-bold text-xl text-slate-800 mb-4">
                        אזורי שירות נוספים בצפון
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {nearbyCities.map((other) => (
                            <Link
                                key={other.slug}
                                href={`/${other.slug}`}
                                className="bg-white border border-slate-200 text-slate-700 hover:border-trust-blue-400 hover:text-trust-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                            >
                                גרר {getCityLocationPhrase(other.slug, other.name_he)}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} city={city.name_he} vehicle="רכבים" />
            <ReviewsSection />
        </>
    );
}

