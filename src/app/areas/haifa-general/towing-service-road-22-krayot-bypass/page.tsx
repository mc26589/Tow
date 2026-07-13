import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | חילוץ רכבים 24/7 | הגעה מהירה",
  description: "נתקעתם בדרך? שירותי גרירה מקצועיים בכביש 22 עוקף קריות. חילוץ מהיר, מחיר הוגן ושירות 24/7 לכל סוגי הרכבים. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$$, $$$",
    "serviceType": "Towing Service",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0653" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנו מספקים שירותי גרירה מקצועיים ומהירים לאורך כל ציר כביש 22.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">
          אם הרכב שלכם נתקע בכביש 22 (עוקף קריות), הצוות שלנו זמין להעניק לכם מענה מהיר. אנו מנוסים בחילוץ רכבים מכל סוג, כולל רכבים חשמליים הזקוקים לטיפול מיוחד כמו ב-<Link href="/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass" className="text-blue-600 hover:underline">שירותי גרירת רכב חשמלי לאחר תאונה</Link>. 
          אנו מתמחים בחילוץ רכבים פרטיים ומסחריים קלים. 
          <strong>שימו לב:</strong> איננו מספקים שירותי גרירה לאופנועים. אם אתם זקוקים לשירות באזורים סמוכים, אנו מציעים גם <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 hover:underline">גרירה 24/7 בקרית ביאליק</Link>.
        </p>
        <p>אנו מקפידים על מחירים הוגנים ושירות אדיב לכל נהג בכביש עוקף קריות.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-bold">האם אתם מגיעים לכל נקודה בכביש 22?</h3>
                    <p>כן, אנו מספקים כיסוי מלא לאורך כל כביש עוקף קריות, כולל מחלפים וחיבורים לכיוון קרית אתא, מוצקין וביאליק.</p>
                </div>
                <div>
                    <h3 className="font-bold">מהו טווח הזמנים להגעה?</h3>
                    <p>אנו עושים את מירב המאמצים להגיע בהקדם האפשרי, לרוב תוך דקות ספורות מרגע הקריאה, בהתאם לעומסי התנועה באזור.</p>
                </div>
                <div>
                    <h3 className="font-bold">האם אתם מספקים שירותי גרירה לרכבים מסחריים?</h3>
                    <p>כן, אנו מספקים שירותי גרירה לרכבים פרטיים ומסחריים קלים. לכל צורך אחר, ניתן לבדוק גם את שירותי ה-<Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-600 hover:underline">גרירה הזולה בצומת צבר וקרית אתא</Link>.</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}