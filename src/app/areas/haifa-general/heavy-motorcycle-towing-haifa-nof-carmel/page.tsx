import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר רכבים בדרך נוף כרמל חיפה | שירות מהיר ומחיר הוגן",
  description: "נתקעת בדרך נוף כרמל? אנו מציעים שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ו-4x4 בחיפה והסביבה. זמינות 24/7, מחיר הוגן והגעה מהירה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-haifa-nof-carmel",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$$,$",
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
            שירותי גרירה וחילוץ בדרך נוף כרמל, חיפה
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            נתקעת עם הרכב בדרך נוף כרמל? אנו כאן לסייע לרכבים פרטיים, מסחריים ו-4x4 במהירות ובמקצועיות.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים בחיפה</h2>
          <p className="mb-4">
            אנו מבינים את הדחיפות כאשר רכב נתקע בדרך נוף כרמל בחיפה. חשוב להבהיר כי אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח (4x4). <strong>איננו מספקים שירותי גרירה לאופנועים או אופנועים כבדים.</strong>
          </p>
          <p className="mb-4">
            לזקוקים לשירותים נוספים באזור, אנו ממליצים לבדוק שירותי <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="text-blue-600 underline">חילוץ 4x4 בכרמל</Link> או <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-600 underline">שירותי גרירה באחוזה</Link> במחירים הוגנים ושקופים.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מהו זמן ההגעה הממוצע בחיפה?</h3>
              <p>אנו משתדלים להגיע לכל קריאה בחיפה ובאזור דרך נוף כרמל תוך זמן קצר ככל האפשר בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים רכבי 4x4 שנתקעו בבוץ?</h3>
              <p>כן, אנו מספקים שירותי חילוץ מקצועיים לרכבי שטח. ניתן לעיין במידע נוסף על <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-haifa-university" className="text-blue-600 underline">חילוץ רכב מהבוץ בכרמל</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}