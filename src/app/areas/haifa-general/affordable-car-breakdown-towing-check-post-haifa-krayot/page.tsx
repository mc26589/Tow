import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירה בצ'ק פוסט חיפה והקריות | מחיר הוגן | זמינות 24/7",
  description: "נתקעתם עם הרכב בצומת צ'ק פוסט או בחיפה והקריות? שירות גרירה וחילוץ רכב מהיר, אמין ובמחיר משתלם. זמינות 24/7. התקשרו עכשיו לקבלת שירות!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": ["Haifa", "Krayot", "Check Post"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0230"
    },
    "priceRange": "$",
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ רכב במחיר משתלם בצומת צ'ק פוסט, חיפה והקריות
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם הרכב? אנו מציעים שירותי גרירה מהירים, אמינים ובמחירים הוגנים לכל אזור צומת צ'ק פוסט, חיפה והקריות. אם אתם זקוקים לפתרון מקצועי כגון <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="underline font-semibold">affordable flatbed towing route 22 krayot area</Link>, אנו כאן לעזור. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בנו?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">זמינות 24/7</h3>
              <p>אנו זמינים לכל קריאה בכל שעה באזור הצ'ק פוסט, גם בסופי שבוע וחגים, כפי שניתן לראות בשירותי <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-400">24 7 accident recovery towing check post junction haifa</Link>.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות מלאה ומציעים מחירים תחרותיים ומשתלמים ללא הפתעות מיותרות.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">מקצועיות וניסיון</h3>
              <p>צוות מיומן עם ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם, כולל שירותי <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-400">cheap towing services check post junction</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות (FAQ)</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לצ'ק פוסט?</h3>
            <p>אנו מבינים את הדחיפות ומשתדלים להגיע לכל קריאה באזור הצ'ק פוסט והקריות בזמן הקצר ביותר האפשרי בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם קונים רכבים לפירוק?</h3>
            <p>כן, בנוסף לגרירה אנו מספקים שירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-600 font-medium">buying cars for scrap check post haifa</Link> למי שמעוניין להיפטר מרכב ישן.</p>
          </div>
        </div>
      </section>
    </main>
  );
}