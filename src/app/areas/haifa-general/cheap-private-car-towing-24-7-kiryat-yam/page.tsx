import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בקרית ים 24/7 | שירות מהיר ומחיר הוגן | הגעה מהירה",
  description: "נתקעתם עם הרכב בקרית ים? שירותי גרירה מקצועיים 24/7 לרכב פרטי ומסחרי. מחירים נוחים, שקיפות מלאה ושירות מהיר. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-private-car-towing-24-7-kiryat-yam",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קרית ים",
    "areaServed": "קרית ים",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$,$",
    "serviceType": "Towing Service",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.835",
      "longitude": "35.070"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב פרטי זול 24/7 בקרית ים</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בקרית ים? אנו כאן בשבילכם. אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4 במחירים הוגנים וזמינות מלאה מסביב לשעון. 
            שימו לב: במידה והרכב במצב גרוטאה שאינו ראוי לנסיעה, ניתן גם לבדוק אפשרות של <Link href="/areas/haifa-general/buy-old-cars-for-scrap-kiryat-yam" className="underline font-bold">מכירת רכב לפירוק בקרית ים</Link>. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">שאלות נפוצות על גרירה בקרית ים</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">תוך כמה זמן הגרר מגיע לקרית ים?</h3>
              <p>אנו משתדלים להגיע לכל נקודה בקרית ים בזמן קצר ככל הניתן, בדרך כלל תוך 30-45 דקות בהתאם לעומסי התנועה.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">האם אתם גוררים רכבים מהקריות?</h3>
              <p>כן, אנו נותנים מענה מקיף לכל אזור הקריות, כולל שירותי גרירה מהירים וסיוע בדרכים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}