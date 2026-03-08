import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, CITIES, findCity } from "@/lib/data";
import { B2B_INDUSTRIES, findB2BIndustry, getPseoWhatsAppLink } from "@/lib/data-pseo";
import { JsonLd } from "@/components/json-ld";

export async function generateStaticParams() {
    const params: { industry: string; city: string }[] = [];
    for (const city of CITIES) {
        for (const industry of B2B_INDUSTRIES) {
            params.push({ industry: industry.slug, city: city.slug });
        }
    }
    return params;
}

interface PageProps {
    params: { industry: string; city: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const city = findCity(params.city);
    const industry = findB2BIndustry(params.industry);

    if (!city || !industry) return {};

    const title = `גרר עסקי עבור ${industry.name_he} ב${city.name_he} | הגעה תוך חצי שעה`;
    const description = `זקוקים לחילוץ וגרירה עבור ${industry.name_he} ב${city.name_he}? שירות VIP לנהגים מקצועיים. חשבוניות מס, עבודה מול חברות, ומינימום זמן השבתה. הזמינו עכשיו.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/b2b/${industry.slug}/${city.slug}`,
        },
    };
}

export default async function IndustryPage({ params }: PageProps) {
    const city = findCity(params.city);
    const industry = findB2BIndustry(params.industry);

    if (!city || !industry) {
        notFound();
    }

    const whatsappMessage = `היי, אני נוהג ב${industry.name_he} ונתקעתי ב${city.name_he}. חייב חילוץ דחוף כדי לחזור לעבוד.`;
    const whatsappLink = getPseoWhatsAppLink(whatsappMessage);

    return (
        <>
            <JsonLd cityName={city.name_he} citySlug={city.slug} vehicleName="מסחרי" vehicleSlug="commercial" faqs={[]} />

            <section className="bg-white py-14 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    <div className="inline-flex items-center justify-center gap-2 bg-trust-blue-50 text-trust-blue-700 
                          rounded-full px-4 py-1.5 mb-5 text-sm font-bold border border-trust-blue-200">
                        ⭐ שירות B2B VIP - אפשרות להסדרי גרירה שוטפים
                    </div>

                    <h1 className="font-rubik font-extrabold text-3xl md:text-5xl leading-tight mb-4 text-slate-900">
                        שירותי גרירה ייעודיים עבור <br />
                        <span className="text-trust-blue-600">{industry.name_he}</span> ב{city.name_he}
                    </h1>

                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
                        אנחנו מבינים שזמן זה כסף. {industry.description} בגרר מפרץ אקספרס מקבלים קדימות בתור וחשבונית מס כחוק.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="flex items-center gap-2 bg-slate-900 text-white rounded-full 
                         px-8 py-4 font-bold text-lg hover:bg-slate-800 
                         transition-colors w-full sm:w-auto justify-center shadow-lg"
                        >
                            חייגו לקבלת הצעת מחיר עסקית
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-whatsapp text-white rounded-full px-8 py-4
                         font-bold text-lg hover:bg-green-600 transition-colors
                         w-full sm:w-auto justify-center shadow-sm"
                        >
                            הזמינו חילוץ מהיר בוואטסאפ
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
