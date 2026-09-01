import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר לאופנוע כבד באחוזה חיפה | שירותי גרירה לרכבים",
  description: "מחפשים גרר באחוזה חיפה? אנו מתמחים בגרירת רכבים, רכבים מסחריים ורכבי 4x4. שימו לב: איננו מספקים שירותי גרירה לאופנועים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "חיפה והקריות",
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
    "serviceType": "גרירת רכבים, חילוץ רכבים, רכבי שטח"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה לרכבים ורכבי שטח</h1>
          <p className="text-lg mb-8 max-w-2xl">
            חשוב להבהיר: אנו מתמחים בשירותי גרירה וחילוץ מקצועיים לרכבים פרטיים, רכבים מסחריים ורכבי 4x4 בלבד. 
            נכון לעכשיו, איננו מספקים שירותי גרירה לאופנועים או אופנועים כבדים באזור אחוזה בחיפה. 
            אנו ממליצים לפנות לבעל מקצוע המתמחה בשינוע דו-גלגלי כדי להבטיח את שלמות הכלי שלכם.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו לייעוץ גרירת רכב
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">מדוע לבחור בנו לגרירת הרכב שלכם?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 לכל סוגי הרכבים</li>
            <li>ציוד גרירה מתקדם ומקצועי</li>
            <li>מחירים הוגנים ושירות אדיב</li>
            <li>ניסיון רב בחילוץ רכבים באזור חיפה והכרמל</li>
          </ul>
        </div>
      </section>
    </main>
  );
}