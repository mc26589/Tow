import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | גרירה חינם | הגעה מהירה",
  description: "צריכים למכור רכב לפירוק בחיפה והקריות? אנו קונים רכבים לאחר תאונה או ללא טסט עם גרירה מהירה בחינם. שירות אמין ומחיר הוגן במזומן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot-towing",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וקניית רכבים לפירוק חיפה והקריות",
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
    "serviceType": "Car Scrapping and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות - גרירה מהירה ללא עלות</h1>
          <p className="text-xl mb-8">
            אנו מתמחים בקניית רכבים לפירוק, רכבים לאחר תאונה ורכבים ללא טסט בחיפה ובכל אזור הקריות. 
            מחפשים פתרון לרכב ישן? בדקו גם את שירותי ה-<Link href="/areas/haifa-general/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi" className="underline">קניית רכבים לפירוק בקרית ים</Link> שלנו.
            אנו מטפלים ברכבים פרטיים ומסחריים. חשוב לציין: איננו מספקים שירותי גרירה או פירוק לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ שירות גרירה מהיר בכל חיפה והקריות</li>
            <li>✓ הצעת מחיר הוגנת ומשתלמת במקום</li>
            <li>✓ פינוי מקצועי של רכבים מושבתים ללא טסט</li>
            <li>✓ עבודה אמינה בפיקוח צוות מנוסה</li>
          </ul>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על פירוק רכבים</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold">באילו רכבים אתם מטפלים?</p>
                <p>אנו קונים רכבים פרטיים, מסחריים ו-4x4. השירות אינו כולל אופנועים.</p>
              </div>
              <div>
                <p className="font-bold">האם הגרירה כרוכה בתשלום נוסף?</p>
                <p>ברוב המקרים, שירות הגרירה כלול במחיר הפירוק שאנו מציעים עבור הרכב שלכם.</p>
              </div>
              <div>
                <p className="font-bold">אילו אזורים אתם מכסים?</p>
                <p>אנו פעילים בכל אזור חיפה, הקריות, וכן מבצעים <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-600">פירוק רכבים באזור התעשייה הישן בקרית ביאליק</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}