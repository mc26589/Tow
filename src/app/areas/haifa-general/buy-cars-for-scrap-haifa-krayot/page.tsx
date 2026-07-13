import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן - שירות 24/7",
  description: "מחפשים קונה רכבים לפירוק בחיפה והקריות? אנו מציעים מחיר הוגן, שירות גרירה ללא עלות ופינוי מהיר של רכבים מושבתים או לאחר תאונה. התקשרו עכשיו!");",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main className="min-h-screen bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי לפינוי רכבים לפירוק מכל הסוגים. הצעת מחיר הוגנת במזומן והגעה מהירה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חייגו עכשיו לשיחת ייעוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900 text-neutral-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
          <p className="mb-4">אנו מציעים פתרון מלא לכל מי שמחפש <Link href="/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot" className="text-blue-400 underline">קונה רכבים לפירוק בחיפה והקריות</Link>. אנו מטפלים ברכבים שאינם נוסעים, רכבים אחרי תאונה או רכבים ללא טסט.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>פינוי רכבים ללא עלות גרירה נוספת</li>
            <li>טיפול מקצועי בכל סוגי הרכבים הפרטיים והמסחריים</li>
            <li>הצעת מחיר הוגנת ומהירה במקום</li>
            <li>שירות זמין 24/7 לכל תושבי האזור</li>
          </ul>
          
          <div className="mt-12 bg-neutral-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">האם אתם קונים גם רכבים עם תקלות מכניות?</h4>
                <p className="text-neutral-300">כן, אנו קונים רכבים ללא טסט, רכבים מושבתים ורכבים עם תקלות מנוע במחיר הוגן.</p>
              </div>
              <div>
                <h4 className="font-bold">מהו אזור השירות שלכם?</h4>
                <p className="text-neutral-300">אנו מספקים שירותי פינוי וגרירה בכל אזור חיפה, הקריות, וניתן לבדוק שירותים משלימים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-400 underline">גרירה בצ'ק פוסט</Link>.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם מפרקים גם אופנועים?</h4>
                <p className="text-neutral-300">אנו מתמחים ברכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מטפלים באופנועים.</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-neutral-400 italic mt-8">הערה: אם רכבכם תקוע בדרכים וזקוק לחילוץ מהיר במקום פירוק, אנו מספקים שירותי <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 underline">חילוץ רכב תקוע</Link> במידת הצורך.</p>
        </div>
      </section>
    </main>
  );
}