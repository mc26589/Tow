import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUSINESS_INFO } from "@/lib/data";
import { ROADS, findRoad, getPseoWhatsAppLink } from "@/lib/data-pseo";
import { JsonLd } from "@/components/json-ld";

export async function generateStaticParams() {
    return ROADS.map((road) => ({
        road: road.slug,
    }));
}

interface PageProps {
    params: { road: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const road = findRoad(params.road);

    if (!road) return {};

    const title = `גרר צמוד ל${road.name_he} | חילוץ מהיר מהכביש`;
    const description = `נתקעתם על ${road.name_he}? שירות גרירה מהיר ומקצועי על הציר. אל תישארו בשוליים בחוסר אונים – התקשרו לחילוץ מיידי.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/roads/${road.slug}`,
        },
    };
}

export default async function RoadPage({ params }: PageProps) {
    const road = findRoad(params.road);

    if (!road) {
        notFound();
    }

    const whatsappMessage = `היי, נתקעתי על ${road.name_he}, צריך גרר דחוף. תכוונו אותי?`;
    const whatsappLink = getPseoWhatsAppLink(whatsappMessage);

    return (
        <>
            <JsonLd cityName="צפון" citySlug="north" vehicleName="רכב" vehicleSlug="private-car" faqs={[]} />

            <section className="bg-slate-900 text-white py-14 md:py-24 border-b-4 border-alert-500">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-200 rounded-full 
                          px-5 py-2 mb-6 text-sm font-bold tracking-wide uppercase border border-red-500/50">
                        ⚠️ הישארו בטוחים מעבר לשוליים
                    </div>

                    <h1 className="font-rubik font-extrabold text-3xl md:text-6xl leading-tight mb-6">
                        נתקעתם על <span className="text-alert-400">{road.name_he}</span>?
                        <br />אנחנו בדרך לחלץ אתכם
                    </h1>

                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        עצירה על {road.name_he} מסוכנת. צרו קשר מיידי לקבלת זמני הגעה מהירים.
                        גרר מיומן ייצא אליכם בתוך דקות.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#25D366] text-white rounded-full px-8 py-4
                         font-bold text-lg shadow-xl shadow-green-900/20 hover:scale-105 transition-transform
                         w-full sm:w-auto justify-center"
                        >
                            לקריאת חירום ב-WhatsApp
                        </a>
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="flex items-center gap-2 bg-white text-slate-900 rounded-full 
                         px-8 py-4 font-bold text-lg hover:bg-slate-100 
                         transition-colors w-full sm:w-auto justify-center shadow-xl"
                        >
                            לחיוג מהיר למוקד 24/7
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
