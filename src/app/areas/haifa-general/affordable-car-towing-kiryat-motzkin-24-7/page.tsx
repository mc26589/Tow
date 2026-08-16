import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בקרית מוצקין 24/7 | הגעה מהירה ומחיר הוגן",
  description: "נתקעתם בקרית מוצקין? גרר מקצועי זמין 24/7 לכל סוגי הרכבים. הגעה תוך 30 דקות, שירות אמין ומחיר ללא הפתעות. לחיצה אחת להזמנת גרר - התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בקרית מוצקין 24/7",
    "areaServed": "Kiryat Motzkin",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "priceRange": "$$,$",
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירת רכב בקרית מוצקין 24/7 - הגעה מהירה!</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם הרכב בקרית מוצקין? צוות המומחים שלנו זמין 24/7 לכל תקלה. אנו מציעים גרירה מקצועית, אמינה ובמחיר הוגן לכל סוגי הרכבים הפרטיים והמסחריים הקלים. זקוקים לסיוע בדרכים מהירות? בדקו גם <Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="underline font-semibold">גרירת רכב מהירה בכביש 22 עוקף קריות</Link>. שימו לב: השירות אינו כולל גרירת אופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בשירות הגרירה שלנו בקריות?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">זמינות 24/7</h3>
              <p>אנו פועלים מסביב לשעון, גם בסופי שבוע ובחגים, כדי להבטיח מענה מהיר בכל נקודה בקרית מוצקין ובסביבתה.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">מחירים הוגנים ושקופים</h3>
              <p>ללא "הפתעות" בדרך. הצעת המחיר ניתנת מראש בצורה הוגנת ומקצועית לכל סוגי התקלות בדרכים. אם אתם עוברים באזור הקריות, נשמח לספק <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-400">שירותי גרירה זולים בקרית ביאליק</Link>.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">פריסה אזורית רחבה</h3>
              <p>מספקים מענה מקצועי גם בערים סמוכות. נתקעתם עם רכב שלא מניע? אם הרכב ישן מדי לתיקון, אנו מבצעים גם <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-400">קניית רכבים לפירוק בקריות עם גרירה כלולה</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על גרירת רכב בקרית מוצקין</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו אלי בקרית מוצקין?</h3>
              <p className="text-gray-700">הצוות שלנו פרוס בנקודות אסטרטגיות ומגיע לרוב תוך 30-45 דקות מרגע הקריאה, בכפוף לעומסי התנועה באזור.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם ניתן להזמין גרר במחיר זול?</h3>
              <p className="text-gray-700">מחיר הגרירה נקבע לפי מרחק וסוג הרכב. אנו מתחייבים למחיר הוגן ותחרותי. למידע נוסף על זמינות באזור, ראו גם <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 hover:underline">גרירה זולה בצומת צ'ק פוסט</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">נתקעתי בכביש 22, האם אתם מגיעים לשם?</h3>
              <p className="text-gray-700">בהחלט. אנו מומחים בחילוץ מהיר גם בכבישים מהירים עמוסים. אנו מציעים מענה ייעודי עם <Link href="/areas/haifa-general/emergency-towing-road-22-krayot-bypass" className="text-blue-600 hover:underline">שירותי גרירה בכביש 22 עוקף קריות</Link> בכל שעות היממה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}