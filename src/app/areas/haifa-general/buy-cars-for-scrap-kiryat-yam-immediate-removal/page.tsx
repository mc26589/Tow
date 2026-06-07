import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקרית ים - פינוי מיידי ומזומן במקום",
  description: "מעוניינים למכור רכב לפירוק בקרית ים? אנו קונים את כל סוגי הרכבים, פינוי מהיר ומזומן במקום. שירות אמין ומקצועי. התקשרו עכשיו להצעת מחיר הוגנת!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים לפירוק",
    "areaServed": "קרית ים",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "serviceType": "פינוי רכבים לפירוק"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקרית ים – פינוי מיידי</h1>
          <p className="text-xl mb-8 max-w-2xl">
            אנו קונים את כל סוגי הרכבים לפירוק בקרית ים. אם הרכב שלכם עומד ללא שימוש, עבר תאונה או סובל מתקלות מכניות קשות, אנו כאן כדי לפנות אותו עבורכם באופן מיידי.
            אנו מתמחים ברכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4). זקוקים גם לשירותי גרירה באזור? בדקו את הצעות ה- <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="underline font-bold">גרירה 24 7 עוקף קריות מחיר הוגן</Link> שלנו.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב לפירוק?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ פינוי מיידי מהשטח בקרית ים והסביבה.</li>
            <li>✓ שירות מקצועי ואמין ללא עלויות נסתרות.</li>
            <li>✓ הצעת מחיר הוגנת עבור הרכב שלכם.</li>
            <li>✓ טיפול בכל סוגי הרכבים (פרטי, מסחרי, 4x4).</li>
          </ul>
          <p>זקוקים לשירותי גרירה מקבילים? ראו <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-yam-disabled-vehicle" className="text-blue-600 underline">affordable flatbed towing kiryat yam disabled vehicle</Link> לפתרונות גרירה מתקדמים.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">אילו סוגי רכבים אתם מפנים?</h3>
              <p>אנחנו מפנים רכבים פרטיים, מסחריים ושטח. שימו לב: איננו מטפלים באופנועים.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם מגיעים לכל האזורים בקרית ים?</h3>
              <p>כן, אנו נותנים שירות מלא בכל שכונות קרית ים, כולל אזורים קרובים כמו <Link href="/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-rothschild" className="text-blue-600">buy cars for scrap kiryat yam rothschild</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן מתבצע הפינוי?</h3>
              <p>השירות שלנו מבוסס על פינוי מהיר, לרוב תוך מספר שעות מהקריאה, במחירים הוגנים ותחרותיים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}