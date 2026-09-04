import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בצ'ק פוסט חיפה | שירות 24/7 מהיר ומקצועי",
  description: "נתקעתם עם רכב חשמלי באזור הצ'ק פוסט בחיפה? גרירת משטח (Flatbed) בטוחה לרכב חשמלי עם מצבר פרוק. מחיר הוגן, זמינות 24/7 והגעה מהירה. התקשרו עכשיו!",
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
    "priceRange": "$$,$",
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
            נתקעתם עם רכב חשמלי באזור הצ'ק פוסט? אנו מומחים בגרירת רכבים חשמליים על גבי משטח (Flatbed) למניעת נזקים. פתרון בטוח וזמין 24/7.
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
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירת רכב חשמלי באזור הצ'ק פוסט?</h2>
        <p className="mb-6">רכב חשמלי דורש טיפול מיוחד. גרירה לא מקצועית עלולה להוביל לנזקים במערכת ההנעה. אנו משתמשים בציוד מתקדם ובגרר משטח מותאם.</p>
        <ul className="list-disc pr-6 space-y-2 mb-6">
          <li>שימוש בגרר משטח בלבד למניעת נזקים למערכת ההנעה הרגישה.</li>
          <li>זמינות 24/7 באזור חיפה, הצ'ק פוסט והקריות.</li>
          <li>מומחיות בחילוץ רכבים חשמליים, היברידיים ורכבי שטח.</li>
          <li>הגעה מהירה גם לאירועים מורכבים כמו <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600 underline">חילוץ רכב לתעלה בכביש 4</Link>.</li>
        </ul>
        
        <div className="p-6 bg-gray-50 rounded-lg mb-10">
          <h3 className="text-xl font-bold mb-3">שירותים נוספים באזור חיפה והקריות:</h3>
          <ul className="space-y-2">
            <li><Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="text-blue-600 hover:underline">שירות גרירה לרכב תקוע בכביש 22</Link></li>
            <li><Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="text-blue-600 hover:underline">גרר זול לרכב תקוע בקרית ים</Link></li>
            <li><Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="text-blue-600 hover:underline">שירותי גרירה דחופים באחוזה וחורב</Link></li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-10 mb-4">שאלות נפוצות</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">מה עושים כשנגמר המצבר ברכב חשמלי בצ'ק פוסט?</h4>
            <p>רכבים חשמליים דורשים הובלה בגרר משטח כדי לא לפגוע במערכת ההנעה (במיוחד בתיבת ההילוכים). אנו זמינים בכל שעה לחלץ אתכם בבטחה מהצ'ק פוסט לכל יעד מבוקש.</p>
          </div>
          <div>
            <h4 className="font-bold">כמה עולה גרירת רכב חשמלי באזור חיפה?</h4>
            <p>מחיר הגרירה נקבע לפי המרחק וסוג הרכב. אנו מתחייבים למחיר הוגן ושקוף ללא הפתעות. צרו קשר לקבלת הצעת מחיר מדויקת.</p>
          </div>
          <div>
            <h4 className="font-bold">האם אתם גוררים רכבים מהצ'ק פוסט למוסכים מרוחקים?</h4>
            <p>כן, אנו נותנים שירותי גרירה מהצ'ק פוסט לכל מוסך מורשה או פרטי בחיפה, בקריות ובסביבה במחיר משתלם.</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          *שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי גרירה לאופנועים (לגרירת אופנועים ניתן להיעזר בשירותים ייעודיים אחרים).
        </p>
      </section>
    </main>
  );
}