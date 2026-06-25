import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר רכבים באחוזה חיפה | שירות מקצועי 24/7 - הגעה מהירה",
  description: "נתקעת עם הרכב באחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים, מסחריים ו-4x4 בזמינות 24/7. מחיר הוגן ושירות מהיר. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ רכבים באחוזה, חיפה - מענה 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            זקוקים לשירותי גרירה באחוזה? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח. שירות מהיר, אמין ומקצועי בכל שעות היממה.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה חיפה" />
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
        <h2 className="text-3xl font-bold mb-6">גרירת רכבים וחילוץ באזור אחוזה והכרמל</h2>
        <p className="mb-4">אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע. הצי שלנו ערוך לכל סוגי הרכבים למעט אופנועים:</p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>גרירת רכבים פרטיים מכל הסוגים</li>
          <li><Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 hover:underline">חילוץ רכבי שטח ו-4x4 בחיפה</Link></li>
          <li>שירותי גרירה לרכבים מסחריים</li>
          <li><Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-400 hover:underline">פינוי גרוטאות רכב ושירותי גרירה</Link></li>
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע</li>
        </ul>
      </section>

      <section className="py-16 container mx-auto px-4 bg-neutral-900/50 rounded-xl">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות - גרירת רכבים באחוזה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">תוך כמה זמן תגיעו אלינו באחוזה?</h3>
            <p>אנחנו ערוכים עם צוותים הפרוסים ברחבי חיפה והכרמל כדי להגיע אליכם במהירות האפשרית, לרוב תוך פחות מ-45 דקות מרגע הקריאה.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">האם אתם מבצעים חילוצי שטח בחיפה?</h3>
            <p>כן, אנו מומחים בחילוץ רכבים מבוץ ומדרכים לא סלולות. ניתן לעיין בשירותי <Link href="/areas/haifa-general/4x4-stuck-mud-rescue-carmel-forest-haifa" className="text-blue-400">חילוץ 4x4 ביערות הכרמל</Link> שלנו.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">מהו מחיר הגרירה?</h3>
            <p>מחיר הגרירה נקבע לפי מרחק הגרירה וסוג הרכב. אנו מתחייבים למחיר הוגן ושקוף ללא הפתעות. התקשרו לקבלת הצעת מחיר מדויקת.</p>
          </div>
        </div>
      </section>
    </main>
  );
}