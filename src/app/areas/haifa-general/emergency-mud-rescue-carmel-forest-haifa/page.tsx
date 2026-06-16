import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ ביערות הכרמל - חילוץ שטח 24/7 | הגעה מהירה",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ רכב מהשטח 24/7. צוות מיומן לכל סוגי הרכבים במחיר הוגן. צריכים עזרה דחופה? התקשרו אלינו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
    "serviceType": "Emergency Vehicle Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ ביערות הכרמל וחיפה – שירות מקצועי 24/7</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בבוץ באזור יערות הכרמל? אנו כאן לסייע. אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח (4x4). 
            לעיתים עדיף לבדוק גם שירותי גרירה אחרים כגון <Link href="/areas/haifa-general/suv-stuck-in-mud-rescue-haifa-university" className="underline font-bold">חילוץ רכבי שטח באוניברסיטת חיפה</Link> אם אתם באזור.
            <strong>שימו לב: איננו מספקים שירותי חילוץ לאופנועים.</strong>
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ מהשטח?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24/7 לכל אזור חיפה והקריות.</li>
            <li>✓ ציוד חילוץ מתקדם לרכבים תקועים בבוץ ובשטח.</li>
            <li>✓ צוות מיומן ומקצועי עם ניסיון רב בחילוצי שטח.</li>
            <li>✓ מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על חילוץ רכב באזור חיפה</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם מחלצים רכבים רק ביערות הכרמל?</h3>
              <p>אנחנו מעניקים שירותי חילוץ בכל אזור חיפה והקריות. אם נתקעתם באזורים נוספים, אנו יכולים להפנות אתכם לשירותים כגון <Link href="/areas/haifa-general/emergency-towing-stella-maris-haifa" className="text-blue-600">גרירת רכב בסטלה מאריס</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">מה טווח המחירים לחילוץ בבוץ?</h3>
              <p>מחיר החילוץ נקבע לפי סוג הרכב, מידת השקיעה בבוץ ונגישות השטח. אנו מקפידים על מחיר הוגן ותחרותי בשוק.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}