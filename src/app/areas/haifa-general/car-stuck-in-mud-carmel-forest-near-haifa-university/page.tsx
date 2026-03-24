import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
      "latitude": "32.7625",
      "longitude": "35.0150"
    },
    "serviceType": "חילוץ רכב תקוע בבוץ, גרירת רכבים, חילוץ שטח"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">רכב תקוע בבוץ באזור יערות הכרמל ליד אוניברסיטת חיפה? חילוץ שטח מיידי</h1>
          <p className="text-xl mb-6">נתקעתם בדרכי העפר של הכרמל? הצוות שלנו זמין 24/7 לחילוץ רכבים ששקעו בבוץ באזור אוניברסיטת חיפה והסביבה.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי חילוץ מקצועיים בכרמל</h2>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים, רכבי שטח ורכבים מסחריים שנתקעו בבוץ או בדרכים משובשות. הניסיון הרב שלנו בתוואי השטח של חיפה והכרמל מבטיח טיפול מהיר, בטוח ומקצועי.</p>
        <p className="text-red-600 font-bold">חשוב להבהיר: איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        <p className="mt-4">אנו מציעים מחירים הוגנים ושירות אדיב לכל תושבי האזור והמטיילים.</p>
      </section>
    </main>
  );
}