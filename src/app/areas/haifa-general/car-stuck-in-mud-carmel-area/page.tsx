import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל - שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? אנו מציעים שירותי חילוץ רכבים מקצועיים ומהירים 24/7. הגעה מהירה, ציוד מתקדם ומחיר הוגן. התקשרו עכשיו לחילוץ מידי!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-area",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם עם ציוד חילוץ מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ מקצועיים בכרמל</h2>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים ששקעו בבוץ באזור הכרמל. השירות ניתן לרכבים פרטיים, מסחריים ורכבי 4x4. אם אתם זקוקים גם ל-<Link href="/areas/haifa-general/car-rescue-from-mud-carmel-region" className="text-blue-600 underline">חילוץ רכב תקוע בבוץ באזור הכרמל</Link> רחב יותר, אנו כאן לעזור. אנו מציעים מחירים הוגנים ושירות אדיב מסביב לשעון.</p>
        <p className="text-red-600 font-semibold mb-6">שים לב: איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        
        <div className="mt-12 bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ רכב בכרמל</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">תוך כמה זמן תגיעו לחילוץ?</h4>
              <p>אנו משתדלים להגיע לכל נקודה בכרמל תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה ותנאי הדרך.</p>
            </div>
            <div>
              <h4 className="font-bold">מהו המחיר לחילוץ רכב תקוע?</h4>
              <p>המחיר נקבע בהתאם למורכבות החילוץ וסוג הרכב. אנו מקפידים על מתן מחיר הוגן ושקוף לכל לקוח.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</h4>
              <p>כן, הצוותים שלנו מצוידים בציוד חילוץ ייעודי לרכבים ששקעו בבוץ בשטחים פתוחים או באתרי בנייה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}