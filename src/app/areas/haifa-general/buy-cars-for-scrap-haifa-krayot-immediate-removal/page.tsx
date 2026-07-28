import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מהיר ומזומן - שירות 24/7",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי, הצעת מחיר הוגנת במזומן ושירות מהיר לכל סוגי הרכבים. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות פינוי רכבים לפירוק חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו מציעים שירות מהיר, הוגן ומקצועי לכל סוגי הרכבים (למעט אופנועים).</p>
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ פינוי מיידי מהשטח בחיפה ובכל אזור הקריות.</li>
            <li>✓ הצעת מחיר הוגנת ומשתלמת עבור הרכב שלכם.</li>
            <li>✓ שירות מומחה עבור <Link href="/areas/haifa-general/scrap-car-removal-kiryat-haim-cash" className="underline">scrap car removal kiryat haim cash</Link>.</li>
            <li>✓ טיפול מקצועי ב-<Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="underline">scrap car removal for parts kiryat motzkin</Link>.</li>
          </ul>
          <p className="text-sm text-gray-400">
            *הערה: השירות אינו כולל פינוי או קנייה של אופנועים.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכבים לפירוק</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם קונים כל סוג של רכב?</h3>
            <p>אנו קונים רכבים פרטיים, רכבים מסחריים ורכבי 4x4. איננו מטפלים באופנועים.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
            <p>אנו מציעים שירות מהיר בחיפה והקריות, לרוב בהגעה באותו היום או תוך זמן קצר בתיאום מראש.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">איך נקבע המחיר לפירוק?</h3>
            <p>המחיר נקבע בהתאם לדגם הרכב, מצבו המכני והערך של חלקי החילוף הניתנים למחזור.</p>
          </div>
        </div>
      </section>
    </main>
  );
}