import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירת רכבים באחוזה חיפה - זמינות 24/7 ומחיר הוגן",
  description: "נתקעת עם הרכב באזור אחוזה חיפה? אנו מציעים שירותי גרירה וחילוץ רכבים פרטיים ומסחריים 24/7. הגעה מהירה, מחיר הוגן ושקיפות מלאה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance for cars and commercial vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה חיפה - 24/7 לכל סוגי הרכבים</h1>
          <p className="text-xl mb-8">
            זקוקים לשירותי גרירה מקצועיים באזור אחוזה והכרמל? אנו מתמחים בגרירה וחילוץ של רכבים פרטיים, מסחריים ורכבי שטח. 
            שימו לב: איננו מספקים שירותי גרירה לאופנועים. אם הרכב שלכם נתקע, הצוות שלנו זמין עבורכם 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשר עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירת רכבים באחוזה?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>ציוד גרירה מתקדם המותאם לרכבים פרטיים ומסחריים.</li>
          <li>מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
          <li>מומחיות בחילוץ בשטח, כולל <Link href="/areas/haifa-general/4x4-vehicle-stuck-in-mud-carmel-forest" className="text-blue-600 underline">חילוץ רכבי 4x4 באזור הכרמל</Link>.</li>
          <li>שירות מקצועי ומהיר לתושבי אחוזה ומרכז הכרמל.</li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">באילו רכבים אתם מטפלים?</h3>
              <p>אנו מספקים שירותי גרירה לרכבים פרטיים, מסחריים ורכבי שטח. אנא שימו לב כי איננו גוררים אופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold">מהו טווח המחירים לשירות גרירה באחוזה?</h3>
              <p>המחיר נקבע בהתאם למרחק הגרירה וסוג הרכב. אנו מקפידים על הצעת מחיר הוגנת ומשתלמת. לפרטים נוספים, <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">ניתן לבדוק את שירותינו באזור הצ'ק פוסט והסביבה</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מבצעים חילוצי שטח בחיפה?</h3>
              <p>כן, אנו מומחים ב-<Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="text-blue-600 underline">חילוץ רכבים מהבוץ באזור שמורת הכרמל</Link> ופועלים באזורים מורכבים סביב העיר.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}