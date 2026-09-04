import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר זול בצומת צ'ק פוסט והקריות | הגעה מהירה 24/7",
  description: "נתקעתם עם הרכב בצומת צ'ק פוסט? שירותי גרירה מקצועיים, מחירים הוגנים וזמינות מסביב לשעון לרכבים פרטיים ומסחריים. התקשרו עכשיו להזמנת גרר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
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
      "latitude": "32.7940",
      "longitude": "35.0230"
    },
    "serviceType": ["גרירת רכבים פרטיים", "גרירת רכבים מסחריים", "גרירת רכבי 4x4"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בצומת צ'ק פוסט? אנו מציעים שירותי גרירה מהירים לרכבים פרטיים, מסחריים ורכבי 4x4 במחירים הוגנים. זקוקים לחילוץ מורכב? אולי תרצו להציץ בפתרונות עבור <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="underline">חילוץ רכב תקוע בכביש 4</Link> או <Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="underline">גרירה בכביש 22</Link>.</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו באזור צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט והסביבה.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ מומחיות בטיפול ברכבים חשמליים עם <Link href="/areas/haifa-general/flatbed-towing-electric-car-dead-battery-check-post-haifa" className="underline">גרירת רכב חשמלי עם מצבר פרוק</Link>.</li>
          </ul>
          
          <div className="mt-12 bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה בצ'ק פוסט</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold">מהו זמן ההגעה הממוצע לצומת צ'ק פוסט?</p>
                <p>ברוב המקרים, הצוות שלנו מגיע תוך 30-45 דקות, בהתאם לעומסי התנועה בציר הראשי.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם גוררים גם רכבים מסחריים?</p>
                <p>כן, אנו נותנים מענה מקצועי לרכבים פרטיים, מסחריים ורכבי 4x4. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
              </div>
              <div>
                <p className="font-bold">מה לעשות אם נתקעתי בכביש 22?</p>
                <p>כביש 22 הוא ציר מרכזי ומסוכן לעצירה. מומלץ לעבור בבטחה אל השוליים ולהזמין גרר בהקדם. תוכלו לקרוא מידע נוסף על <Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="underline">שירותי גרירה בכביש 22</Link> אצלנו באתר.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}