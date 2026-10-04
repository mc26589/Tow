import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה - פינוי מיידי במזומן | הגעה תוך 30 דקות",
  description: "מוכרים רכב לפירוק בחיפה? קונים רכבים תקולים, ללא טסט או לאחר תאונה במזומן. פינוי מהיר מהשטח ושירות אמין בכל חיפה והקריות. התקשרו עכשיו להצעה!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-immediate-removal",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי קניית רכבים לפירוק ופינוי בחיפה",
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
      "longitude": "34.9896"
    },
    "serviceType": "Car Scrap Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה – פינוי מיידי במזומן</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן, תקול או ללא טסט? אנו מציעים שירות קנייה ופינוי רכבים מהיר בחיפה והקריות במחיר הוגן והגעה מהירה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם בחיפה?</h2>
          <p className="mb-4">אנו מומחים במתן שירותי פינוי לתושבי חיפה והקריות. בין אם אתם מחפשים <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-400 underline">פירוק רכבים בחיפה והקריות</Link> או זקוקים לחילוץ דחוף באזור נווה שאנן, אנו כאן.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>פינוי מיידי מהשטח עם גרר מקצועי</li>
            <li>טיפול מהיר בכל הבירוקרטיה והורדה מהכביש</li>
            <li>שירות אמין ומחיר הוגן לכל סוגי הרכבים</li>
            <li>סיוע ברכבים שאינם מניעים בכל רחבי חיפה</li>
          </ul>
          <p className="text-sm text-gray-400 italic">*שימו לב: אנו לא מטפלים באופנועים מכל סוג שהוא.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים ללא טסט?</h3>
              <p>כן, אנו קונים רכבים ללא טסט, רכבים אחרי תאונה או רכבים שלא מניעים. אם הרכב נתקע בדרך, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">גרר זול בצק פוסט חיפה</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים באזור הקריות?</h3>
              <p>בהחלט. אנו פעילים בפריסה רחבה. אם אתם זקוקים ל- <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-immediate-pickup" className="text-blue-600 underline">פינוי רכב ישן בקרית ים</Link> או מחפשים <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-600 underline">גרר דחוף וזול בקרית ביאליק</Link>, צרו איתנו קשר.</p>
            </div>
            <div>
              <h3 className="font-bold">מה השירות הכי מתאים לרכב תקוע שלא מניע?</h3>
              <p>עבור רכב שלא מניע, אנו ממליצים על גרר שטוח. אם מדובר ברכב חשמלי שנתקע בדרך, אנו מציעים שירותי <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">גרירת רכב חשמלי בכביש 22</Link> למקצוענים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}