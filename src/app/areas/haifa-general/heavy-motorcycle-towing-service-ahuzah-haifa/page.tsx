import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            שירות גרירה וחילוץ באחוזה חיפה: רכבים, מסחריות ורכבי שטח
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            זקוקים לחילוץ מהיר באחוזה? אנו כאן עבורכם 24/7. שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר לשירות
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים באחוזה</h2>
        <p className="mb-4">
          הצוות שלנו פועל בפריסה רחבה בחיפה ובאזור אחוזה, ומעניק מענה מהיר ומקצועי לכל סוגי הרכבים. אנו מבינים את החשיבות של זמן התגובה כאשר הרכב נתקע, ולכן אנו ערוכים לכל תרחיש.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>גרירת רכבים פרטיים ומשפחתיים</li>
          <li>חילוץ רכבי שטח (4x4)</li>
          <li>גרירת רכבים מסחריים</li>
          <li>שירות 24/7 בכל אזור חיפה והקריות</li>
        </ul>
        <p className="text-sm text-neutral-400">
          *הערה: השירות אינו כולל גרירת אופנועים או כלים דו-גלגליים.
        </p>
      </section>
    </main>
  );
}