import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בקרית מוצקין 24/7 | הגעה מהירה ומחיר הוגן",
  description: "נתקעתם בקרית מוצקין? גרר מקצועי זמין 24/7 לכל סוגי הרכבים. הגעה מהירה, שירות אמין ומחיר הוגן ללא הפתעות. התקשרו עכשיו לפתרון מיידי!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירת רכב בקרית מוצקין 24/7 במחיר הוגן</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם הרכב בקרית מוצקין? צוות המומחים שלנו זמין 24/7 לכל תקלה. אנו מציעים גרירה מקצועית, אמינה ובמחיר הוגן לכל סוגי הרכבים הפרטיים והמסחריים הקלים. למידע על אזורים נוספים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="underline font-semibold">גרירת חירום בכביש 22 עוקף קריות</Link>. שימו לב: השירות אינו כולל גרירת אופנועים.
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
              <p>אנו פועלים מסביב לשעון, גם בסופי שבוע ובחגים, כדי להבטיח מענה מהיר בכל נקודה בקרית מוצקין.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">מחירים הוגנים ושקופים</h3>
              <p>ללא "הפתעות" בדרך. הצעת המחיר ניתנת מראש בצורה הוגנת ומקצועית.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">שירות רב-תחומי</h3>
              <p>מציעים גם שירותי <Link href="/areas/haifa-general/cheap-off-road-vehicle-towing-kiryat-motzkin" className="text-blue-400">גרירת רכבי שטח בקרית מוצקין</Link> ופתרונות גרירה מתקדמים לכל סוגי הרכבים.</p>
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
              <p className="text-gray-700">הצוות שלנו פועל בפריסה אזורית ומגיע לרוב תוך 30-45 דקות מרגע הקריאה, בהתאם לעומסי התנועה בצירים המרכזיים בקריות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו טווח המחירים לגרירה?</h3>
              <p className="text-gray-700">המחיר משתנה לפי מרחק הגרירה, שעת הקריאה וסוג הרכב. אנו מתחייבים למחירים הוגנים ותחרותיים בשוק הגרירה המקומי.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים גם באזורים סמוכים?</h3>
              <p className="text-gray-700">בהחלט. אנו מספקים שירותים גם בערים הסמוכות, כגון <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-yam-disabled-vehicle" className="text-blue-600 hover:underline">גרירה בקרית ים</Link> וכן מענה מהיר בנקודות מרכזיות כמו <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-600 hover:underline">גרירה בצומת צ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}