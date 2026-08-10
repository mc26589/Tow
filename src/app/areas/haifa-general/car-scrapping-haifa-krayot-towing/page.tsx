import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | תשלום במזומן וגרירה חינם",
  description: "מעוניינים למכור רכב ישן? קונה רכבים לפירוק בחיפה והקריות עם שירות גרירה מהיר ומחיר הוגן במקום. פנו אלינו עוד היום לפינוי הרכב!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot-towing",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
      "longitude": "34.9896"
    },
    "serviceType": "Car Scrapping and Towing"
  };

  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם שירות גרירה</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן? אנו קונים רכבים לפירוק ומספקים שירות גרירה מהיר בחיפה והקריות.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק מכל הסוגים: רכבים פרטיים, מסחריים ורכבי 4x4. השירות כולל גרירה מהירה ללא עלות נוספת. שימו לב: איננו מספקים שירות לאופנועים. אם אתם זקוקים לשירותים נוספים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בצומת צ'ק פוסט</Link> או <Link href="/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-rothschild" className="text-blue-600 underline">פינוי רכבים בקריית ים</Link>.</p>
        <p>התהליך פשוט: אתם מתקשרים, אנו מגיעים עם גרר, בודקים את הרכב ומציעים מחיר הוגן במקום.</p>
      </section>

      <section className="py-12 bg-gray-50 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl">האם אתם קונים רכבים ללא טסט?</h3>
            <p>כן, אנו קונים רכבים לפירוק במצב נסיעה או מושבתים, גם ללא טסט בתוקף.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם השירות כולל גרירה מאזור הקריות?</h3>
            <p>בהחלט, אנו מספקים שירות גרירה מהיר ומקצועי לכל רחבי חיפה והקריות, כולל אזורים תעשייתיים.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">מה לגבי אופנועים?</h3>
            <p>אנו מתמקדים ברכבים פרטיים ומסחריים בלבד ואיננו מבצעים גרירה או קנייה של אופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}