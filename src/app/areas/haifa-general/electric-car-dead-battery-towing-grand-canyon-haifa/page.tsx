import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בגרנד קניון חיפה | חילוץ 24/7 - הגעה מהירה",
  description: "נתקעתם עם רכב חשמלי ללא סוללה בגרנד קניון חיפה? צוות מומחה לרכבים חשמליים זמין עבורכם 24/7. מחיר הוגן, שירות אמין והגעה מהירה. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/electric-car-dead-battery-towing-grand-canyon-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7858",
      "longitude": "34.9855"
    },
    "priceRange": "$",
    "serviceType": "Electric Vehicle Towing and Rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי עם סוללה ריקה בגרנד קניון חיפה</h1>
          <p className="text-lg mb-8">
            נתקעתם עם רכב חשמלי ללא סוללה בגרנד קניון חיפה? אנו כאן עבורכם בכל שעה. אנו מתמחים בחילוץ רכבים חשמליים, רכבים פרטיים ורכבים מסחריים. זקוקים לשירות באזורים אחרים? אנו מציעים גם <Link href="/areas/haifa-general/emergency-towing-road-22-krayot-bypass" className="underline font-semibold">שירותי גרירה בכביש 22 עוקף קריות</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו?</h2>
          <ul className="space-y-4">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ מומחיות בטיפול בטוח ומקצועי ברכבים חשמליים והיברידיים.</li>
            <li>✓ הגעה מהירה לכל נקודה בגרנד קניון ובסביבת חיפה.</li>
            <li>✓ שירות מקצועי גם למי שזקוק ל-<Link href="/areas/haifa-general/urgent-mud-rescue-4x4-towing-carmel-forest-trails-haifa" className="text-blue-400">חילוץ שטח 4x4 באזור הכרמל</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">כמה זמן לוקח לכם להגיע לגרנד קניון?</h3>
              <p>אנו פרוסים בחיפה והסביבה ושואפים להגעה מהירה ככל הניתן, בדרך כלל תוך דקות ספורות בהתאם לעומסי התנועה באזור הקניון.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם גוררים רכבים חשמליים בעלי הנעה כפולה?</h3>
              <p>כן, אנו ערוכים לחילוץ רכבים מכל הסוגים, כולל רכבים חשמליים מודרניים. אם אתם זקוקים לעזרה בדרכים ראשיות, אנו מספקים גם <Link href="/areas/haifa-general/towing-services-road-22-krayot-private-car" className="text-blue-600 underline">שירותי גרירה לרכב פרטי בכביש 22</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}