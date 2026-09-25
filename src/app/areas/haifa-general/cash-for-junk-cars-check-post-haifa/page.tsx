import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בצ'ק פוסט חיפה | פינוי מהיר ומזומן במקום",
  description: "מוכרים רכב לפירוק בצ'ק פוסט? אנו קונים את כל סוגי הרכבים במחיר הוגן ושירות 24/7. הגעה מהירה לכל נקודה בחיפה והקריות. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cash-for-junk-cars-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0230"
    },
    "priceRange": "$",
    "serviceType": "Junk Car Removal and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בצומת צ'ק פוסט חיפה</h1>
          <p className="text-xl mb-8">צריכים להיפטר מהרכב הישן? אנו מציעים שירות פינוי רכבים לפירוק בצ'ק פוסט בפריסה מלאה ובמחיר הוגן שמשאיר אתכם מרוצים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכבים בצ'ק פוסט?</h2>
          <p className="mb-4">
            אנו מתמחים בפינוי מהיר של כל סוגי הרכבים. אם נתקעתם באזור הצ'ק פוסט, אנו מציעים שירות מקיף של <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="underline text-blue-400">קניית רכבים לפירוק בצ'ק פוסט חיפה</Link> במקצועיות מלאה. בנוסף, לבעלי רכבים חשמליים שנתקעו, אנו מספקים <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="underline text-blue-400">שירותי גרירה לרכב חשמלי בצ'ק פוסט</Link> ובסביבה. אנו דוגלים בשקיפות מלאה ומבצעים פינוי של רכבים מושבתים ללא עלות נוספת. שימו לב: אנו מתמקדים ברכבים ורכבים מסחריים בלבד ולא מטפלים באופנועים.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24 שעות ביממה</li>
            <li>פינוי מהיר מאזור התעשייה בצ'ק פוסט</li>
            <li>תשלום הוגן במזומן במעמד הפינוי</li>
            <li>שירות מקצועי ללא "כאבי ראש" בירוקרטיים</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <div>
              <h3 className="font-bold text-xl">האם אתם מפנים רכבים ללא מנוע או לאחר תאונה?</h3>
              <p>בהחלט. אנו קונים כל סוגי הרכבים, כולל רכבים לאחר תאונה או כאלו שאינם נוסעים. למידע נוסף, ניתן לעיין בדף <Link href="/areas/haifa-general/towing-for-scrap-kiryat-ata-road-22" className="text-blue-600">גרירת רכבים לפירוק באזור כביש 22</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לצ'ק פוסט?</h3>
              <p>ברוב המקרים, אנו מגיעים לצומת צ'ק פוסט והסביבה הקרובה בתוך זמן קצר. אם אתם זקוקים למענה חירום דחוף בכביש 22, אנו זמינים גם ל<Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-blue-600">שירותי גרירה בכביש 22</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מהו המחיר שניתן לקבל עבור רכב לפירוק?</h3>
              <p>המחיר נקבע לפי משקל הרכב, סוג הרכב ומצב החלקים שניתן להפיק ממנו. התקשרו אלינו לקבלת הצעת מחיר ללא התחייבות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}