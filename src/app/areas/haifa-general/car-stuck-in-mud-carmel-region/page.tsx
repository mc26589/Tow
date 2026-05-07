import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
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
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ רכב שנתקע בבוץ באזור הכרמל?</h2>
        <p className="mb-4">אם הרכב שלכם שקע בבוץ בדרכי העפר או בשטחים הפתוחים של הכרמל, אתם זקוקים למענה מיידי. אנו מתמחים בחילוצי שטח, רכבי 4x4 ורכבים פרטיים שנתקעו בתנאי שטח קשים. הצוות שלנו מצויד בציוד גרירה וחילוץ מתקדם המאפשר לנו להוציא את הרכב שלכם בבטחה, ללא נזקים מיותרים, תוך זמן תגובה מהיר במיוחד לכל נקודה באזור הכרמל והסביבה.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו לחילוץ בבוץ?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה: שירות 24/7, גם בתנאי מזג אוויר קשים.</li>
          <li>מומחיות בשטח: הכרה מעמיקה של תוואי השטח בכרמל.</li>
          <li>ציוד מקצועי: שימוש בכננות וציוד חילוץ ייעודי לרכבים שקועים.</li>
          <li>מחירים הוגנים: שירות מקצועי במחיר משתלם ללא הפתעות.</li>
        </ul>
        
        <p className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
          <strong>חשוב לציין:</strong> אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. <strong>איננו מספקים שירותי חילוץ או גרירה לאופנועים.</strong>
        </p>
      </section>
    </main>
  );
}