import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, CITIES, findCity } from "@/lib/data";
import { DESTINATIONS, findDestination, getPseoWhatsAppLink } from "@/lib/data-pseo";
import { JsonLd } from "@/components/json-ld";

export async function generateStaticParams() {
    const params: { destination: string; city: string }[] = [];
    for (const city of CITIES) {
        for (const dest of DESTINATIONS) {
            params.push({ destination: dest.slug, city: city.slug });
        }
    }
    return params;
}

interface PageProps {
    params: { destination: string; city: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const city = findCity(params.city);
    const destination = findDestination(params.destination);

    if (!city || !destination) return {};

    const title = `גרר מ${city.name_he} אל ${destination.name_he} | מפרץ אקספרס`;
    const description = `נתקעתם ב${city.name_he} וצריכים גרירה ישירה אל ${destination.name_he}? שירותי גרירה מקצועיים הישר למוסך היבואן או נקודת הטיפול, במחירים הגונים וללא עיכובים.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/destination/${destination.slug}/${city.slug}`,
        },
    };
}

export default async function DestinationPage({ params }: PageProps) {
    const city = findCity(params.city);
    const destination = findDestination(params.destination);

    if (!city || !destination) {
        notFound();
    }

    const isGarage = destination.type === "garage";

    const whatsappMessage = `היי, נתקעתי ב${city.name_he} ואני צריך גרר אליכם אל ${destination.name_he}. מה המחיר ומתי תוכלו להגיע?`;
    const whatsappLink = getPseoWhatsAppLink(whatsappMessage);

    return (
        <>
            <JsonLd cityName={city.name_he} citySlug={city.slug} vehicleName="רכב" vehicleSlug="private-car" faqs={[]} />

            <section className="gradient-trust text-white py-14 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    <h1 className="font-rubik font-extrabold text-3xl md:text-5xl leading-tight mb-4">
                        גרירה מ{city.name_he}
                        <br /><span className="text-yellow-400">ישירות אל {destination.name_he}</span>
                    </h1>

                    <p className="text-lg text-blue-50 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        אל תסתבכו עם גרירות כפולות! אנחנו נאסוף את הרכב מכל שכונה ב{city.name_he}
                        ונוריד אותו בבטחה בשערי {destination.name_he} כדי ש{isGarage ? "תיכנסו לטיפול מוסמך" : "תטפלו ברכב"} בהקדם.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="flex items-center gap-2 bg-yellow-400 text-slate-900 rounded-full 
                         px-8 py-4 font-bold text-lg hover:bg-yellow-300 
                         transition-colors w-full sm:w-auto justify-center shadow-xl"
                        >
                            להזמנת גרר מ{city.name_he}
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-full px-8 py-4
                         font-bold text-lg hover:bg-white/30 transition-colors
                         w-full sm:w-auto justify-center shadow-sm"
                        >
                            קבלו הצעת מחיר בוואטסאפ
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
