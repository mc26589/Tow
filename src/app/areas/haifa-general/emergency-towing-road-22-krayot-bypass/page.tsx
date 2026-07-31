import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות - שירות מהיר 24/7 | הגעה תוך 30 דקות",
  description: "נתקעת בכביש 22 עוקף קריות? גרר מקצועי וזמין 24/7 לכל סוגי הרכבים. מחיר הוגן ושירות מהיר. התקשרו עכשיו וצוות בדרך אליכם!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": { "@type": "Place", "name": "כביש 22, עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$$, $$$",
    "serviceType": "Emergency Roadside Assistance and Towing",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0633" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? הצוות שלנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="כביש 22 עוקף קריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות גרירה מקצועי בכביש 22</h2>
        <p className="mb-4">
          אנו מספקים שירותי גרירה דחופים לכל סוגי הרכבים הפרטיים והמסחריים לאורך כביש 22. אם הרכב נתקע, ניתן גם להיעזר בשירותי <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-600 underline">גרירת רכב חשמלי בכביש 22</Link> במקרה של תקלה. אנו ערוכים להגעה מהירה לכל נקודה בציר עוקף קריות בכל שעה.
        </p>
        <div className="bg-red-50 border-r-4 border-red-600 p-6 my-6">
          <p className="font-bold text-red-800">הערה חשובה: איננו מספקים שירותי גרירה לאופנועים.</p>
        </div>
        <h3 className="text-2xl font-semibold mb-4">למה לפנות אלינו?</h3>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה דחופה.</li>
          <li>הגעה מהירה ובטוחה לכל צירי התנועה כמו <Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="text-blue-600 underline">שירות מהיר בכביש 22</Link>.</li>
          <li>מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>

        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בכביש 22</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לגרר להגיע לעוקף קריות?</p>
              <p>הצוות שלנו ממוקם בנקודות אסטרטגיות ומגיע לרוב המוקדים בכביש 22 תוך זמן קצר מאוד.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים רכבים מהאזור?</p>
              <p>בהחלט, אנחנו מספקים שירותים גם בערים סמוכות, כגון <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-600 underline">גרירת רכב בקרית מוצקין</Link> וסביבתה.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}