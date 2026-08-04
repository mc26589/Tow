import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ שטח בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ בדרכי העפר בכרמל? צוות מקצועי לחילוץ רכב שטח ופרטי 24/7. הגעה מהירה, ציוד מתקדם ומחיר הוגן. אל תתעכבו - התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-mud-rescue-carmel-stuck-vehicle",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ שטח בבוץ בכרמל",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$,$",
    "serviceType": "Off-road vehicle recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח ובוץ בכרמל: רכב תקוע? הגענו לעזור</h1>
          <p className="text-xl mb-8">נתקעתם בדרכי עפר? צוות מיומן לחילוץ 4x4 ורכבים פרטיים זמין עבורכם 24/7 בכל אזור הכרמל.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ רכב מהשטח במקצועיות</h2>
        <p className="mb-4">נתקעתם בבוץ עמוק? הצוות שלנו מנוסה בחילוץ בדרכי הכרמל המורכבות. אנו מספקים מענה מהיר גם עבור <Link href="/areas/haifa-general/emergency-car-rescue-mud-carmel-forest" className="text-blue-600 hover:underline">חילוץ רכב מהשטח ביערות הכרמל</Link> וכן מתמחים ב-<Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="text-blue-600 hover:underline">חילוץ בוץ מקצועי לרכבי שטח בכרמל</Link>.</p>
        <p className="mb-4">זקוקים לחילוץ גם באזורים עירוניים סמוכים? אנו מציעים שירותי <Link href="/areas/haifa-general/towing-services-stuck-vehicle-steep-hill-ahuza-haifa" className="text-blue-600 hover:underline">גרירה וחילוץ באחוזה חיפה</Link> לכל רכב שנתקע בעליות התלולות.</p>
        <p><strong>שים לב:</strong> אנו מחלצים רכבים פרטיים ומסחריים, ואיננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות ותשובות על חילוץ שטח</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם מגיעים לכל נקודה בכרמל?</h3>
              <p>כן, הצוותים שלנו מכירים את כל דרכי העפר, היערות והשבילים באזור הכרמל ומגיעים במהירות האפשרית.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות אם נתקעתי בבוץ בסטלה מאריס?</h3>
              <p>אנו מטפלים גם באזורים אלו. ניתן להסתכל על שירותי <Link href="/areas/haifa-general/4x4-stuck-in-mud-stella-maris-haifa" className="text-blue-600 hover:underline">חילוץ שטח בסטלה מאריס</Link> לקבלת פרטים נוספים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם המחיר לחילוץ שטח יקר?</h3>
              <p>אנו מקפידים על מחיר הוגן ושקוף לכל סוגי החילוצים, בהתאם למורכבות החילוץ ותנאי השטח.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}