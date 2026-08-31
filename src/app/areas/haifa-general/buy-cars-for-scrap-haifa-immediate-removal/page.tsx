import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה - פינוי מיידי במזומן | שירות 24/7",
  description: "רוצים למכור רכב ישן לפירוק בחיפה? קונים רכבים תקולים, ללא טסט או אחרי תאונה במחיר הוגן. פינוי מיידי מהשטח ושירות מהיר בכל הקריות. התקשרו עכשיו!",
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
    "priceRange": "$$,$",
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
          <p className="text-xl mb-8">נתקעתם עם רכב ישן, תקול או ללא טסט? אנו מציעים שירות קנייה ופינוי רכבים מהיר בחיפה והקריות במחיר הוגן.</p>
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
          <p className="mb-4">אנו מומחים במתן שירותי פינוי לתושבי חיפה והקריות. אם אתם מחפשים שירות מקצועי, הגעתם למקום הנכון. אנו קונים רכבים פרטיים ומסחריים ללא התחייבות לתיקון. ניתן לבדוק גם את שירותי ה-<Link href="/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal" className="text-blue-400 underline">scrap car buyer haifa krayot immediate removal</Link> הזמינים עבורכם.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>פינוי מיידי מהשטח עם גרר</li>
            <li>טיפול מהיר בכל הבירוקרטיה</li>
            <li>שירות אמין ומחיר הוגן לכל רכב</li>
            <li>סיוע ברכבים שאינם מניעים</li>
          </ul>
          <p className="text-sm text-gray-400 italic">*שימו לב: אנו לא מטפלים באופנועים או דו-גלגלי מכל סוג שהוא.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים בחיפה והסביבה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים ללא טסט?</h3>
              <p>כן, אנו קונים רכבים ללא טסט, רכבים אחרי תאונה או רכבים שלא מניעים. אם אתם זקוקים לפינוי באזורים ספציפיים, אנו מספקים שירותי פינוי גם של <Link href="/areas/haifa-general/cash-for-old-broken-car-neve-shaanan-haifa" className="text-blue-600 underline">cash for old broken car neve shaanan haifa</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות כולל את אזורי הקריות?</h3>
              <p>בהחלט, אנו פעילים בפריסה רחבה. לדוגמה, ניתן להזמין שירות של <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-beach" className="text-blue-600 underline">junk car removal kiryat yam beach</Link> או <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-600 underline">car scrapping old industrial zone kiryat bialik</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">מהו אזור הפעילות שלכם בתוך חיפה?</h3>
              <p>אנו פרוסים בכל רחבי חיפה, מאחוזה ועד נווה שאנן. ללקוחות באזור אחוזה, מומלץ לעיין בדף <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-600 underline">buying cars for scrap ahoza haifa</Link> לפרטים נוספים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}