import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים, רכבי שטח ומסחריות. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשר עכשיו לשירות גרירה
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-neutral-200">
        <h2 className="text-3xl font-bold mb-6 text-white">שירותי גרירה וחילוץ באחוזה, חיפה</h2>
        <p className="mb-4">
          אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע. למרות שאיננו מטפלים באופנועים, אנו הכתובת המקצועית שלך לכל צורך בגרירת רכבים פרטיים ומסחריים באזור אחוזה והסביבה.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה</li>
          <li>ציוד גרירה מתקדם לרכבים ורכבי 4x4</li>
          <li>צוות מיומן ומנוסה באזור חיפה והקריות</li>
          <li>מחירים הוגנים ושקיפות מלאה</li>
        </ul>
        <p>צריכים עזרה עם הרכב? צרו קשר עוד היום לקבלת הצעת מחיר בטלפון.</p>
      </section>
    </main>
  );
}