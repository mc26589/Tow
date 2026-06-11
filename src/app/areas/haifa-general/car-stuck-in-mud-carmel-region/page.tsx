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
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם עם הציוד המתאים ביותר.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-3xl mx-auto">
          <h2>זקוקים לחילוץ רכב שנתקע בבוץ באזור הכרמל?</h2>
          <p>אם הרכב שלכם שקע בבוץ בדרכי העפר או בשטחים הפתוחים של הכרמל, אתם זקוקים למענה מיידי ומקצועי. אנו מתמחים בחילוצי שטח מורכבים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים. הצוות שלנו מצויד בציוד גרירה וחילוץ מתקדם המאפשר לנו להוציא את הרכב שלכם בבטחה, ללא נזקים מיותרים, גם בתנאי שטח קשים.</p>
          
          <h3>למה לבחור בנו לחילוץ בבוץ?</h3>
          <ul>
            <li><strong>זמינות מלאה:</strong> שירות 24/7 בכל אזור חיפה והכרמל.</li>
            <li><strong>מומחיות בשטח:</strong> ניסיון רב בחילוץ רכבים ששקעו בבוץ עמוק.</li>
            <li><strong>ציוד מקצועי:</strong> שימוש בכננות וציוד גרירה ייעודי לרכבים תקועים.</li>
            <li><strong>מחירים הוגנים:</strong> שירות מקצועי במחיר משתלם ללא הפתעות.</li>
          </ul>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
            <p className="text-sm text-neutral-400">
              <strong>הערה חשובה:</strong> אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}