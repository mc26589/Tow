import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, CITIES, findCity } from "@/lib/data";
import { HAZARDS, findHazard, getPseoWhatsAppLink } from "@/lib/data-pseo";
import { JsonLd } from "@/components/json-ld";

export async function generateStaticParams() {
    const params: { hazard: string; city: string }[] = [];
    for (const city of CITIES) {
        for (const hazard of HAZARDS) {
            params.push({ hazard: hazard.slug, city: city.slug });
        }
    }
    return params;
}

interface PageProps {
    params: { hazard: string; city: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const city = findCity(params.city);
    const hazard = findHazard(params.hazard);

    if (!city || !hazard) return {};

    const title = `${hazard.name_he} ב${city.name_he} | ציוד חילוץ ייעודי`;
    const description = `זקוקים ל${hazard.name_he} ב${city.name_he}? יש לנו את הציוד, הגרר והניסיון המתאים לתנאי שטח מורכבים ולחילוצים קשים. הגעה מהירה, התקשרו כעת!`;

    return {
        title,
        description,
        alternates: {
            canonical: `/hazards/${hazard.slug}/${city.slug}`,
        },
    };
}

export default async function HazardPage({ params }: PageProps) {
    const city = findCity(params.city);
    const hazard = findHazard(params.hazard);

    if (!city || !hazard) {
        notFound();
    }

    const whatsappMessage = `מבקש עזרה דחופה - ${hazard.name_he} ב${city.name_he}. יש לכם ציוד מתאים?`;
    const whatsappLink = getPseoWhatsAppLink(whatsappMessage);

    return (
        <>
            <JsonLd cityName={city.name_he} citySlug={city.slug} vehicleName="רכב" vehicleSlug="private-car" faqs={[]} />

            <section className="bg-slate-50 py-14 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    <h1 className="font-rubik font-extrabold text-3xl md:text-5xl leading-tight mb-4 text-slate-900">
                        {hazard.name_he} <span className="text-trust-blue-600">ב{city.name_he}</span>
                    </h1>

                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
                        {hazard.description} הצוות של גרר מפרץ אקספרס מגיע עם הכלים הנכונים לחלץ אתכם בבטחה וללא נזקים נוספים.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto">
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center gap-3 font-semibold text-slate-700">
                            <span className="text-2xl">🔧</span> ציוד הרמה טקטי
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center gap-3 font-semibold text-slate-700">
                            <span className="text-2xl">⏱️</span> חילוץ בתוך 30 דקות
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="flex items-center gap-2 bg-alert-500 text-white rounded-full 
                         px-8 py-4 font-bold text-lg hover:bg-alert-600 
                         transition-colors w-full sm:w-auto justify-center shadow-lg shadow-alert-500/30"
                        >
                            חייגו להזמנת צוות חילוץ
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-slate-700 rounded-full px-8 py-4
                         font-bold border hover:bg-slate-50 transition-colors
                         w-full sm:w-auto justify-center shadow-sm"
                        >
                            שליחת מיקום בוואטסאפ
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
