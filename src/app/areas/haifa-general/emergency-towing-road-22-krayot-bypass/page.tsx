import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בכביש 22 עוקף קריות - מענה מהיר 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? אנו מספקים שירותי גרירה וחילוץ מקצועיים במחיר הוגן, הגעה מהירה לכל נקודה בציר. התקשרו עכשיו לקבלת סיוע!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה עוקף קריות",
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
      "latitude": "32.8158",
      "longitude": "35.0653"
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות – מענה מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? הצוות שלנו בדרך אליכם עם שירות גרירה מקצועי ואמין.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ וגרירה בכביש 22</h2>
        <p className="mb-4">אנו מספקים מענה מהיר לכל נהג שנתקע בציר עוקף קריות. השירות שלנו כולל גרירת רכבים פרטיים, רכבי 4x4 ורכבים מסחריים קלים. אם נתקעתם בנקודות מרכזיות, ניתן לעיין גם בשירותים נוספים כגון <Link href="/areas/haifa-general/towing-stuck-vehicle-road-22-haifa" className="text-blue-600 underline">גרירת רכבים תקועים בכביש 22</Link> או <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 underline">שירותי גרירה בקריות</Link>.</p>
        <p className="mb-4 font-semibold text-red-600">חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</p>
        <p>אנו מתחייבים למחירים הוגנים ושירות אדיב בכל שעות היממה.</p>
      </section>

      <section className="py-12 container mx-auto px-4 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה בכביש 22</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">תוך כמה זמן תגיעו לחילוץ בכביש 22?</h3>
            <p>אנו משתדלים להגיע לכל קריאה בציר עוקף קריות בזמן המהיר ביותר האפשרי, לרוב תוך דקות ספורות מרגע הקריאה.</p>
          </div>
          <div>
            <h3 className="font-bold">מה טווח המחירים לגרירת רכב באזור הקריות?</h3>
            <p>מחיר הגרירה נקבע בהתאם למרחק הגרירה וסוג הרכב. אנו מקפידים על מחיר הוגן ושקוף לכל לקוח.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם מספקים שירות פינוי לרכבים ישנים?</h3>
            <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-krayot-immediate-removal" className="text-blue-600 underline">פינוי רכבים לפירוק בקריות</Link> למי שזקוק לכך.</p>
          </div>
        </div>
      </section>
    </main>
  );
}