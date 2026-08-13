import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בחיפה והקריות – פינוי מהיר ומחיר הוגן",
  description: "רוצים למכור רכב ישן או תקול? שירות קניית רכבים לפירוק בחיפה והקריות, פינוי מהיר, שירות 24/7 ומחיר הוגן במזומן. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות – שירות מהיר ומקצועי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן בשבילכם 24/7 עם הצעת מחיר הוגנת.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות קניית רכבים לפירוק באזור חיפה והקריות</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים: רכבים פרטיים, רכבים מסחריים ורכבי 4x4. אם אתם זקוקים גם לשירותי עזר באזור, תוכלו לבדוק את שירותי ה-<Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-600 underline">פינוי רכב גרוטאה וגרירה בצ'ק פוסט</Link> שלנו.</p>
        <p className="mb-4 font-semibold text-red-600">חשוב להבהיר: אנו לא מטפלים באופנועים או בכל סוג של כלי רכב דו-גלגלי.</p>
        <p>אם הרכב שלכם עומד ללא שימוש, עבר תאונה או שעלות התיקון שלו אינה משתלמת, צרו איתנו קשר. אנו מציעים מענה מקצועי לתושבי האזור, כולל באזורים כמו קרית חיים, שם ניתן למצוא גם את השירות שלנו ל-<Link href="/areas/haifa-general/buying-old-cars-parts-kiryat-haim-krayot" className="text-blue-600 underline">קניית רכבים לפירוק בקרית חיים</Link>.</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">האם אתם קונים כל סוג של רכב?</h3>
              <p>אנו קונים רכבים פרטיים, מסחריים ורכבי שטח. איננו מטפלים ברכבים דו-גלגליים.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>אנו מציעים שירות מהיר בחיפה והקריות, לרוב בהגעה באותו היום בהתאם לעומס.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">מה קובע את מחיר הרכב לפירוק?</h3>
              <p>המחיר נקבע בהתאם למצב הרכב, סוגו והיכולת שלנו להפיק ממנו חלפים. אנו מקפידים על מחיר הוגן ותחרותי בשוק.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}