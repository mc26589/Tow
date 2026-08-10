import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בצ'ק פוסט חיפה | מחיר הוגן וזמינות 24/7",
  description: "זקוקים לגרר בצומת צ'ק פוסט? הגעה מהירה, שירות מקצועי ומחיר הוגן לכל סוגי הרכבים. זמינים 24/7 לכל תקלה. התקשרו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "חיפה והקריות",
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
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם באזור צ'ק פוסט? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. אם אתם מחפשים <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline font-semibold">גרירת רכבים בצ'ק פוסט</Link> במחיר הוגן, הגעתם למקום הנכון. זמינים 24/7.
            שימו לב: השירות מיועד לרכבים בלבד (לא מספקים שירותי גרירה לאופנועים).
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="צ'ק פוסט חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 לכל תרחיש, כולל בקרבת <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400 hover:underline">כביש 22</Link>.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט והסביבה.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ אופציה ל<Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-400 hover:underline">פינוי רכבים לפירוק</Link> במידה והרכב אינו שמיש.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
              <p>אנו מתחייבים לזמן תגובה מהיר ככל הניתן, בהתאם לעומסי התנועה בצומת המרכזי.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם גוררים רכבים מהצומת לכל הארץ?</h3>
              <p>כן, אנו מספקים שירותי גרירה מצ'ק פוסט לכל חלקי הארץ במחירים תחרותיים.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם ניתן להזמין גרירה גם לרכב תקוע בכביש 22?</h3>
              <p>בהחלט. אנו ערוכים להגעה מהירה גם לצירים הראשיים העוטפים את אזור צ'ק פוסט.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}