import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מזומן תוך 30 דק'",
  description: "נתקעתם עם רכב ישן? אנו קונים רכבים לפירוק בחיפה והקריות במזומן! שירות גרירה מקצועי ומהיר לכל סוגי הרכבים. התקשרו עכשיו להצעת מחיר הוגנת!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot-towing"
  }
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי במזומן</h1>
          <p className="text-xl mb-8">נמאס לכם מהרכב הישן שתופס חניה? אנו קונים את כל סוגי הרכבים לפירוק ומספקים שירותי גרירה מקצועיים בחיפה, בקריות ובכל אזור הצפון.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">קניית רכבים לפירוק - הפתרון המהיר בחיפה והקריות</h2>
        <p className="mb-4">
          אנו מציעים שירות מקיף לכל סוגי הרכבים, כולל רכבים ללא טסט או אחרי תאונה. לתושבי הצפון הזקוקים לשירותי <Link href="/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין" className="text-blue-600 underline">פינוי רכב גרוטאה לחלפים קריית מוצקין</Link>, אנו מגיעים עם גרר לכל נקודה. 
          אם נתקעתם באזור עוקף קריות, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-600 underline">towing services road 22 krayot bypass</Link> לכל צורך.
        </p>
        <p className="mb-4 font-semibold text-red-600">חשוב להבהיר: איננו מספקים שירותי גרירה או פירוק לאופנועים, אלא לרכבים פרטיים ומסחריים בלבד.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות ותשובות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מהו טווח המחירים לקניית רכב לפירוק?</h3>
              <p>המחיר נקבע בהתאם לסוג הרכב והמצב המכני. אנו מבטיחים הצעת מחיר הוגנת ושקיפות מלאה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם פעילים גם בכבישים בינעירוניים?</h3>
              <p>כן, אנו נותנים מענה רחב הכולל שירותי <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">emergency car breakdown towing route 22 check post haifa cheap</Link> לכל נהג הזקוק לסיוע.</p>
            </div>
            <div>
              <h3 className="font-bold">איך מתבצע תהליך הפינוי?</h3>
              <p>יוצרים קשר, מקבלים הצעת מחיר, ואנו מגיעים עם גרר בזמן הנוח לכם כדי לפנות את הרכב בצורה בטוחה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}