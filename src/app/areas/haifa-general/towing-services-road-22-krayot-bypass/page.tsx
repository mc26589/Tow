import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? אנו מציעים שירותי גרירה מקצועיים 24/7, הגעה מהירה לכל נקודה, מחיר הוגן ושירות אדיב. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/towing-services-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$ - $$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8156",
      "longitude": "35.0653"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים בכביש 22 עוקף קריות - חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם הרכב בדרך? אנו מתמחים בחילוץ וגרירת רכבים פרטיים ומסחריים לאורך כביש 22. בין אם מדובר בתקלה מכנית, תאונה או <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="underline font-bold">שירותי גרירת חירום בכביש 22</Link>, אנו כאן עבורכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי הגרירה שלנו בכביש 22</h2>
          <p className="mb-6 text-lg">אנו מציעים מעטפת פתרונות מלאה לרכבים תקועים. יש לכם רכב חשמלי? אנו מספקים גם <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-600">שירותי גרירת רכבים חשמליים בכביש 22</Link> ופתרונות לטעינה במקום במידת הצורך.</p>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ הגעה מהירה תוך 30 דקות לכל אורך עוקף קריות.</li>
            <li>✓ טיפול בטוח ומקצועי לרכבים פרטיים, מסחריים ו-4x4.</li>
            <li>✓ ניסיון רב בחילוצים מורכבים במחלפי הצפון.</li>
            <li>✓ שירות אדיב, אמין ומחיר הוגן ללא הפתעות.</li>
          </ul>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold">האם אתם נותנים שירות גם במקרה של מצבר ריק?</p>
                <p>כן, אנו מספקים מענה מהיר גם לבעיות של <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600">מצבר ריק ברכב חשמלי או בנזין</Link> לאורך כל ציר עוקף קריות.</p>
              </div>
              <div>
                <p className="font-bold">מה עושים אם הייתי מעורב בתאונה בכביש 22?</p>
                <p>אנו מומחים בגרירת רכבים לאחר תאונות. צרו קשר לקבלת <Link href="/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass" className="text-blue-600">שירותי גרירה לאחר תאונה בכביש 22</Link> בצורה בטוחה ומקצועית.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם גוררים אופנועים?</p>
                <p>חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים, אלא מתמקדים ברכבים פרטיים ומסחריים בלבד.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}