import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר רכבים באחוזה חיפה 24/7 | הגעה מהירה ומחיר הוגן",
  description: "נתקעת באחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, שירות אמין ומחיר הוגן. התקשרו עכשיו לקבלת סיוע!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
    "serviceType": ["Car Towing", "Roadside Assistance", "4x4 Recovery"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ לרכבים באחוזה חיפה</h1>
          <p className="text-xl mb-8">נתקעתם עם הרכב באחוזה? צוות מקצועי זמין עבורכם 24/7 למתן פתרון מהיר</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">מידע חשוב בנוגע לשירותי גרירה באחוזה</h2>
          <div className="prose prose-invert">
            <p>אנו מתמחים בשירותי גרירה וחילוץ לרכבים פרטיים, רכבים מסחריים ורכבי 4x4 באזור אחוזה וחיפה. <strong>חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</strong></p>
            <p>בין אם אתם זקוקים ל- <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-400">שירותי גרירה דחופים בצ'ק פוסט</Link> או <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="text-blue-400">חילוץ מהבוץ בכרמל</Link>, הצוות שלנו ערוך להגיע לכל נקודה באזור חיפה והקריות במהירות המקסימלית.</p>
            <p>למי שמחפש פתרונות לרכבים שאינם בנסיעה, ניתן גם לבדוק אפשרות ל- <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="text-blue-400">מכירת רכב לפירוק בחיפה</Link>.</p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">מהו אזור הפעילות שלכם בחיפה?</h4>
                <p>אנו פעילים בכל העיר חיפה, כולל שכונות הכרמל, אחוזה, מרכז הכרמל, נווה שאנן ועד לקריות.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם גוררים אופנועים?</h4>
                <p>לא, שירותי הגרירה שלנו מיועדים לרכבים פרטיים, מסחריים ורכבי 4x4 בלבד.</p>
              </div>
              <div>
                <h4 className="font-bold">כמה זמן לוקח לכם להגיע לאחוזה?</h4>
                <p>אנו שואפים להגיע לכל קריאה באחוזה ובסביבתה תוך זמן קצר ככל הניתן, בהתאם לעומסי התנועה.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}