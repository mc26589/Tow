import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בצ'ק פוסט חיפה | מחיר הוגן 24/7 | זמינות מיידית",
  description: "נתקעתם בצומת צ'ק פוסט? שירותי גרירה מהירים, אמינים ובמחיר הוגן 24/7. הגעה מהירה לכל אזור הצפון והקריות. לחצו לחיוג או התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
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
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם באזור צומת צ'ק פוסט? אנו מציעים שירותי גרירה מהירים, אמינים ובמחירים הוגנים. 
            אנו מתמחים בחילוץ רכבים פרטיים ומסחריים. במידה ואירעה תאונה, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="underline font-semibold">גרירה לאחר תאונה בכביש 22</Link>. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 לכל קריאה באזור הצומת.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ צוות מיומן המכיר את צירי התנועה בחיפה והקריות.</li>
            <li>✓ ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
          </ul>
          <p className="text-gray-300">זקוקים לפתרונות נוספים? ראו גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-400 hover:underline">שירותי גרירה משתלמים בצ'ק פוסט</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירת רכבים בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לצומת צ'ק פוסט?</h3>
              <p>אנו פרוסים באזור חיפה והקריות במטרה להגיע לכל קריאה בזמן הקצר ביותר, בדרך כלל תוך 30-45 דקות בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם קונים רכבים לפירוק באזור?</h3>
              <p>בהחלט. אם הרכב שלכם אינו בר תיקון, אנו מציעים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בצ'ק פוסט</Link> בתשלום הוגן.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}