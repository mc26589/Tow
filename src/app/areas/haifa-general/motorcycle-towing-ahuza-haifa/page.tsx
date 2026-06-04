import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים, רכבי שטח ומסחריות. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר לשירות גרירה
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה</h2>
        <p className="mb-4">
          נתקעת עם הרכב באזור אחוזה? הצוות שלנו ערוך ומוכן להעניק לך שירות מקצועי, מהיר ואמין. 
          אנו מתמקדים במתן פתרונות גרירה לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות 24/7 לכל אזור חיפה והקריות</li>
          <li>ציוד גרירה מתקדם לשמירה על הרכב שלך</li>
          <li>מחירים הוגנים ושקופים</li>
          <li>צוות מיומן ומנוסה</li>
        </ul>
        <p className="text-sm text-neutral-400">
          *הערה: השירות אינו כולל גרירת אופנועים מכל סוג שהוא.
        </p>
      </section>
    </main>
  );
}