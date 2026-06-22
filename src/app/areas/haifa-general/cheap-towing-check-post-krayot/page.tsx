import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר זול בצ'ק פוסט והקריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב באזור צ'ק פוסט או הקריות? אנו מספקים שירותי גרירה מקצועיים, מהירים ובמחיר זול במיוחד. שירות 24/7 לכל סוגי הרכבים. חייגו עכשיו לשירות גרירה!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-krayot",
  },
};

export default function Page() {
  return (
    <main className="flex flex-col w-full">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר זול באזור צ'ק פוסט והקריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-lg md:text-xl mb-8">נתקעתם בדרך? הצוות שלנו כאן כדי לחלץ אתכם במהירות ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              חייגו עכשיו לשירות גרירה
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה אמינים בצפון</h2>
        <p className="mb-4">
          אנו מבינים כמה מתסכל להיתקע עם הרכב. לכן, אנו מציעים שירות גרירה מהיר באזור צ'ק פוסט, הקריות וחיפה. 
          בין אם אתם זקוקים ל-<Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">שירותי גרירה דחופים בצ'ק פוסט</Link> או עזרה בדרכים, הצוות שלנו זמין עבורכם.
          השירות שלנו מתמקד ברכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
          שימו לב: איננו מספקים שירותי גרירה לאופנועים.
        </p>
        <p>
          אנו מקפידים על מחיר זול והוגן לכל לקוח, תוך מתן שירות אדיב ומקצועי בכל שעות היממה. אם נתקעתם בדרך צפונה, אנו ערוכים לסייע גם בתאונות ב-<Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600 underline">צומת צ'ק פוסט</Link>.
        </p>
      </section>

      <section className="py-12 container mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה בצ'ק פוסט והקריות</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">מהו זמן ההגעה הממוצע לצ'ק פוסט?</h3>
            <p>אנו משתדלים להגיע לכל קריאה באזור צ'ק פוסט והקריות תוך 30-45 דקות, בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים מסחריים?</h3>
            <p>כן, אנו מספקים שירותי גרירה לרכבים פרטיים, רכבים מסחריים ורכבי 4x4. איננו מספקים שירות לאופנועים.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoTowing",
            "name": "שירותי גרירה צ'ק פוסט והקריות",
            "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
            "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
            "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0240" },
            "priceRange": "$",
            "serviceType": "Towing Service"
          }),
        }}
      />
    </main>
  );
}