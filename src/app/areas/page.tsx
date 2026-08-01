import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/data";
import {
    NEIGHBORHOODS,
    ROADS,
    WARNING_LIGHTS
} from "@/lib/data-pseo";

export const metadata: Metadata = {
    title: "גרר בחיפה והצפון 24/7 | חילוץ מהיר תוך 30 דקות | מחיר הוגן",
    description: "זקוקים לגרר בחיפה והצפון? גרר מפרץ אקספרס מספק שירותי חילוץ רכב מהירים 24/7, הגעה תוך 30 דקות ומחירים ללא תחרות. לכל סוגי הרכבים - התקשרו עכשיו!",
    alternates: {
        canonical: "/areas"
    }
};

export default function AreasHubPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-rubik font-extrabold text-4xl md:text-5xl text-slate-900 mb-4">
                        אזורי שירות ושירותי חילוץ בחיפה והצפון
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        אנחנו מגיעים לכל נקודה בצפון, משירותי <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 font-bold hover:underline">גרר בצ'ק פוסט</Link> ועד חילוצי שטח מורכבים. צוות המומחים שלנו עומד לרשותכם 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                        <h2 className="font-bold text-2xl text-trust-blue-800 mb-6 border-b pb-4">ערים ושכונות</h2>
                        <div className="space-y-6">
                            {CITIES.map((city) => (
                                <div key={city.slug}>
                                    <h3 className="font-semibold text-lg text-slate-800 mb-3">{city.name_he}</h3>
                                    <ul className="grid grid-cols-2 gap-2 text-sm">
                                        <li><Link href={`/${city.slug}/private-car`} className="text-blue-600 hover:underline">כללי - {city.name_he}</Link></li>
                                        {NEIGHBORHOODS.filter(hood => hood.city_slug === city.slug).map(hood => (
                                            <li key={hood.slug}>
                                                <Link href={`/locations/${city.slug}/${hood.slug}`} className="text-slate-600 hover:text-blue-600 hover:underline">
                                                    {hood.name_he}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                        <h2 className="font-bold text-2xl text-orange-800 mb-6 border-b pb-4">כבישים נפוצים</h2>
                        <ul className="space-y-3">
                            {ROADS.map((road) => (
                                <li key={road.slug}>
                                    <Link href={`/roads/${road.slug}`} className="text-slate-700 hover:text-orange-600 hover:underline font-medium">
                                        חילוץ ב{road.name_he}
                                    </Link>
                                </li>
                            ))}
                            <li><Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 hover:underline">גרר חירום בכביש 22</Link></li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                        <h2 className="font-bold text-2xl text-red-800 mb-6 border-b pb-4">נורות אזהרה</h2>
                        <div className="space-y-6">
                            {WARNING_LIGHTS.map((light) => (
                                <div key={light.slug}>
                                    <h3 className="font-semibold text-slate-800 mb-2">{light.name_he}</h3>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {CITIES.map(city => (
                                            <Link key={city.slug} href={`/warning-lights/${light.slug}/${city.slug}`} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-slate-200">ב{city.name_he}</Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-8 rounded-2xl border border-slate-100 mt-8">
                        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה בחיפה והצפון</h2>
                        <div className="space-y-4 text-slate-700">
                            <div>
                                <h3 className="font-bold text-lg">תוך כמה זמן מגיע גרר?</h3>
                                <p>אנו מבינים את הדחיפות ומבטיחים הגעה לכל אזור חיפה והקריות בטווח של 30 דקות. בין אם מדובר ב<Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">תאונה בכביש 22</Link> או תקלה טכנית.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">מה עושים אם הרכב נתקע בשטח?</h3>
                                <p>לרשותנו ציוד חילוץ מתקדם. אנחנו מומחים ב<Link href="/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa" className="text-blue-600 underline">חילוץ רכב תקוע בבוץ בכרמל</Link> ובדרכי עפר באזור חיפה והסביבה.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">האם אתם קונים רכבים לפירוק?</h3>
                                <p>כן, אנו מספקים גם שירותי פינוי רכבים. ניתן ליצור קשר לבירור על <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-immediate-removal" className="text-blue-600 underline">פינוי רכבים לפירוק בחיפה</Link> במחיר הוגן.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}