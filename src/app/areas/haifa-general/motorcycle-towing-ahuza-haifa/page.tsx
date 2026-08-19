import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר רכב באחוזה חיפה - שירות מהיר 24/7 ומחיר הוגן",
  description: "נתקעת עם הרכב באחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, שירות אמין ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה וחילוץ רכב באחוזה חיפה</h1>
          <p className="text-lg mb-4">
            חשוב להבהיר: אנו מתמחים בשירותי גרירה וחילוץ לרכבים פרטיים, רכבים מסחריים ורכבי 4x4 באזור חיפה והקריות. 
            נכון לעכשיו, איננו מספקים שירותי גרירה לאופנועים, אך אנו זמינים לכל תקלת רכב אחרת.
          </p>
          <p className="text-lg mb-8">
            אם נתקעת עם הרכב שלך באזור אחוזה, אנו כאן כדי להעניק לך שירות מקצועי, מהיר ובמחירים הוגנים 24/7. 
            זקוקים לשירות נוסף? ניתן לבדוק גם <Link href="/areas/haifa-general/towing-service-bat-galim-haifa" className="underline font-bold">שירותי גרירה בבת גלים</Link> או <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="underline font-bold">חילוץ רכב מהבוץ בכרמל</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשר עכשיו
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירת רכב באחוזה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים באחוזה 24 שעות?</h3>
              <p>כן, אנו פעילים 24/7 באזור חיפה והסביבה למתן מענה מהיר לכל תקלה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים רכבים שנתקעו בבוץ בכרמל?</h3>
              <p>בהחלט. אנו מתמחים בחילוצי 4x4 ורכבים פרטיים מאזור הכרמל והסביבה. כנסו למידע נוסף על <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600">חילוץ רכבים מהבוץ בכרמל</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}