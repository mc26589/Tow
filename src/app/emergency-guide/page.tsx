import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/data";
import { ROADS, HAZARDS } from "@/lib/data-pseo";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
    title: "נתקעתי עם הרכב — מה עושים עכשיו? | מדריך חירום",
    description:
        "רכב נתקע בדרך? מדריך צעד-אחר-צעד לבטיחות ולפעולה נכונה עד הגעת הגרר, ורשימת הפרטים שכדאי להכין למחלץ כדי לקצר את זמן ההגעה.",
    alternates: {
        canonical: "/emergency-guide",
    },
};

const SAFETY_STEPS = [
    "הדליקו אורות חירום (מהבהבים) מיד כשאתם מרגישים שהרכב מאבד שליטה או כוח.",
    "אם ניתן ובטוח לעשות זאת — הזיזו את הרכב לשוליים הרחוקים ביותר מהנתיב הפעיל, ולא תשארו בנתיב הימני הצמוד לתנועה.",
    "הפעילו את בלם היד, צאו מהרכב מהצד הרחוק מהכביש (לא מהצד הפונה לתנועה), ולבשו אפוד זוהר אם יש ברכב.",
    "הציבו משולש אזהרה מאחורי הרכב במרחק סביר, בהתאם לתנאי הראות והמהירות בציר.",
    "התרחקו מהרכב ועמדו מאחורי מעקה הבטיחות או הרחק מהכביש ככל האפשר — לא ליד הרכב ולא בנתיב הנסיעה.",
    "התקשרו לשירות גרירה או חילוץ מתאים, ומסרו את המיקום המדויק שלכם.",
];

const INFO_TO_SEND = [
    "מיקום מדויק (כתובת, שם צומת, מספר כביש, או שיתוף מיקום מ-Waze/Google Maps).",
    "כיוון הנסיעה שלכם (חשוב במיוחד בכבישים מהירים ובכביש 22).",
    "סוג הרכב ויצרן (פרטי, מסחרי, רכב חשמלי, אופנוע וכו').",
    "האם הרכב מניע ואם הגלגלים מסתובבים בחופשיות.",
    "האם מדובר בתאונה, ואם יש פצועים — התקשרו קודם כל למשטרה/מד״א (100/101).",
    "האם הרכב נמצא בחניון תת-קרקעי או בשטח פתוח (בוץ, חול, שדה).",
];

export default function EmergencyGuidePage() {
    const whatsappLink = getWhatsAppLink();

    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <JsonLd
                faqs={[
                    {
                        question: "נתקעתי עם הרכב בדרך — מה עושים קודם כל?",
                        answer:
                            "קודם כל בטיחות: הדליקו אורות חירום, הזיזו את הרכב לשוליים אם ניתן, צאו מהצד הרחוק מהתנועה ולבשו אפוד זוהר. רק לאחר מכן התקשרו לגרר או לחילוץ.",
                    },
                    {
                        question: "אילו פרטים כדאי להכין לפני שמתקשרים לגרר?",
                        answer:
                            "מיקום מדויק, כיוון נסיעה, סוג הרכב, האם הרכב מניע והגלגלים מסתובבים, והאם מדובר בתאונה או בתקלה טכנית. ככל שהפרטים מדויקים יותר, כך זמן ההגעה יהיה קצר יותר.",
                    },
                ]}
            />

            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-10">
                    <div
                        className="inline-flex items-center gap-2 bg-red-100 text-red-700 rounded-full 
                       px-4 py-1.5 mb-6 text-sm font-bold"
                    >
                        🚨 מדריך חירום
                    </div>
                    <h1 className="font-rubik font-extrabold text-3xl md:text-5xl text-slate-900 mb-4">
                        נתקעתי עם הרכב — מה עושים עכשיו?
                    </h1>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto">
                        הבטיחות שלכם קודמת לכל דבר אחר. עברו על השלבים הבאים לפני שאתם ממתינים לגרר.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-8">
                    <h2 className="font-bold text-2xl text-slate-900 mb-6">שלבי בטיחות ראשונים</h2>
                    <ol className="space-y-4">
                        {SAFETY_STEPS.map((step, i) => (
                            <li key={i} className="flex gap-4">
                                <span
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 
                                 font-bold flex items-center justify-center text-sm"
                                >
                                    {i + 1}
                                </span>
                                <p className="text-slate-700 leading-relaxed pt-1">{step}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-8">
                    <h2 className="font-bold text-2xl text-slate-900 mb-6">אילו פרטים לשלוח למחלץ?</h2>
                    <ul className="space-y-3">
                        {INFO_TO_SEND.map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-700">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mb-10">
                    <p className="text-lg mb-6">
                        אחרי שהתבססתם במקום בטוח, {BUSINESS_INFO.name} זמין עבורכם 24/7:
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-whatsapp text-white rounded-full px-8 py-4 font-bold w-full sm:w-auto"
                        >
                            שלחו WhatsApp עכשיו
                        </a>
                        <a
                            href={`tel:+${BUSINESS_INFO.phone}`}
                            className="bg-white/10 text-white rounded-full px-8 py-4 font-bold border-2 border-white/30 w-full sm:w-auto"
                        >
                            {BUSINESS_INFO.displayPhone}
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                        <h3 className="font-bold text-lg text-slate-900 mb-4">נתקעתם בכביש ספציפי?</h3>
                        <ul className="space-y-2">
                            {ROADS.map((road) => (
                                <li key={road.slug}>
                                    <Link href={`/roads/${road.slug}`} className="text-blue-600 hover:underline text-sm">
                                        מדריך עבור {road.name_he}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                        <h3 className="font-bold text-lg text-slate-900 mb-4">מצב ספציפי?</h3>
                        <ul className="space-y-2">
                            {HAZARDS.map((hazard) => (
                                <li key={hazard.slug}>
                                    <Link href={`/hazards/${hazard.slug}/haifa`} className="text-blue-600 hover:underline text-sm">
                                        {hazard.name_he}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
