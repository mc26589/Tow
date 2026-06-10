import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "רכב תקוע בבוץ ליד אוניברסיטת חיפה? חילוץ מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בדרכי העפר ליד אוניברסיטת חיפה או ביערות הכרמל? שירות חילוץ רכב תקוע בבוץ 24/7. הגעה מהירה, מחיר הוגן ושירות מקצועי. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "חיפה והקריות",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7625",
      "longitude": "35.0150"
    },
    "serviceType": "חילוץ רכב תקוע בבוץ, גרירת רכבים, חילוץ שטח"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">רכב תקוע בבוץ באזור יערות הכרמל ליד אוניברסיטת חיפה? חילוץ שטח מיידי</h1>
          <p className="text-xl mb-6">נתקעתם בדרכי העפר של הכרמל? הצוות שלנו זמין 24/7 לחילוץ רכבים ששקעו בבוץ באזור אוניברסיטת חיפה והסביבה.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי חילוץ מקצועיים בכרמל</h2>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים, רכבי שטח ורכבים מסחריים שנתקעו בבוץ או בדרכים משובשות. הניסיון הרב שלנו בתוואי השטח של חיפה והכרמל מבטיח טיפול מהיר, בטוח ומקצועי. אנו מספקים מענה גם באזורים סמוכים, כגון <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="text-blue-600 underline">חילוץ רכבים ששקעו בבוץ בכל אזור הכרמל</Link> או <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 underline">סיוע מקצועי בחילוץ רכב תקוע בבוץ באזור הכרמל</Link>.</p>
        <p className="text-red-600 font-bold mb-4">חשוב להבהיר: איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        <p className="mb-4">אנו מציעים מחירים הוגנים ושירות אדיב לכל תושבי האזור והמטיילים. אם נדרש שירות משלים באזורים כמו אחוזה, תוכלו להיעזר ב<Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-600 underline">שירותי גרירה זולים באחוזה חיפה עם מחיר שקוף</Link>.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכב בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו לחלץ אותי באוניברסיטת חיפה?</h3>
              <p>אנו עושים את מירב המאמצים להגיע תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה ותנאי השטח בכרמל.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מחלצים רכבי שטח ששקעו עמוק בבוץ?</h3>
              <p>כן, הצוות שלנו מצויד באמצעי חילוץ ייעודיים לרכבי שטח ורכבים פרטיים שנתקעו בתוואי שטח מאתגרים ביערות הכרמל.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו מחיר חילוץ רכב תקוע?</h3>
              <p>המחיר משתנה בהתאם לרמת הקושי של החילוץ ומיקום הרכב. אנו מקפידים על מחיר הוגן ותחרותי בשוק החילוצים בחיפה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}