import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22? שירותי גרירה מקצועיים ומהירים לעוקף קריות 24/7. הגעה תוך 30 דקות, מחיר הוגן ושירות מצוין. התקשרו עכשיו לקבלת סיוע!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה דחופים עוקף קריות כביש 22",
    "areaServed": "Haifa and Krayot",
    "priceRange": "₪₪",
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "תוך כמה זמן אתם מגיעים לעוקף קריות?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו שואפים להגיע לכל קריאה בכביש 22 תוך זמן מינימלי, לרוב עד 30 דקות, בהתאם לעומסי התנועה באזור הקריות וצ'ק פוסט." }
      },
      {
        "@type": "Question",
        "name": "האם אתם מספקים שירותי גרירה גם לרכבים חשמליים?",
        "acceptedAnswer": { "@type": "Answer", "text": "בהחלט, אנו מציעים שירות מומחה עבור פריקת סוללה או תקלות ברכב חשמלי בכביש 22 והקריות." }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים ובמחיר הוגן בכביש 22 עוקף קריות</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם עם הרכב בכביש 22? אנו מספקים מענה מהיר ומקצועי. למידע נוסף על שירותי גרירה באזור, בקרו ב-<Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="underline">towing services road 22 krayot bypass</Link>. אנו זמינים גם עבור <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="underline">emergency car breakdown towing route 22 check post haifa cheap</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24/7 לכל אורך עוקף קריות.</li>
            <li>✓ הגעה מהירה לנקודת התקיעה בבטחה עם ציוד מתקדם.</li>
            <li>✓ מומחיות מיוחדת ב <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-400">electric vehicle flat battery towing route 22 krayot</Link>.</li>
            <li>✓ מענה מקצועי לכל סוגי הרכבים התקועים בדרכים.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בעוקף קריות</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <div>
              <h3 className="font-bold">מה עושים אם הרכב מושבת סופית?</h3>
              <p className="text-gray-600">אנו מספקים שירותי <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik-road-22" className="text-blue-600 underline">towing for scrap kiryat bialik road 22</Link> ופינוי מהיר מהכביש.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים רכבים מהשטח?</h3>
              <p className="text-gray-600">כן, אם נתקעתם בדרכי עפר ליד הכביש המהיר, אנו מציעים שירות <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="text-blue-600 underline">off road rescue carmel forest danya</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">צריכים גרירה דחופה בכביש עוקף קריות?</h3>
              <p className="text-gray-600">לכל תקלה, פנו אלינו. אנו מבצעים גם גרירה מסוג <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-600 underline">emergency breakdown towing route 22 krayot bypass</Link> בכל שעות היממה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}