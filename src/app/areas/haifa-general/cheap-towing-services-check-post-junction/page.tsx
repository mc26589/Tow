import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בצ'ק פוסט | מחיר הוגן, זמינות 24/7 | הגעה מהירה",
  description: "נתקעתם באזור צומת צ'ק פוסט? מציעים שירותי גרירה מקצועיים, אמינים ובמחיר זול לרכבים פרטיים ומסחריים. הגעה מהירה 24/7. התקשרו עכשיו!",
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
            אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. 
            זקוקים למידע נוסף? ראו גם <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline">שירותי גרירה משתלמים בצ'ק פוסט ובקריות</Link>.
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
          <div className="bg-gray-800 p-6 rounded-xl mt-8">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold">האם אתם מגיעים גם לכביש 22?</p>
                <p>כן, אנו מבצעים <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400">גרירה דחופה בכביש עוקף קריות</Link> בצורה מהירה ובטוחה.</p>
              </div>
              <div>
                <p className="font-bold">מה טווח המחירים לגרירה בצ'ק פוסט?</p>
                <p>אנו מציעים תמחור הוגן המבוסס על מרחק וסוג הרכב. ניתן לראות מידע נוסף על <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-400">שירותי גרירה זולים באזור קריית אתא והסביבה</Link>.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם מספקים גרירה למסחריות?</p>
                <p>בהחלט, אנו מתמחים בטיפול בואנים ורכבים מסחריים. למידע נוסף לחצו כאן: <Link href="/areas/haifa-general/commercial-van-accident-recovery-check-post-junction-haifa" className="text-blue-400">חילוץ רכבים מסחריים בצ'ק פוסט</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}