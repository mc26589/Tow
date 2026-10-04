import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי באחוזה, חיפה 24/7 | חילוץ מהיר - עד 30 דקות",
  description: "נתקעת עם הרכב החשמלי באחוזה? שירות גרירה 24/7 לרכבים עם מצבר פרוק. הגעה מהירה לכל אזור הכרמל ומוריה. מחיר הוגן ושירות מקצועי. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa",
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
    "serviceType": "Electric Vehicle Towing and Battery Rescue"
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
            גרירת רכב חשמלי 24/7 בשכונת אחוזה, חיפה
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת עם הרכב החשמלי באחוזה? אנו מומחים בחילוץ וגרירה של רכבים חשמליים עם מצבר פרוק. הגעה מהירה לכל נקודה בכרמל.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">מדוע לבחור בשירותי הגרירה שלנו באחוזה?</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע לכל אזור אחוזה וציר מוריה.</li>
          <li>מומחיות טכנית בטיפול ברכבים חשמליים ומערכות מתח גבוה.</li>
          <li>ציוד חילוץ מתקדם להעמסה בטוחה ללא נזק לרכב.</li>
          <li>סיוע מקצועי גם עבור <Link href="/areas/haifa-general/emergency-mud-recovery-service-carmel-forest-haifa" className="text-blue-600 font-semibold underline">חילוץ רכב מהשטח בכרמל</Link>.</li>
          <li>שקיפות מלאה במחיר ללא הפתעות מיותרות.</li>
        </ul>

        <div className="mt-10 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות על גרירת רכבים באחוזה</h3>
            <div className="space-y-4">
                <div>
                    <p className="font-bold">באילו מקרים צריך להזמין גרירה לרכב חשמלי?</p>
                    <p className="text-gray-700">בדרך כלל כשהמצבר פרוק לחלוטין, בתקלות בקרת טעינה, או במצבי נעילה שונים. אנו ערוכים לכל מקרה ומציעים שירות מקיף בדומה ל- <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">גרירת רכב חשמלי בכביש 22</Link>.</p>
                </div>
                <div>
                    <p className="font-bold">האם אתם מפנים רכבים ישנים מהשכונה?</p>
                    <p className="text-gray-700">כן, אנו מספקים שירותי פינוי גרוטאות. למידע נוסף ניתן לבדוק את שירותי ה- <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 underline">פירוק רכבים בחיפה והקריות</Link>.</p>
                </div>
                <div>
                    <p className="font-bold">מה עושים אם נתקעתי עם הרכב בתוך מנהרות הכרמל?</p>
                    <p className="text-gray-700">במקרה של תקלה בדרכים מרכזיות באזור, אנו מציעים מענה מהיר. ראו דפי מידע נוספים כמו <Link href="/areas/haifa-general/car-rescue-carmel-tunnels-haifa" className="text-blue-600 underline">חילוץ רכב ממנהרות הכרמל</Link>.</p>
                </div>
            </div>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          *שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים וארבע על ארבע. איננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}