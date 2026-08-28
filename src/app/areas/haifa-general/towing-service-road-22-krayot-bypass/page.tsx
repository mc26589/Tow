import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות - הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בכביש 22 עוקף קריות? צוות גרירה מקצועי זמין עבורכם 24/7 לחילוץ מהיר ובטוח במחיר הוגן. התקשרו עכשיו לקבלת סיוע מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "₪₪",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8156",
      "longitude": "35.0650"
    },
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
          <h1 className="text-4xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם הרכב בכביש 22? אנו כאן כדי לסייע. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
            בין אם אתם צריכים <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="underline font-bold">שירותי חירום במחלף קרית אתא</Link> או <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="underline font-bold">גרירת רכב לאחר תאונה</Link>, הצוות שלנו זמין 24/7.
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. 
            הצוות שלנו פועל בפריסה רחבה בחיפה ובקריות ומבטיח הגעה מהירה לכל נקודה בכביש עוקף קריות.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בכביש 22?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✅ זמינות מלאה 24/7 לכל קריאה בכביש עוקף קריות.</li>
            <li>✅ מחירים הוגנים ושקופים – הצעת מחיר מסודרת בטלפון.</li>
            <li>✅ ציוד גרירה מתקדם המותאם לרכבים פרטיים ומסחריים.</li>
            <li>✅ צוות מקצועי ומיומן המכיר היטב את צירי התנועה בחיפה והקריות, כולל שירותי <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 font-semibold">גרירה באזור הצ'ק פוסט</Link>.</li>
          </ul>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בכביש 22</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</h4>
                <p>אנו עושים את מירב המאמצים להגיע תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה באזור הקריות.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם מציעים שירות גרירה 24 שעות?</h4>
                <p>כן, אנו מציעים <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600 underline">גרירה 24/7 בעוקף קריות</Link> בכל ימות השבוע.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}