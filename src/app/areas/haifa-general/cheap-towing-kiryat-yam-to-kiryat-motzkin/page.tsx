import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר מקרית ים לקרית מוצקין - שירות מהיר ומחיר הוגן 24/7",
  description: "נתקעת עם הרכב? שירותי גרירה מקצועיים מקרית ים לכל יעד בקרית מוצקין. זמינות 24/7, מחירים הוגנים והגעה מהירה. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-kiryat-yam-to-kiryat-motzkin",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה מקרית ים לקרית מוצקין",
    "areaServed": { "@type": "City", "name": "קרית ים וקרית מוצקין" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "opens": "00:00", "closes": "23:59" },
    "priceRange": "$ - $$",
    "serviceType": "גרירת רכבים פרטיים ומסחריים"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב זול 24/7 מקרית ים לכיוון קרית מוצקין</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בדרך? אנו מספקים שירותי גרירה מהירים ומקצועיים מקרית ים לקרית מוצקין. שירות זמין בכל שעות היממה לרכבים פרטיים ומסחריים. 
            צריכים עזרה נוספת בקריות? ניתן לבדוק גם <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="underline">שירותי גרירה על כביש 22</Link>.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית ים וקרית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חייגו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בנו?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">זמינות 24/7</h3>
              <p>אנו עובדים מסביב לשעון, כולל שבתות וחגים, כדי להבטיח שלא תישאר תקוע.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מחירים הוגנים</h3>
              <p>שירות גרירה מקצועי במחיר משתלם ללא הפתעות, גם אם מדובר ב<Link href="/areas/haifa-general/cheap-small-car-towing-kiryat-motzkin-nave-ganim" className="underline">גרירת רכבים קטנים בנווה גנים</Link>.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מקצועיות וניסיון</h3>
              <p>ציוד גרירה מתקדם ומיומנות גבוהה המבטיחים שמירה מלאה על הרכב שלכם.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על גרירה בקריות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן הגרר מגיע?</h3>
              <p>אנו עושים את המקסימום כדי להגיע אליכם תוך 30-45 דקות בתוך אזור הקריות.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם קונים רכבים לפירוק?</h3>
              <p>כן, אנו מספקים גם שירותי פינוי רכבים. אם יש לכם רכב ישן, ניתן לראות מידע נוסף בקישור <Link href="/areas/haifa-general/buy-old-cars-for-scrap-kiryat-yam" className="text-blue-600 underline">קניית רכבים לפירוק בקרית ים</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}