import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן!",
  description: "צריכים לפנות רכב ישן? קניית רכבים לפירוק בחיפה והקריות עם פינוי מיידי 24/7 ומחיר הוגן במקום. שירות מקצועי, מהיר ואמין. התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות קניית רכבים לפירוק בחיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$,$",
    "serviceType": "Scrap Car Removal",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    }
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
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן, מושבת או ללא טסט? אנחנו כאן בשבילכם 24/7 בחיפה ובכל אזור הקריות.</p>
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

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים לפירוק</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים: רכבים פרטיים, רכבים מסחריים ורכבי 4x4. השירות שלנו כולל הגעה מהירה לכל נקודה בחיפה ובקריות. אם אתם תקועים בדרכים, ניתן להיעזר בשירותינו גם למקרים כמו <Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="text-blue-600 underline">גרירת רכב בכביש 22</Link> או <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="text-blue-600 underline">גרר זול לרכב תקוע בקרית ים</Link>.</p>
        <p className="mb-4 font-semibold text-red-600">שימו לב: איננו מספקים שירותי גרירה או פינוי לאופנועים.</p>
        <p>התהליך פשוט: אתם מתקשרים, אנחנו מגיעים, מפנים את הרכב ומשלמים מחיר הוגן במקום.</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">האם אתם מפנים רכבים מכל אזור הקריות?</h3>
              <p>כן, אנו נותנים שירות מלא בכל אזור חיפה, הקריות, וכן מבצעים שירותי עזר כמו <Link href="/areas/haifa-general/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi" className="text-blue-600">קניית רכבים ישנים בקרית ים</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">כיצד נקבע המחיר לפירוק רכב?</h3>
              <p>המחיר נקבע בהתאם לסוג הרכב, מצבו המכני, והמשקל שלו. אנחנו מבטיחים מחיר הוגן ומהיר.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם מטפלים גם ברכבים תקועים בדרכים?</h3>
              <p>בעוד שאנו מתמקדים בפינוי רכבים לפירוק, אנו מציעים פתרונות נוספים לאזורים בעייתיים, כגון <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600">חילוץ רכב שנפל לתעלה בכביש 4</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}