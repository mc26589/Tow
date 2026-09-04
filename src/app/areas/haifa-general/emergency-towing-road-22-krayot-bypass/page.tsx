import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בכביש 22 (עוקף קריות) | מענה מהיר 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים ומסחריים 24/7. הגעה מהירה ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot-bypass",
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
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות – מענה מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? הצוות שלנו בדרך אליכם עם שירות מקצועי, אמין ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ דחוף בכביש 22? אנחנו כאן בשבילכם.</h2>
        <p className="mb-4">אם נתקעתם עם הרכב בכביש 22 (עוקף קריות), אנו מספקים שירותי גרירה וחילוץ מקצועיים, מהירים ובטוחים. הצוות שלנו מתמחה במתן מענה מיידי לכל סוגי הרכבים הפרטיים והמסחריים. במידה ואתם זקוקים ל- <Link href="/areas/haifa-general/heavy-duty-truck-towing-kiryat-haim-industrial-zone" className="text-blue-600 underline">גרירת משאיות כבדות באזור התעשייה</Link> או עזרה עם רכב תקוע, אנחנו כאן לסייע. ניתן גם לקבל מידע נוסף על <Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="text-blue-600 underline">שירותי גרירת רכב תקוע בכביש 22</Link>.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li><strong>זמינות מלאה:</strong> שירות 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li><strong>מקצועיות:</strong> צוות מיומן עם ציוד גרירה מתקדם.</li>
          <li><strong>מחירים הוגנים:</strong> שקיפות מלאה ומחירים הוגנים ללא הפתעות.</li>
          <li><strong>שירות מקיף:</strong> מומחים בחילוץ רכבים פרטיים ומסחריים.</li>
        </ul>

        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">שאלות נפוצות על גרירה בכביש 22</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</p>
              <p>אנו משתדלים להגיע לכל נקודה לאורך עוקף קריות בזמן מהיר ככל האפשר, לרוב תוך 30-45 דקות תלוי בעומסי התנועה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים גם אופנועים?</p>
              <p>חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים, אלא מתמקדים ברכבים פרטיים, מסחריים ורכבי שטח.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מספקים חילוץ גם אם נתקעתי בבוץ ליד הכביש?</p>
              <p>כן, אנו מבצעים חילוצי שטח. במידה ומדובר בחילוץ מורכב יותר, ניתן לעיין במידע על <Link href="/areas/haifa-general/off-road-rescue-stuck-in-mud-carmel" className="text-blue-600 underline">חילוצי שטח בבוץ</Link>.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}