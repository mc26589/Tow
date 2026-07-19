import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה 24/7 | מחיר הוגן ושירות מהיר | הגעה תוך 30 דקות",
  description: "נתקעתם עם הרכב באחוזה חיפה? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים 24/7. מחירים הוגנים וזמינות מידית. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה באחוזה חיפה",
    "areaServed": "Haifa - Ahuza",
    "priceRange": "מחיר הוגן",
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
    "serviceType": "Car Towing and Roadside Assistance"
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
            שירותי גרירה באחוזה, חיפה - זמינות 24/7 לכל סוגי הרכבים
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            חשוב להבהיר: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. איננו מספקים שירותי גרירה לאופנועים באזור אחוזה.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים בלב חיפה</h2>
        <p className="mb-4">
          האזור ההררי של אחוזה דורש מיומנות גבוהה בגרירה ובחילוץ רכבים. למרות שאיננו מטפלים באופנועים, אנו נותנים מענה מלא לנהגי חיפה. 
          במידה ונתקעתם באזורים סמוכים, אנו מציעים גם <Link href="/areas/haifa-general/cheap-car-towing-service-neve-shaanan-haifa" className="text-blue-600 underline">שירותי גרירה בנווה שאנן</Link> או <Link href="/areas/haifa-general/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa" className="text-blue-600 underline">חילוצי 4x4 ביערות הכרמל</Link>.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל תושבי אחוזה והסביבה</li>
          <li>ציוד מתקדם לגרירת רכבים תקועים במדרונות</li>
          <li>מחירים הוגנים ושירות מהיר</li>
          <li>ניסיון עשיר בחילוצי רכבים עירוניים</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות על גרירה באחוזה</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">האם אתם גוררים אופנועים באחוזה?</p>
              <p>לא, השירות שלנו מיועד לרכבים פרטיים, מסחריים ורכבי שטח בלבד.</p>
            </div>
            <div>
              <p className="font-bold">תוך כמה זמן תגיעו אלי?</p>
              <p>אנו פרוסים בכל רחבי חיפה ומגיעים בדרך כלל תוך 30-45 דקות בהתאם לעומסי התנועה באזור.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם פועלים גם בלילה?</p>
              <p>כן, אנו זמינים 24 שעות ביממה, 7 ימים בשבוע, כולל סופי שבוע וחגים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}