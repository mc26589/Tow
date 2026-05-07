import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים, רכבי שטח ומסחריות. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה באחוזה והסביבה</h2>
        <p className="text-lg leading-relaxed mb-6">
          אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע. למרות שאיננו מטפלים באופנועים, הצוות שלנו ערוך לתת מענה מקצועי לכל סוגי הרכבים הפרטיים והמסחריים באזור אחוזה בחיפה. אנו מתחייבים למחירים הוגנים, שקיפות מלאה ושירות אדיב 24 שעות ביממה.
        </p>
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24/7 בכל אזור חיפה והקריות</li>
            <li>ציוד גרירה חדיש ומתוחזק</li>
            <li>צוות מיומן ומקצועי</li>
            <li>מחירים הוגנים ללא הפתעות</li>
          </ul>
        </div>
      </section>
    </main>
  );
}