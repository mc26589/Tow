import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22 עוקף קריות? אנו מספקים שירותי גרירה מקצועיים ומהירים 24/7 לכל סוגי הרכבים. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Emergency Roadside Assistance and Towing",
    "geo": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 32.819, "longitude": 35.065 }, "geoRadius": "15000" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות החילוץ שלנו בדרך אליכם. מענה מהיר, מקצועי ובטוח 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4 לאורך ציר כביש 22. זקוקים גם ל-<Link href="/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת רכב חשמלי לאחר תאונה</Link>? אנו כאן לתת מענה. אנו מבינים את הדחיפות והסכנה בעצירה בשולי הדרך המהירה, ולכן הצוות שלנו מתעדף קריאות באזור זה.</p>
        <p className="text-red-600 font-semibold mb-4">שים לב: איננו מספקים שירותי גרירה לאופנועים.</p>
        <h3 className="text-2xl font-semibold mb-4">למה לפנות אלינו?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>הגעה מהירה לכל נקודה בכביש עוקף קריות.</li>
          <li>מחירים הוגנים ושירות אדיב. אם אתם זקוקים לשירותי גרירה בקרבת מקום, בדקו גם <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 underline">גרירה בקרית ביאליק</Link>.</li>
          <li>ציוד חדיש המבטיח גרירה בטוחה לרכב שלכם.</li>
        </ul>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</h4>
              <p>אנו שואפים להגעה מהירה ככל הניתן בהתאם לתנאי הדרך, בדרך כלל תוך זמן קצר מרגע הקריאה.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם גוררים גם רכבים לאחר תאונה?</h4>
              <p>כן, אנו נותנים מענה למגוון מצבים כולל רכבים לאחר תאונה, רכבים תקועים ורכבים חשמליים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}