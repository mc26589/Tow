import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר לרכב באחוזה חיפה - שירות מקצועי 24/7 | מחיר הוגן",
  description: "נתקעת עם הרכב באזור אחוזה בחיפה? אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ רכבים אחוזה חיפה",
    "areaServed": "Haifa, Ahuza",
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
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה וחילוץ לרכב באחוזה חיפה</h1>
          <p className="text-lg mb-4">
            חשוב להבהיר: אנו מתמחים בשירותי גרירה וחילוץ לרכבים פרטיים, רכבים מסחריים ורכבי 4x4 באזור חיפה והקריות. 
            נכון לעכשיו, איננו מספקים שירותי גרירה לאופנועים. אם הרכב שלכם נתקע, אנו הכתובת הנכונה.
          </p>
          <p className="text-lg mb-8">
            בין אם מדובר ב<Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="underline font-semibold">רכב שנתקע בבוץ באזור הכרמל</Link> או צורך ב<Link href="/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa" className="underline font-semibold">גרירת רכב נמוך באחוזה</Link>, הצוות שלנו זמין 24/7 לכל תרחיש.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירת רכבים באחוזה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">תוך כמה זמן אתם מגיעים לאזור אחוזה?</h3>
            <p>אנו פרוסים ברחבי חיפה והכרמל ומסוגלים להגיע לרוב הקריאות באזור אחוזה תוך זמן קצר.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">האם אתם גוררים רכבי שטח שנתקעו בטבע?</h3>
            <p>כן, אנו מומחים ב<Link href="/areas/haifa-general/4x4-vehicle-stuck-in-mud-carmel-forest" className="text-blue-600 underline">חילוץ רכבי 4x4 מאזור הכרמל</Link> ומספקים פתרונות גרירה מתקדמים לכל סוגי הרכבים.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">מהו טווח המחירים לשירות גרירה?</h3>
            <p>המחיר תלוי במרחק הגרירה וסוג הרכב, אך אנו תמיד מקפידים על מחיר הוגן ותחרותי בשוק.</p>
          </div>
        </div>
      </section>
    </main>
  );
}