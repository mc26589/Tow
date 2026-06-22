import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 4 ליד קריית מוצקין | שירות מהיר 24/7",
  description: "נתקעתם בכביש 4 ליד קריית מוצקין? שירותי גרירה וחילוץ מהירים ומקצועיים לרכבים פרטיים ומסחריים. מחיר הוגן, הגעה מהירה. התקשרו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-service-breakdown-route-4-near-kiryat-motzkin"
  }
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
      "latitude": "32.8350",
      "longitude": "35.0750"
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה וחילוץ רכב בכביש 4 ליד קריית מוצקין</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב בכביש 4? אנו כאן לסייע. אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. אם אתם מחפשים <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="underline">גרירה במחיר הוגן בקריית מוצקין</Link>, הגעתם למקום הנכון.
            <br /><strong>שימו לב: איננו מספקים שירותי גרירה לאופנועים.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו?</h2>
          <ul className="space-y-4">
            <li>✓ זמינות 24/7 לכל קריאה באזור הקריות</li>
            <li>✓ צוות מקצועי ומנוסה בחילוץ רכבים כבדים וקלים</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה</li>
            <li>✓ הגעה מהירה לכל נקודה בכביש 4, כולל שירותים משלימים כמו <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-400">גרירה בצ'ק פוסט</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירת רכב בכביש 4</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מהו זמן ההגעה המשוער בכביש 4?</h3>
              <p>אנו משתדלים להגיע לכל קריאה בכביש 4 ליד קריית מוצקין תוך זמן קצר, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים תקועים במקום?</h3>
              <p>במקרים מסוימים אנו מסייעים בפינוי רכבים. למידע נוסף ניתן לבדוק על <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600">רכבים לפירוק עם גרירה כלולה</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}