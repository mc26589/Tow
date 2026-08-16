import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות - הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בכביש 22 עוקף קריות? שירותי גרירה מקצועיים 24/7, הגעה מהירה לכל נקודה, שירות אדיב ומחיר הוגן. התקשרו עכשיו לחילוץ מהיר!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם הרכב בכביש 22? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            זקוקים לעזרה בדרכים? אנו מציעים שירות מהיר, אמין ובמחיר הוגן לכל תושבי האזור. 
            מחפשים גם <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="underline font-bold">שירותי גרירה זולים בצ'ק פוסט</Link>? אנחנו כאן לכל תקלה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 לכל אורך כביש עוקף קריות.</li>
            <li>✓ הגעה מהירה לנקודת התקיעה, גם בשעות העומס.</li>
            <li>✓ שירות מקצועי לרכבים פרטיים, מסחריים ו-4x4.</li>
            <li>✓ שקיפות מלאה והצעת מחיר הוגנת בטלפון.</li>
          </ul>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בכביש 22</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</p>
                <p>אנו משתדלים להגיע לכל נקודה בכביש עוקף קריות בתוך 30 דקות, בהתאם לעומסי התנועה.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם מבצעים חילוצי שטח?</p>
                <p>כן, אנו מומחים ב- <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600">חילוצי 4x4 וגרירה בשטח</Link>.</p>
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