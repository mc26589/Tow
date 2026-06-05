import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0653" },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות הגרר שלנו בדרך אליכם לחילוץ בטוח ומהיר.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
              התקשרו עכשיו להזמנת גרר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">אנו מספקים מענה מיידי לכל סוגי הרכבים הפרטיים, המסחריים ורכבי ה-4x4 שנתקעו לאורך כביש 22. הצוות שלנו מנוסה בחילוץ בתנאי דרך עמוסים ומבטיח פינוי מהיר ובטוח.</p>
        <p className="text-red-600 font-semibold mb-4">חשוב להבהיר: אנו מתמחים ברכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</p>
        <h3 className="text-2xl font-bold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24/7 לכל אורך עוקף קריות.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>ציוד גרירה חדיש המבטיח שמירה על הרכב שלכם.</li>
        </ul>
      </section>
    </main>
  );
}