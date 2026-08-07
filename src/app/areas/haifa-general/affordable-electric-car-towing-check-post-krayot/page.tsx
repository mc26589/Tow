import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בצ'ק פוסט והקריות | שירות 24/7 ומחיר הוגן",
  description: "נתקעתם עם רכב חשמלי באזור צ'ק פוסט או הקריות? שירות גרירה מומחה לרכבים חשמליים 24/7. מחיר הוגן, הגעה מהירה ומקצועיות ללא פשרות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-electric-car-towing-check-post-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות גרירת רכבים חשמליים בצ'ק פוסט והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0240" },
    "priceRange": "$$,$",
    "serviceType": "Electric Vehicle Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            שירות גרירת רכבים חשמליים זמין 24/7 באזור צ'ק פוסט והקריות
          </h1>
          <p className="text-xl mb-8">
            נתקעתם עם הרכב החשמלי? אנו מתמחים בחילוץ וגרירת רכבים חשמליים עם ציוד מתקדם. שירות מהיר, בטוח ובמחיר הוגן לכל תושבי האזור.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="צ'ק פוסט והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              חיוג מהיר לשירות גרירה
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לגרירת הרכב החשמלי שלכם?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 באזור צ'ק פוסט, חיפה והקריות.</li>
            <li>✓ מומחיות טכנית בטיפול וגרירה של רכבים חשמליים והיברידיים.</li>
            <li>✓ מחירים הוגנים ושקופים ללא "הפתעות" בדרך.</li>
            <li>✓ שימוש בציוד גרירה מתקדם המגן על תחתית הרכב והסוללה.</li>
            <li>✓ שירות אדיב ומקצועי מרגע הקריאה ועד ההגעה ליעד.</li>
          </ul>
          
          <div className="border-t border-gray-700 pt-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">שירותים משלימים באזור</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400 hover:underline">גרירת רכב דחופה בכביש 22 צ'ק פוסט</Link>
              <Link href="/areas/haifa-general/flatbed-towing-electric-car-dead-battery-check-post-haifa" className="text-blue-400 hover:underline">גרירת רכב חשמלי עם פריקת מצבר בצ'ק פוסט</Link>
              <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-400 hover:underline">שירותי גרירה זולים בקרית ביאליק</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירת רכבים חשמליים</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-xl">האם גרירת רכב חשמלי שונה מרכב רגיל?</h4>
              <p>כן, רכבים חשמליים דורשים אמצעי זהירות מיוחדים בזמן הגרירה כדי לא לפגוע במערכת ההנעה ובסוללה. אנו משתמשים בציוד מתקדם המותאם בדיוק עבורם.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl">תוך כמה זמן תגיעו לצ'ק פוסט?</h4>
              <p>זמן ההגעה שלנו משתנה בהתאם לעומסי התנועה, אך אנו עושים כל מאמץ להגיע במהירות המרבית לכל נקודה בצ'ק פוסט, הקריות וחיפה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}