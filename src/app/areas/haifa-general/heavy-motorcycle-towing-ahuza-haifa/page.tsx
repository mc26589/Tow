import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר לרכבים באחוזה חיפה | שירות גרירה 24/7 מהיר ומקצועי",
  description: "נתקעת באחוזה? שירותי גרירה וחילוץ לרכבים פרטיים ומסחריים באחוזה חיפה 24/7. מחיר הוגן, מענה מהיר והגעה מידית. לפרטים ולחילוץ התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa"
  }
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ רכבים באחוזה חיפה</h1>
          <p className="text-xl mb-8">זקוקים לחילוץ רכב באחוזה? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. שים לב: השירות לרכבים בעלי 4 גלגלים בלבד.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ מקצועיים באזור אחוזה</h2>
        <p className="mb-4">
          אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע. הצוות שלנו פועל 24/7 באזור חיפה והקריות ומציע פתרונות גרירה מתקדמים. אם הרכב שלכם אינו מניע באזור אחוזה, תוכלו להסתכל גם על השירותים שלנו כגון <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-400 underline">גרירת רכבים חשמליים באזור</Link>.
        </p>
        <p className="mb-4">
          בנוסף לשירותי גרירה, אם הרכב שלכם ישן ולא שווה תיקון, אנו עוסקים גם בתחום <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-400 underline">קניית רכבים לפירוק באחוזה</Link>. אנו מתמחים אך ורק ברכבים בעלי 4 גלגלים ומעלה. איננו ערוכים לשינוע אופנועים מכל סוג שהוא.
        </p>

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
          <h3 className="text-2xl font-semibold mb-4">שאלות נפוצות על גרירה באחוזה</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg">מהו זמן ההגעה המשוער באזור אחוזה?</h4>
              <p>אנו משתדלים להגיע לכל קריאה באזור חיפה והכרמל בתוך 30-45 דקות, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">האם אתם גוררים אופנועים?</h4>
              <p>לא, אנו מתמקדים בשינוע רכבים פרטיים, מסחריים ו-4x4 בלבד. איננו מספקים מענה לאופנועים.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מה כולל שירות החילוץ?</h4>
              <p>השירות כולל גרירה למוסך נבחר, חילוץ רכב תקוע, וסיוע בפריקת מצבר או התנעה לרכבים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}