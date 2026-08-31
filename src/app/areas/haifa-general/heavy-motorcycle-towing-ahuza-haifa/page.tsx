import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותי גרירת רכבים באחוזה חיפה | הגעה מהירה 24/7 | מחיר הוגן",
  description: "זקוקים לגרר באחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים 24/7. שירות אמין, מהיר ומחיר הוגן. התקשרו עכשיו לפתרון מיידי!",
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
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירת רכבים באחוזה חיפה</h1>
          <p className="text-xl mb-8">חשוב לדעת: אנו מתמחים בגרירת רכבים ורכבי שטח. איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ באזור אחוזה</h2>
          <p className="text-lg leading-relaxed mb-4">
            אנו מספקים מענה מקצועי לכל סוגי הרכבים הפרטיים והמסחריים באזור אחוזה והסביבה. 
            למרות שאיננו מטפלים באופנועים, אנו ערוכים לכל קריאה של רכב תקוע. 
            תוכלו למצוא אצלנו מגוון פתרונות, החל מ- <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="text-blue-600 font-semibold">גרירת חירום באזור חורב אחוזה</Link> ועד ל <Link href="/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa" className="text-blue-600 font-semibold">גרירת רכבים נמוכים</Link>.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על שירותי גרירה באחוזה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">האם אתם גוררים אופנועים?</h3>
              <p>לא, אנו מתמחים אך ורק ברכבים פרטיים ומסחריים. במידה ואתם זקוקים לחילוץ רכב, נשמח לסייע.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">תוך כמה זמן הגרר מגיע לאחוזה?</h3>
              <p>אנו משתדלים להגיע לכל קריאה באזור חיפה והסביבה בתוך זמן קצר ככל האפשר, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם קונים רכבים לפירוק באזור?</h3>
              <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-600">קניית רכבים לפירוק באחוזה</Link> במחירים הוגנים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}