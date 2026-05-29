import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב מבוץ באזור הכרמל | שירות מהיר 24/7",
  description: "נתקעתם בבוץ בכרמל? אנו מציעים שירותי חילוץ רכב מקצועיים, מהירים ובטוחים. זמינים 24/7 לכל סוגי הרכבים (למעט אופנועים). התקשרו עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "serviceType": "חילוץ רכב מבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב מבוץ באזור הכרמל</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 ששקעו בתנאי שטח. 
            הצוות שלנו זמין 24/7 ומגיע במהירות לכל נקודה בכרמל עם ציוד חילוץ מקצועי.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי חילוץ מקצועיים בכרמל</h2>
          <p className="mb-4">אנו מבינים את הקושי והלחץ הכרוכים בשקיעה בבוץ. הניסיון הרב שלנו בדרכי הכרמל מאפשר לנו להעניק פתרון מהיר, בטוח ומשתלם.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>חילוץ רכבים פרטיים ורכבי שטח (4x4)</li>
            <li>ציוד חילוץ מתקדם למניעת נזקים</li>
            <li>זמינות מלאה 24 שעות ביממה</li>
            <li>מחירים הוגנים ושקופים</li>
          </ul>
          <p className="text-sm text-gray-600 italic">
            *שימו לב: אנו מתמחים בחילוץ רכבים, רכבים מסחריים ורכבי שטח בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}