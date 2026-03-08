import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, findCity, BUSINESS_INFO } from "@/lib/data";
import { NEIGHBORHOODS, findNeighborhood, getPseoWhatsAppLink } from "@/lib/data-pseo";
import { JsonLd } from "@/components/json-ld";

export async function generateStaticParams() {
    const params: { city: string; neighborhood: string }[] = [];
    for (const city of CITIES) {
        const cityNeighborhoods = NEIGHBORHOODS.filter((n) => n.city_slug === city.slug);
        for (const neighborhood of cityNeighborhoods) {
            params.push({ city: city.slug, neighborhood: neighborhood.slug });
        }
    }
    return params;
}

interface PageProps {
    params: { city: string; neighborhood: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const city = findCity(params.city);
    const neighborhood = findNeighborhood(params.neighborhood);

    if (!city || !neighborhood) return {};

    const title = `גרר ב${neighborhood.name_he}, ${city.name_he} | הגעה מהירה 24/7`;
    const description = `נתקעתם ב${neighborhood.name_he}? שירותי גרירה מקצועיים בזמינות מיידית לאזור ${neighborhood.name_he} והסביבה. מחיר הוגן, צוות מיומן, התקשרו עכשיו!`;

    return {
        title,
        description,
        alternates: {
            canonical: `/locations/${city.slug}/${neighborhood.slug}`,
        },
    };
}

export default async function NeighborhoodPage({ params }: PageProps) {
    const city = findCity(params.city);
    const neighborhood = findNeighborhood(params.neighborhood);

    if (!city || !neighborhood) {
        notFound();
    }

    const whatsappMessage = `היי, נתקעתי ב${neighborhood.name_he} (${city.name_he}), אפשר חילוץ/גרר?`;
    const whatsappLink = getPseoWhatsAppLink(whatsappMessage);

    return (
        <>
            <JsonLd cityName={city.name_he} citySlug={city.slug} vehicleName="רכב" vehicleSlug="private-car" faqs={[]} />

            <section className="gradient-trust text-white py-14 md:py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full 
                          px-4 py-1.5 mb-5 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        גרר פנוי קרוב ל{neighborhood.name_he}
                    </div>

                    <h1 className="font-rubik font-extrabold text-3xl md:text-5xl leading-tight mb-4">
                        גרירה וחילוץ ב{neighborhood.name_he}
                        <br />
                        <span className="text-alert-300">הגעה סופר-מהירה בשכונה</span>
                    </h1>

                    <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed">
                        גרר מפרץ אקספרס מציע שירותי גרירה ב{neighborhood.name_he} ({city.name_he}). הזנקת צוות קרוב אליך לחילוץ מהיר ובטוח.
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
                            שלחו WhatsApp — אנחנו באזור {neighborhood.name_he}
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
        </>
    );
}
