import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר לרכב באחוזה חיפה - שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעת עם הרכב באזור אחוזה בחיפה? שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, שירות אדיב ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה אחוזה חיפה",
    "areaServed": "Haifa",
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
    "serviceType": "Towing and Roadside Assistance for Cars"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה, חיפה</h1>
          <p className="text-lg mb-4">
            נתקעת עם הרכב באזור אחוזה? אנו מספקים מענה מהיר ומקצועי לרכבים פרטיים, מסחריים ורכבי 4x4. 
            זקוקים לעזרה באזורים סמוכים? אנו מציעים גם <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="underline font-semibold">שירותי גרירה דחופים באזור חורב-אחוזה</Link>.
          </p>
          <p className="text-lg mb-8">
            חשוב לציין כי השירות שלנו מתמקד בחילוץ רכבים ואינו כולל גרירת אופנועים. אם הרכב שלכם נתקע, אנו כאן 24/7 עם ציוד מתקדם. למקרים מורכבים יותר, ראו גם <Link href="/areas/haifa-general/mud-rescue-4x4-stuck-carmel-forest-haifa-university" className="underline font-semibold">חילוצי 4x4 ביערות הכרמל והאוניברסיטה</Link>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה באחוזה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">תוך כמה זמן אתם מגיעים לאזור אחוזה?</h3>
              <p>אנו משתדלים להגיע לכל נקודה באחוזה ובסביבתה תוך זמן קצר ככל האפשר, בהתאם לעומסי התנועה בציר חורב.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם גוררים רכבים מהחניון?</h3>
              <p>כן, אנו ערוכים למתן שירותי גרירה גם מחניונים מקורים ומסובכים באזור חיפה והכרמל.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}