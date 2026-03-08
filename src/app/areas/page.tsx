import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/data";
import {
    NEIGHBORHOODS,
    ROADS,
    WARNING_LIGHTS,
    HAZARDS,
    B2B_INDUSTRIES,
    DESTINATIONS
} from "@/lib/data-pseo";

export const metadata: Metadata = {
    title: "אזורי שירות ושירותים מיוחדים | גרר מפרץ אקספרס",
    description: "רשימת אזורי השירות, הכבישים, השכונות, ושירותי החילוץ המיוחדים של גרר מפרץ אקספרס באזור חיפה והסביבה.",
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
                        אזורי שירות ושירותים מיוחדים
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        אנחנו מגיעים לכל נקודה באזור הצפון. בחרו את האזור או סוג החילוץ הרלוונטי לכם.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Cities & Neighborhoods */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                        <h2 className="font-bold text-2xl text-trust-blue-800 mb-6 border-b pb-4">ערים ושכונות</h2>
                        <div className="space-y-6">
                            {CITIES.map((city) => (
                                <div key={city.slug}>
                                    <h3 className="font-semibold text-lg text-slate-800 mb-3">{city.name_he}</h3>
                                    <ul className="grid grid-cols-2 gap-2 text-sm">
                                        <li>
                                            <Link href={`/${city.slug}/private-car`} className="text-blue-600 hover:underline">
                                                כללי - {city.name_he}
                                            </Link>
                                        </li>
                                        {NEIGHBORHOODS.map(hood => (
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

                    {/* Roads & Highways */}
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
                        </ul>
                    </div>

                    {/* Warning Lights */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                        <h2 className="font-bold text-2xl text-red-800 mb-6 border-b pb-4">נורות אזהרה (לפי עיר)</h2>
                        <div className="space-y-6">
                            {WARNING_LIGHTS.map((light) => (
                                <div key={light.slug}>
                                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${light.severity === 'red' ? 'bg-red-500' : 'bg-orange-400'}`}></span>
                                        {light.name_he}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {CITIES.map(city => (
                                            <Link key={city.slug} href={`/warning-lights/${light.slug}/${city.slug}`} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-slate-200">
                                                ב{city.name_he}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hazards */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                        <h2 className="font-bold text-2xl text-amber-800 mb-6 border-b pb-4">תרחישי שטח ואתגרים</h2>
                        <div className="space-y-6">
                            {HAZARDS.map((hazard) => (
                                <div key={hazard.slug}>
                                    <h3 className="font-semibold text-slate-800 mb-2">{hazard.name_he}</h3>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {CITIES.map(city => (
                                            <Link key={city.slug} href={`/hazards/${hazard.slug}/${city.slug}`} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-slate-200">
                                                ב{city.name_he}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* B2B Industries */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                        <h2 className="font-bold text-2xl text-indigo-800 mb-6 border-b pb-4">שירותים למגזר העסקי</h2>
                        <div className="space-y-6">
                            {B2B_INDUSTRIES.map((industry) => (
                                <div key={industry.slug}>
                                    <h3 className="font-semibold text-slate-800 mb-2">{industry.name_he}</h3>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {CITIES.map(city => (
                                            <Link key={city.slug} href={`/b2b/${industry.slug}/${city.slug}`} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-slate-200">
                                                ב{city.name_he}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Destinations */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                        <h2 className="font-bold text-2xl text-teal-800 mb-6 border-b pb-4">יעדים ומוסכים נפוצים</h2>
                        <div className="space-y-6">
                            {DESTINATIONS.map((dest) => (
                                <div key={dest.slug}>
                                    <h3 className="font-semibold text-slate-800 mb-2">{dest.name_he}</h3>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {CITIES.map(city => (
                                            <Link key={city.slug} href={`/destination/${dest.slug}/${city.slug}`} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-slate-200">
                                                גרר מ{city.name_he}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
