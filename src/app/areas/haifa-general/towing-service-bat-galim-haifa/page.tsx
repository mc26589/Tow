import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בבת גלים חיפה | שירות מקצועי, הגעה מהירה 24/7",
  description: "נתקעתם עם הרכב בבת גלים? גרר בחיפה זמין עבורכם 24/7. שירות גרירה מהיר, מחיר הוגן והגעה מהירה לכל אזור בת גלים והסביבה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-bat-galim-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8268",
      "longitude": "34.9710"
    },
    "priceRange": "₪150-500",
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            גרר רכב בבת גלים חיפה – שירות אמין ומחיר הוגן 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בבת גלים? זקוקים לגרר בחיפה? הצוות שלנו זמין 24/7 לחילוץ וגרירה מהירה לכל סוגי הרכבים. הגעה מהירה לאזור החוף ושכונת בת גלים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="בת גלים, חיפה" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חייגו עכשיו לשירות מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לשירותי גרירה בבת גלים?</h2>
        <p className="mb-4">
          אנו מספקים שירותי גרירה מקצועיים בכל אזור חיפה. אם נתקעתם בדרכים או מחפשים <Link href="/areas/haifa-general/cheap-car-towing-service-neve-shaanan-haifa" className="text-blue-600 underline">שירות גרירה משתלם בשכונות נוספות כמו נווה שאנן</Link>, אנחנו כאן. בנוסף, עבור רכבים שנזקקו לחילוץ מורכב בקרבת העיר, אנו מפנים לעיתים לשירותי <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">גרירה באזור הצ'ק פוסט</Link>. הצוות שלנו מקפיד על עמידה בזמנים ושקיפות מלאה במחיר.
        </p>
        <p className="text-sm text-gray-600">
          *הערה: השירות מתמקד ברכבים פרטיים ומסחריים, אינו כולל גרירת אופנועים.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירת רכבים בבת גלים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן אתם מגיעים לבת גלים?</h3>
              <p>בזכות פריסה רחבה בחיפה, אנו מגיעים לרוב חלקי בת גלים בזמן מהיר מאוד. מומלץ ליצור קשר טלפוני לקבלת הערכת זמן מדויקת בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מבצעים חילוצי שטח בקרבת הים?</h3>
              <p>במקרים של רכב שנתקע בחול בקרבת החוף, אנו נבחן את רמת המורכבות. למידע נוסף על סוגי שירותים נוספים שאנו מציעים בחיפה, בקרו בדפי השירות שלנו.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">אילו סוגי שירותי גרירה נוספים אתם מספקים?</h3>
              <p>מעבר לשירותי גרירה רגילים, אנו מציעים מענה לסיטואציות שונות, החל מ-<Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="text-blue-600 underline">גרירת רכבים לאחר תאונה</Link> ועד לטיפול מקצועי ברכבים חשמליים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}