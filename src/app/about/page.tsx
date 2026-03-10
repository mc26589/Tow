import { lazy, Suspense } from "react";
import { OWNER_INFO } from "@/lib/data";
import { JsonLd } from "@/components/json-ld";

const Header = lazy(() => import("@/components/header").then(m => ({ default: m.Header })));
const Footer = lazy(() => import("@/components/footer").then(m => ({ default: m.Footer })));

export const metadata = {
    title: "אודות - גרר מפרץ אקספרס | המומחים לגרירה וחילוץ בצפון",
    description: "הכירו את הצוות שמאחורי גרר מפרץ אקספרס. מעל 15 שנות ניסיון בשירותי גרירה וחילוץ בחיפה והסביבה. מחויבות למקצועיות, אמינות ושירות מעל הכל.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Suspense fallback={null}>
                <Header />
            </Suspense>
            
            <JsonLd isHomePage={false} />

            <section className="bg-slate-900 text-white py-20 relative overflow-hidden min-h-[300px]">
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-rubik font-black mb-6">אודות גרר מפרץ אקספרס</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        הסיפור שלנו הוא הסיפור שלכם על הדרך. אנחנו כאן כדי להבטיח שלעולם לא תישארו לבד עם תקלה או לאחר תאונה.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-slate-100 flex items-center justify-center p-8 min-h-[240px]">
                                <div className="w-48 h-48 bg-slate-300 rounded-full flex items-center justify-center text-4xl text-slate-500 overflow-hidden relative">
                                    <span className="font-rubik font-bold">AS</span>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8 md:p-12">
                                <h2 className="text-3xl font-rubik font-bold text-slate-900 mb-2">{OWNER_INFO.name}</h2>
                                <p className="text-blue-600 font-semibold mb-6">{OWNER_INFO.jobTitle}</p>

                                <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed space-y-4">
                                    <p>
                                        עם מעל <strong>{OWNER_INFO.experience}</strong> של ניסיון בתחום החילוץ והגרירה, אביעד הקים את גרר מפרץ אקספרס מתוך מטרה אחת: להפוך את רגעי הלחץ על הכביש לחוויה רגועה ובטוחה ככל האפשר.
                                    </p>
                                    <p>
                                        אנו מתמחים בפתרונות יצירתיים למצבי חילוץ מורכבים, גרירת רכבים יוקרתיים וחשמליים, ומתן מענה מהיר ומדויק לכל קריאה באזור חיפה, הקריות והצפון.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-rubik font-bold mb-12">ההתחייבות שלנו אליכם</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        {['⏱️', '🛡️', '💎'].map((icon, i) => (
                            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-4xl mb-4">{icon}</div>
                                <h3 className="text-xl font-bold mb-3">שירות</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
}