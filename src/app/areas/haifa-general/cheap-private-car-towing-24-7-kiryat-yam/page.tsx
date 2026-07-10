import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בקרית ים 24/7 | הגעה תוך 30 דקות | מחיר הוגן",
  description: "נתקעתם עם הרכב בקרית יום? גרר 24/7 לרכבים פרטיים ומסחריים. שירות אמין, מהיר ומקצועי במחיר ללא תחרות. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-private-car-towing-24-7-kiryat-yam",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קרית ים",
    "areaServed": "קרית ים",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$,$",
    "serviceType": "Towing Service",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.835",
      "longitude": "35.070"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב פרטי זול 24/7 בקרית ים</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בקרית ים? אנו כאן בשבילכם עם שירות גרירה מהיר ומקצועי. אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4 במחירים הוגנים. 
            צריכים עזרה דחופה באזור? אנו מספקים מענה מהיר גם באזורים סמוכים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="underline font-bold">שירותי גרירה בצומת צ'ק פוסט והקריות</Link>. 
            במידה והרכב במצב גרוטאה שאינו ראוי לנסיעה, ניתן גם לבדוק אפשרות של <Link href="/areas/haifa-general/buy-old-cars-for-scrap-kiryat-yam" className="underline font-bold">מכירת רכב לפירוק בקרית ים</Link>. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">שאלות נפוצות על גרירה בקרית ים</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">תוך כמה זמן הגרר מגיע לקרית ים?</h3>
              <p>אנו משתדלים להגיע לכל נקודה בקרית ים בזמן קצר ככל הניתן, בדרך כלל תוך 30-45 דקות בהתאם לעומסי התנועה.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">האם אתם נותנים שירות גם מחוץ לקרית ים?</h3>
              <p>כן, אנו פעילים בכל אזור הקריות וחיפה. במידה ואתם זקוקים לשירות באזורים סמוכים, מומלץ לבדוק את השירות שלנו ל<Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600">גרירת רכבים בצומת צ'ק פוסט</Link>.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">מהו טווח המחירים לגרירה?</h3>
              <p>מחיר הגרירה נקבע לפי המרחק וסוג הרכב. אנו מתחייבים למחירים הוגנים ושקיפות מלאה ללא הפתעות.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">האם אתם גוררים רכבים מסחריים?</h3>
              <p>כן, אנו מספקים מענה לרכבים מסחריים קלים ופרטיים. לצרכים כבדים יותר באזור הקריות, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-600">גרירת משאיות קלות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}