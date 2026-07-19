import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 קריות | חילוץ מהיר 24/7 – מחיר הוגן",
  description: "נתקעתם בכביש 22? גרר מהיר לקריות וחיפה, הגעה מהירה, שירות אדיב ומחירים נוחים. פתרונות גרירה וחילוץ לכל סוגי הרכבים 24/7. התקשרו עכשיו לקבלת סיוע!",
  alternates: {
    canonical: "/areas/haifa-general/fast-towing-road-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22, חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$$,$",
    "serviceType": "גרירת רכבים וחילוץ דרך",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0553" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר מהיר לכביש 22 קריות – חילוץ מקצועי תוך זמן קצר</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בכביש עוקף קריות (כביש 22)? אנו מספקים מענה מקצועי לגרירה וחילוץ רכבים פרטיים, מסחריים ושטח. למידע נוסף על מקרים מורכבים, ניתן לעיין ב-<Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="underline font-bold">שירותי גרר מהירים בכביש 22</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="grid md:grid-cols-3 gap-8">
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">זמינות 24/7</h3>
            <p>שירות גרירה מסביב לשעון, גם בסופי שבוע, כדי שלא תישאר תקוע בכביש מהיר.</p>
          </li>
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">מומחיות בנתיבי עוקף קריות</h3>
            <p>הכרות מעמיקה עם הדרכים, כולל <Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="text-blue-600 underline">גרירה לאחר תאונה בצומת צ'ק פוסט</Link>.</p>
          </li>
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
            <p>שקיפות מלאה והצעת מחיר הוגנת בטלפון לפני תחילת העבודה.</p>
          </li>
        </ul>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן הגרר מגיע?</h3>
              <p>אנו משתדלים להגיע לכל נקודה בכביש 22 בזמן הקצר ביותר, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים חשמליים?</h3>
              <p>כן, אנו נותנים מענה מקצועי גם ל-<Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">גרירת רכב חשמלי עם מצבר ריק בכביש 22</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם השירות כולל פינוי רכבים לפירוק?</h3>
              <p>כן, ניתן לפנות אלינו גם עבור <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-600 underline">פינוי רכבים לפירוק באזור הקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}