import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותי גרירה בצומת צ'ק פוסט | מחיר הוגן, הגעה מהירה 24/7",
  description: "נתקעתם עם הרכב בצומת צ'ק פוסט? מוקד שירותי גרירה מקצועי זמין עבורכם 24/7. מחיר הוגן, הגעה מהירה לכל אזור חיפה והקריות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "חיפה והקריות",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לחילוץ מהיר בצומת צ'ק פוסט? אנו מתמחים במתן שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. הגעה מהירה לכל נקודה באזור. אנו מציעים מחירים הוגנים ושירות זמין 24/7. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט והסביבה.</li>
            <li>✓ שירות מקיף שכולל גם <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-600 underline font-semibold">שירותי גרירה מהירים בצ'ק פוסט</Link>.</li>
            <li>✓ פתרונות מתקדמים כגון <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-600 underline font-semibold">פינוי רכבים גרוטאות וגרירה לפירוק</Link>.</li>
          </ul>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על שירותי גרירה בצ'ק פוסט</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">תוך כמה זמן אתם מגיעים לצומת צ'ק פוסט?</h4>
                <p>אנו מתחייבים להגעה מהירה ככל הניתן בהתאם לתנאי הדרך, במטרה לחסוך לכם זמן יקר בצומת העמוס.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">האם אתם נותנים שירות גם לאזור הקריות?</h4>
                <p>בהחלט! מעבר לצ'ק פוסט, אנו מספקים מענה רחב לכל אזור חיפה והקריות, כולל שירותים ייעודיים כמו <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 underline">גרירה לפירוק ופינוי רכבים</Link>.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">מהו מחיר גרירה סטנדרטי?</h4>
                <p>המחיר נקבע בהתאם למרחק הגרירה וסוג הרכב. אנו מקפידים על מחיר הוגן ושקוף ללא הפתעות.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}