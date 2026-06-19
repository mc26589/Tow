import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט כביש 22 | שירות גרירה 24/7 מהיר ומקצועי",
  description: "נתקעתם עם הרכב באזור צ'ק פוסט או כביש 22? שירותי גרירה מקצועיים, מחיר הוגן והגעה מהירה לכל אזור חיפה והקריות. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-check-post-highway-22"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "longitude": "35.0230"
    },
    "serviceType": "Towing and Roadside Assistance"
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
            שירותי גרירה וחילוץ באזור מחלף צ'ק פוסט וכביש 22
          </h1>
          <p className="text-lg md:text-xl mb-8">
            חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              התקשר עכשיו לחילוץ רכב
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים באזור חיפה והקריות</h2>
        <p className="mb-4">
          נתקעת עם הרכב באזור מחלף צ'ק פוסט? אנו מציעים <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600 underline">שירותי גרירה זולים באזור צ'ק פוסט</Link> מהירים, אמינים ובמחירים הוגנים לכל סוגי הרכבים.
        </p>
        <p className="mb-4">
          אנו מבינים את הדחיפות בעת תקלה בדרך, במיוחד על צירים עמוסים כמו <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-600 underline">כביש 22 עוקף קריות</Link>. הצוות שלנו זמין 24/7 כדי להבטיח מענה מהיר. במידה ומדובר בנזק כתוצאה מתאונה, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/towing-after-accident-check-post-haifa" className="text-blue-600 underline">גרירה לאחר תאונה בצ'ק פוסט</Link>.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה באזור חיפה</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם גוררים אופנועים?</h3>
              <p>לא, איננו מספקים שירותי גרירה לאופנועים, השירות מיועד לרכבים פרטיים, מסחריים ורכבי 4x4 בלבד.</p>
            </div>
            <div>
              <h3 className="font-bold">מהו זמן ההגעה הממוצע לצ'ק פוסט?</h3>
              <p>אנו משתדלים להגיע לכל קריאה באזור צ'ק פוסט בזמן הקצר ביותר, בהתאם לעומסי התנועה בציר כביש 22.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}