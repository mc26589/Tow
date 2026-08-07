import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן במקום",
  description: "נתקעתם עם רכב ישן? אנו קונים רכבים לפירוק בחיפה והקריות עם פינוי מיידי מהשטח. מחיר הוגן ושירות מהיר. התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal",
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
      "closes": "23:59",
    },
    "serviceType": "Scrap Car Removal",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן או מושבת? אנו <Link href="/areas/haifa-general/buying-cars-for-scrap-haifa-krayot" className="underline">קונים רכבים לפירוק בחיפה והקריות</Link> ומפנים אותם מהשטח עוד היום במזומן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חייגו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ פינוי מיידי מהשטח בחיפה ובכל אזור הקריות.</li>
            <li>✓ הצעת מחיר הוגנת ומשתלמת במקום.</li>
            <li>✓ שירות מקצועי לרכבים פרטיים, מסחריים ו-4x4.</li>
            <li>✓ טיפול מהיר בכל הבירוקרטיה הנדרשת.</li>
          </ul>
          <p className="mt-8 text-sm text-gray-400">
            *הערה: אנו מתמחים ברכבים בלבד. איננו מספקים שירותי פינוי או גרירה לאופנועים או כלים דו-גלגליים.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכבים לפירוק</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">תוך כמה זמן תגיעו לפנות את הרכב בחיפה?</h3>
              <p>אנו מבצעים פינוי מהיר לרוב באותו היום, בהתאם למיקום שלכם בחיפה או בקריות.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">אילו סוגי רכבים אתם קונים?</h3>
              <p>אנו רוכשים רכבים מכל הסוגים: רכבים מושבתים, רכבים אחרי תאונה, ורכבים ישנים שלא עברו טסט.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">מהו טווח המחירים לרכבים לפירוק?</h3>
              <p>המחיר נקבע בהתאם למשקל הרכב, מצבו הטכני וערך המתכות. אנו מתחייבים להצעת מחיר הוגנת ומשתלמת בהשוואה לשוק.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}