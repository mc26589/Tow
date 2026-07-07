import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בצ'ק פוסט וכביש 22 | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעת עם הרכב בצ'ק פוסט או בכביש 22? שירותי גרירה מקצועיים 24/7. הגעה תוך 30 דקות, מחיר הוגן ושירות אדיב לכל סוגי הרכבים. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-check-post-highway-22"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "latitude": "32.7940",
      "longitude": "35.0230"
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ באזור מחלף צ'ק פוסט וכביש 22
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת בדרך? הצוות שלנו זמין 24/7 לחילוץ מהיר של רכבים פרטיים, מסחריים ורכבי 4x4. (לא מספקים גרירת אופנועים).
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              התקשר עכשיו לחילוץ רכב
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מהירים בחיפה והקריות</h2>
        <p className="mb-4">
          אם נתקעת באזור הצ'ק פוסט, אל תחכה זמן רב. אנו מציעים <Link href="/areas/haifa-general/emergency-towing-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה מהירים בכביש 22 ועוקף קריות</Link> תוך הקפדה על מחיר הוגן ושקיפות. 
        </p>
        <p className="mb-4">
          הצוות שלנו מומחה במתן מענה דחוף בצירים עמוסים. אנו מספקים גם <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה מקיפים בכביש 22</Link> לכל סוגי הרכבים התקולים. במקרה של רכב ישן, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-600 underline">פינוי רכבים באזור התעשייה של קרית ביאליק</Link>.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">האם אתם מספקים חילוץ שטח במידת הצורך?</h3>
              <p>כן, אנו מציעים שירותי <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">חילוץ 4x4 ביערות הכרמל</Link> וסביבת חיפה עבור רכבי שטח שנתקעו בבוץ או בדרכים משובשות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה זמן ההגעה הממוצע לצ'ק פוסט?</h3>
              <p>ברוב המקרים אנו מגיעים תוך 30 דקות, בהתאם לעומסי התנועה בציר 22. אנו זמינים 24/7 כדי להבטיח שלא תישארו תקועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מבצעים גרירת אופנועים?</h3>
              <p>לא, השירות שלנו ממוקד ברכבים פרטיים ומסחריים. במידה ואתה מחפש גרירה לאופנוע באזור אחר, מומלץ לוודא זאת מראש.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}