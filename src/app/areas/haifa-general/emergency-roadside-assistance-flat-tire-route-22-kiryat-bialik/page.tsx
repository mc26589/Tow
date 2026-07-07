import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "החלפת גלגל בכביש 22 קריית ביאליק | הגעה מהירה 24/7",
  description: "נתקעתם עם פנצ'ר בכביש 22 ליד קריית ביאליק? צוות מקצועי יגיע אליכם תוך 30 דקות במחיר הוגן. שירות חילוץ 24/7 לכל סוגי הרכבים. התקשרו עכשיו לסיוע!",
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
          <h1 className="text-3xl md:text-5xl font-bold mb-6">סיוע בדרכים: החלפת גלגל בכביש 22 קריית ביאליק</h1>
          <p className="text-lg md:text-xl mb-8">נתקעתם עם פנצ'ר? אל תעמדו בשולי הכביש המסוכנים. הצוות שלנו מגיע אליכם תוך דקות עם שירות מהיר, מקצועי ובמחיר הוגן.</p>
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
          נתקעתם עם פנצ'ר בכביש 22 ליד קריית ביאליק? אנו כאן לעזור. אנו מציעים שירותי חילוץ מקצועיים לרכבים פרטיים ומסחריים. במידה ואתם זקוקים לשירותי גרירה רחבים יותר באזור, ניתן לעיין גם ב<Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה בכביש 22 עוקף קריות</Link>. למי שמחפש שירותים נוספים בקרבת מקום, אנו מספקים גם <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-600 underline">גרירה באזור התעשייה קריית ביאליק</Link>.
        </p>
        <p className="mb-4 font-semibold text-red-600">
          הערה: השירות ניתן לרכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי חילוץ לאופנועים.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 לכל תרחיש בכביש 22.</li>
            <li>הגעה מהירה לאזור הקריות והצ'ק פוסט.</li>
            <li>שירות אדיב, שקוף ומחיר הוגן ללא הפתעות.</li>
            <li>מומחיות רבת שנים בחילוץ רכבים תקועים בבטחה.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על סיוע בדרכים</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</h4>
              <p>הצוות שלנו פרוס באזור הקריות, אנו עושים את מירב המאמצים להגיע לכל נקודה בכביש 22 תוך כ-30 דקות.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מבצעים החלפת גלגל גם בלילה?</h4>
              <p>בהחלט. אנו עובדים 24/7, כולל שבתות וחגים, כדי להעניק לכם שקט נפשי בכל שעה ביום.</p>
            </div>
            <div>
              <h4 className="font-bold">מה עושים אם אין לי גלגל ספייר תקין?</h4>
              <p>במקרים כאלו אנו נבצע גרירה מהירה למוסך קרוב או לפנצ'רייה מומלצת באזור קריית ביאליק או הסביבה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}