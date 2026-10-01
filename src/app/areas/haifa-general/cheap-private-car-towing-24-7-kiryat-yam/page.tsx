import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "גרר בקרית ים 24/7 - הגעה מהירה עד 30 דקות | מחיר הוגן",
  description: "נתקעתם עם הרכב בקרית ים? שירותי גרירה מקצועיים 24/7 במחיר הוגן. הגעה מהירה לכל נקודה בעיר. אל תחכו בכביש, התקשרו עכשיו להצעת מחיר משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-private-car-towing-24-7-kiryat-yam",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קרית ים",
    "areaServed": "קרית ים",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "מחיר הוגן",
    "serviceType": "Towing Service",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.835",
      "longitude": "35.070"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב פרטי וזול 24/7 בקרית ים והסביבה</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לשירותי גרירה מקצועיים בקרית ים? אנו זמינים בכל שעות היממה ומבטיחים הגעה מהירה לכל תקלה בדרך. אנו מספקים גם <Link href="/areas/haifa-general/towing-road-22-krayot-bypass" className="underline font-bold">גרירה מהירה בכביש 22 עוקף קריות</Link> לרכבים תקועים. אם נתקעתם בגלל מצבר או תקלה מכנית, אנו מספקים מענה מהיר בכל אזור הקריות, כולל שירותי <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="underline font-bold">גרירה דחופה בקרית ביאליק</Link> ושירותי <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="underline font-bold">גרירה במחיר הוגן בקרית מוצקין</Link>. אם הרכב הושבת, אנו מציעים שירות של <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal" className="underline font-bold">פינוי רכב לפירוק בקרית ים</Link> במהירות ובשקיפות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">שאלות נפוצות על גרירה בקרית ים</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">תוך כמה זמן הגרר מגיע לקרית ים?</h3>
              <p>הצוות שלנו ממוקם בפריסה מקומית ומתחייב להגעה מהירה בכל שטחי העיר, בדרך כלל תוך 30 דקות מרגע הקריאה.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">האם אתם מציעים גרירה לצמתים מרכזיים?</h3>
              <p>כן, אנו מבצעים גרירות מהקריות לכל יעד מבוקש, כולל <Link href="/areas/haifa-general/cheap-towing-services-check-post" className="text-blue-600">גרירה לצומת צק פוסט</Link> במחיר אטרקטיבי.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">מה עושים אם הרכב נתקע בשטח?</h3>
              <p>במקרים מורכבים יותר, אנו מספקים מענה מקצועי הכולל פתרונות <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-600">חילוץ רכב מבוץ או שטח</Link> גם בדרכים מאתגרות.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">האם המחיר כולל מעם?</h3>
              <p>כל הצעות המחיר שלנו הן שקופות. אנו מאמינים בשירות הוגן ללא הפתעות, ומספקים הצעת מחיר סופית לפני תחילת העבודה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}