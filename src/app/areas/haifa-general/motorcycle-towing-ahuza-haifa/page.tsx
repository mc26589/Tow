import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר רכבים באחוזה חיפה - שירות מקצועי 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב באחוזה חיפה? שירותי גרירה מקצועיים ומהירים 24/7 לרכבים פרטיים ומסחריים. מחיר הוגן ושירות אדיב. התקשרו עכשיו לקבלת סיוע!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa",
    "priceRange": "₪",
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
    "serviceType": "Vehicle Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה מקצועיים באחוזה, חיפה
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ו-4x4 באזור אחוזה והכרמל. שים לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה, חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">זקוקים לגרר באזור אחוזה?</h2>
          <p className="mb-4">
            הצוות שלנו מכיר את אזור אחוזה והסביבה היטב, מה שמאפשר לנו להגיע אליכם במהירות. אנו מציעים מגוון פתרונות, החל מ-<Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-yellow-500 underline">חילוץ רכב תקוע בכרמל</Link> ועד גרירה לעיר התחתית או צ'ק פוסט.
          </p>
          <p className="mb-4 font-semibold text-yellow-500">
            חשוב לציין: השירות שלנו מיועד לרכבים בלבד (רכבים פרטיים, מסחריים וג'יפים). אנו לא ערוכים לשינוע אופנועים.
          </p>
          <p>
            אם אתם צריכים סיוע נוסף, תוכלו לבדוק גם <Link href="/areas/haifa-general/cheap-car-towing-service-neve-shaanan-haifa" className="text-blue-400">שירותי גרירה בנווה שאנן</Link> או <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="text-blue-400">חילוצי 4x4 באזור הכרמל</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center">שאלות נפוצות על שירותי גרירה בחיפה</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">מהו זמן ההגעה הממוצע לאחוזה?</h3>
              <p>אנו משתדלים להגיע לכל קריאה באזור אחוזה והסביבה תוך זמן קצר ככל האפשר, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים רכבים לכל חלקי חיפה?</h3>
              <p>כן, אנו נותנים שירות לכל השכונות בחיפה, כולל מתן פתרונות ל-<Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600">גרר באזור צ'ק פוסט</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות כולל פינוי רכבים גרוטאות?</h3>
              <p>בהחלט. אנו מציעים גם פתרונות למי שמחפש <Link href="/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot" className="text-blue-600">קונה רכבים לפירוק בחיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}