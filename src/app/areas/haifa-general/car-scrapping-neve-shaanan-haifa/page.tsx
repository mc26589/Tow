import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "פינוי רכב לפירוק בנווה שאנן חיפה | מחיר הוגן ושירות מהיר 24/7",
  description: "צריכים פינוי רכב לפירוק בנווה שאנן, חיפה? אנו מציעים שירות מקצועי, הגעה מהירה ומחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו להצעת מחיר משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-neve-shaanan-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה",
    "areaServed": "נווה שאנן, חיפה",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7858",
      "longitude": "35.0050"
    },
    "serviceType": "פינוי רכב לפירוק"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכב לפירוק בנווה שאנן חיפה</h1>
          <p className="text-xl mb-8 leading-relaxed">
            מחפשים שירות אמין לפינוי רכב לפירוק בשכונת נווה שאנן בחיפה? אנו מציעים פתרון מהיר ומקצועי לכל סוגי הרכבים: רכבים פרטיים, רכבים מסחריים ורכבי 4x4. אם נתקעתם באזורים סמוכים, אנו מציעים גם פתרונות כגון <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="underline font-semibold">שירותי גרירה זולים באחוזה</Link> או <Link href="/areas/haifa-general/24-7-towing-electric-car-battery-dead-technion-haifa" className="underline font-semibold">סיוע בקרבת הטכניון</Link>. אנו מתחייבים לשירות אדיב, עמידה בלוחות זמנים ומחירים הוגנים עבור הרכב שלכם.
          </p>
          <div className="bg-black/20 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>פינוי מהיר מכל נקודה בנווה שאנן</li>
              <li>טיפול מקצועי בכל סוגי הרכבים (למעט אופנועים)</li>
              <li>הצעת מחיר הוגנת בטלפון</li>
              <li>שירות זמין 24/7</li>
            </ul>
          </div>
          <p className="text-sm mb-6 italic">* שימו לב: אנו מתמחים ברכבים, רכבים מסחריים ו-4x4. איננו מספקים שירותי פינוי לאופנועים או דו-גלגליים.</p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black py-3 px-8 rounded-lg font-bold text-center hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>
      
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על פינוי רכבים בחיפה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">תוך כמה זמן תגיעו לפנות את הרכב בנווה שאנן?</h3>
            <p>אנו משתדלים להגיע בהקדם האפשרי. בזכות המיקום המרכזי שלנו בחיפה, אנו מבצעים פינוי יעיל ומהיר לכל רחובות השכונה.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">האם אתם קונים גם רכבים שלא נוסעים?</h3>
            <p>כן, אנו מתמחים ברכישת רכבים לפירוק, גם אם הם אינם מניעים או סובלים מתקלות מכניות קשות. למידע נוסף על שירותינו באזור, ניתן לעיין גם בקישור <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600">פינוי רכבים לפירוק בחיפה והקריות</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}