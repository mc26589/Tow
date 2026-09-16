import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בדרך נוף כרמל חיפה | חילוץ רכב 24/7 - הגעה מהירה",
  description: "נתקעתם בדרך נוף כרמל? שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים בחיפה. מחיר הוגן, זמינות 24/7 ושירות אמין. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-haifa-nof-carmel",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ בחיפה",
    "areaServed": "Haifa",
    "priceRange": "הוגן ושקוף",
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
            נתקעת עם הרכב באזור דרך נוף כרמל? אנו כאן להעניק סיוע מהיר ומקצועי לרכבים פרטיים, מסחריים ו-4x4.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה" />
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
          <h2 className="text-2xl font-bold mb-4">שירותי גרירה בחיפה והסביבה</h2>
          <p className="mb-4">
            אנו זמינים לכל קריאה באזור דרך נוף כרמל. חשוב לציין שאנו מתמקדים בחילוץ רכבים פרטיים, משפחתיים ורכבי שטח. למי שמחפש שירותים משלימים באזור, ניתן לבדוק <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="text-blue-600 underline">חילוץ רכב מהבוץ בכרמל</Link> או <Link href="/areas/haifa-general/cheap-private-car-towing-ahuza-haifa" className="text-blue-600 underline">גרירת רכב זולה באחוזה</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מה זמן ההגעה הממוצע בדרך נוף כרמל?</h3>
              <p>אנו פועלים בפריסה רחבה בחיפה ומשתדלים להגיע לכל קריאה בזמן קצר ככל האפשר, תוך התחשבות בעומסי התנועה בצירים המרכזיים.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים רכבים שנתקעו בבוץ או בשטח?</h3>
              <p>כן, אנו מספקים שירותי חילוץ מקצועיים. למידע נוסף, בקרו בעמוד <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-600 underline">חילוץ רכב מהבוץ בכרמל ובאזור האוניברסיטה</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}