import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה 24/7 | שירות מהיר ומחיר הוגן",
  description: "נתקעתם עם הרכב באחוזה? שירות גרירה מהיר ומקצועי 24/7. מחיר הוגן, הגעה מהירה לכל שכונת אחוזה והסביבה. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-private-car-towing-ahuza-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "serviceArea": { "@type": "Place", "name": "שכונת אחוזה, חיפה" },
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7858", "longitude": "34.9875" },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב פרטי זול בשכונת אחוזה חיפה עכשיו</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באחוזה? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים קלים. 
            השירות שלנו זמין 24 שעות ביממה, 7 ימים בשבוע, במחירים הוגנים ושירות ללא פשרות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה באחוזה?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✅ <strong>זמינות מיידית:</strong> הגעה מהירה לכל נקודה בשכונת אחוזה והסביבה.</li>
          <li>✅ <strong>מחיר הוגן:</strong> שירות גרירה במחיר משתלם ללא הפתעות.</li>
          <li>✅ <strong>מקצועיות:</strong> צוות מיומן המטפל ברכב שלכם בזהירות ובבטיחות.</li>
          <li>✅ <strong>כיסוי רחב:</strong> שירות לרכבים פרטיים ורכבי שטח. אם נתקעתם באזור יערות הכרמל, זכרו כי אנו מציעים גם <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="text-blue-600 underline">שירותי חילוץ שטח בדניה</Link>.</li>
        </ul>

        <div className="border-t pt-8">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה באחוזה</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לכם להגיע לאחוזה?</p>
              <p>ברוב המקרים, הצוות שלנו מגיע תוך 30-45 דקות, בהתאם לעומסי התנועה באזור.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים גם לרשת צירים מרכזיים?</p>
              <p>כן, אנו נותנים מענה גם באזור הצ'ק פוסט, למידע נוסף ראו <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">שירותי גרירה זולים בצ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-600">
          *שימו לב: אנו מתמחים בגרירת רכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי גרירה לאופנועים. אם אתם זקוקים לשירות אחר, ניתן לבדוק גם <Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles" className="text-blue-600 underline">שירותי חילוץ נוספים באחוזה</Link>.
        </p>
      </section>
    </main>
  );
}