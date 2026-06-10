import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקרית ים רחוב רוטשילד | פינוי מהיר 24/7",
  description: "צריכים לפנות רכב לפירוק בקרית ים? שירות מקצועי ברחוב רוטשילד והסביבה. קניית רכבים במזומן, פינוי מהיר ומחיר הוגן. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-rothschild",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים קרית ים",
    "areaServed": "Kiryat Yam",
    "priceRange": "$ - $$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0714"
    },
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            קונה רכבים לפירוק בקרית ים רחוב רוטשילד – שירות מהיר ומקצועי
          </h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב לפירוק ברחוב רוטשילד? אנחנו כאן בשבילכם 24/7 עם הצעת מחיר הוגנת.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות קניית רכבים לפירוק באזור רחוב רוטשילד, קרית ים</h2>
        <p className="mb-4">
          אנו מספקים שירות מקצועי לקניית רכבים לפירוק בקריות. בין אם הרכב נמצא ברחוב רוטשילד או בסביבתו, אנו מציעים שירות פינוי מהיר. אנו עובדים גם בשיתוף פעולה עם שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק בכל אזור הקריות</Link>.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה: שירות 24/7 לכל סוגי הרכבים (פרטיים, מסחריים ו-4x4).</li>
          <li>פינוי מהיר: הגעה לכל נקודה בקרית ים בזמן קצר.</li>
          <li>שקיפות מלאה: הצעת מחיר הוגנת ללא הפתעות.</li>
          <li>טיפול מקצועי: אנו דואגים לכל הליכי הבירוקרטיה הנדרשים.</li>
        </ul>

        <p className="mt-6 text-gray-700">
          חשוב לציין: אנו מתמחים ברכבים פרטיים ומסחריים. במידה ואתם זקוקים גם לשירותי גרירה רגילים באזור, תוכלו להסתייע גם בשירותי <Link href="/areas/haifa-general/cheap-towing-kiryat-yam-to-kiryat-motzkin" className="text-blue-600 underline">גרירה מקרית ים לקרית מוצקין</Link>. <strong>איננו נותנים שירות לפירוק או גרירת אופנועים.</strong>
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פירוק רכבים בקרית ים</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">תוך כמה זמן תגיעו לרחוב רוטשילד?</h4>
              <p>אנו משתדלים להגיע לכל אזור בקרית ים בהקדם האפשרי, לרוב באותו היום, בהתאם לעומס העבודה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">אילו רכבים אתם קונים?</h4>
              <p>אנו קונים רכבים ישנים, רכבים אחרי תאונה, רכבים תקולים או רכבים שאין להם טסט, מכל הסוגים והדגמים (פרטיים ומסחריים).</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מהו טווח המחירים לרכב לפירוק?</h4>
              <p>המחיר נקבע לפי סוג הרכב, מצבו המכני ומשקלו. אנו תמיד מציעים מחיר הוגן וריאלי ביחס למחירי השוק.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}