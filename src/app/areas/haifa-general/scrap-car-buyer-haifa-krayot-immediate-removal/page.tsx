import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי | מחיר הוגן",
  description: "נתקעתם עם רכב ישן? קונה רכבים לפירוק בחיפה והקריות עם שירות פינוי מהיר ומזומן במקום. הצעת מחיר הוגנת ושירות 24/7. התקשרו עכשיו לקבלת שירות!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי רכבים לפירוק חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן או מושבת? אנו כאן כדי לפנות אותו עבורכם עוד היום במחיר משתלם.</p>
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מהיר ואמין</h2>
          <p className="mb-4">אנו מתמחים ב-<Link href="/areas/haifa-general/buying-cars-for-scrap-haifa-krayot" className="text-blue-600 font-bold underline">קניית רכבים לפירוק בחיפה והקריות</Link> מכל הסוגים: רכבים פרטיים, רכבים מסחריים ורכבי 4x4. אם אתם זקוקים גם ל-<Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-600 font-bold underline">פינוי רכבים לפירוק בקרית מוצקין</Link>, אנו מגיעים במהירות.</p>
          <p className="mb-4"><strong>חשוב להבהיר:</strong> השירות שלנו מיועד לרכבים בעלי 4 גלגלים בלבד. אנו לא מטפלים באופנועים.</p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">תוך כמה זמן תגיעו לפנות את הרכב?</h4>
                <p>אנו מציעים שירות מהיר ומיידי לכל אזור חיפה והקריות, בדרך כלל תוך מספר שעות מרגע הקריאה.</p>
              </div>
              <div>
                <h4 className="font-bold">איזה סוגי רכבים אתם קונים?</h4>
                <p>אנו קונים רכבים פרטיים, מסחריים, רכבי שטח ורכבים מושבתים/לא תקינים. לא ניתן לבצע פינוי לאופנועים.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}