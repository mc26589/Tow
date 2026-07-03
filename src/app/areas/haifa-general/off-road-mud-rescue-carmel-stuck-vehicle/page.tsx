import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ שטח בוץ בכרמל רכב תקוע | שירות 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ שטח מקצועי לרכבים ו-4x4 בחיפה והסביבה. זמינות 24/7, מחירים הוגנים ומענה מהיר."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ שטח חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road vehicle recovery and mud rescue"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">חילוץ מקצועי לרכבי שטח ופרטיים בחיפה והקריות. זמינים לכל קריאה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2>זקוקים לחילוץ שטח מהיר בבוץ של הכרמל?</h2>
          <p>אם הרכב שלכם נתקע בבוץ באזורי השטח של הכרמל, אתם זקוקים למענה מקצועי ומיידי. אנו מתמחים בחילוצי שטח מורכבים לרכבי 4x4, רכבים פרטיים ורכבים מסחריים שנתקעו בתנאי שטח קשים.</p>
          
          <h3>למה לבחור בנו?</h3>
          <ul>
            <li>זמינות 24/7 לכל אזור הכרמל והסביבה.</li>
            <li>ציוד חילוץ מתקדם לקרקע בוצית.</li>
            <li>הצעת מחיר הוגנת ושקופה בטלפון.</li>
          </ul>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
            <p className="font-bold">הערה חשובה:</p>
            <p>אנו מתמחים בחילוץ רכבים, רכבי שטח ורכבים מסחריים בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}