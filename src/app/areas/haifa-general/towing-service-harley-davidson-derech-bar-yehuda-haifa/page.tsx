import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בדרך בר יהודה חיפה | הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם בדרך בר יהודה חיפה? זקוקים לגרר מהיר? אנו מספקים שירותי גרירה מקצועיים ומחיר הוגן 24/7. הגעה מהירה לכל אזור הצ'ק פוסט והסביבה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-harley-davidson-derech-bar-yehuda-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בדרך בר יהודה חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0000" },
    "priceRange": "$$,$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירות גרירה וחילוץ בדרך בר יהודה חיפה</h1>
          <p className="text-lg mb-8">
            נתקעתם בדרך בר יהודה בחיפה? הצוות המקצועי שלנו זמין לספק לכם <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="underline font-semibold">גרירת רכב דחופה בצ'ק פוסט</Link> ובסביבתה. 
            אנו מתמחים בחילוץ רכבים פרטיים ומסחריים בכל אזור חיפה והצפון, כולל <Link href="/areas/haifa-general/fast-towing-flat-tire-road-22-check-post" className="underline">סיוע מהיר בהחלפת גלגל בכביש 22 וצ'ק פוסט</Link>. 
            אם הרכב הושבת עקב תקלה טכנית או תאונה, נשמח להעניק לכם פתרון מקיף של <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline">גרירת רכבים באזור הצ'ק פוסט והקריות</Link>. 
            חשוב לציין: אנו מתמקדים בחילוץ וגרירת רכבים ואיננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold"
            >
              התקשר עכשיו
            </a>
            <WhatsAppCTA cityName="Haifa" />
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו בחיפה?</h2>
        <ul className="list-disc pr-5 space-y-2 mb-10">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>זמני הגעה מהירים לדרך בר יהודה ולכל הצירים המרכזיים בחיפה.</li>
          <li>שירות מקצועי הכולל <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">גרירה לאחר תאונה בכביש 22</Link>.</li>
          <li>מחירים הוגנים, שקיפות מלאה וניסיון רב בחילוץ כלי רכב.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בחיפה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">תוך כמה זמן תגיעו לחלץ אותי בדרך בר יהודה?</h3>
            <p>אנו פרוסים במוקדי התנועה העיקריים בחיפה, כך שאנו מגיעים לדרך בר יהודה בתוך זמן קצר מאוד, תלוי בעומסי התנועה באזור הצ'ק פוסט.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים חשמליים?</h3>
            <p>כן, אנו ערוכים למתן שירות עבור <Link href="/areas/haifa-general/affordable-electric-car-towing-kiryat-motzkin-industrial-zone" className="text-blue-600 underline">גרירת רכבים חשמליים באזור הצ'ק פוסט והקריות</Link> תוך הקפדה על כללי בטיחות.</p>
          </div>
          <div>
            <h3 className="font-bold">מה עושים אם הרכב ישן או שאינו בר תיקון?</h3>
            <p>במקרים אלו, אנו מציעים שירות של <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בצ'ק פוסט ובאזור חיפה</Link>, הכולל את פינוי הרכב על גבי גרר.</p>
          </div>
        </div>
      </section>
    </main>
  );
}