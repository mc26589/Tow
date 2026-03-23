import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            גרר אופנוע כבד תקוע בעלייה לסטלה מאריס חיפה
          </h1>
          <p className="text-xl mb-8">שירותי גרירה וחילוץ מקצועיים לרכבים בחיפה והקריות</p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-lg border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">הבהרה חשובה בנוגע לחילוץ אופנועים</h2>
          <p className="mb-6 text-neutral-300">
            אנו מבינים את הקושי שבתקיעה בעלייה התלולה לסטלה מאריס. עם זאת, חשוב לנו להיות שקופים: <strong>הציוד שלנו מותאם אך ורק לרכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4). איננו מספקים שירותי גרירה או שינוע לאופנועים מכל סוג שהוא.</strong>
          </p>
          <p className="mb-6 text-neutral-300">
            אם נתקעת עם רכב ארבעה גלגלים, אנו זמינים עבורך 24/7 עם מענה מהיר, ציוד חילוץ מתקדם ומחירים הוגנים ללא הפתעות.
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md text-center transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
              "latitude": "32.8319",
              "longitude": "34.9735"
            },
            "priceRange": "$",
            "serviceType": "Towing and Roadside Assistance"
          })
        }}
      />
    </main>
  );
}