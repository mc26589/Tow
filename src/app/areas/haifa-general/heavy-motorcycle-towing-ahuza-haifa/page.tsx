import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance for Cars and 4x4"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה לאופנועים כבדים באחוזה חיפה - הבהרה חשובה</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים, רכבי שטח ומסחריות. איננו מספקים שירות לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              חיוג מהיר לשירות
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">מידע חשוב לתושבי אחוזה</h2>
          <p className="text-lg leading-relaxed mb-4">
            אנו מבינים את הצורך בשירותי גרירה מהירים באזור אחוזה בחיפה. עם זאת, חשוב להדגיש כי הציוד והמומחיות שלנו מותאמים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים בלבד. איננו ערוכים לשינוע אופנועים כבדים או קלים.
          </p>
          <p className="text-lg leading-relaxed">
            אם נתקעת עם רכבך, אנו מציעים שירות מקצועי, זמינות 24/7 ומחירים הוגנים לכל סוגי הרכבים שאנו משרתים. צרו קשר לקבלת הצעת מחיר בטלפון.
          </p>
        </div>
      </section>
    </main>
  );
}