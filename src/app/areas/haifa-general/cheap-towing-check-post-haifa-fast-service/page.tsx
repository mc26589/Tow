import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט חיפה | הגעה תוך 30 דקות | מחיר הוגן 24/7",
  description: "נתקעתם עם הרכב בצ'ק פוסט חיפה? גרר מקצועי ומהיר לכל סוגי הרכבים. הגעה תוך 30 דקות, מחיר הוגן ושירות 24/7. התקשרו עכשיו לגרר זמין!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר בצ'ק פוסט חיפה – הגעה מהירה ומחיר הוגן 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בצומת צ'ק פוסט? צוות הגרר שלנו בדרך אליכם. פתרון מהיר, אמין ובמחיר ללא תחרות.</p>
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
          <h2 className="text-3xl font-bold mb-6">למה לבחור בשירות הגרירה שלנו בצ'ק פוסט?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">פריסה מהירה באזור</h3>
              <p>זמינות גבוהה סביב צומת צ'ק פוסט, דרך בר יהודה והכניסות לחיפה. ניתן לבדוק גם <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-400 underline">גרר זול בצ'ק פוסט לקריית אתא</Link>.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">שקיפות ומחיר הוגן</h3>
              <p>אנו מציעים שירות גרירה ללא הפתעות במחיר הוגן. זקוקים למענה מקיף? לחצו כאן עבור <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-400 underline">שירותי גרירה בצ'ק פוסט והקריות</Link>.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">פתרונות חילוץ מתקדמים</h3>
              <p>מומחים בחילוץ רכבים תקועים בצירי תנועה עמוסים. אנו מטפלים גם במקרים מורכבים ב<Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400 underline">כביש 22 עוקף קריות</Link>.</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gray-800 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לצ'ק פוסט?</h3>
                <p className="text-gray-300">ברוב המקרים אנו מגיעים למוקד תוך 30 דקות. השירות מהיר ומקצועי גם בפינוי של <Link href="/areas/haifa-general/commercial-van-accident-recovery-check-post-junction-haifa" className="text-blue-400 underline">רכבים מסחריים</Link>.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">האם אתם מספקים גרירה לכיוון הקריות?</h3>
                <p className="text-gray-300">בוודאי, אנו מציעים <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-400 underline">שירותי גרירה לצ'ק פוסט ולקריות</Link> בכל שעה.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-red-900/20 border border-red-800 rounded-xl">
            <p className="text-red-200"><strong>הערה:</strong> השירות שלנו מיועד לרכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}