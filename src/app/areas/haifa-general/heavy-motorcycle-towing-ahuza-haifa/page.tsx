import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            גרר לאופנועים כבדים באחוזה חיפה - שירות מקצועי לרכבים ורכבי שטח
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה</h2>
        <p className="mb-4">
          הצוות שלנו פועל בפריסה רחבה בחיפה ובאזור אחוזה. אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע.
          אנו מציעים שירותי גרירה מקצועיים במחירים הוגנים לכל סוגי הרכבים (למעט אופנועים).
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות 24/7 לכל קריאה</li>
          <li>ציוד חילוץ מתקדם לרכבים ורכבי שטח</li>
          <li>צוות מיומן ומקצועי</li>
          <li>הצעת מחיר הוגנת ושקופה בטלפון</li>
        </ul>
      </section>
    </main>
  );
}