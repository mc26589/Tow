import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בסטלה מאריס חיפה | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בעלייה לסטלה מאריס? שירותי גרירה מקצועיים 24/7 לכל סוגי הרכבים. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-stella-maris-haifa",
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
      "latitude": "32.8315",
      "longitude": "34.9755"
    },
    "priceRange": "$",
    "serviceType": "Emergency Towing and Roadside Assistance"
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
            גרר חירום לרכב תקוע בסטלה מאריס חיפה – שירות מהיר 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בעלייה לסטלה מאריס? אל תסתכנו בדרכים התלולות. צוות המומחים שלנו בדרך אליכם עם ציוד גרירה מתקדם לרכבים פרטיים, מסחריים ורכבי 4x4.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בסטלה מאריס?</h2>
          <p className="mb-4">העלייה לסטלה מאריס דורשת מיומנות וציוד מתאים. אנו מתמחים בחילוץ רכבים באזורים הרריים ותלולים בחיפה. חשוב לציין: אנו מעניקים שירות לרכבים פרטיים, מסחריים ורכבי שטח בלבד. אם אתם מחפשים <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="text-blue-400 underline">חילוץ שטח ביערות הכרמל</Link> או זקוקים לשירותי גרירה באזורים נוספים, אנחנו כאן.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>הגעה מהירה לכל נקודה בסטלה מאריס ובחיפה.</li>
            <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>צוות מנוסה בחילוץ רכבים תקועים בשיפועים חדים.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה בסטלה מאריס</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">תוך כמה זמן אתם מגיעים לסטלה מאריס?</h3>
              <p>אנו מבינים את הדחיפות בעלייה לסטלה מאריס, לכן אנו משתדלים להגיע לכל קריאה בזמן המהיר ביותר האפשרי בהתאם לעומסי התנועה באזור.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים אופנועים?</h3>
              <p>לא, איננו מספקים שירותי גרירה לאופנועים. השירות שלנו מתמקד ברכבים פרטיים, מסחריים ורכבי שטח בלבד.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מעניקים שירותים גם באזורים נוספים בחיפה?</h3>
              <p>כן, אנו מספקים שירותי גרירה בפריסה ארצית ומתמחים באזורי חיפה והקריות, כולל שירותי גרירה כמו <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-600 underline">גרירת רכב בצ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}