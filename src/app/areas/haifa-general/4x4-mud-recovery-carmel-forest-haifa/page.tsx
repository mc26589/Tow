import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "4x4 Mud Recovery and Towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">שירות חילוץ שטח 4x4 בבוץ ביערות הכרמל ובאזור חיפה</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? צוות החילוץ שלנו בדרך אליכם. שירות מקצועי, מהיר ובטוח לרכבי 4x4.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">חילוץ 4x4 מקצועי ומיידי בתוואי השטח של הכרמל</h2>
        <p className="mb-4">נתקעתם בבוץ עם רכב השטח שלכם ביערות הכרמל? אנו מספקים שירותי חילוץ 4x4 מהירים ומקצועיים המותאמים בדיוק לתנאי השטח המורכבים של אזור חיפה והסביבה. הצוות שלנו מצויד בציוד גרירה וחילוץ מתקדם המאפשר לנו להגיע לנקודות מבודדות ולחלץ את רכבכם בבטחה, ללא נזקים מיותרים.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו לחילוץ שטח?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה: שירות חילוץ 24/7 לכל סוגי רכבי ה-4x4 והרכבים הפרטיים.</li>
          <li>מומחיות מקומית: הכרה מעמיקה של כל שבילי יערות הכרמל, נחל יגור ואזורי הבוץ הקשים.</li>
          <li>ציוד ייעודי: שימוש בכננות, רצועות חילוץ וציוד שטח מקצועי לחילוץ רכבים ששקעו בבוץ עמוק.</li>
          <li>שירות הוגן: אנו מתחייבים למחירים הוגנים ושירות אדיב ומקצועי.</li>
        </ul>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <p className="text-lg font-medium">חשוב לציין: אנו מתמחים בחילוץ רכבי שטח, רכבים פרטיים ומסחריים. <strong>איננו מספקים שירותי גרירה או חילוץ לאופנועים.</strong></p>
        </div>
      </section>
    </main>
  );
}