import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנועים כבדים באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8">אנו מתמחים בחילוץ וגרירת רכבים, רכבים מסחריים ו-4x4. שימו לב: איננו מספקים שירות לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לשירות גרירה
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ באזור אחוזה</h2>
        <p className="mb-4">
          אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע. הצוות שלנו פועל 24/7 באזור חיפה והקריות ומציע פתרונות גרירה מתקדמים לרכבים פרטיים ומסחריים.
        </p>
        <p className="mb-4">
          <strong>הערה חשובה:</strong> למרות החיפוש אחר שירות לאופנועים כבדים, אנו מתמקדים אך ורק ברכבים בעלי 4 גלגלים ומעלה. איננו ערוכים לשינוע אופנועים מכל סוג שהוא.
        </p>
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24 שעות ביממה</li>
            <li>ציוד גרירה חדיש ומקצועי</li>
            <li>מחירים הוגנים ושקופים</li>
            <li>צוות מיומן ומנוסה באזור חיפה</li>
          </ul>
        </div>
      </section>
    </main>
  );
}