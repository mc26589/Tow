import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בקרית ים 24/7 | שירות גרר משטח מהיר ומחיר הוגן",
  description: "נתקעתם עם הרכב בקרית ים? גרר משטח מקצועי 24/7 לרכבים תקולים במחיר משתלם. הגעה מהירה לכל הקריות. התקשרו עכשיו להצעת מחיר אטרקטיבית!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-flatbed-towing-kiryat-yam-disabled-vehicle",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Kiryat Yam",
    "priceRange": "₪₪",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8358",
      "longitude": "35.0714"
    },
    "serviceType": "Flatbed Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרירת רכב תקול בקרית ים: שירות גרר משטח מקצועי</h1>
          <p className="text-lg md:text-xl mb-8">צריכים גרר בקרית ים? אנחנו כאן 24/7. שירות מהיר, אמין ומחיר הוגן לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold text-lg">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
            <WhatsAppCTA cityName="קרית ים" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2>שירות גרירת רכב תקול בקרית ים – מענה מהיר ומקצועי</h2>
        <p className="mb-4">אם נתקעתם עם הרכב, שירות גרירת המשטח שלנו מבטיח הובלה בטוחה לכל יעד. אנו נותנים מענה רחב לתושבי הקריות, כולל <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-600 underline">affordable flatbed towing route 22 krayot area</Link>. זקוקים לחילוץ דחוף מחוץ לקרית ים? אנו מספקים גם <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">affordable car breakdown towing check post haifa krayot</Link>.</p>
        
        <h3>למה לבחור בנו?</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>זמינות מלאה 24/7 לכל תושבי קרית ים.</li>
          <li>ציוד מתקדם: גרירת משטח השומרת על שלדת הרכב.</li>
          <li>מחיר הוגן ושקיפות מלאה ללא הפתעות.</li>
          <li>צוותים מקצועיים עם ניסיון רב בחילוץ רכבים תקולים.</li>
        </ul>

        <p><em>שים לב: השירות שלנו מתמקד ברכבים פרטיים ומסחריים. במידה והרכב שלכם ישן ואינו ראוי לנסיעה, ניתן לבדוק אפשרויות של <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-towing" className="text-blue-600 underline">car scrapping haifa krayot towing</Link> או <Link href="/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין" className="text-blue-600 underline">פינוי רכב גרוטאה לחלפים קריית מוצקין</Link>.</em></p>

        <section className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירת רכב בקרית ים</h3>
          <dl className="space-y-4">
            <div>
              <dt className="font-bold">האם אתם מספקים שירותי גרירה בקרבת ציר 22?</dt>
              <dd>כן, אנו פעילים בפריסה רחבה לאורך כל הקריות ומספקים מענה מהיר בדרכים הראשיות.</dd>
            </div>
            <div>
              <dt className="font-bold">מה עושים אם נתקעתי עם הרכב בשבת?</dt>
              <dd>אנו זמינים 24/7, כולל שבתות וחגים, כדי לתת לכם שקט נפשי בכל זמן.</dd>
            </div>
            <div>
              <dt className="font-bold">האם המחיר כולל מע״מ?</dt>
              <dd>המחיר שניתן בטלפון הוא שקוף והוגן. התקשרו אלינו לקבלת הצעת מחיר מדויקת בהתאם למיקום וסוג הרכב.</dd>
            </div>
          </dl>
        </section>
      </section>
    </main>
  );
}