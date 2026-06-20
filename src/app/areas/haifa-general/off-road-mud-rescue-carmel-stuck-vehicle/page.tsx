import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ שטח בוץ בכרמל רכב תקוע | שירות 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ שטח מקצועי לרכבים ו-4x4. זמינות מיידית, מחירים הוגנים וציוד חילוץ מתקדם. התקשרו עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road mud rescue and vehicle towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">חילוץ מקצועי לרכבי שטח ופרטיים ששקעו בבוץ. זמינות מלאה 24/7 באזור הכרמל.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ שטח מהיר בבוץ של הכרמל?</h2>
        <p className="mb-4">אם הרכב שלכם נתקע בבוץ באזורי השטח של הכרמל, אתם זקוקים למענה מקצועי ומיידי. אנו מתמחים בחילוצי שטח מורכבים לרכבי 4x4, רכבים פרטיים ורכבים מסחריים שנתקעו בתנאי שטח קשים.</p>
        <p className="mb-4">הצוות שלנו מכיר את נתיבי הכרמל היטב ומגיע מצויד בציוד חילוץ מתקדם כדי להוציא אתכם בבטחה ובמינימום נזק לרכב.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4">למה לבחור בנו לחילוץ בכרמל?</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>זמינות 24/7: אנחנו מבינים שבוץ לא מחכה לשעות העבודה.</li>
          <li>מומחיות בשטח: ניסיון רב בחילוץ רכבים ששקעו בבוץ עמוק או בדרכי עפר משובשות.</li>
          <li>מחירים הוגנים: שירות מקצועי במחיר משתלם ללא הפתעות.</li>
        </ul>
        
        <div className="bg-gray-100 p-6 rounded-lg border-r-4 border-red-600">
          <p className="font-bold">חשוב לציין: אנו מתמחים בחילוץ רכבים, רכבי שטח ורכבים מסחריים בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}