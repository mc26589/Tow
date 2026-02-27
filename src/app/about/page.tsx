import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { OWNER_INFO, BUSINESS_INFO } from "@/lib/data";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";

export const metadata = {
    title: "אודות - גרר מפרץ אקספרס | המומחים לגרירה וחילוץ בצפון",
    description: "הכירו את הצוות שמאחורי גרר מפרץ אקספרס. מעל 15 שנות ניסיון בשירותי גרירה וחילוץ בחיפה והסביבה. מחויבות למקצועיות, אמינות ושירות מעל הכל.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <JsonLd isHomePage={false} />

            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-rubik font-black mb-6">אודות גרר מפרץ אקספרס</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        הסיפור שלנו הוא הסיפור שלכם על הדרך. אנחנו כאן כדי להבטיח שלעולם לא תישארו לבד
                        עם תקלה או לאחר תאונה.
                    </p>
                </div>
            </section>

            {/* Owner Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-slate-100 flex items-center justify-center p-8">
                                <div className="w-48 h-48 bg-slate-300 rounded-full flex items-center justify-center text-4xl text-slate-500 overflow-hidden relative">
                                    {/* Link to image once provided */}
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
                                    <p>
                                        הערכים שמובילים אותנו הם <strong>שקיפות מלאה</strong>, <strong>הגינות במחיר</strong> ו<strong>מקצועיות ללא פשרות</strong>.
                                    </p>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">ניסיון שטח</p>
                                        <p className="font-bold text-slate-900">{OWNER_INFO.experience}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">אזורי שירות</p>
                                        <p className="font-bold text-slate-900">חיפה והצפון</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">רישיון וביטוח</p>
                                        <p className="font-bold text-slate-900">מלא ומקיף</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-rubik font-bold mb-12">ההתחייבות שלנו אליכם</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <div className="text-4xl mb-4">⏱️</div>
                            <h3 className="text-xl font-bold mb-3">מהירות תגובה</h3>
                            <p className="text-slate-400">אנחנו מבינים שכל דקה חשובה. הגעה ממוצעת תוך 30 דקות.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold mb-3">בטיחות מקסימלית</h3>
                            <p className="text-slate-400">שימוש בציוד המתקדם ביותר לשמירה על הרכב שלכם בשלמותו.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <div className="text-4xl mb-4">💎</div>
                            <h3 className="text-xl font-bold mb-3">שירות וי-איי-פי</h3>
                            <p className="text-slate-400">יחס אישי, אדיב ומקצועי לכל לקוח, בכל שעה ביממה.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
