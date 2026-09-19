import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מהיר במזומן 24/7",
  description: "נתקעתם עם רכב ישן? אנו קונים רכבים לפירוק בחיפה והקריות עם שירות גרירה מקצועי במקום. פינוי מהיר, שירות אמין ומחיר הוגן במזומן. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot-towing"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות | שירות גרירה מהיר עד הבית</h1>
          <p className="text-xl mb-8">נמאס לכם מהרכב הישן שתופס חניה? אנו קונים את כל סוגי הרכבים לפירוק ומספקים שירותי גרירה מהירים בפריסה מלאה בחיפה, הקריות והסביבה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">קניית רכבים לפירוק - הפתרון המהיר בחיפה והקריות</h2>
        <p className="mb-4">אנו מציעים שירות מקיף לכל סוגי הרכבים, כולל רכבים ללא טסט, רכבים אחרי תאונה או רכבים מושבתים. אם אתם מחפשים <Link href="/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal" className="text-blue-600 underline">קונה רכבים לפירוק בחיפה והקריות</Link>, אנו מגיעים עם גרר לכל נקודה. במידה ואתם באזור הצפון, אנו מספקים מענה מקצועי גם לתושבי <Link href="/areas/haifa-general/cash-for-scrap-cars-kiryat-motzkin" className="text-blue-600 underline">קרית מוצקין</Link> וכן שירותי <Link href="/areas/haifa-general/buy-old-cars-for-scrap-kiryat-yam" className="text-blue-600 underline">קניית רכבים לפירוק בקרית ים</Link> עם פינוי מיידי.</p>
        <p className="mb-4">זקוקים לעזרה בדרכים? אנו מומחים במתן פתרונות גרירה לכל מצב. אם נתקעתם באזור הצ'ק פוסט, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">גרירה זולה בצ'ק פוסט</Link>.</p>
        <p className="mb-4 font-semibold text-red-600">חשוב להבהיר: איננו מספקים שירותי גרירה או פירוק לאופנועים, אלא לרכבים פרטיים ומסחריים בלבד.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות ותשובות נפוצות על פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מהו טווח המחירים לקניית רכב לפירוק?</h3>
              <p>המחיר נקבע בהתאם לסוג הרכב, המצב המכני וערך המתכות. אנו תמיד מציעים מחיר הוגן ותשלום במזומן במעמד הפינוי.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מפנים רכבים מכל אזור בחיפה?</h3>
              <p>כן, אנו פעילים בכל שכונות חיפה ובכל הקריות. בין אם נתקעתם באזור אחוזה או ליד <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">צ'ק פוסט</Link>, נגיע אליכם במהירות.</p>
            </div>
            <div>
              <h3 className="font-bold">איך מתבצע תהליך הפינוי?</h3>
              <p>יוצרים קשר, מקבלים הצעת מחיר, ואנו מגיעים עם גרר בזמן שנוח לכם כדי לפנות את הרכב בצורה בטוחה ומהירה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}