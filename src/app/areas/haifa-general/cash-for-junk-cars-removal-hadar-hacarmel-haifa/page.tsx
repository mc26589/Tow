import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "פינוי רכבים לפירוק בהדר הכרמל | קנייה במזומן 24/7",
  description: "צריכים פינוי רכבים לפירוק בהדר הכרמל? אנו קונים רכבים ללא תנועה במזומן! שירות מהיר, הוגן ומקצועי בכל אזור חיפה. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cash-for-junk-cars-removal-hadar-hacarmel-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday-Sunday", "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8095", "longitude": "34.9955" },
    "priceRange": "$",
    "serviceType": "Junk Car Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכבים לפירוק בהדר הכרמל חיפה – קניית רכבים ללא תנועה במזומן</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב ישן או מושבת בהדר הכרמל? אנו מתמחים בפינוי רכבים ללא תנועה וקניית רכבים לפירוק. אנו מציעים שירות מהיר באזור חיפה והקריות, כולל שירותים משלימים כמו <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="underline font-semibold">פינוי רכבים לברזל באזור חיפה</Link>. שימו לב: אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי פינוי לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="הדר הכרמל" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ פינוי מהיר ומקצועי מכל נקודה בהדר הכרמל.</li>
            <li>✓ הצעת מחיר הוגנת במזומן עבור הרכב שלכם.</li>
            <li>✓ טיפול בכל סוגי הרכבים (פרטיים, מסחריים, 4x4).</li>
            <li>✓ שירות משלים ל-<Link href="/areas/haifa-general/cash-for-junk-cars-check-post-haifa" className="text-blue-600">פינוי רכבים לפירוק בצ'ק פוסט</Link>.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על פינוי רכבים בהדר</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">האם אתם קונים גם רכבים ללא טסט?</h4>
              <p>כן, אנו קונים ומובילים רכבים במצב נסיעה או ללא טסט, מכל אזור הדר הכרמל.</p>
            </div>
            <div>
              <h4 className="font-bold">מהו טווח המחירים לרכב לפירוק?</h4>
              <p>המחיר נקבע בהתאם למשקל הרכב, סוגו ומצבו המכני. צרו קשר לקבלת הערכה הוגנת.</p>
            </div>
            <div>
              <h4 className="font-bold">האם השירות כולל גרירה?</h4>
              <p>בהחלט. אם נדרשת עזרה מקצועית נוספת באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-600">שירותי גרירה זולים באחוזה</Link> וסביבתה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}