import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בצומת צ'ק פוסט | מחיר הוגן, שירות 24/7",
  description: "נתקעתם בצומת צ'ק פוסט? שירותי גרירה מקצועיים וזולים לרכבים פרטיים ומסחריים. הגעה מהירה, זמינות 24/7 ומחיר הוגן. התקשרו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צומת צ'ק פוסט",
    "areaServed": "צומת צ'ק פוסט, חיפה",
    "priceRange": "$$,$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7858",
      "longitude": "35.0235"
    },
    "serviceType": "גרירת רכבים, חילוץ רכבים, שירותי דרך"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            זקוקים לשירותי גרירה בצומת צ'ק פוסט? אנו מציעים מענה מהיר ומקצועי לכל סוגי הרכבים. אם נתקעתם באזור, אנו זמינים 24/7. 
            לחלופות נוספות באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="underline font-semibold">שירותי גרירה מהירים בצ'ק פוסט</Link> או <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline font-semibold">גרירת רכבים תקועים באזור הצ'ק פוסט</Link>. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט והסביבה.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ צוות מיומן ומקצועי עם ציוד גרירה חדיש.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">תוך כמה זמן תגיעו לצומת?</h3>
              <p>אנו מתחייבים לזמני הגעה קצרים ככל הניתן בהתאם לעומסי התנועה בצומת המרכזית.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים רכבים מהצ'ק פוסט לכל הארץ?</h3>
              <p>כן, אנו נותנים שירותי גרירה מצומת צ'ק פוסט לכל יעד מבוקש בתיאום מראש.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}