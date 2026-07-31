import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקריות | מזומן במקום ופינוי מיידי 24/7",
  description: "רוצים למכור רכב ישן? קונה רכבים לפירוק בקריות במחיר הוגן ומזומן. פינוי מיידי מהבית, שירות מהיר בכל אזור הקריות. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-krayot-immediate-removal",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק בקריות",
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
      "longitude": "35.0675"
    },
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקריות עם פינוי מיידי</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב ישן, מושבת או רכב לאחר תאונה? אנו מציעים שירות מקצועי של קניית רכבים לפירוק באזור הקריות והסביבה. אנו מתחייבים לפינוי מיידי, שירות אדיב ומחירים הוגנים במזומן. זקוקים גם ל<Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="underline">שירותי גרירה בקרית מוצקין</Link> או <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-beach" className="underline">פינוי גרוטאות בקרית ים</Link>? הצוות שלנו כאן לשירותכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ פינוי מיידי מכל נקודה בקריות ובחיפה.</li>
            <li>✓ קניית רכבים פרטיים, מסחריים ורכבי 4x4.</li>
            <li>✓ תשלום הוגן ומזומן במקום.</li>
            <li>✓ שירות מנוסה ב<Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="underline">ציר כביש 22 בקריות</Link>.</li>
          </ul>
          <div className="border-t border-gray-700 pt-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">האם אתם קונים כל רכב?</h4>
                <p className="text-gray-300">אנחנו קונים רכבים פרטיים ומסחריים ללא תלות במצב המכני. יחד עם זאת, איננו מטפלים באופנועים.</p>
              </div>
              <div>
                <h4 className="font-bold">באילו אזורים אתם פועלים בקריות?</h4>
                <p className="text-gray-300">השירות ניתן בכל הקריות: מוצקין, חיים, ים, אתא ושמואל, כולל אזור <Link href="/areas/haifa-general/cash-for-junk-cars-check-post-haifa" className="underline">הצ'ק פוסט בחיפה</Link>.</p>
              </div>
              <div>
                <h4 className="font-bold">מה עושים אם הרכב לא מניע?</h4>
                <p className="text-gray-300">אין בעיה, אנחנו מספקים שירותי גרירה מקצועיים כדי לפנות את הרכב מהשטח או מהחניה ללא עלות נוספת במידה ואנחנו קונים את הרכב.</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            *שימו לב: השירות מיועד לרכבים בעלי רישיון מוסדר. יש להצטייד בתעודת זהות ורישיון רכב בעת הפינוי.
          </p>
        </div>
      </section>
    </main>
  );
}