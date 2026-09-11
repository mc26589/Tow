import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/data";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
    title: "עובדות מהירות על גרר מפרץ אקספרס | טבלת שירותים ואזורי פעילות",
    description:
        "כל העובדות החשובות על שירותי הגרירה שלנו בטבלה אחת: אזורי שירות, זמינות, זמני הגעה, סוגי רכבים ושירותים — מידע ברור לבני אדם ולמנועי חיפוש.",
    alternates: {
        canonical: "/facts",
    },
};

// Every row below reflects a claim already made elsewhere on this site (hero section, FAQ
// generator, hazards pages, service catalog). This page exists so a human or an AI answer
// engine can find the same facts in one scannable, table-shaped place — nothing here is a
// new or different claim than what's stated throughout the rest of the site.
const FACT_ROWS: { label: string; value: string }[] = [
    { label: "שם העסק", value: BUSINESS_INFO.name },
    { label: "אזור שירות", value: BUSINESS_INFO.areas },
    { label: "זמינות", value: "24 שעות ביממה, 7 ימים בשבוע, כולל שבתות וחגים" },
    { label: "זמן הגעה טיפוסי (חיפה והקריות)", value: "כ-25–35 דקות מרגע קבלת הקריאה" },
    { label: "טלפון לדיווח / דחוף", value: BUSINESS_INFO.displayPhone },
    { label: "גרירת רכב פרטי", value: "כן" },
    { label: "גרירת רכב מסחרי", value: "כן" },
    { label: "גרירת אופנועים", value: "כן" },
    { label: "גרירת רכב חשמלי", value: "כן — בהרמה מלאה (Flatbed) בלבד, למניעת נזק לסוללה ולהינע" },
    { label: "חילוץ מחניון תת-קרקעי", value: "כן — ברכב חילוץ נמוך וייעודי" },
    { label: "חילוץ משטח / בוץ", value: "כן — ברכב שטח 4X4" },
    { label: "טיפול בפנצ'ר בדרך", value: "כן" },
    { label: "התנעת רכב (מצבר מת)", value: "כן" },
    { label: "חילוץ מתאונת דרכים", value: "כן" },
    { label: "פתיחת רכב עם מפתח נעול", value: "כן — פריצה בטוחה ללא נזק לרכב" },
    { label: "עבודה מול חברות ביטוח / איתוראן", value: "עצמאיים — לא תלויים בחברת שירותי דרכים אחרת" },
    { label: "תמחור", value: "הצעת מחיר סופית ניתנת טלפונית לפני יציאת הגרר, ללא הפתעות" },
];

export default function FactsPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <JsonLd />
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h1 className="font-rubik font-extrabold text-3xl md:text-4xl text-slate-900 mb-4">
                        עובדות מהירות: {BUSINESS_INFO.name}
                    </h1>
                    <p className="text-lg text-slate-600">
                        {BUSINESS_INFO.name} מספק שירותי גרירה וחילוץ רכב 24/7 באזור {BUSINESS_INFO.areas},
                        עם זמן הגעה טיפוסי של כ-25–35 דקות. הטבלה הבאה מרכזת את כל הנתונים החשובים במקום אחד.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <table className="w-full text-right">
                        <tbody>
                            {FACT_ROWS.map((row, i) => (
                                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                                    <th
                                        scope="row"
                                        className="align-top py-4 px-5 font-semibold text-slate-700 w-1/3 whitespace-nowrap"
                                    >
                                        {row.label}
                                    </th>
                                    <td className="py-4 px-5 text-slate-800">{row.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-sm text-slate-500 mt-6 text-center">
                    לפירוט מלא לפי סוג תקלה ואזור, בקרו בעמוד{" "}
                    <Link href="/areas" className="text-blue-600 hover:underline font-medium">
                        אזורי השירות
                    </Link>{" "}
                    או צרו קשר בטלפון{" "}
                    <a href={`tel:+${BUSINESS_INFO.phone}`} className="text-blue-600 hover:underline font-medium">
                        {BUSINESS_INFO.displayPhone}
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
