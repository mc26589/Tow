import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | הגעה תוך 30 דקות - 24/7",
  description: "נתקעתם עם הרכב בכביש 22? שירותי גרירה מקצועיים ואמינים לאורך עוקף קריות. מחיר הוגן, שירות 24/7 והגעה מהירה במיוחד. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "מחיר הוגן",
    "serviceType": "Towing and Roadside Assistance",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות החילוץ שלנו זמין עבורכם לכל קריאה לאורך כביש 22 עם שירות מהיר ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="כביש 22 עוקף קריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים ומהירים בכביש 22</h2>
        <p className="mb-4">
          אם הרכב שלכם נתקע בכביש 22, אנו כאן כדי להעניק לכם שקט נפשי. אנו מתמחים בחילוץ רכבים פרטיים ומסחריים. במידה ואתם זקוקים ל- 
          <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">גרירה ושירותי דרך בצומת צ'ק פוסט והקריות</Link> 
          או מחפשים <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-600 underline">גרר משטח זמין בכביש 22</Link>, אנו הכתובת שלכם.
        </p>
        <p>אנו מציעים מחירים הוגנים ושירות מהיר לכל אורך הציר. זקוקים למידע נוסף? ניתן לבדוק גם <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">גרירה זולה בצ'ק פוסט</Link> לטיפול מיידי ברכבכם.</p>
        
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לגרר להגיע לכביש 22?</p>
              <p>אנו ממוקמים אסטרטגית באזור ומגיעים תוך זמן קצר, בהתאם לעומסי התנועה בציר עוקף קריות.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים רכבים חשמליים?</p>
              <p>בהחלט. אנו ערוכים לחילוץ רכבים חשמליים בזהירות מרבית. לפרטים נוספים כנסו ל-<Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-600 underline">גרירת רכב חשמלי באזור הקריות</Link>.</p>
            </div>
            <div>
              <p className="font-bold">מה עושים אם הרכב מושבת לגמרי?</p>
              <p>במידה והרכב אינו שווה תיקון, אנו מציעים גם שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-buy-cars-for-scrap-haifa-towing-included">קניית רכבים לפירוק עם גרירה כלולה</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}