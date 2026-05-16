import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car recovery from mud and off-road towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם עם ציוד חילוץ מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">שירות חילוץ מקצועי לרכבים ששקעו בבוץ</h2>
        <p className="mb-4">השטחים הפתוחים והדרכים באזור הכרמל עלולים להפוך למלכודת בוץ, במיוחד בעונת החורף. אנו מציעים שירותי חילוץ מהירים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים ששקעו בבוץ עמוק.</p>
        <p className="mb-4">הצוות שלנו מיומן בעבודה בתנאי שטח קשים ומבטיח חילוץ בטוח ללא גרימת נזק לשלדת הרכב. אנו מציעים מחירים הוגנים ושירות אדיב 24 שעות ביממה.</p>
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
          <h3 className="text-xl font-bold mb-4">חשוב לדעת:</h3>
          <p>אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. <strong>איננו מספקים שירותי חילוץ או גרירה לאופנועים.</strong></p>
        </div>
      </section>
    </main>
  );
}