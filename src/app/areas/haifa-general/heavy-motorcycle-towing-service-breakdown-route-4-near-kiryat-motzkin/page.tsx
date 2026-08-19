import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 4 ליד קריית מוצקין | הגעה מהירה 24/7",
  description: "נתקעתם בכביש 4 ליד קריית מוצקין? שירותי גרירה מקצועיים, מחיר הוגן והגעה תוך 30 דקות לרכבים פרטיים ומסחריים. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-service-breakdown-route-4-near-kiryat-motzkin"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$$,$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0750"
    },
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה וחילוץ רכב בכביש 4 ליד קריית מוצקין</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב בכביש 4? אנו מספקים מענה מקצועי לכל תקלה בדרך. אנו מתמחים בחילוץ רכבים פרטיים, רכבים מסחריים ו-4x4. 
            זקוקים לעזרה באזור? אולי תתעניינו בשירותי <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="underline">גרירה באזור התעשייה קריית ביאליק</Link> הסמוך. 
            <br /><strong>שימו לב: שירותינו מיועדים לרכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בשירותי הגרירה שלנו?</h2>
          <ul className="space-y-4">
            <li>✓ זמינות 24/7 לכל קריאה באזור הקריות וכביש 4</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה ללא הפתעות</li>
            <li>✓ ניסיון רב בחילוץ רכבים מורכב, כולל <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-400">גרירת חירום בכביש עוקף קריות 22</Link></li>
            <li>✓ מענה מהיר גם במצבי <Link href="/areas/haifa-general/cheap-private-car-towing-24-7-kiryat-yam" className="text-blue-400">גרירת רכב פרטי בקריית ים</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירת רכב בכביש 4</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מהו זמן ההגעה הממוצע בכביש 4 ליד מוצקין?</h3>
              <p>אנו משתדלים להגיע לכל קריאה בזמן המהיר ביותר האפשרי, לרוב תוך 30 דקות, בהתאם לעומסי התנועה בציר הראשי.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מספקים גרירה לרכבים חשמליים שנתקעו ללא סוללה?</h3>
              <p>כן, אנו מספקים מענה ייעודי לכל צורך של <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600">גרירת רכב חשמלי באזור הקריות</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">מה עושים עם רכב ישן שלא ניתן לתיקון?</h3>
              <p>אנו מציעים שירותי <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal" className="text-blue-600">פינוי רכב לפירוק בחיפה והקריות</Link> בצורה חוקית ומקצועית.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}