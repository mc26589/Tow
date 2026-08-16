import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) - הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר זמין 24/7 לחילוץ רכבים מהיר ומקצועי. מחירים נוחים ושקיפות מלאה. התקשרו עכשיו לקבלת שירות מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה עוקף קריות",
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
      "latitude": "32.8190",
      "longitude": "35.0630"
    },
    "serviceType": ["Towing", "Roadside Assistance"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם הרכב בכביש 22? אנו מבינים את הדחיפות והלחץ הכרוכים בתקיעה בכביש מהיר. 
            אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים, מסחריים ורכבי 4x4. 
            אם אתם זקוקים לסיוע דחוף בקרבת מקום, תוכלו להיעזר גם בשירותינו ב-<Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="underline font-bold">צומת צ'ק פוסט</Link>.
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. 
            אנו מתחייבים למחירים הוגנים, שקיפות מלאה והגעה מהירה לכל נקודה לאורך עוקף קריות.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 לכל קריאה בכביש עוקף קריות.</li>
            <li>✓ צוות מיומן ומקצועי המכיר את צירי התנועה באזור חיפה והקריות.</li>
            <li>✓ <Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="text-blue-700 underline">שירותי חירום בכביש 22</Link> ללא המתנה מיותרת.</li>
            <li>✓ מחירים הוגנים ללא הפתעות – הצעת מחיר מסודרת בטלפון.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-12 mb-4">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">תוך כמה זמן הגרר מגיע לכביש 22?</h4>
              <p>אנו משתדלים להגיע לכל נקודה על כביש עוקף קריות במינימום זמן מרגע הקריאה, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם גוררים גם רכבים מסחריים?</h4>
              <p>כן, אנו מספקים שירותי גרירה לרכבים פרטיים, מסחריים קלים ורכבי 4x4. לצערנו, אין אנו מספקים שירותי גרירה לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}