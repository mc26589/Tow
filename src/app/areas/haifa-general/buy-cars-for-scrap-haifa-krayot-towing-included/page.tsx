import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בחיפה והקריות | גרירה חינם | מחיר הוגן 24/7",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? אנו קונים את כל סוגי הרכבים במזומן, כולל גרירה בחינם עד אליכם. שירות מהיר, אמין ומקצועי. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות קניית רכבים לפירוק וגרירה בחיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "priceRange": "מחיר הוגן",
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
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בחיפה והקריות – גרירה חינם!</h1>
          <p className="text-xl mb-8">נמאס מהרכב הישן? אנו קונים רכבים לפירוק מכל סוג, כולל שירות גרירה מהיר ומקצועי בכל אזור חיפה והקריות עד הבית.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מקצועי באזור חיפה והקריות</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק, רכבים תקולים או מושבתים. זקוקים לפינוי דחוף? אנו מספקים מענה מהיר בכל הצפון. אם הרכב שלכם נתקע בדרך, כדאי לדעת שאנו מציעים גם <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400 underline">שירותי גרירה משתלמים בציר כביש 22 וצ'ק פוסט</Link>.
        עבור תושבי האזור, אנו מציעים פתרונות מקיפים החל מ- <Link href="/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין" className="text-blue-400 underline">פינוי רכב גרוטאה לחלפים בקריית מוצקין</Link> ועד גרירה דחופה בכבישים המהירים.</p>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים מהקריות לעורק התחבורה הראשי?</h3>
              <p>כן, אנו פעילים בכביש 22 ובכל אזור הקריות ומספקים גם <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-400 underline">שירותי גרירה מקצועיים בכביש 22</Link> במקרה של תקלה או תאונה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם ניתן לפנות רכב שאינו מניע מהבית?</h3>
              <p>בהחלט. אנו מתמחים בפינוי רכבים ללא יכולת הנעה בכל רחבי חיפה, הקריות והסביבה. השירות כולל גרירה בחינם ללא צורך במאמץ מצדכם.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-neutral-900 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-semibold mb-4">יתרונות השירות שלנו:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>גרירה ופינוי כלולים במחיר.</li>
            <li>תשלום הוגן ומיידי על כל סוגי הרכבים.</li>
            <li>זמינות 24/7 לכל תרחיש.</li>
            <li>שירות אדיב ומקצועי בכל אזור הצפון.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}