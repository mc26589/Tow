import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בצומת צ'ק פוסט | שירות מהיר 24/7 במחיר הוגן",
  description: "נתקעתם בצומת צ'ק פוסט? שירותי גרירה מקצועיים ומהירים לרכבים פרטיים ומסחריים. הגעה מהירה, זמינות 24/7 ומחיר הוגן ללא הפתעות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור עמוס כמו צומת צ'ק פוסט? אנו מציעים שירותי גרירה מקצועיים ומחירים הוגנים.
            אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. אם נדרשת עזרה נוספת, תוכלו לבדוק גם את שירותי ה-<Link href="/areas/haifa-general/towing-after-accident-check-post-haifa" className="underline">גרירה לאחר תאונה באזור צ'ק פוסט</Link>.
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
            >
              חייגו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">זמינות 24/7</h3>
              <p>אנחנו כאן בשבילכם בכל שעה, גם בסופי שבוע וחגים.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מחירים הוגנים</h3>
              <p>שירות גרירה איכותי במחיר משתלם ללא הפתעות.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מקצועיות וניסיון</h3>
              <p>צוות מיומן שמכיר את אזור חיפה והקריות על בוריו.</p>
            </li>
          </ul>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לצומת?</h3>
                <p>הצוות שלנו פועל באזור חיפה והצפון, לכן אנחנו מתחייבים להגעה מהירה ככל הניתן בהתאם לעומסי התנועה בצומת.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">האם אתם גוררים רכבים מהקריות לצ'ק פוסט?</h3>
                <p>בהחלט. אנו נותנים מענה רחב הכולל גם <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="underline">גרירה על גבי משטח (גרר) בכביש 22</Link> ובכל סביבת הקריות.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}