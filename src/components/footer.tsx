import Link from "next/link";
import { CITIES, BUSINESS_INFO } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pb-safe-cta">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand + Description */}
                    <div>
                        <h3 className="font-rubik font-black text-2xl text-white mb-3 tracking-tight">
                            גרר צפון
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                            {BUSINESS_INFO.description}
                        </p>
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="inline-flex items-center gap-2 mt-4 text-alert-400 hover:text-alert-300 
                         font-bold text-lg hover:-translate-y-0.5 transition-all focus-ring rounded-sm px-1 -ml-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
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

                    {/* Service Areas */}
                    <div>
                        <h3 className="font-rubik font-bold text-white mb-3">אזורי שירות</h3>
                        <ul className="space-y-1.5 text-sm">
                            {CITIES.map((city) => (
                                <li key={city.slug}>
                                    <Link
                                        href={`/${city.slug}/private-car`}
                                        className="text-slate-400 hover:text-white transition-colors focus-ring rounded-sm px-1 py-0.5 inline-block -ml-1"
                                    >
                                        גרירה ב{city.name_he}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Info */}
                    <div>
                        <h3 className="font-rubik font-bold text-white mb-3">מידע מהיר</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                זמינות 24 שעות, 7 ימים בשבוע
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                הגעה תוך 30 דקות
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                מחירים שקופים, ללא הפתעות
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                גרירה בטוחה לכל סוגי הרכבים
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                נהגים מקצועיים ומנוסים
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} גרר צפון — שירותי גרירה מקצועיים. כל הזכויות שמורות.</p>
                </div>
            </div>
        </footer>
    );
}
