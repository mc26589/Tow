import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומחיר הוגן",
  description: "צריכים למכור רכב לפירוק בחיפה והקריות? אנו קונים רכבים ישנים ותקולים במזומן, פינוי מהיר ללא עלות גרירה. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פירוק רכבים חיפה והקריות",
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
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן לשירותכם 24/7 עם הצעת מחיר הוגנת ושירות מהיר.</p>
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
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <p className="mb-4">אנו מספקים שירות מקצועי ואמין לתושבי חיפה והקריות. אנו קונים רכבים מכל הסוגים: רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם באזור התעשייה עם רכב שאינו נוסע, אנו מספקים שירותי <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-600 underline">פירוק רכבים באזור התעשייה הישן בקריית ביאליק</Link> ושירותי <Link href="/areas/haifa-general/cash-for-junk-cars-scrap-vehicle-removal-kiryat-motzkin" className="text-blue-600 underline">פינוי רכבים לפירוק בקריית מוצקין</Link> בצורה יעילה ומהירה.</p>
        <p className="text-red-600 font-bold mb-8">הערה חשובה: אנו איננו מטפלים באופנועים. השירות מיועד לרכבים בלבד.</p>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על פירוק רכבים</h3>
          <ul className="space-y-4">
            <li><strong>תוך כמה זמן אתם מגיעים?</strong> אנו משתדלים להגיע לכל נקודה בחיפה ובקריות במינימום זמן.</li>
            <li><strong>האם השירות כולל גרירה?</strong> כן, במכירת הרכב לפירוק אנו מספקים פינוי וגרירה על חשבוננו.</li>
            <li><strong>אילו רכבים אתם קונים?</strong> אנו קונים רכבים פרטיים, מסחריים ורכבים מושבתים במחיר הוגן.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}