import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "פינוי רכבים לפירוק בחיפה והקריות | פינוי מיידי | הצעת מחיר הוגנת",
  description: "צריכים לפנות רכב ישן או מושבת? שירות פינוי רכבים לפירוק בחיפה והקריות עם הגעה מהירה ומחיר הוגן. פינוי רכבים פרטיים ומסחריים. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות פינוי רכבים לפירוק בחיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Scrapping and Removal"
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
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו מציעים שירות מהיר, אמין ומקצועי לכל תושבי חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלך?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ פינוי מיידי מהשטח ללא עיכובים מיותרים.</li>
            <li>✓ הצעת מחיר הוגנת עבור הרכב שלך.</li>
            <li>✓ שירות מקצועי לרכבים פרטיים, מסחריים ורכבי שטח.</li>
            <li>✓ זמינות מלאה בכל אזור חיפה והקריות.</li>
          </ul>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">שירותים משלימים באזור</h3>
            <p className="mb-4">זקוקים לשירותי גרירה נוספים? אנו מספקים מענה מקצועי גם עבור <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-600 underline">towing for scrap kiryat bialik</Link> וכן סיוע במקרים של <Link href="/areas/haifa-general/towing-services-road-22-krayot-private-car" className="text-blue-600 underline">towing services road 22 krayot private car</Link>.</p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">כמה זמן לוקח פינוי רכב לפירוק?</h4>
                <p>אנו משתדלים להגיע לכל נקודה בחיפה והקריות בזמן המהיר ביותר, לרוב תוך מספר שעות מרגע הקריאה.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">האם אתם קונים כל סוג של רכב?</h4>
                <p>אנו מתמחים ברכבים פרטיים ומסחריים המיועדים לפירוק. לקבלת הערכה מדויקת, צרו קשר עם נציגינו.</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-600">
            הערה: אנו מתמחים בפינוי רכבים בלבד. איננו מספקים שירותי גרירה או פינוי לאופנועים. אנו מקפידים על עבודה מסודרת ופינוי בטוח של הרכב.
          </p>
        </div>
      </section>
    </main>
  );
}