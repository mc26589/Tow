import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "גרר בקרית ים 24/7 - הגעה מהירה (עד 30 דקות) | מחיר הוגן",
  description: "נתקעתם בקרית ים? גרר 24/7 לרכבים פרטיים ומסחריים. מחירים הוגנים, שירות מקצועי והגעה מהירה לכל נקודה בעיר. התקשרו עכשיו להצעת מחיר משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-private-car-towing-24-7-kiryat-yam",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קרית ים",
    "areaServed": "קרית ים",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$,$",
    "serviceType": "Towing Service",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.835",
      "longitude": "35.070"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב פרטי וזול 24/7 בקרית ים והסביבה</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לשירותי גרירה מקצועיים בקרית ים? אנו זמינים 24/7 ומבטיחים הגעה מהירה לכל תקלה בדרך. אנו מספקים גם <Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="underline font-bold">גרירה מהירה בכביש 22 עוקף קריות</Link> לרכבים תקועים. אם נתקעתם בגלל מצבר, כדאי לדעת שאנו מומחים במתן <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="underline font-bold">פתרונות גרירה לרכבים חשמליים</Link>. 
            בנוסף, אם הרכב הושבת, אנו מציעים שירות של <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-beach" className="underline font-bold">פינוי רכב לפירוק בקרית ים</Link> במהירות ובשקיפות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">שאלות נפוצות על גרירה בקרית ים</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">תוך כמה זמן הגרר מגיע לקרית ים?</h3>
              <p>הצוות שלנו ממוקם בפריסה ארצית ומתחייב להגעה מהירה בכל שטחי העיר, בדרך כלל תוך 30 דקות מרגע הקריאה.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">האם אתם גוררים רכבים גם לעבר חיפה?</h3>
              <p>בוודאי. אנו מציעים <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600">גרירת רכבים מאזור הקריות לצומת צ'ק פוסט</Link> והסביבה במחיר הוגן ושקוף.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">מה עושים במקרה של תאונה בכביש 22?</h3>
              <p>במקרה של תאונה, יש לפנות בבטחה לשוליים ולהזמין <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600">שירותי גרירה לאחר תאונה בכביש 22</Link> המיומנים בטיפול בסיטואציות מורכבות.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">האם המחיר נקבע מראש?</h3>
              <p>כן, אנו מאמינים בשקיפות מלאה. המחיר נקבע טלפונית על סמך סוג הרכב, המרחק והשעה, ללא הפתעות מיותרות בדרך.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}