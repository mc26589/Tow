import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט חיפה | מחיר הוגן, הגעה ב-30 דקות | 24/7",
  description: "נתקעתם עם הרכב בצ'ק פוסט חיפה? שירות גרירה מהיר ומקצועי לכל סוגי הרכבים. הגעה תוך 30 דקות, מחיר הוגן ושירות 24/7. התקשרו עכשיו לגרר זמין!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-haifa-fast-service"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצ'ק פוסט חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0230" },
    "priceRange": "$ - $$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר בצ'ק פוסט חיפה – הגעה מהירה לכל קריאה 24/7</h1>
          <p className="text-xl mb-8">צריכים עזרה בדרך? צוות הגרר המקצועי שלנו זמין סביב השעון בצומת צ'ק פוסט. שירות מהיר, אמין ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בצ'ק פוסט חיפה</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">גרירה וחילוץ 24/7</h3>
              <p>זמינות גבוהה בצומת צ'ק פוסט. אם אתם זקוקים לעזרה מיידית, ניתן גם להזמין <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-400 underline">גרירה לאחר תאונה בצ'ק פוסט</Link>.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">קניית רכבים לפירוק</h3>
              <p>לא משתלם לתקן? אנו מציעים שירות <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-400 underline">קניית רכבים לפירוק בצ'ק פוסט</Link> בתשלום הוגן ומיידי.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">פתרונות גרירה מתקדמים</h3>
              <p>מומחים בחילוץ גם בכבישים מהירים, כולל <Link href="/areas/haifa-general/towing-stuck-vehicle-road-22-haifa" className="text-blue-400 underline">גרירת רכב תקוע בכביש 22</Link> בצורה בטוחה.</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gray-800 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לצ'ק פוסט?</h3>
                <p className="text-gray-300">ברוב המקרים הגרר שלנו מגיע לנקודה בתוך 30 דקות. השירות כולל גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-400 underline">שירותי גרירה משתלמים בצ'ק פוסט</Link>.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">האם אתם קונים רכבים לברזל באזור?</h3>
                <p className="text-gray-300">כן, אנו מבצעים <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-400 underline">פינוי רכבים לפירוק בצ'ק פוסט וחיפה</Link> במהירות.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">האם השירות כולל גרירה לקריות?</h3>
                <p className="text-gray-300">בוודאי. אנו מספקים כיסוי מלא לקריות ולכבישים הראשיים כמו <Link href="/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22" className="text-blue-400 underline">שירותי גרירה וחילוף בכביש 22</Link>.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-red-900/20 border border-red-800 rounded-xl">
            <p className="text-red-200"><strong>הערה:</strong> השירות מיועד לרכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}