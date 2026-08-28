import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותי גרירה בכביש 22 עוקף קריות | הגעה מהירה 24/7",
  description: "נתקעת בכביש 22? מוקד גרירה וחילוץ זמין 24/7. הגעה מהירה לכל נקודה בעוקף קריות במחיר הוגן. התקשרו עכשיו לשירות מקצועי!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$$,$",
    "serviceType": "Emergency Roadside Assistance and Towing",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות החילוץ שלנו בדרך אליכם עם מענה מקצועי ומחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <p className="mb-4">אנו מבינים את הדחיפות שבחילוץ רכב בכביש מהיר. הניסיון הרב שלנו מאפשר לנו להגיע לכל נקודה בכביש 22 במהירות ובבטיחות מרבית. זקוקים לעזרה נוספת? בדקו גם את שירותי ה-<Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">גרירה לאחר תאונה בכביש 22</Link> שלנו.</p>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה.</li>
          <li>ציוד גרירה מתקדם לרכבים פרטיים ומסחריים.</li>
          <li>שירות אדיב ומקצועי במחירים הוגנים.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות על גרירה בכביש 22</h3>
            <div className="space-y-4">
                <div>
                    <p className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</p>
                    <p>הצוותים שלנו פרוסים באזור חיפה והקריות ומגיעים תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה.</p>
                </div>
                <div>
                    <p className="font-bold">האם אתם מציעים שירותי <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600">גרירה 24 7 עוקף קריות</Link>?</p>
                    <p>בהחלט, המוקד שלנו זמין מסביב לשעון כדי להעניק לכם מענה מהיר בכל שעה ובכל יום.</p>
                </div>
            </div>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          * שימו לב: השירות אינו כולל גרירת אופנועים. אנו מתמחים ברכבים פרטיים ומסחריים בלבד.
        </p>
      </section>
    </main>
  );
}