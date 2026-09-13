import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה | שירות גרירה וחילוץ 24/7 - מחיר הוגן",
  description: "נתקעתם עם הרכב באחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה באחוזה חיפה",
    "areaServed": "Haifa",
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
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה וחילוץ לרכב באחוזה חיפה</h1>
          <p className="text-lg mb-4">
            מחפשים גרר אמין באחוזה? אנו מתמחים בשירותי גרירה וחילוץ לרכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4) בחיפה. 
            במידה ונתקעתם עם רכב חשמלי ללא טעינה, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="underline font-bold">גרירה לרכב חשמלי באחוזה</Link>. 
            שימו לב שאיננו מספקים שירותי גרירה לאופנועים. אם אתם זקוקים לחילוץ רכב באזור, אנחנו כאן עבורכם 24/7.
          </p>
          <p className="text-lg mb-8">
            צריכים עזרה דחופה? בדקו גם את שירותי ה-<Link href="/areas/haifa-general/car-rescue-carmel-tunnels-haifa" className="underline font-bold">חילוץ בתוך מנהרות הכרמל</Link> או פנו אלינו בכל תקלה מכנית.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשר עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על שירותי גרירה באחוזה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">האם אתם מגיעים לכל הרחובות באחוזה?</h3>
            <p>כן, אנו מספקים שירותי גרירה מהירים לכל השכונות סביב אחוזה, מרכז הכרמל וציר מוריה.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">כמה זמן לוקח לגרר להגיע?</h3>
            <p>אנו משתדלים להגיע לכל קריאה תוך זמן קצר ככל האפשר, בהתאם לעומסי התנועה באזור הכרמל.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">אילו סוגי רכבים אתם גוררים?</h3>
            <p>אנו מציעים שירותי גרירה לרכבים פרטיים, רכבים מסחריים ורכבי 4x4. למידע נוסף על חילוצים מורכבים בדרכי עפר, ראו גם <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="text-blue-600 underline">חילוץ רכב בבוץ ביערות הכרמל</Link>.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">מה עושים במקרה של רכב חשמלי שנתקע ללא טעינה?</h3>
            <p>אנו מציעים פתרונות ייעודיים הכוללים פינוי לנקודת טעינה קרובה, למידע נוסף בקרו בעמוד <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">גרירת רכב חשמלי</Link> באזורנו.</p>
          </div>
        </div>
      </section>
    </main>
  );
}