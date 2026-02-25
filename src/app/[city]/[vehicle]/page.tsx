import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, VEHICLES, findCity, findVehicle, getWhatsAppLink, BUSINESS_INFO } from "@/lib/data";
import { ReviewsSection } from "@/components/reviews-section";
import { AboutSection } from "@/components/about-section";
import { FAQSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { supabase } from "@/lib/supabase";
import { generateHeroText, generateValueProps, generateHiddenText, generateFAQs } from "@/lib/seo-content";

// ============================================
// Static Generation: 11 cities × 20 vehicles = 220 pages
// ============================================
export async function generateStaticParams() {
    const params: { city: string; vehicle: string }[] = [];
    for (const city of CITIES) {
        for (const vehicle of VEHICLES) {
            params.push({ city: city.slug, vehicle: vehicle.slug });
        }
    }
    return params;
}

// ============================================
// Dynamic Meta Tags (SEO)
// ============================================
interface PageProps {
    params: { city: string; vehicle: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const city = findCity(params.city);
    const vehicle = findVehicle(params.vehicle);

    if (!city || !vehicle) return {};

    const title = `גרר ל${vehicle.name_he} ב${city.name_he} - הגעה מהירה 24/7`;
    const description = `שירותי גרירה מקצועיים ל${vehicle.name_he} ב${city.name_he} והסביבה. הגעה תוך 30 דקות, מחירים הוגנים, ציוד מתקדם. התקשרו עכשיו!`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            locale: "he_IL",
        },
        alternates: {
            canonical: `/${city.slug}/${vehicle.slug}`,
        },
    };
}

// ============================================
// Page Component
// ============================================
export default async function CityVehiclePage({ params }: PageProps) {
    const city = findCity(params.city);
    const vehicle = findVehicle(params.vehicle);

    if (!city || !vehicle) {
        notFound();
    }

    // Get the city ID for filtering reviews
    const { data: cityData } = await supabase
        .from("cities")
        .select("id")
        .eq("slug", city.slug)
        .single();

    const whatsappLink = getWhatsAppLink(city.name_he, vehicle.name_he);

    // Relevant "nearby" cities for internal linking
    const nearbyCities = CITIES.filter((c) => c.slug !== city.slug).slice(0, 4);
    // Other vehicles for internal linking
    const otherVehicles = VEHICLES.filter((v) => v.slug !== vehicle.slug).slice(0, 6);

    const heroText = generateHeroText(city.name_he, vehicle.name_he);
    const valueProps = generateValueProps(city.name_he, vehicle.name_he);
    const hiddenSeoText = generateHiddenText(city.slug, city.name_he, vehicle.name_he);
    const pageFaqs = generateFAQs(city.name_he, vehicle.name_he);

    return (
        <>
            <JsonLd cityName={city.name_he} citySlug={city.slug} vehicleName={vehicle.name_he} vehicleSlug={vehicle.slug} faqs={pageFaqs} />

            {/* Hidden semantic text for Googlebot/Screen readers (Long-tail keywords) */}
            <div className="sr-only" aria-hidden="true">
                {hiddenSeoText}
            </div>

            {/* ============================================
          HERO
          ============================================ */}
            <section className="gradient-trust text-white py-14 md:py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full 
                          px-4 py-1.5 mb-5 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        זמינים עכשיו ב{city.name_he}
                    </div>

                    <h1 className="font-rubik font-extrabold text-3xl md:text-5xl leading-tight mb-4">
                        גרר ל{vehicle.name_he}
                        <br />
                        <span className="text-alert-300">ב{city.name_he}</span>
                    </h1>

                    <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed">
                        {heroText}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-whatsapp text-white rounded-full px-7 py-3.5
                         font-semibold text-base shadow-lg hover:bg-green-600 transition-colors
                         w-full sm:w-auto justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            שלחו WhatsApp — אני צריך גרר ב{city.name_he}
                        </a>
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full 
                         px-7 py-3.5 font-semibold text-base border border-white/25 hover:bg-white/25 
                         transition-colors w-full sm:w-auto justify-center"
                        >
                            📞 054-917-4414
                        </a>
                    </div>
                </div>
            </section>

            {/* ============================================
          VALUE PROPOSITIONS
          ============================================ */}
            <section className="py-14">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="font-rubik font-bold text-2xl md:text-3xl text-slate-900 mb-8 text-center">
                        למה לבחור בגרר מפרץ אקספרס לגרירת ה{vehicle.name_he} שלכם?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-trust-blue-50 rounded-2xl p-6 border border-trust-blue-100">
                            <div className="text-3xl mb-3">⚡</div>
                            <h3 className="font-rubik font-semibold text-lg text-slate-900 mb-2">{valueProps[0].title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {valueProps[0].desc}
                            </p>
                        </div>

                        <div className="bg-alert-50 rounded-2xl p-6 border border-alert-100">
                            <div className="text-3xl mb-3">💰</div>
                            <h3 className="font-rubik font-semibold text-lg text-slate-900 mb-2">{valueProps[1].title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {valueProps[1].desc}
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                            <div className="text-3xl mb-3">🛡️</div>
                            <h3 className="font-rubik font-semibold text-lg text-slate-900 mb-2">{valueProps[2].title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {valueProps[2].desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          HOW IT WORKS
          ============================================ */}
            <section className="py-14 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="font-rubik font-bold text-2xl text-slate-900 mb-8 text-center">
                        📋 איך זה עובד? 3 צעדים פשוטים
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                step: "1",
                                title: "פנו אלינו",
                                desc: `שלחו WhatsApp או התקשרו. ספרו לנו שנתקעתם עם ה${vehicle.name_he} ב${city.name_he}.`,
                            },
                            {
                                step: "2",
                                title: "מקבלים מחיר",
                                desc: "תוך דקות תקבלו מחיר סופי וזמן הגעה מדויק. בלי הפתעות.",
                            },
                            {
                                step: "3",
                                title: "נהג בדרך",
                                desc: "גרר מקצועי יצא אליכם מיד. הרכב שלכם יגיע בשלמות ליעד.",
                            },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-12 h-12 gradient-trust text-white rounded-full flex items-center justify-center 
                                text-xl font-bold mx-auto mb-3 shadow-sm">
                                    {item.step}
                                </div>
                                <h3 className="font-rubik font-semibold text-slate-900 mb-1">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
          REVIEWS
          ============================================ */}
            <ReviewsSection cityId={cityData?.id} />

            {/* ============================================
          DYNAMIC FAQS
          ============================================ */}
            <FAQSection faqs={pageFaqs} city={city.name_he} vehicle={vehicle.name_he} />

            {/* ============================================
          INTERNAL LINKING (SEO)
          ============================================ */}
            <section className="py-14">
                <div className="max-w-5xl mx-auto px-4">
                    {/* Same vehicle, other cities */}
                    <div className="mb-10">
                        <h2 className="font-rubik font-semibold text-xl text-slate-900 mb-4">
                            גרירת {vehicle.name_he} בערים נוספות
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {nearbyCities.map((c) => (
                                <a
                                    key={c.slug}
                                    href={`/${c.slug}/${vehicle.slug}`}
                                    className="bg-trust-blue-50 text-trust-blue-700 rounded-full px-4 py-2 text-sm 
                             hover:bg-trust-blue-100 transition-colors"
                                >
                                    גרר ל{vehicle.name_he} ב{c.name_he}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Same city, other vehicles */}
                    <div>
                        <h2 className="font-rubik font-semibold text-xl text-slate-900 mb-4">
                            שירותי גרירה נוספים ב{city.name_he}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {otherVehicles.map((v) => (
                                <a
                                    key={v.slug}
                                    href={`/${city.slug}/${v.slug}`}
                                    className="bg-slate-100 text-slate-700 rounded-full px-4 py-2 text-sm 
                             hover:bg-slate-200 transition-colors"
                                >
                                    גרר ל{v.name_he} ב{city.name_he}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
