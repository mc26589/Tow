import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "החלפת גלגל בכביש 22 קריית ביאליק | סיוע 24/7 מהיר",
  description: "נתקעתם עם פנצ'ר בכביש 22 ליד קריית ביאליק? צוות גרירה וחילוץ מקצועי יגיע אליכם תוך דקות. שירות 24/7 במחיר הוגן. התקשרו עכשיו לסיוע מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-roadside-assistance-flat-tire-route-22-kiryat-bialik"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "קריית ביאליק וכביש 22" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8250", "longitude": "35.0750" },
    "priceRange": "$$,$",
    "serviceType": "Roadside Assistance, Flat Tire Change"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">סיוע בדרכים: החלפת גלגל בכביש 22 דרום ליד קריית ביאליק</h1>
          <p className="text-lg md:text-xl mb-8">נתקעתם עם פנצ'ר? אל תסתכנו בשולי הכביש. צוות מיומן בדרך אליכם עם שירות מהיר, מקצועי ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו לסיוע מיידי
            </a>
            <WhatsAppCTA cityName="קריית ביאליק" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי חילוץ מהירים בכביש 22</h2>
        <p className="mb-4">
          אם נתקעתם עם פנצ'ר בכביש 22 לכיוון דרום באזור קריית ביאליק, הצוות שלנו זמין עבורכם 24/7. 
          אנו מתמחים בחילוץ רכבים פרטיים ומסחריים. במידה ואתם צריכים סיוע רחב יותר, ניתן לבדוק גם את שירותינו תחת 
          <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-blue-600 underline"> גרירה במחלף קריית אתא הסמוך</Link>.
        </p>
        <p className="mb-4 font-semibold text-red-600">
          חשוב לציין: אנו מספקים שירותי חילוץ והחלפת גלגל לרכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי גרירה או חילוץ לאופנועים.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24/7 לכל אזור הקריות וחיפה.</li>
            <li>צוות מיומן בטיפול בבעיות גלגלים, מצברים ותקלות דרך נפוצות.</li>
            <li>שקיפות מלאה ומחיר הוגן ללא הפתעות.</li>
            <li>ניסיון עשיר בחילוץ רכבים באזור <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-600 underline">הצ'ק פוסט והקריות</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על סיוע בדרכים</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</h4>
              <p>אנו עושים את מירב המאמצים להגיע תוך 30 דקות, בהתאם לעומסי התנועה באזור קריית ביאליק.</p>
            </div>
            <div>
              <h4 className="font-bold">מה כולל השירות?</h4>
              <p>השירות כולל החלפת גלגל ספייר תקין, סיוע בהנעה או חילוץ מהיר של הרכב במידת הצורך במקרה של תקלה חמורה.</p>
            </div>
            <div>
              <h4 className="font-bold">מה טווח המחירים לשירותי גרירה?</h4>
              <p>המחיר תלוי בסוג הרכב ובמרחק הגרירה. אנו מקפידים על מחיר הוגן ותחרותי בשוק - פנו אלינו להצעת מחיר מדויקת.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}