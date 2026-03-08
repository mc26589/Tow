import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUSINESS_INFO, CITIES, findCity } from "@/lib/data";
import { WARNING_LIGHTS, findWarningLight, getPseoWhatsAppLink } from "@/lib/data-pseo";
import { JsonLd } from "@/components/json-ld";
import { DiagnosticTool } from "@/components/diagnostic-tool";

export async function generateStaticParams() {
    const params: { light: string; city: string }[] = [];
    for (const city of CITIES) {
        for (const light of WARNING_LIGHTS) {
            params.push({ light: light.slug, city: city.slug });
        }
    }
    return params;
}

interface PageProps {
    params: { light: string; city: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const city = findCity(params.city);
    const light = findWarningLight(params.light);

    if (!city || !light) return {};

    const title = `${light.name_he} נדלקה? גרר ב${city.name_he} | ייעוץ וחילוץ`;
    const description = `נדלקה לכם ${light.name_he} ברכב באזור ${city.name_he}? אל תקחו סיכון. שירותי גרירה מקצועיים לחילוץ מידי מהמקום למניעת נזק למנוע. התקשרו.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/warning-lights/${light.slug}/${city.slug}`,
        },
    };
}

export default async function WarningLightPage({ params }: PageProps) {
    const city = findCity(params.city);
    const light = findWarningLight(params.light);

    if (!city || !light) {
        notFound();
    }

    const isRed = light.severity === "red";
    const bgClass = isRed ? "bg-red-50 border-red-200 text-red-900" : "bg-orange-50 border-orange-200 text-orange-900";
    const highlightClass = isRed ? "text-red-600" : "text-orange-600";

    const whatsappMessage = `שלום, נדלקה לי ${light.name_he} ברכב ב${city.name_he}. מה לעשות? צריך חילוץ?`;
    const whatsappLink = getPseoWhatsAppLink(whatsappMessage);

    return (
        <>
            <JsonLd cityName={city.name_he} citySlug={city.slug} vehicleName="רכב" vehicleSlug="private-car" faqs={[]} />

            <section className="bg-white py-14 md:py-24">
                <div className="max-w-3xl mx-auto px-4 text-center">

                    <div className="mb-8">
                        <span className="inline-block p-4 rounded-full bg-slate-100 shadow-inner mb-4">
                            <span className="text-4xl">🚨</span>
                        </span>
                        <h1 className="font-rubik font-extrabold text-3xl md:text-5xl leading-tight mb-4 text-slate-900">
                            נדלקה לך <span className={highlightClass}>{light.name_he}</span><br />
                            בזמן נסיעה ב{city.name_he}?
                        </h1>
                        <p className="text-xl text-slate-600 mb-6">
                            קודם כל, לעצור במקום בטוח לדומם מנוע.
                            <strong><br />{light.description}</strong>
                        </p>
                    </div>

                    <DiagnosticTool lightNameHe={light.name_he} cityNameHe={city.name_he} severity={light.severity} />

                    <div className={`p-6 rounded-2xl border ${bgClass} mb-10 text-right`}>
                        <h3 className="font-bold text-xl mb-3">מה לעשות עכשיו?</h3>
                        <ul className="list-disc list-inside space-y-2 opacity-80">
                            <li>עצרו בזהירות בשולי הדרך או במפרץ חניה ב{city.name_he}.</li>
                            <li>אל תנסו להמשיך לנסוע - זה יכול לגרום לנזק פטאלי למנוע.</li>
                            <li>צרו איתנו קשר. נשלח גרר שיקח את הרכב למוסך שלכם, בטוח ומהר.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-whatsapp text-white rounded-full px-8 py-4
                         font-bold shadow hover:bg-green-600 transition-colors
                         w-full sm:w-auto justify-center"
                        >
                            התייעצו איתנו בוואטסאפ (חינם)
                        </a>
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="flex items-center gap-2 bg-slate-900 text-white rounded-full 
                         px-8 py-4 font-bold hover:bg-slate-800 
                         transition-colors w-full sm:w-auto justify-center shadow"
                        >
                            חייגו להזמנת גרר מ{city.name_he}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
