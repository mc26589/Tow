import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בצ'ק פוסט | מחיר הוגן והגעה מהירה 24/7",
  description: "נתקעתם בצומת צ'ק פוסט? שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. זמינות 24/7, הגעה מהירה ומחירים ללא תחרות. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "חיפה והקריות",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לחילוץ מהיר בצומת צ'ק פוסט? אנו מתמחים במתן שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ורכבי שטח. אנו מציעים מחירים הוגנים ושירות זמין 24/7. 
            שימו לב: אנו נותנים שירות לרכבים ורכבים מסחריים. אם אתם זקוקים למידע נוסף על <Link href="/areas/haifa-general/heavy-motorcycle-towing-check-post-highway-22" className="underline font-semibold">גרירת אופנועים בציר 22</Link>, ניתן לבדוק דפים רלוונטיים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט והסביבה הקרובה ל<Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="underline">כביש 22 עוקף קריות</Link>.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ צוות מיומן ומקצועי לטיפול בטוח ברכבכם.</li>
          </ul>

          <div className="mt-12 border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold">תוך כמה זמן תגיעו לצומת צ'ק פוסט?</p>
                <p className="text-gray-300">אנו ערוכים לזמני תגובה מהירים מאוד לכל אזור הצ'ק פוסט והסביבה בכל שעות היום.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם גוררים רכבים מכל הסוגים?</p>
                <p className="text-gray-300">אנו מתמחים ברכבים פרטיים ומסחריים. למידע נוסף על שירותי גרירה מורכבים יותר כגון <Link href="/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa" className="underline">גרירת רכבי ספורט</Link>, אתם מוזמנים לעיין בשירותים הנוספים שלנו.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}