import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בגרנד קניון חיפה | חילוץ 24/7 - הגעה מהירה",
  description: "נתקעתם עם רכב חשמלי ללא סוללה בגרנד קניון חיפה? צוות מומחה זמין 24/7. הגעה מהירה, שירות אמין ומקצועי. התקשרו עכשיו לחילוץ המהיר ביותר באזור!",
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
            נתקעתם עם רכב חשמלי ללא סוללה בגרנד קניון חיפה? אנו מתמחים בחילוץ מקצועי ושמירה על הרכב שלכם. אנו זמינים 24/7 ופרוסים בכל אזור חיפה, כולל מתן שירותים כמו <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="underline font-semibold">שירותי גרירה דחופים באחוזה והר הכרמל</Link>.
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
            <li>✓ מחירים הוגנים ושירות שקוף ללא הפתעות.</li>
            <li>✓ מספקים גם <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-400">שירותי גרירה בכביש 22 עוקף קריות</Link> לכל סוגי הרכבים.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן מגיעים לחילוץ בגרנד קניון?</h3>
              <p>אנו פרוסים בחיפה והסביבה ושואפים להגעה מהירה ככל הניתן, בדרך כלל תוך דקות ספורות בהתאם לעומסי התנועה באזור הקניון.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם גוררים רכבים חשמליים בעלי הנעה כפולה?</h3>
              <p>כן, אנו ערוכים לחילוץ רכבים מכל הסוגים, כולל רכבים חשמליים מודרניים. אם נתקעתם בדרכים ראשיות מחוץ לעיר, אנו מספקים גם <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">שירותי גרירה דחופים בצ'ק פוסט וחיפה</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם מספקים חילוץ גם בשטח?</h3>
              <p>מעבר לחילוצי כביש, אנו מציעים גם <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="text-blue-600 underline">חילוצי שטח ביערות הכרמל ודניה</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}