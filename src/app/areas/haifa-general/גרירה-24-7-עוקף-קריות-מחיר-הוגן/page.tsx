import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירה 24/7 בכביש 22 עוקף קריות | מחיר הוגן וזמינות מיידית",
  description: "נתקעתם בכביש 22 עוקף קריות? שירותי גרירה וחילוץ 24/7 לרכבים פרטיים ומסחריים. הגעה מהירה, מחיר הוגן ושקיפות מלאה. התקשרו עכשיו לקבלת סיוע!",
  alternates: {
    canonical: "/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ 24/7 חיפה והקריות",
    "description": "שירותי גרירה וחילוץ מהירים ואמינים 24/7 בכביש 22 עוקף קריות ובכל אזור חיפה והקריות. זמינות מיידית ומחירים הוגנים.",
    "url": "https://yourdomain.com/גרירה-24-7-עוקף-קריות-מחיר-הוגן",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$",
    "areaServed": [
      { "@type": "Place", "name": "חיפה והקריות" },
      { "@type": "Place", "name": "כביש 22 עוקף קריות" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.818", "longitude": "35.055" },
    "serviceType": ["גרירת רכב", "חילוץ רכב", "שירותי גרירה 24/7", "גרירה בכביש 22"]
  };

  return (
    <>
      <Script
        id="json-ld-auto-towing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            גרירת רכב 24/7 בכביש 22 עוקף קריות במחיר הוגן
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            מחפשים שירותי גרירה וחילוץ מהירים ואמינים? אנו כאן לשירותכם! גרירה מקצועית לרכבים פרטיים, מסחריים ו-4X4 בכל שעות היממה.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-100 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">שירותי גרירה בכביש 22 עוקף קריות</h2>
            <p className="text-lg leading-relaxed mb-4">
              נתקעתם בכביש 22? אנו מספקים מענה מהיר. אם אתם מחפשים <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-300 underline">גרירה דחופה בכביש עוקף קריות</Link>, הגעתם למקום הנכון. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4X4 (לא מגררים אופנועים).
            </p>
            <p className="text-lg leading-relaxed mb-4">
              אנו פועלים גם באזורים סמוכים כמו <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-300 underline">גרירת רכב בקריית מוצקין</Link> או <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-300 underline">גרירה בצומת צ'ק פוסט</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">שאלות נפוצות</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl">תוך כמה זמן תגיעו אלי לעוקף קריות?</h3>
                <p>אנו משתדלים להגיע לכל קריאה בכביש 22 במהירות המרבית, לרוב תוך פחות מ-45 דקות בהתאם לעומסי התנועה.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">האם המחיר לגרירה בכביש 22 הוא הוגן?</h3>
                <p>כן, אנו מאמינים במחירי שוק הוגנים ושקיפות מלאה מול הלקוח, ללא הפתעות בחיוב.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}