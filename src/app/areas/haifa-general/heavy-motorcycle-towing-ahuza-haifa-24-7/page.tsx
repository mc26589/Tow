import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה 24/7 | שירות מהיר ומחיר הוגן | הגעה מהירה",
  description: "זקוקים לגרר באחוזה חיפה? אנו מציעים שירותי גרירה מקצועיים לרכב 24/7. שירות מהיר, אדיב ובמחיר הוגן. התקשרו עכשיו להזמנת גרר!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa-24-7",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה מקצועיים באחוזה, חיפה 24/7</h1>
          <p className="text-lg mb-8">אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. לידיעתכם, איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold">
              התקשר עכשיו
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים באחוזה והסביבה</h2>
        <p className="mb-4">אנו מציעים שירותי גרירה מהירים ומקצועיים לכל סוגי הרכבים באזור אחוזה. אם אתם מחפשים <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-600 underline">שירות גרירה זול באחוזה עם מחיר שקוף</Link>, הגעתם למקום הנכון. אנו מספקים גם פתרונות נוספים כגון <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">חילוץ רכב חשמלי באחוזה</Link> ופינוי גרוטאות דרך <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-600 underline">קניית רכבים לפירוק באחוזה</Link>.</p>
      </section>
      <section className="py-12 bg-gray-50 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה באחוזה</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">מהו זמן ההגעה הממוצע באחוזה?</h3>
            <p>אנו ממוקמים בחיפה ופועלים בפריסה רחבה, לרוב מגיעים תוך זמן קצר בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים מהכרמל?</h3>
            <p>כן, אנו נותנים מענה מלא לכל אזורי חיפה, לרבות מרכז הכרמל, אחוזה, והרכס.</p>
          </div>
        </div>
      </section>
    </main>
  );
}