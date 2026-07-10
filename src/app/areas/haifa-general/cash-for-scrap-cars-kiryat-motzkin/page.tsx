import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקרית מוצקין - מזומן במקום! | שירות מהיר",
  description: "מחפשים קונה רכבים לפירוק בקרית מוצקין? קונים רכבים במזומן מכל הסוגים, גרירה חינם, הגעה מהירה! שירות מקצועי ואמין. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cash-for-scrap-cars-kiryat-motzkin"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים בקרית מוצקין",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8356",
      "longitude": "35.0715"
    },
    "serviceType": "Scrap Car Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקרית מוצקין במזומן</h1>
          <p className="text-xl mb-8">פינוי רכבים מהיר, הוגן ומקצועי ללא עלות גרירה. הגעה לכל אזור הקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות קניית רכבים לפירוק בקרית מוצקין</h2>
        <p className="mb-4">אנו מציעים פתרון מלא לכל מי שמחפש קונה רכבים לפירוק בקרית מוצקין במזומן. אנו קונים רכבים במגוון מצבים: רכבים ישנים, רכבים לאחר תאונה, רכבים ללא טסט או רכבים עם תקלות מכניות קשות.</p>
        <p className="mb-4">אם אתם מחפשים <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק בכל אזור הקריות</Link>, אנו מגיעים עד אליכם, בוחנים את הרכב ומציעים מחיר הוגן במזומן. הפינוי מתבצע באמצעות גרר מקצועי.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">חשוב לדעת</h3>
          <p>אנו מתמחים בפירוק רכבים פרטיים, מסחריים ורכבי 4x4. השירות שלנו משלים שירותי גרירה מקצועיים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-600 underline">גרר זול בקרית אתא</Link> וסביבתה.</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">באילו רכבים אתם מטפלים?</h3>
              <p>אנו מטפלים ברכבים פרטיים, רכבים מסחריים ורכבי שטח. איננו מטפלים באופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מספקים שירותי גרירה באזור?</h3>
              <p>כן, אנו עובדים בשיתוף עם שירותי גרירה מקצועיים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-600 underline">שירותי גרירה באזור הצ'ק פוסט והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}