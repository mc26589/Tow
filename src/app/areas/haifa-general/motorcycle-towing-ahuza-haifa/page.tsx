import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה</h1>
          <p className="text-xl mb-8">שירותי גרירה וחילוץ מקצועיים לרכבים, רכבי שטח ומסחריות באזור חיפה והקריות</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">הבהרה חשובה בנוגע לשירותי גרירת אופנועים</h2>
          <p className="text-neutral-300 leading-relaxed mb-6">
            אנו מודים על פנייתך. ברצוננו לעדכן כי אנו מתמחים באופן בלעדי בגרירה וחילוץ של רכבים פרטיים, רכבים מסחריים ורכבי 4x4. <strong>איננו מספקים שירותי גרירה לאופנועים או אופנועים כבדים.</strong>
          </p>
          <p className="text-neutral-300 leading-relaxed">
            אם נתקעת עם רכבך באזור אחוזה או בכל נקודה אחרת בחיפה והקריות, הצוות המיומן שלנו עומד לרשותך 24 שעות ביממה. אנו מתחייבים למקצועיות, זהירות מרבית על הרכב ומחירים הוגנים ללא הפתעות.
          </p>
        </div>
      </section>
    </main>
  );
}