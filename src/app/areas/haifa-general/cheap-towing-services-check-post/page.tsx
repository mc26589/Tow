import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בצ'ק פוסט חיפה 24/7 | מחיר הוגן ומקצועי",
  description: "נתקעתם בצ'ק פוסט? מציעים שירותי גרירה וחילוץ רכבים 24/7 באזור חיפה והקריות. הגעה מהירה, מחיר הוגן ושירות מקצועי לכל סוגי הרכבים. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "צ'ק פוסט, חיפה והקריות",
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
    "serviceType": ["גרירת רכבים", "חילוץ רכבים", "שירותי דרך"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים באזור צ'ק פוסט</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור צ'ק פוסט? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחירים הוגנים. 
            אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
            זקוקים למידע נוסף? ניתן לבדוק גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="underline">שירותי גרירה זולים בחיפה</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="צ'ק פוסט" />
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
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו באזור צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 לכל קריאה באזור צ'ק פוסט והסביבה.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ צוות מיומן ומקצועי עם ציוד גרירה חדיש.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט והכבישים הסמוכים כמו <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="underline">כביש עוקף קריות</Link>.</li>
          </ul>
          
          <div className="mt-12 border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold">תוך כמה זמן תגיעו לצ'ק פוסט?</h3>
                <p>אנו משתדלים להגיע לכל קריאה באזור הצ'ק פוסט תוך זמן קצר ככל הניתן בהתאם לעומסי התנועה.</p>
              </div>
              <div>
                <h3 className="font-bold">האם אתם קונים רכבים לפירוק?</h3>
                <p>כן, אנו מספקים גם שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="underline">פינוי רכבים לפירוק בחיפה והקריות</Link> אם הרכב שלכם אינו בר תיקון.</p>
              </div>
              <div>
                <h3 className="font-bold">האם אתם מספקים חילוצי שטח?</h3>
                <p>כן, אנו מבצעים חילוצים גם בדרכים קשות, למידע נוסף ראו <Link href="/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot" className="underline">חילוצי 4x4 בקריות</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}