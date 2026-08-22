import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה 24/7 | שירות מהיר ומחיר הוגן | הגעה מהירה",
  description: "נתקעתם באחוזה? שירותי גרירה וחילוץ רכבים מקצועיים באחוזה חיפה 24/7. מחיר הוגן, מענה מהיר והגעה לכל נקודה בעיר. התקשרו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$$,$",
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
    "serviceType": "Towing and Roadside Assistance for Cars and Commercial Vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לרכבים באחוזה חיפה - שירות מקצועי 24/7</h1>
          <p className="text-xl mb-8">אנו מתמחים בחילוץ וגרירת רכבים, רכבים מסחריים ורכבי 4x4. שימו לב: השירות אינו כולל גרירת אופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה באזור אחוזה והסביבה</h2>
        <p className="mb-4">
          האזור ההררי של אחוזה דורש מומחיות וציוד מתאים. אנו מספקים <Link href="/areas/haifa-general/towing-services-stuck-vehicle-steep-hill-ahuza-haifa" className="text-blue-600 underline">towing services stuck vehicle steep hill ahuza haifa</Link> בצורה בטוחה ומקצועית. הצוות שלנו זמין גם למקרים דחופים כמו <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">24 7 towing electric vehicle battery dead ahuzah haifa</Link>.
        </p>
        <p className="font-semibold text-red-600 mb-6">
          חשוב להדגיש: השירות שלנו מיועד לרכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו ערוכים לשינוע אופנועים מכל סוג שהוא.
        </p>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה באחוזה</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">מהו זמן ההגעה הממוצע באזור אחוזה?</p>
              <p>ברוב המקרים אנו מגיעים תוך 30-45 דקות, בהתאם לעומסי התנועה בציר חורב.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים אופנועים באחוזה?</p>
              <p>לא, אנו מתמחים בגרירת רכבים ורכבים מסחריים בלבד.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מציעים שירותי פינוי רכבים מהעליות באחוזה?</p>
              <p>כן, אנו ערוכים לחילוץ רכבים תקועים בשיפועים חדים ובדרכים מאתגרות בחיפה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}