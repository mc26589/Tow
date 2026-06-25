import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בבת גלים חיפה - שירות מקצועי, מחיר הוגן והגעה מהירה",
  description: "נתקעתם בבת גלים? זקוקים לגרר בחיפה? שירותי גרירה 24/7 לכל סוגי הרכבים באזור בת גלים במחיר משתלם. התקשרו עכשיו לקבלת מענה מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-bat-galim-haifa",
  },
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
      "latitude": "32.8268",
      "longitude": "34.9710"
    },
    "priceRange": "$0-500",
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
            גרר רכב בבת גלים חיפה – שירות אמין ומחיר הוגן
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם באזור בת גלים? אל תחכו שעות. שירות גרירה מהיר ומקצועי לכל סוגי הרכבים. אנחנו בדרך אליכם!
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
          אנו מתמחים בחילוץ וגרירת רכבים בחיפה ובאזור בת גלים. אם נתקעתם בדרכים או אם אתם צריכים <Link href="/areas/haifa-general/car-stuck-in-sand-bat-galim-haifa" className="text-blue-600 underline">סיוע לרכב שנתקע בחול בבת גלים</Link>, הצוות שלנו זמין עבורכם. אנו מקפידים על מחיר הוגן, הגעה מהירה ושירות שקוף ללא הפתעות.
        </p>
        <p className="text-sm text-gray-600">
          *הערה: השירות אינו כולל גרירת אופנועים.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירת רכבים בבת גלים</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">תוך כמה זמן אתם מגיעים לבת גלים?</h3>
              <p>הצוות שלנו מפוזר בנקודות אסטרטגיות בחיפה, מה שמאפשר לנו הגעה מהירה לרוב חלקי שכונת בת גלים בזמן קצר.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים רכבים מהים?</h3>
              <p>אנו מבצעים חילוצים מורכבים. במקרה של <Link href="/areas/haifa-general/car-stuck-in-sand-bat-galim-haifa" className="text-blue-600 underline">רכב שנתקע בחוף בת גלים</Link> או באזורים קרובים, מומלץ ליצור קשר טלפוני לתיאום חילוץ.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}