import Image from "next/image";
import { Metadata } from "next";
import { OWNER_INFO, BUSINESS_INFO } from "@/lib/data";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ShieldCheck, Anchor, Wrench, FileCheck, MapPin, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "אודות - גרר מפרץ אקספרס | חילוץ וגרירה בחיפה והקריות",
  description: "הכירו את גרר מפרץ אקספרס - מעל 15 שנות ניסיון בחילוץ וגרירה. הכירו את הסיפור שלנו, מקצועיות נטולת פשרות, שקיפות, וביטוח מקיף שמעניק לכם שקט נפשי על הכביש.",
  keywords: ["אודות גרר מפרץ אקספרס", "גרירה בחיפה", "חילוץ רכבים בצפון", "סיפור החברה", "ביטוח חילוץ רכב", "גרר אמין"],
  openGraph: {
    title: "אודות גרר מפרץ אקספרס | מקצועיות, שקיפות וביטוח מקיף",
    description: "הכירו את צוות המומחים של גרר מפרץ אקספרס. שירותי גרירה מהירים בחיפה והקריות, עם דגש על אמינות ושירות מעל הכל.",
    images: [{ url: "/images/about-tow-truck-haifa.png", width: 1200, height: 630, alt: "גרר מפרץ אקספרס בפעולה בחיפה" }],
    url: "https://www.grarmifrats.co.il/about",
    locale: "he_IL",
    type: "website",
  },
  alternates: {
    canonical: "https://www.grarmifrats.co.il/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd isHomePage={false} />

      {/* Hero Section with Parallax Effect */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/about-tow-truck-haifa.png" 
          alt="גרר מפרץ אקספרס במהלך שירות פריצה וחילוץ בחיפה" 
          fill 
          priority
          sizes="100vw"
          className="object-cover object-center z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 text-center mt-12">
          <div className="inline-flex items-center justify-center space-x-2 space-x-reverse mb-6 px-4 py-1.5 rounded-full bg-trust-blue-500/20 border border-trust-blue-400/30 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alert-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-alert-500"></span>
            </span>
            <span className="text-trust-blue-50 text-sm font-medium tracking-wide">
              הצוות המוביל בצפון
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl font-rubik leading-tight">
            הבית שלכם <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-alert-400 to-alert-300">על הכביש</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-heebo">
            מעל ל-15 שנות ניסיון במתן פתרונות חילוץ וגרירה מתקדמים, במקצועיות, אמינות ושקיפות מלאה מול הלקוח.
          </p>
        </div>

        {/* Decorative Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto text-slate-50 fill-current">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      <main className="bg-slate-50 pb-24 relative z-20">
        <div className="container mx-auto px-4">
          
          <div className="max-w-4xl mx-auto relative -mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border border-slate-100">
            {/* 1. הסיפור שלנו */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-trust-blue-100 flex items-center justify-center text-trust-blue-600">
                  <Anchor size={26} strokeWidth={2.5} />
                </div>
                <h2 className="text-4xl font-rubik font-bold text-slate-900">הסיפור שלנו</h2>
              </div>
              <div className="prose prose-lg prose-slate text-slate-600 font-heebo leading-relaxed max-w-none">
                <p>
                  גרר מפרץ אקספרס הוקמה מתוך חזון ברור: לקחת את התחום המורכב של גרירה וחילוץ, ולהפוך אותו לשירות נגיש, אנושי ומקצועי. כאשר אנו מגיעים ללקוח, אנו מבינים שהוא נמצא באחד הרגעים הלחוצים והפגיעים שלו.
                </p>
                <p>
                  הסיפור שלנו נכתב בכל יום מחדש על כבישי ישראל, עם כל כלי רכב שאנו מסייעים לו לחזור הביתה בשלום. מצוות קטן עם משאית גרירה אחת, צמחנו בזכות אמון הלקוחות והמלצות מפה לאוזן, לצי רכבי החילוץ מהמתקדמים בצפון שיודע לתת מענה לכל תקלה או תאונה.
                </p>
              </div>
            </section>

            <hr className="border-slate-200 mb-16" />

            {/* 2. מקצועיות נטולת פשרות */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-alert-100 flex items-center justify-center text-alert-600">
                  <Wrench size={26} strokeWidth={2.5} />
                </div>
                <h2 className="text-4xl font-rubik font-bold text-slate-900">מקצועיות נטולת פשרות</h2>
              </div>
              <div className="prose prose-lg prose-slate text-slate-600 font-heebo leading-relaxed max-w-none">
                <p>
                  גרירת רכבים היא אומנות שדורשת דיוק, הבנה מכנית מעמיקה ושימוש בציוד הקפדני ביותר. אנחנו לא מתפשרים על איכות אנשי הצוות שלנו, המכשור טכנולוגי שאנחנו מפעילים, ואופן אבטחת הרכב במהלך הנסיעה.
                </p>
                <p>
                  צוות המחלצים שלנו עובר הכשרות שוטפות ומתעדכן בטכנולוגיות הרכב האחרונות - מרכבי יוקרה נמוכים, דרך רכבים חשמליים בעלי רגישות בסוללה, ועד ציוד חקלאי וקלאסיקות שעבורן כל ליטוף הוא קריטי.
                </p>
              </div>
            </section>

            <hr className="border-slate-200 mb-16" />

            {/* 3. שקיפות מלאה והוגנות */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <HeartHandshake size={26} strokeWidth={2.5} />
                </div>
                <h2 className="text-4xl font-rubik font-bold text-slate-900">שקיפות מלאה והוגנות</h2>
              </div>
              <div className="prose prose-lg prose-slate text-slate-600 font-heebo leading-relaxed max-w-none">
                <p>
                  בענף החילוץ קיימת סטיגמה על מחירים מופקעים והפתעות ברגע האחרון. אנחנו כאן כדי לשנות את התמונה. הגישה שלנו מבוססת תמיד על כנות: המחיר שתקבלו בשיחת הטלפון הוא המחיר שתשלמו. נקודה.
                </p>
                <p>
                  אנו מתארים מראש את תהליך החילוץ, כללי הבטיחות והזמן המשוער להגעה - כך שאתם תמיד יודעים היכן אתם עומדים, ללא 'אותיות קטנות'.
                </p>
              </div>
            </section>
          </div>

          {/* Value Props Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 overflow-hidden md:grid-cols-3 gap-8 mb-20">
            {/* 4. ביטוח מקיף vs גרר פרטי */}
            <section className="bg-white rounded-3xl p-8 py-12 shadow-lg border border-slate-100 hover:shadow-xl hover:border-trust-blue-100 transition-all group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-trust-blue-500 mb-6 group-hover:scale-110 group-hover:bg-trust-blue-50 transition-all">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-2xl font-rubik font-bold text-slate-900 mb-4">ביטוח מקיף vs פרטי</h2>
              <p className="text-slate-600 leading-relaxed font-heebo">
                למה להמתין שעות לגרר של ספק הביטוח? כדאי לדעת: ברוב חברות הביטוח תוכלו להזמין גרר פרטי בבחירתכם ולקבל החזר כספי מלא על השירות. אנו מפיקים מסמכים רשמיים ומוכרים ומסייעים לכם בתהליך זיכוי התשלום מול חברת פוליסת הביטוח שלכם.
              </p>
            </section>

            {/* 5. המומחים של אזור חיפה והקריות */}
            <section className="bg-slate-900 text-white rounded-3xl p-8 py-12 shadow-xl border border-slate-800 hover:shadow-2xl hover:border-alert-500/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-trust-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-alert-400 mb-6 group-hover:scale-110 group-hover:bg-slate-700 transition-all relative z-10">
                <MapPin size={32} />
              </div>
              <h2 className="text-2xl font-rubik font-bold text-white mb-4 relative z-10">מומחי חיפה והקריות</h2>
              <p className="text-slate-300 leading-relaxed font-heebo relative z-10">
                כחברה צפונית גאה, אנחנו מכירים כל עיקול, שכונה וכביש בחיפה, בקריות ובסביבה. אנו יודעים להתמודד עם הטופוגרפיה המאתגרת של חיפה (עליות, זוויות, וחניות תלולות במיוחד) ומספקים זמני הגעה שלוקחים בחשבון את התנועה המקומית המדויקת.
              </p>
            </section>

            {/* 6. שקט נפשי עם כיסוי ביטוח */}
            <section className="bg-white rounded-3xl p-8 py-12 shadow-lg border border-slate-100 hover:shadow-xl hover:border-trust-blue-100 transition-all group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-trust-blue-500 mb-6 group-hover:scale-110 group-hover:bg-trust-blue-50 transition-all">
                <FileCheck size={32} />
              </div>
              <h2 className="text-2xl font-rubik font-bold text-slate-900 mb-4">שקט נפשי עם כיסוי</h2>
              <p className="text-slate-600 leading-relaxed font-heebo">
                השירות שלנו אינו מסתכם רק בגרירת הרכב, אלא בהענקת חוויה של ביטחון מלא. אנו מחזיקים בביטוח סחר מקצועי המכסה כל פינה וכל תקלה אפשרית במהלך ההובלה, כדי שאתם תוכלו לישון בשקט מרגע מסירת המפתח ועד ליעד.
              </p>
            </section>
          </div>

          {/* Bold CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 text-center bg-trust-blue-50 rounded-3xl p-10 md:p-16 border-2 border-trust-blue-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-trust-blue-400 to-transparent"></div>
            <h3 className="text-3xl md:text-4xl font-rubik font-black text-slate-900 mb-6">
              תקועים עכשיו? אל תישארו לבד על הכביש.
            </h3>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-heebo">
              הצוות שלנו מוכן לקריאה שלכם עם ציוד גרירה מתקדם ומחלצים אדיבים ומוסמכים.
            </p>
            <Link 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full text-slate-900 bg-alert-400 hover:bg-alert-300 transition-all shadow-lg hover:shadow-alert-500/30 hover:-translate-y-1"
            >
              לחוג לחילוץ מהיר ☎️
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}