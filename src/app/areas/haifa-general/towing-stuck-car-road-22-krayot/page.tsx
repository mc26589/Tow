import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 22 (עוקף קריות) | שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בכביש 22 (עוקף קריות)? גרר מקצועי בדרך אליכם תוך דקות. שירות גרירה אמין 24/7 לכל סוגי הרכבים. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/towing-stuck-car-road-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 חיפה והקריות",
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
      "latitude": "32.8190",
      "longitude": "35.0630"
    },
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב תקוע בכביש 22 (עוקף קריות)</h1>
          <p className="text-xl mb-8">נתקעתם עם הרכב בכביש עוקף קריות (כביש 22)? אנו מספקים שירותי גרירה וחילוץ מהירים ומקצועיים לכל סוגי הרכבים הפרטיים והמסחריים. הצוות שלנו זמין עבורכם 24/7 להגעה מהירה לשטח.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 prose max-w-none">
          <h2 className="text-3xl font-semibold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
          <p className="mb-4">זקוקים לגרר מהיר? אנו מתמחים בחילוץ רכבים תקועים בכביש 22 ובצירים המרכזיים באזור. אנו מציעים שירותים נוספים באזור הקריות, כגון <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7">שירותי גרירה במחיר נוח בקרית מוצקין</Link> וכן <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-yam-disabled-vehicle">גרירת רכבים תקועים בקרית ים</Link>. למי שנוסע לכיוון מפרץ חיפה, ניתן להסתייע גם בשירותי <Link href="/areas/haifa-general/cheap-towing-check-post-junction">גרירה בצומת צ'ק פוסט</Link>.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן תגיעו אלי לכביש 22?</h3>
              <p>אנו משתדלים להגיע לכל נקודה בכביש 22 תוך זמן קצר, בהתאם לעומסי התנועה. התקשרו למוקד שלנו לקבלת הערכת זמן מדויקת.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים אופנועים?</h3>
              <p>לא, אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ו-4x4. איננו מטפלים באופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם עובדים גם בסופי שבוע?</h3>
              <p>כן, הצוות שלנו זמין 24/7, כולל שבתות וחגים, כדי לתת מענה לכל תקלה בכביש.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}