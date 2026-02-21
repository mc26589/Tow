import Link from "next/link";
import { CITIES, VEHICLES } from "@/lib/data";

export function CityVehicleGrid() {
    // Show top combinations on homepage — mix of general + brand
    const topVehicles = VEHICLES.slice(0, 10); // First 5 general + first 5 brands
    const topCities = CITIES.slice(0, 6); // Top 6 cities

    return (
        <section className="py-16" id="services">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="font-rubik font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                        🔍 שירותי גרירה לפי עיר וסוג רכב
                    </h2>
                    <p className="text-slate-500">
                        בחרו את העיר וסוג הרכב שלכם לקבלת שירות מותאם
                    </p>
                </div>

                {/* City sections with vehicle links */}
                <div className="space-y-8">
                    {topCities.map((city) => (
                        <div key={city.slug}>
                            <h3 className="font-rubik font-semibold text-lg text-trust-blue-700 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-trust-blue-500" />
                                גרירה ב{city.name_he}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                                {topVehicles.map((vehicle) => (
                                    <Link
                                        key={`${city.slug}-${vehicle.slug}`}
                                        href={`/${city.slug}/${vehicle.slug}`}
                                        className="flex items-center gap-2 bg-white border border-slate-150 rounded-xl 
                               px-3.5 py-2.5 text-sm text-slate-700 hover:border-trust-blue-300 
                               hover:text-trust-blue-600 hover:bg-trust-blue-50 transition-all
                               shadow-sm card-hover"
                                    >
                                        <span className="text-xs">🚛</span>
                                        <span className="truncate">{vehicle.name_he}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* See all cities link */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-400">
                        מחפשים עיר אחרת?{" "}
                        {CITIES.slice(6).map((city, i) => (
                            <span key={city.slug}>
                                <Link
                                    href={`/${city.slug}/private-car`}
                                    className="text-trust-blue-500 hover:underline"
                                >
                                    {city.name_he}
                                </Link>
                                {i < CITIES.slice(6).length - 1 && " · "}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
}
