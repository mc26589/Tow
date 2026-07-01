import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה 24/7 | שירות מהיר ומקצועי | מחיר הוגן",
  description: "נתקעת עם הרכב באחוזה חיפה? שירותי גרירה וחילוץ 24/7 לרכבים פרטיים ומסחריים. הגעה מהירה, שירות אדיב ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ באחוזה חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$,$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר באחוזה חיפה - חילוץ רכבים מקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעת באמצע היום או הלילה באזור אחוזה? אנו מספקים שירותי גרירה וחילוץ לכל סוגי הרכבים הפרטיים והמסחריים במקצועיות ובמהירות.</p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold">
              התקשר עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">זקוקים לשירותי גרירה באזור אחוזה והכרמל?</h2>
        <p className="mb-4">הצוות שלנו מכיר היטב את צירי התנועה באחוזה. אם הרכב הושבת, אנו נדאג לפנות אותו בבטחה. לרשותנו ניסיון רב בטיפול ברכבים שנתקעו בדרכים. במידה ואתם זקוקים לעזרה בדרכים הרריות בקרבת מקום, תוכלו להיעזר במידע על <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-600 underline">חילוץ רכבים ביערות הכרמל</Link>.</p>
        
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-3">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לכם להגיע לאחוזה?</p>
              <p>אנו משתדלים להגיע לכל נקודה באחוזה ובסביבתה בזמן הקצר ביותר, לרוב תוך 30-45 דקות בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים אופנועים?</p>
              <p>כרגע השירות שלנו מתמקד ברכבים פרטיים, רכבי שטח ורכבים מסחריים בלבד.</p>
            </div>
            <div>
              <p className="font-bold">מה טווח המחירים שלכם?</p>
              <p>אנו מקפידים על מחיר הוגן ושקוף לכל קריאה, בהתאם למרחק ולמורכבות החילוץ. ניתן לקבל הצעת מחיר מדויקת בטלפון.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}