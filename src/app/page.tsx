import { AboutSection } from "@/components/about-section";
import { CityVehicleGrid } from "@/components/city-vehicle-grid";
import { ReviewsSection } from "@/components/reviews-section";
import { JsonLd } from "@/components/json-ld";
import { getWhatsAppLink, BUSINESS_INFO } from "@/lib/data";

export default function HomePage() {
    return (
        <>
            <JsonLd />

            {/* ============================================
          HERO SECTION
          ============================================ */}
            <section className="gradient-trust text-white py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    {/* Emergency badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full 
                          px-4 py-1.5 mb-6 text-sm font-semibold border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        זמינים עכשיו — 24/7
                    </div>

                    <h1 className="font-rubik font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 tracking-tight drop-shadow-md">
                        שירותי גרירה מהירים
                        <br />
                        <span className="text-alert-400">בצפון הארץ</span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                        נתקעתם בדרך? אנחנו מגיעים תוך 30 דקות לכל מקום בחיפה, הקריות, עכו ויקנעם.
                        <br className="hidden md:block" />
                        מחירים שקופים, בלי הפתעות.
                    </p>

                    {/* Hero CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-whatsapp text-white rounded-full px-8 py-4
                         font-bold text-lg shadow-lg hover:shadow-xl hover:bg-green-600 hover:-translate-y-1 transition-all w-full sm:w-auto
                         justify-center focus-ring"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            שלחו WhatsApp עכשיו
                        </a>
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full 
                         px-8 py-4 font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 
                         hover:-translate-y-1 transition-all w-full sm:w-auto justify-center focus-ring"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            054-917-4414
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center justify-center gap-6 mt-10 text-sm text-blue-200">
                        <div className="flex items-center gap-1.5">
                            <span>⭐</span> 4.9/5 דירוג
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span>🚛</span> 500+ גרירות
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span>⚡</span> 30 דקות ממוצע
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          SERVICE AREAS GRID
          ============================================ */}
            <CityVehicleGrid />

            {/* ============================================
          ABOUT / VALUE PROPOSITIONS
          ============================================ */}
            <AboutSection />

            {/* ============================================
          REVIEWS
          ============================================ */}
            <ReviewsSection />
        </>
    );
}
