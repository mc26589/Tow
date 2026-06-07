import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה - פינוי מיידי | שירות 24/7",
  description: "רוצים למכור רכב ישן או תקול לפירוק בחיפה והקריות? אנו מציעים שירות פינוי מהיר, הוגן ומקצועי בכל אזור חיפה. צרו קשר לקבלת הצעה משתלמת עוד היום!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-immediate-removal",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והסביבה פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן, רכב לאחר תאונה או רכב ללא טסט? אנו כאן עם פתרון מהיר בחיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
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
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <p className="mb-4">אנו מציעים שירות אמין לתושבי חיפה והקריות. אם אתם מחפשים <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-400 underline">buying cars for scrap check post haifa</Link> או באזורים סמוכים, אנו הכתובת שלכם. אנו קונים רכבים פרטיים ומסחריים במחירים הוגנים.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>פינוי מיידי מהשטח</li>
            <li>טיפול מהיר בכל הבירוקרטיה</li>
            <li><Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-400 underline">buy cars for scrap haifa towing included</Link></li>
          </ul>
          <p className="text-sm text-gray-400 italic">*שימו לב: אנו לא מטפלים באופנועים או דו-גלגלי מכל סוג שהוא.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים בחיפה</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם מפנים רכבים מכל אזור חיפה?</h3>
              <p>כן, אנו נותנים מענה מהיר בכל חיפה, החל מהצ'ק פוסט ועד הקריות. למידע נוסף ראו גם <Link href="/areas/haifa-general/cash-for-junk-cars-check-post-haifa" className="text-blue-600 underline">cash for junk cars check post haifa</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">מה קורה אם הרכב תקוע בשטח קשה?</h3>
              <p>אנו מתמחים גם בחילוצים מורכבים, כגון <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="text-blue-600 underline">car stuck in mud carmel area</Link> או באזורים חוליים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}