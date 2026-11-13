import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import TowingCalculator from '@/components/TowingCalculator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: {
        absolute: 'מחירון גרירה 2026: כמה עולה גרר? מחשבון חינמי מיידי',
    },
    description: 'כמה עולה לגרור רכב ב-2026? בדקו תוך 10 שניות במחשבון החינמי! תעריף מקומי שקוף מ-150 ₪ ללא הפתעות. הצעת מחיר סופית בטלפון: 054-917-4414',
    alternates: {
        canonical: '/milon/towing-cost',
    },
    openGraph: {
        title: 'מחירון גרירה 2026: כמה עולה גרר? מחשבון חינמי מיידי',
        description: 'בדקו תוך 10 שניות כמה עולה לגרור רכב בחיפה, הקריות והצפון לפי מרחק, סוג רכב ושעה.',
        type: 'website',
        locale: 'he_IL',
    },
};

const DYNAMIC_FAQS = [
    {
        question: "איך מחושבת עלות גרירת רכב?",
        answer: "עלות הגרירה נקבעת לפי מרחק הנסיעה בחיבור הראשוני (מחיר הקפצה), בתוספת תשלום על כל קילומטר של נסיעה. בנוסף, חילוצים מורכבים (כמו חילוץ משטח, חניון כפול או עבודות מנוף) גוררים תוספת עבודה, וכך גם גרירה בשבת ולילה."
    },
    {
        question: "כמה עולה לגרור רכב בתוך אזור הקריות וחיפה?",
        answer: "מחיר גרירה בתוך חיפה או בתוך הקריות הוא לרוב מחיר הבסיס לגרירה מקומית, שנע סביב 150 - 350 שקלים למכונית פרטית באזור עירוני ובשעות העבודה הרגילות."
    },
    {
        question: "האם יש תוספת תשלום על גרירת לילה או בשבת?",
        answer: "כן, מחירי הגרירה בשעות הלילה המאוחרות או בסופי שבוע ומועדים גבוהים יותר לרוב ב-25% עד 50% מהתעריף הרגיל, כדי לפצות על השירות מחוץ לשעות השגרה."
    },
    {
        question: "האם הקילומטראז' משפיע על עלות הגרירה הכוללת?",
        answer: "בהחלט. המחיר מורכב מתעריף קריאה (בסיס) שכולל לרוב מספר קילומטרים ראשונים, ולאחר מכן ישנה תוספת קבועה על כל קילומטר נוסף של גרירה."
    }
];

export default function TowingCostPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-slate-50 relative overflow-hidden">
            <JsonLd
                isHomePage={false}
                faqs={DYNAMIC_FAQS}
                breadcrumbs={[
                    { name: "עמוד הבית", item: "/" },
                    { name: "מחירון ומחשבון גרירה 2026", item: "/milon/towing-cost" },
                ]}
            />

            {/* Decorative background blurs */}
            <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-40 left-0 -ml-40 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 space-y-16">
                
                <header className="max-w-3xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        מחירון גרירה לשנת 2026
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                        מחשבון עלות גרירת רכב{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-primary/70">
                            מחירון 2026
                        </span>
                    </h1>
                    
                    <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        רוצים לדעת כמה יעלה לכם לגרור את הרכב? המחשבון שלנו משקלל את הקריטריונים המרכזיים ומספק לכם הערכת מחיר שקופה לפי התעריפים המקובלים בשוק בישראל.
                    </p>
                </header>

                <div className="max-w-5xl mx-auto">
                    {/* The Interactive Calculator Widget */}
                    <TowingCalculator />
                </div>

                {/* Static HTML Pricing Table for Rich Snippets & "מחירון גרירה" SEO */}
                <section className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-3xl border border-slate-200/60 shadow-sm space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            טבלת מחירון גרירה 2026 — חיפה, הקריות והצפון
                        </h2>
                        <p className="text-slate-600">
                            טווחי מחירים מומלצים להזמנת{' '}
                            <Link href="/haifa" className="text-primary font-semibold hover:underline">גרר בחיפה</Link>{' '}
                            או{' '}
                            <Link href="/krayot" className="text-primary font-semibold hover:underline">גרר בקריות</Link>{' '}
                            לפי סוג השירות, הרכב ותנאי החילוץ:
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full text-right border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white text-sm md:text-base">
                                    <th className="py-3.5 px-4 font-bold">סוג הגרירה / השירות</th>
                                    <th className="py-3.5 px-4 font-bold">טווח מחיר 2026</th>
                                    <th className="py-3.5 px-4 font-bold">הערות ודגשים</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-sm md:text-base">
                                <tr className="hover:bg-slate-50">
                                    <td className="py-3.5 px-4 font-semibold text-slate-900">גרירת רכב פרטי בתוך חיפה / הקריות (עד 10 ק&quot;מ)</td>
                                    <td className="py-3.5 px-4 font-bold text-primary whitespace-nowrap">150 – 300 ₪</td>
                                    <td className="py-3.5 px-4 text-slate-600">מחיר בסיס עירוני בשעות היום (א&apos;-ה&apos;)</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-3.5 px-4 font-semibold text-slate-900">גרירה בינעירונית בצפון (תוספת לכל ק&quot;מ)</td>
                                    <td className="py-3.5 px-4 font-bold text-primary whitespace-nowrap">8 – 12 ₪ לק&quot;מ</td>
                                    <td className="py-3.5 px-4 text-slate-600">מעבר למרחק הבסיס העירוני</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                                        <Link href="/haifa/electric" className="text-primary hover:underline">
                                            גרירת רכב חשמלי / היברידי (הרמה מלאה Flatbed)
                                        </Link>
                                    </td>
                                    <td className="py-3.5 px-4 font-bold text-primary whitespace-nowrap">250 – 400 ₪</td>
                                    <td className="py-3.5 px-4 text-slate-600">העמסה מותאמת למניעת נזק לסוללה ולמערכת ההנעה</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-3.5 px-4 font-semibold text-slate-900">גרירת רכב מסחרי / טנדר / SUV</td>
                                    <td className="py-3.5 px-4 font-bold text-primary whitespace-nowrap">250 – 450 ₪</td>
                                    <td className="py-3.5 px-4 text-slate-600">בהתאם למשקל הרכב ואורך המסלול</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                                        <Link href="/hazards/underground-parking/haifa" className="text-primary hover:underline">
                                            חילוץ רכב תקוע מחניון תת-קרקעי
                                        </Link>
                                    </td>
                                    <td className="py-3.5 px-4 font-bold text-primary whitespace-nowrap">300 – 450 ₪</td>
                                    <td className="py-3.5 px-4 text-slate-600">כולל ציוד נמוך-קומה, גלגליות או הוצאה למפלס פתוח</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-3.5 px-4 font-semibold text-slate-900">חילוץ שטח 4x4 (בוץ / חול / יערות הכרמל)</td>
                                    <td className="py-3.5 px-4 font-bold text-primary whitespace-nowrap">350 – 600 ₪</td>
                                    <td className="py-3.5 px-4 text-slate-600">תלוי במרחק מהכביש הסלול ובמורכבות החילוץ</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-3.5 px-4 font-semibold text-slate-900">תוספת שירותי גרירה בלילה / שבת וחג</td>
                                    <td className="py-3.5 px-4 font-bold text-primary whitespace-nowrap">+25% – 50%</td>
                                    <td className="py-3.5 px-4 text-slate-600">זמינות מיידית 24/7 ומחיר סופי מוסכם בטלפון מראש</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="max-w-3xl mx-auto mt-16 space-y-8 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/60 shadow-sm">
                    <h2 className="text-3xl font-bold text-slate-900">
                        שאלות ותשובות: תמחור גרירת רכבים
                    </h2>
                    
                    <div className="prose prose-slate max-w-none mb-8">
                        <p>
                            מחירון חילוץ וגרירה מורכב מפרמטרים רבים, ביניהם המרחק בחיבור, ציוד ההרמה הנדרש, ושעת הקריאה. חשוב לקבל הצעת מחיר מסודרת ומפורטת מחברת הגרירה טרם הזמנת השירות. גרר מפרץ אקספרס מספקים שירות אמין ושקוף בכל אזור הקריות, חיפה והצפון, מתוך רצון לספק חווית שירות הוגנת לנהגים תקועים בצד הדרך.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {DYNAMIC_FAQS.map((faq, index) => (
                            <AccordionItem 
                                key={index} 
                                value={`faq-${index}`}
                                className="border border-slate-200 rounded-2xl px-6 bg-slate-50/50 hover:bg-white transition-colors duration-200 overflow-hidden"
                            >
                                <AccordionTrigger className="text-right font-bold text-lg text-slate-800 hover:text-primary py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed text-base pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
                
            </div>
        </main>
    );
}
