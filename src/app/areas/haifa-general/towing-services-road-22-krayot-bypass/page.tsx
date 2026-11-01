import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22 עוקף קריות? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. הגעה מהירה, שירות אמין ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-services-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "מחיר הוגן",
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים בכביש 22 עוקף קריות - שירות מהיר ומקצועי</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בדרך בעוקף קריות? אנו כאן לעזור. אנו מספקים שירותי גרירה מתקדמים לרכבים פרטיים ומסחריים לכל אורך כביש 22. זמינות 24/7 להגעה מהירה ובטוחה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="כביש 22 עוקף קריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">למה לבחור בנו לשירות גרירה בעוקף קריות?</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-8 text-center">
            עוקף קריות הוא ציר תנועה מרכזי ועמוס. כשאנחנו מבצעים <Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="text-blue-600 underline">emergency towing road 22 krayot</Link>, אנו שמים דגש על בטיחות הנהג והרכב. זקוקים לטיפול נוסף? אנו מציעים גם פתרונות של <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-600 underline">emergency breakdown towing route 22 krayot bypass</Link> במחירים נוחים.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה בכביש 22</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">מה זמן ההגעה הממוצע לאזור עוקף קריות?</h4>
              <p className="text-gray-600">אנו פרוסים בנקודות אסטרטגיות ליד צמתים מרכזיים, מה שמאפשר לנו הגעה מהירה ככל הניתן לתקועים בכביש.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מטפלים ברכבים חשמליים תקועים?</h4>
              <p className="text-gray-600">כן, אנו מציעים שירות מיוחד של <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">electric vehicle flat battery towing route 22 krayot</Link> לכל סוגי הרכבים החשמליים.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם קונים רכבים ישנים לפירוק באזור?</h4>
              <p className="text-gray-600">בהחלט, אם הרכב אינו בר תיקון, נשמח להציע לכם שירותי <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-towing" className="text-blue-600 underline">car scrapping haifa krayot towing</Link> מהירים ומקצועיים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}