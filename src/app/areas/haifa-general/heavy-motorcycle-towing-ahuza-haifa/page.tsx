import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב באחוזה חיפה 24/7 | שירות מהיר ומקצועי | הגעה מהירה",
  description: "נתקעתם עם הרכב באחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ רכבים 24/7 באזור. מחיר הוגן, מענה מהיר ושירות אדיב. התקשרו עכשיו לסיוע!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ רכבים באחוזה, חיפה</h1>
          <p className="text-xl mb-8">זקוקים לחילוץ רכב באחוזה? אנו מספקים מענה מהיר 24/7. חשוב להבהיר: איננו מספקים שירותי גרירה לאופנועים, אלא מתמחים ברכבים פרטיים ומסחריים בלבד.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold">
              חיוג מהיר לסיוע ברכב
            </a>
            <WhatsAppCTA cityName="Haifa" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים באחוזה והכרמל</h2>
          <p className="mb-4">
            אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע בשכונת אחוזה היוקרתית או באזור הכרמל. אנו מציעים מגוון שירותים, לרבות <Link href="/areas/haifa-general/towing-service-bat-galim-haifa" className="text-blue-600 underline">שירותי גרירה בבת גלים</Link> ואזורים סמוכים, עבור:
          </p>
          <ul className="list-disc pr-6 mb-6">
            <li>גרירת רכבים פרטיים מכל הסוגים</li>
            <li>חילוץ רכבי 4x4 ורכבים מסחריים באזור <Link href="/areas/haifa-general/hilutz-4x4-butz-carmel-haifa" className="text-blue-600 underline">בוץ בכרמל</Link></li>
            <li>שירותי דרך מקצועיים באזור אחוזה והסביבה</li>
            <li>מחירים הוגנים ושירות אדיב ללא פשרות</li>
          </ul>
          
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות (FAQ)</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold">האם אתם גוררים אופנועים באחוזה?</p>
                <p>לא, השירות שלנו מתמקד ברכבים פרטיים, רכבי שטח ומסחריים בלבד.</p>
              </div>
              <div>
                <p className="font-bold">מהו זמן ההגעה המשוער באזור אחוזה?</p>
                <p>אנו משתדלים להגיע לכל קריאה באחוזה ובחיפה בזמן המהיר ביותר האפשרי, לרוב תוך דקות ספורות בהתאם לעומסי התנועה.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}