import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בקרית מוצקין - שירות מהיר ומחיר הוגן | זמינות 24/7",
  description: "נתקעתם עם הרכב בקרית מוצקין? גרר מקצועי במחיר הוגן ושירות מהיר 24/7. הגעה מהירה לכל אזור בקריות. לחצו כאן לייעוץ והזמנת גרר עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בקריות",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0705"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בקרית מוצקין מחיר הוגן</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם עם הרכב? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחיר הוגן לתושבי קרית מוצקין והסביבה. 
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח. 
            שימו לב: השירות אינו כולל גרירת אופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות 24/7 לכל קריאה בקרית מוצקין</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות</li>
            <li>✓ צוות מיומן ומקצועי עם ציוד חדיש</li>
            <li>✓ התמחות ברכבים פרטיים, מסחריים ו-4x4</li>
          </ul>
          <p className="text-sm text-gray-400">
            זקוקים לשירותים נוספים באזור? עברו למידע על <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-400 underline">גרירה בדרכים מרכזיות באזור הקריות</Link> או <Link href="/areas/haifa-general/cheap-small-car-towing-kiryat-motzkin-nave-ganim" className="text-blue-400 underline">גרירת רכבים קטנים בשכונות קרית מוצקין</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירת רכב בקרית מוצקין</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לגרר להגיע בקרית מוצקין?</h3>
              <p>אנו משתדלים להגיע לכל קריאה בתוך זמן קצר ככל הניתן, בדרך כלל תוך 30-45 דקות בהתאם לעומסי התנועה באזור הקריות.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מבצעים גרירה גם מחוץ לקרית מוצקין?</h3>
              <p>כן, אנו מעניקים שירותי גרירה לכל אזור חיפה והקריות, כולל סיוע לנהגים שנתקעו בכבישים בין-עירוניים הסמוכים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם המחיר כולל חילוץ מהשטח?</h3>
              <p>אנחנו מתמחים בחילוץ רכבים סטנדרטיים. אם מדובר ברכב שקוע בבוץ או חול, מומלץ לבדוק את השירותים שלנו כגון <Link href="/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot" className="text-blue-600 underline">חילוץ רכבי שטח מהחוף</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}