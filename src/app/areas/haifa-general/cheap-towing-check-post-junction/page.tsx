import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט | מחיר זול, הגעה מהירה 24/7",
  description: "נתקעתם עם הרכב בצומת צ'ק פוסט? שירותי גרירה מקצועיים במחיר הוגן, זמינות מלאה 24/7. הגעה מהירה לכל אזור חיפה והקריות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "priceRange": "$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7936", "longitude": "35.0253" },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8">
            זקוקים לשירותי גרירה דחופים בצומת צ'ק פוסט? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            זקוקים למידע נוסף? בדקו גם את שירותי ה-<Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="underline">גרירה שלנו באזור</Link>.
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. אנו מציעים מחירים הוגנים ושירות מקצועי 24/7.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט, כולל קרבה ל-<Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-400">כביש 22 (עוקף קריות)</Link>.</li>
            <li>✓ מחיר זול והוגן ללא הפתעות.</li>
            <li>✓ צוות מיומן ומקצועי לטיפול בכל סוגי הרכבים (למעט אופנועים).</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">תוך כמה זמן אתם מגיעים לצומת צ'ק פוסט?</h4>
              <p>אנו עושים את מירב המאמצים להגיע תוך דקות ספורות לכל אזור הצומת בזכות מיקומנו האסטרטגי בחיפה והקריות.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם גוררים רכבים אחרי תאונה בצומת?</h4>
              <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/towing-after-accident-check-post-haifa" className="text-blue-400">גרירה לאחר תאונה</Link> בצורה בטוחה ומקצועית.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}