import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהחול בבת גלים חיפה | הגעה מהירה עד 30 דקות",
  description: "נתקעתם בחולות חוף בת גלים? אל תסתכנו! שירות חילוץ רכב מהיר, מקצועי ובמחיר הוגן 24/7. הגעה מיידית לכל נקודה בחוף. התקשרו עכשיו לחילוץ בטוח!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-sand-bat-galim-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ רכב שקוע בבת גלים",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8319", "longitude": "34.9756" },
    "priceRange": "$$,$",
    "serviceType": "Vehicle Recovery and Off-Road Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב מהחול בחוף בת גלים חיפה</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בחולות חוף בת גלים? אל תלחצו על הגז - זה רק יעמיק את השקיעה. צוות החילוץ שלנו מומחה בחילוץ רכבים פרטיים, ג'יפים ורכבים מסחריים ששקעו בחוף. 
            אנו מגיעים במהירות שיא לכל נקודה בבת גלים עם ציוד ייעודי לחילוץ עדין ושמירה על שלדת הרכב.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="בת גלים, חיפה" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">מדוע כדאי להזמין שירות חילוץ בבת גלים מאיתנו?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✓ זמינות מלאה 24/7 גם בשבתות וחגים באזור חיפה.</li>
            <li>✓ ניסיון רב בחילוץ מרכבי שטח כבדים ועד רכבים פרטיים משוקעים.</li>
            <li>✓ שירות בטוח ללא נזק לרכב - עבודה מקצועית ומחושבת.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה ללא הפתעות בחוף.</li>
          </ul>
          <p className="mt-6 text-gray-600">
            זקוקים לעזרה נוספת? אנו מספקים שירותי חילוץ מקיפים, כגון <Link href="/areas/haifa-general/emergency-towing-stella-maris-haifa" className="text-blue-600 underline">גרירת חירום באזור סטלה מאריס</Link> או <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="text-blue-600 underline">חילוץ שטח ביערות הכרמל</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכב בבת גלים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח להגיע לחוף בת גלים?</h3>
              <p className="text-gray-700">ברוב המקרים, הצוות שלנו מגיע לחוף בתוך כ-30 עד 45 דקות מרגע הקריאה, בהתאם לעומסי התנועה באזור הטיילת והרחובות הראשיים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים גם רכבים כבדים או מסחריים?</h3>
              <p className="text-gray-700">כן, אנו ערוכים לחילוץ מגוון רחב של רכבים, כולל רכבים פרטיים, רכבי שטח ורכבים מסחריים קלים ששקעו בבוץ או בחול.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">איך מונעים נזק למנוע בזמן שקיעה בחול?</h3>
              <p className="text-gray-700">הכלל החשוב ביותר הוא להפסיק לנסוע ברגע שמרגישים שהרכב "מחליק" או שוקע. ניסיון ללחוץ על הגז גורם לשקיעה עמוקה יותר ועלול להוביל לחימום יתר של המנוע.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}