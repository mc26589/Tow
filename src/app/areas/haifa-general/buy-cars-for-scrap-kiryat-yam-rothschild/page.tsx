import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק ברחוב רוטשילד קרית ים | פינוי מהיר ומזומן",
  description: "רוצים לפנות רכב לפירוק ברחוב רוטשילד בקרית ים? קניית רכבים במזומן, פינוי מהיר ושירות מקצועי 24/7. הצעת מחיר הוגנת ומיידית. התקשרו עכשיו!",
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
            קונה רכבים לפירוק ברחוב רוטשילד, קרית ים – פינוי מהיר
          </h1>
          <p className="text-xl mb-8">צריכים לפנות רכב לפירוק מרחוב רוטשילד? אנו מספקים שירות מקצועי ומהיר לתושבי קרית ים 24/7 עם הצעת מחיר הוגנת.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירות פינוי וקניית רכבים לפירוק ברחוב רוטשילד</h2>
        <p className="mb-4">
          אנו מתמחים בשירותי קניית רכבים לפירוק באזור הקריות ומגיעים לכל רחוב, כולל רחוב רוטשילד המרכזי. אם אתם זקוקים לפינוי רכב תקול או מושבת, אנו מציעים שירות מקיף. אנו עובדים בשיתוף פעולה הדוק עם צוותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-600 underline">קניית רכבים לפירוק בכל אזור הקריות</Link> ומספקים פתרון כולל.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">מדוע כדאי לבחור בשירות שלנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24/7: שירות מהיר לכל סוגי הרכבים.</li>
          <li>מקצועיות: הגעה לכל נקודה ברחוב רוטשילד ובקרית ים.</li>
          <li>מחיר הוגן: תשלום במזומן והערכת שווי ריאלית.</li>
          <li>פתרונות משלימים: זקוקים לגרירה רגילה? אנו ממליצים על שירותי <Link href="/areas/haifa-general/cheap-private-car-towing-24-7-kiryat-yam" className="text-blue-600 underline">גרירה בקרית ים</Link> זמינים ומקצועיים.</li>
        </ul>

        <p className="mt-6 text-gray-700">
          חשוב להבהיר: השירות שלנו מתמקד ברכבים פרטיים ומסחריים בלבד. אם אתם מחפשים מומחים לפירוק באזורים סמוכים, אנו ממליצים גם על שירותי <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-600 underline">פירוק רכבים בקרית ביאליק</Link>. <strong>איננו נותנים שירות לפירוק או גרירת אופנועים.</strong>
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות בנושא פינוי רכבים ברחוב רוטשילד</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">מהו טווח הזמנים להגעה לרחוב רוטשילד?</h4>
              <p>אנו עושים את מירב המאמצים להגיע לכל נקודה בקרית ים בהקדם האפשרי, לרוב באותו היום של הפנייה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">אילו סוגי רכבים אתם מפנים?</h4>
              <p>אנו רוכשים ומפנים רכבים ישנים, רכבים שעברו תאונה, רכבים תקולים ללא טסט ורכבים מסחריים מכל סוג.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">איך נקבע המחיר?</h4>
              <p>המחיר נקבע בהתאם למצב המכני של הרכב, משקלו וערך החלקים שניתן להפיק ממנו בתהליך הפירוק.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}