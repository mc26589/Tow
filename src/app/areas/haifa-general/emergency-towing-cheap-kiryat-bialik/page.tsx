import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בקרית ביאליק 24/7 | שירות מהיר ומחיר הוגן | הגעה מהירה",
  description: "זקוקים לגרר בקרית ביאליק? שירותי גרירה 24/7 במחיר זול ומשתלם. צוות מקצועי מגיע אליכם תוך זמן קצר לכל נקודה בקריות. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-cheap-kiryat-bialik"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קרית ביאליק",
    "areaServed": "קרית ביאליק",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0705"
    },
    "priceRange": "$",
    "serviceType": "Emergency Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר חירום 24 שעות במחיר זול קרית ביאליק</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לשירותי גרירה דחופים בקרית ביאליק? אנו מציעים מענה מהיר 24/7 לרכבים פרטיים ומסחריים. במידה ואתם תקועים בדרכים קרובות, אנו מספקים גם <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="underline">סיוע גרירה בכביש 22</Link> ובסביבה. שירות מקצועי, אמין ומחירים ללא תחרות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ביאליק" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בקרית ביאליק?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ זמינות מלאה 24/7 לכל תרחיש.</li>
          <li>✓ מחירים הוגנים ושקופים - ללא הפתעות.</li>
          <li>✓ שירות משלים באזור: <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 font-semibold">פתרון לתקרים וגרירה בקרית ביאליק</Link>.</li>
          <li>✓ פריסה רחבה: מציעים גם שירותי גרירה בקריית מוצקין הסמוכה.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">כמה זמן לוקח לגרר להגיע בקרית ביאליק?</h4>
              <p>אנו משתדלים להגיע לכל נקודה בעיר ובסביבתה תוך זמן קצר ככל הניתן, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם גוררים רכבים מכל סוג?</h4>
              <p>אנו גוררים רכבים פרטיים, רכבי שטח ורכבים מסחריים קלים. לצערנו, איננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
            <div>
              <h4 className="font-bold">האם ניתן להזמין גרירה גם מהקריות הסמוכות?</h4>
              <p>בהחלט, אנו נותנים מענה מקצועי לתושבי כל הקריות, כולל שירותי <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-600">גרירה בקרית מוצקין</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}