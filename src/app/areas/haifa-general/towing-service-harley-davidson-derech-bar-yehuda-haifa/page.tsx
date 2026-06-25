import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בדרך בר יהודה חיפה | 24/7 שירות מהיר ומחיר הוגן",
  description: "נתקעת בדרך בר יהודה בחיפה? אנו מספקים שירותי גרירה וחילוץ לרכב במחירים הוגנים ובזמינות מלאה 24/7. הגעה מהירה לכל אזור חיפה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-harley-davidson-derech-bar-yehuda-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בדרך בר יהודה חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0000" },
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
          <h1 className="text-4xl font-bold mb-6">שירות גרירה וחילוץ בדרך בר יהודה חיפה</h1>
          <p className="text-lg mb-8">
            נתקעת בדרך בר יהודה בחיפה? אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים, רכבי שטח ורכבים מסחריים. 
            במידה ואתם בקרבת <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="underline font-semibold">צומת צ'ק פוסט</Link>, נדע להגיע אליכם במהירות. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. הצוות שלנו זמין 24/7 לחילוץ מהיר במחירים הוגנים.
          </p>
          <div className="flex gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold"
            >
              התקשר עכשיו
            </a>
            <WhatsAppCTA cityName="Haifa" />
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו בחיפה?</h2>
        <ul className="list-disc pr-5 space-y-2 mb-10">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>הגעה מהירה לכל נקודה בדרך בר יהודה והסביבה.</li>
          <li>שירות אדיב ומקצועי במחירים הוגנים.</li>
          <li>ציוד חדיש המותאם לרכבים פרטיים ומסחריים.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בחיפה</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">תוך כמה זמן אתם מגיעים לדרך בר יהודה?</h3>
            <p>אנו שואפים להגיע לכל קריאה בחיפה תוך זמן קצר ככל הניתן בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים מסחריים?</h3>
            <p>כן, אנו מספקים מענה לרכבים פרטיים, מסחריים ורכבי שטח (לא כולל אופנועים).</p>
          </div>
        </div>
      </section>
    </main>
  );
}