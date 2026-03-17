import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ רכב חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "יערות הכרמל ונשר" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7600", "longitude": "35.0000" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב מבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב מבוץ ביערות הכרמל ונשר – שירות 24/7</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם בבוץ? הצוות המקצועי שלנו זמין עבורכם בכל שעה ביממה לחילוץ רכבים פרטיים, רכבי 4x4 ורכבים מסחריים באזור יערות הכרמל ונשר. אנו מציעים מענה מהיר, ציוד חילוץ מתקדם ומחירים הוגנים ללא הפתעות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-gray-800">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ באזור הכרמל?</h2>
          <ul className="space-y-4 text-lg">
            <li>✅ <strong>זמינות מלאה:</strong> שירות 24/7, גם בסופי שבוע וחגים.</li>
            <li>✅ <strong>מומחיות בשטח:</strong> ניסיון רב בחילוץ רכבים ששקעו בבוץ עמוק באזור יערות הכרמל.</li>
            <li>✅ <strong>ציוד מקצועי:</strong> שימוש באמצעי גרירה וחילוץ מתקדמים המותאמים לתוואי השטח.</li>
            <li>✅ <strong>שקיפות מלאה:</strong> הצעת מחיר הוגנת וברורה בטלפון לפני תחילת העבודה.</li>
          </ul>
          <p className="mt-8 text-sm text-gray-600">
            *שימו לב: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}