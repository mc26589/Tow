import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט | שירות גרירה מהיר ומחיר הוגן 24/7",
  description: "נתקעתם בצומת צ'ק פוסט? גרר זמין 24/7 להגעה מהירה. שירות מקצועי במחיר הוגן לכל סוגי הרכבים באזור חיפה והקריות. התקשרו עכשיו לסיוע!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצומת צ'ק פוסט",
    "description": "שירותי גרירה וחילוץ רכבים זולים ומקצועיים באזור צומת צ'ק פוסט, חיפה והקריות.",
    "areaServed": { "@type": "Place", "name": "צומת צ'ק פוסט, חיפה" },
    "priceRange": "$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7885", "longitude": "35.0253" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בצומת צ'ק פוסט? אנו כאן כדי להעניק לכם שירות גרירה מהיר, אמין ובמחיר הוגן. 
            אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם בדרכים הסמוכות, אנו מציעים גם <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="underline font-semibold">שירותי גרירה דחופים בכביש 22</Link>. 
            שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              התקשרו עכשיו לסיוע
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">זמינות מלאה</h3>
              <p>אנו פועלים 24/7 כדי להבטיח שלא תישאר תקוע בצומת עמוס כמו צ'ק פוסט.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות ומציעים הצעת מחיר הוגנת וזולה ללא הפתעות מיותרות.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מקצועיות בשטח</h3>
              <p>צוות מיומן המכיר היטב את צירי התנועה בחיפה והקריות להגעה מהירה. זקוקים לשירות מקביל? בדקו את <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">שירותי הגרירה שלנו לאזור חיפה והקריות</Link>.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על שירותי גרירה בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">תוך כמה זמן תגיעו לצומת צ'ק פוסט?</h3>
              <p className="text-gray-600">בזכות מיקומנו האסטרטגי בחיפה, אנו שואפים להגיע לכל קריאה באזור הצומת במהירות המרבית, לרוב תוך דקות ספורות בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם גוררים רכבים לכל חלקי הארץ?</h3>
              <p className="text-gray-600">אנו מתמחים בפינוי מהצומת למוסכים באזור חיפה, הקריות והסביבה. לשינוע רחוק יותר, צרו איתנו קשר לתיאום מראש.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}