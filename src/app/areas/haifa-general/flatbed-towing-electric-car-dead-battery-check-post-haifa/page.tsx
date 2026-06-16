import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בצ'ק פוסט חיפה | שירות 24/7 מהיר ומקצועי",
  description: "נתקעתם עם רכב חשמלי באזור הצ'ק פוסט בחיפה? אנו מספקים שירותי גרירה על גבי משטח (Flatbed) לרכבים חשמליים במחיר הוגן. הגעה מהירה 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/flatbed-towing-electric-car-dead-battery-check-post-haifa",
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
      "latitude": "32.7940",
      "longitude": "35.0260"
    },
    "priceRange": "$",
    "serviceType": "Flatbed towing for electric vehicles"
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
            גרירת רכב חשמלי עם מצבר פרוק בצ'ק פוסט חיפה
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם עם רכב חשמלי באזור הצ'ק פוסט? אנו מספקים שירותי גרירה על גבי משטח (Flatbed) המותאמים לרכבים חשמליים. פתרון מהיר, מקצועי ובטוח.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והצ'ק פוסט" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירת רכב חשמלי?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-6">
          <li>שימוש בגרר משטח בלבד למניעת נזקים למערכת ההנעה הרגישה.</li>
          <li>זמינות 24/7 באזור חיפה, הצ'ק פוסט והקריות.</li>
          <li>מומחיות בחילוץ רכבים חשמליים, היברידיים ורכבי 4x4.</li>
          <li>שירות מקצועי ומחירים הוגנים ללא הפתעות.</li>
        </ul>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-3">שירותים נוספים באזורנו:</h3>
          <ul className="space-y-2">
            <li><Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-600 hover:underline">שירות גרירה זול בצ'ק פוסט חיפה</Link></li>
            <li><Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="text-blue-600 hover:underline">גרירה לאחר תאונה בכביש 22 צ'ק פוסט</Link></li>
            <li><Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-600 hover:underline">שירות גרירה משתלם באזור הצ'ק פוסט</Link></li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-10 mb-4">שאלות נפוצות</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">מה עושים כשנגמר המצבר ברכב חשמלי בצ'ק פוסט?</h4>
            <p>רכבים חשמליים דורשים הובלה בגרר משטח כדי לא לפגוע במערכת ההנעה. אנו זמינים בכל שעה לחלץ אתכם בבטחה.</p>
          </div>
          <div>
            <h4 className="font-bold">האם אתם גוררים רכבים גם מהצ'ק פוסט למוסכים מרוחקים?</h4>
            <p>כן, אנו נותנים שירותי גרירה מהצ'ק פוסט לכל יעד בחיפה, בקריות ובסביבה במחירים הוגנים.</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          *שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}