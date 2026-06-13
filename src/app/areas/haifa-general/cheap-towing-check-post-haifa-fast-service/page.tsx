import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט חיפה – 24/7 שירות מהיר ומחיר הוגן",
  description: "נתקעתם עם הרכב בצ'ק פוסט חיפה? הגעתם למקום הנכון. שירות גרירה מקצועי, הגעה מהירה ומחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו לגרר זמין!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-haifa-fast-service"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצ'ק פוסט חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0230" },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב זול בצ'ק פוסט חיפה – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם עם הרכב בצ'ק פוסט? הגעתם למקום הנכון. שירות גרירה מהיר, אמין ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">זמינות מלאה</h3>
              <p>אנו עובדים 24 שעות ביממה, 7 ימים בשבוע, כדי להבטיח מענה מהיר בכל שעה.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות ומציעים מחיר זול והוגן ללא הפתעות מיותרות. זקוקים לשירותי גרירה נוספים באזור? ניתן לבדוק גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-400 underline">שירות גרירה משתלם בצ'ק פוסט</Link>.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">מקצועיות ללא פשרות</h3>
              <p>צוות מיומן המטפל ברכבים פרטיים ומסחריים בזהירות מרבית. אנו מנוסים בחילוץ רכבים מכל סוג, כולל עזרה בצירים מרכזיים כגון <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-400 underline">כביש 22 עוקף קריות</Link>.</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gray-800 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
                <p className="text-gray-300">בדרך כלל אנו מגיעים למוקד הצ'ק פוסט תוך 30-45 דקות מרגע הקריאה, בהתאם לעומסי התנועה.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">האם אתם גוררים רכבים לכל חלקי הארץ?</h3>
                <p className="text-gray-300">כן, אנו מספקים שירותי גרירה מחיפה והקריות לכל יעד שתבחרו במחיר הוגן.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-red-900/20 border border-red-800 rounded-xl">
            <p className="text-red-200"><strong>הערה חשובה:</strong> השירות שלנו מיועד לרכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}