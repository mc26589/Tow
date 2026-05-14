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
    "serviceType": "Off-road vehicle recovery and mud rescue"
  };

  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ בדרכי הכרמל? צוות החילוץ שלנו זמין 24/7 לחילוץ מקצועי, מהיר ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>זקוקים לחילוץ שטח מהיר בבוץ של הכרמל?</h2>
          <p>אם הרכב שלכם נתקע בבוץ באזורי השטח של הכרמל, אתם זקוקים למענה מקצועי ומיידי. אנו מתמחים בחילוצי שטח מורכבים לרכבי 4x4, רכבים פרטיים ורכבים מסחריים שנתקעו בתנאי שטח קשים. הצוות שלנו מכיר היטב את נתיבי הכרמל ומגיע מצויד בציוד חילוץ מתקדם כדי להוציא אתכם בבטחה ובמהירות.</p>
          
          <h3>למה לבחור בנו לחילוץ שטח?</h3>
          <ul>
            <li><strong>זמינות 24/7:</strong> אנחנו מבינים שרכב תקוע בשטח לא מחכה לבוקר.</li>
            <li><strong>מומחיות בשטח:</strong> ניסיון רב בחילוץ רכבים ששקעו בבוץ עמוק או בדרכים משובשות.</li>
            <li><strong>מחירים הוגנים:</strong> שירות מקצועי במחיר משתלם ללא הפתעות.</li>
          </ul>

          <div className="bg-gray-100 p-6 rounded-xl border-r-4 border-red-600">
            <p className="font-bold">חשוב לדעת:</p>
            <p>אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}