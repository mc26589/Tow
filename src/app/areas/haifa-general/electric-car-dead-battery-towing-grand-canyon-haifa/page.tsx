import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בגרנד קניון חיפה | חילוץ 24/7 - מחיר הוגן",
  description: "נתקעתם עם רכב חשמלי ללא סוללה בגרנד קניון חיפה? שירות גרירה מהיר ומקצועי 24/7. הגעה מהירה, מחיר הוגן וטיפול מיומן ברכבים חשמליים. התקשרו עכשיו לחילוץ!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי עם סוללה ריקה בקניון גרנד קניון חיפה</h1>
          <p className="text-lg mb-8">נתקעתם עם רכב חשמלי ללא סוללה בגרנד קניון חיפה? אנו כאן עבורכם 24/7. אנו מתמחים בחילוץ רכבים חשמליים, רכבים פרטיים ורכבים מסחריים. במידה ואתם זקוקים גם לשירותים באזורים סמוכים כמו <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="underline font-semibold">גרירה בצ'ק פוסט</Link>, אנו זמינים לכל קריאה.</p>
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
            <li>✓ מומחיות בטיפול ברכבים חשמליים והיברידיים (לא כולל אופנועים).</li>
            <li>✓ הגעה מהירה לכל נקודה בגרנד קניון ובאזור חיפה.</li>
            <li>✓ שירות מקצועי גם למי שזקוק ל-<Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-400">חילוץ רכב תקוע באזור הכרמל</Link>.</li>
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
              <h3 className="text-xl font-bold">האם אתם גוררים רכבים חשמליים עם מערכת הנעה 4x4?</h3>
              <p>כן, אנו ערוכים לחילוץ רכבים מכל הסוגים. אם נתקעתם בחול או בבוץ, ייתכן שתצטרכו <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">חילוץ 4x4 מקצועי</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}