import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם. שירות מקצועי, מהיר ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="prose prose-invert max-w-3xl mx-auto">
          <h2>זקוקים לחילוץ רכב שנתקע בבוץ באזור הכרמל?</h2>
          <p>אם הרכב שלכם שקע בבוץ בדרכי העפר או בשטחים הפתוחים של הכרמל, אנו כאן כדי לסייע לכם באופן מיידי. צוות המומחים שלנו מתמחה בחילוצי שטח מורכבים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים. אנו מבינים את הדחיפות שבמצב זה ומגיעים לכל נקודה באזור הכרמל והסביבה עם ציוד חילוץ מתקדם כדי להחזיר אתכם לכביש בבטחה ובמהירות.</p>
          
          <h3>למה לבחור בנו לחילוץ מהבוץ?</h3>
          <ul>
            <li>זמינות מלאה: שירות 24/7 לכל מקרה חירום.</li>
            <li>מומחיות בשטח: ניסיון רב בחילוץ רכבים ששקעו בבוץ עמוק באזור הכרמל.</li>
            <li>ציוד מקצועי: שימוש באמצעי גרירה וחילוץ המותאמים למניעת נזק לרכב.</li>
            <li>מחירים הוגנים: שירות מקצועי במחיר משתלם ללא הפתעות.</li>
          </ul>

          <p><strong>חשוב לציין:</strong> אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח (4x4). איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}