import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | מזומן במקום | שירות 24/7",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? אנו קונים רכבים מכל הסוגים במחיר הוגן, פינוי מהיר והגעה לכל אזור הצפון. התקשרו עכשיו לקבלת הצעה משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$,$",
    "serviceType": "Car Scrapping and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות – מזומן במקום ושירות 24/7</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן? אנו מבצעים קניית רכבים לפירוק בחיפה, הקריות והסביבה. שירות אמין, הגעה מהירה ומזומן ליד.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">קניית רכבים לפירוק בחיפה והקריות – כל השירותים תחת קורת גג אחת</h2>
        <p className="mb-4">אנו מתמחים בפינוי כל סוגי הרכבים: פרטיים, מסחריים ורכבי שטח. זקוקים לעזרה בפינוי רכב מושבת באזור הצפון? אנו מציעים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בצומת הצ'ק פוסט</Link> ופינוי מהיר לכל סוגי הרכבים שאינם נוסעים.</p>
        <p className="mb-4">מעבר לפירוק רכבים, הצוות שלנו מספק פתרונות גרירה מקצועיים. בין אם אתם זקוקים ל-<Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-600 underline">שירותי גרירה זולים בצומת הצ'ק פוסט והקריות</Link> או עזרה דחופה בשטח, אנחנו כאן עבורכם. שים לב: אנו לא מטפלים בגרירת אופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">באילו אזורים אתם פועלים?</h3>
              <p>אנו פועלים בכל אזור חיפה והקריות. אם אתם מחפשים שירות ממוקד, אנו מספקים גם <Link href="/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק בקריית ביאליק עם פינוי מיידי</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו טווח המחירים לרכב לפירוק?</h3>
              <p>המחיר נקבע לפי סוג הרכב, השנה ומצבו הטכני. אנו מתחייבים להצעת מחיר הוגנת במזומן בעת האיסוף.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מציעים גרירה מורכבת?</h3>
              <p>כן, אנו מומחים בחילוצים וגרירות, כולל <Link href="/areas/haifa-general/commercial-truck-accident-recovery-kiryat-motzkin-24-7" className="text-blue-600 underline">פינוי רכבים מסחריים לאחר תאונה בקריית מוצקין</Link>. זמינים 24/7 לכל קריאה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}