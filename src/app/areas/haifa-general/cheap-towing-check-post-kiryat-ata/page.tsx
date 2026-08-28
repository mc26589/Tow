import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט - הגעה מהירה, מחיר הוגן 24/7",
  description: "נתקעתם בצומת צ'ק פוסט או ליד קרית אתא? שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. הגעה מהירה, זמינות 24/7 ומחירים ללא תחרות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-kiryat-ata",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7936",
      "longitude": "35.0355"
    },
    "priceRange": "$$,$",
    "serviceType": "Emergency Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט קרית אתא</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? שירות גרירה מקצועי, מהיר ובמחיר הוגן לכל סוגי הרכבים באזור עוקף קריות וצ'ק פוסט.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
          <p className="mb-4">אנו מבינים את הלחץ שנתקעים בכביש סואן. אנו מציעים שירות גרירה מהיר ומקצועי לאורך <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="underline text-blue-400">ציר 22 ועוקף קריות</Link>.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 לכל קריאה</li>
            <li>מחירים הוגנים ושקופים</li>
            <li>שירות מקצועי לרכבים פרטיים ומסחריים</li>
            <li>פתרונות נוספים: <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="underline text-blue-400">גרירה 24/7 עוקף קריות</Link></li>
          </ul>
          <p className="mt-6 text-sm text-gray-400">*הערה: השירות אינו כולל גרירת אופנועים.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על גרירת רכב בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לצ'ק פוסט?</h3>
              <p>באזורי העומס כמו צ'ק פוסט, אנו משתדלים להגיע במהירות המרבית, לרוב תוך 30-45 דקות בהתאם לתנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מציעים גרירה זולה באזור?</h3>
              <p>כן, אנו גאים להציע <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">גרירה משתלמת בצ'ק פוסט</Link> תוך הקפדה על איכות העבודה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}