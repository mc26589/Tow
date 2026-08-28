import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומחיר הוגן",
  description: "צריכים לפנות רכב ישן? אנו קונים רכבים לפירוק בחיפה והקריות עם שירות גרירה מהיר ומחיר הוגן במקום. צרו קשר לקבלת הצעת מחיר משתלמת עוד היום!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם שירות גרירה</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן? אנו קונים רכבים לפירוק ומספקים שירות גרירה מהיר בחיפה והקריות.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק מכל הסוגים: רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם בדרכים, ניתן לבדוק גם את שירותי ה- <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">גרירה שלנו בצ'ק פוסט חיפה</Link>. השירות כולל גרירה מהירה ללא עלות נוספת.</p>
        <p className="mb-4 font-semibold text-red-600">חשוב להבהיר: איננו מספקים שירותי גרירה או פירוק לאופנועים.</p>
        <p>אנו מציעים מחירים הוגנים עבור הרכב שלך ומבצעים את כל התהליך בצורה חוקית ומסודרת. למידע נוסף על אפשרויות פינוי באזור הקריות, ניתן לבקר בעמוד ה- <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-600 underline">פירוק רכבים בקרית מוצקין</Link>. צרו קשר עוד היום לקבלת הצעת מחיר בטלפון.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים בחיפה</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">באילו אזורים אתם פועלים?</h3>
              <p>אנו מעניקים שירות פינוי וגרירה בכל אזור חיפה, הקריות, וצירי התנועה המרכזיים כמו כביש 22.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים ללא טסט?</h3>
              <p>כן, אנו קונים רכבים במגוון מצבים, כולל רכבים ישנים, רכבים אחרי תאונה או רכבים ללא טסט.</p>
            </div>
            <div>
              <h3 className="font-bold">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>השירות שלנו מבוסס על הגעה מהירה, בדרך כלל תוך מספר שעות מרגע הקריאה, בהתאם לעומס בכבישי חיפה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}