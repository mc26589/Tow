import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירות גרירת רכבים חשמליים בצ'ק פוסט והקריות 24/7 | מחיר הוגן",
  description: "נתקעתם עם רכב חשמלי באזור צ'ק פוסט? שירות גרירה מקצועי, זמין 24 שעות ביממה. מחירים הוגנים ושירות מהיר. התקשרו עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות גרירה מקצועי חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0240" },
    "priceRange": "$",
    "serviceType": "Electric Vehicle Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            שירות גרירת רכבים חשמליים זמין 24/7 באזור צ'ק פוסט והקריות
          </h1>
          <p className="text-xl mb-8">
            נתקעתם עם הרכב החשמלי? אנו מתמחים בחילוץ וגרירת רכבים חשמליים, רכבים פרטיים ורכבי 4x4. שירות מהיר, בטוח ובמחיר הוגן.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              חיוג מהיר לשירות גרירה
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לגרירת הרכב החשמלי שלכם?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ זמינות מלאה 24/7 באזור צ'ק פוסט, חיפה והקריות.</li>
            <li>✓ מומחיות בטיפול וגרירה של רכבים חשמליים והיברידיים.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
            <li>✓ שירות אדיב ומקצועי מרגע הקריאה ועד ההגעה ליעד.</li>
          </ul>
          <p className="mt-8 text-sm text-gray-400">
            *שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}