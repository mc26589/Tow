import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט | הגעה מהירה תוך 30 דקות | מחיר הוגן 24/7",
  description: "נתקעתם בצומת צ'ק פוסט? גרר זול, מקצועי ומהיר לכל סוגי הרכבים. הגעה תוך דקות לכל אזור חיפה והקריות. זמינות מלאה 24/7. התקשרו עכשיו לשירות אמין!",
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
    "priceRange": "$$,$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט - שירות מהיר 24/7</h1>
          <p className="text-xl mb-8">
            זקוקים לשירותי גרירה דחופים בצומת צ'ק פוסט? אנו מתמחים בחילוץ וגרירת רכבים פרטיים ומסחריים לכל יעד שתבחרו. 
            נתקעתם עם רכב מושבת בדרך? בדקו את שירותי ה-<Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline">גרירה שלנו באזור הצ'ק פוסט</Link>.
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. אנו מציעים מחירים הוגנים, שקיפות מלאה ושירות מקצועי לכל אזור חיפה.
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
            <li>✓ זמינות מלאה 24 שעות ביממה, כולל חגים ושבתות.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט, כולל קרבה ל-<Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-400">כביש 22 (עוקף קריות)</Link>.</li>
            <li>✓ מחיר זול, תחרותי והוגן - ללא עלויות נסתרות.</li>
            <li>✓ שירות בטוח ומקצועי לרכבים תקועים כולל סיוע ב-<Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-400">גרירה לאחר תאונה</Link>.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">מהו זמן ההגעה הממוצע של גרר לצומת צ'ק פוסט?</h4>
              <p>אנו ממוקמים בנקודה אסטרטגית המאפשרת לנו להגיע לרוב הקריאות בצומת צ'ק פוסט והסביבה תוך 20-30 דקות בלבד.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם גוררים רכבים מכל הסוגים?</h4>
              <p>אנו גוררים רכבים פרטיים, רכבי שטח ורכבים מסחריים קלים. לצערנו איננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
            <div>
              <h4 className="font-bold">מה לעשות אם נתקעתי עם הרכב בדרך לעבודה?</h4>
              <p>מומלץ לעצור בצד הדרך בבטחה, להפעיל משולש אזהרה ולהתקשר אלינו מיד. אם הרכב זקוק לגרירה מקצועית, אנו נדאג לפנות אתכם ליעד הרצוי במהירות ובבטחה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}