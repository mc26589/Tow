import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מקצועי ומהיר</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם עם ציוד חילוץ מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
          <p className="mb-4">אנו מבינים את המורכבות של חילוץ רכב ששקע בבוץ בדרכי הכרמל. הניסיון שלנו מאפשר לנו להעניק פתרון מהיר, בטוח ומשתלם.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>זמינות 24/7 לכל אזור הכרמל והסביבה.</li>
            <li>ציוד חילוץ ייעודי לרכבי 4x4 ורכבים פרטיים.</li>
            <li>מחירים הוגנים ושקיפות מלאה.</li>
            <li>צוות מיומן ומקצועי.</li>
          </ul>
          <p className="text-sm text-gray-400 italic">* שים לב: אנו מתמחים בחילוץ רכבים ורכבי שטח בלבד. איננו מספקים שירותי חילוץ לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}