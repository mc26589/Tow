import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בכביש 4 ליד קריית מוצקין - 24/7 חילוץ מהיר וזול",
  description: "נתקעתם בכביש 4 ליד קריית מוצקין? זקוקים לגרר מהיר? אנו מספקים שירותי גרירה מקצועיים 24/7, הגעה תוך 30 דקות ומחיר הוגן. לחצו כאן לחילוץ מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-service-breakdown-route-4-near-kiryat-motzkin"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$$,$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0750"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ בכביש 4 ליד קריית מוצקין</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב בכביש 4? אנו זמינים עבורכם 24 שעות ביממה עם שירות גרירה מקצועי ומיומן. אנו מתמחים בחילוץ רכבים פרטיים ומסחריים קלים. זקוקים לשירות נוסף באזור? אנו ממליצים על <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="underline">שירותי גרירה זולים בקריית מוצקין</Link> הזמינים לכם לכל אורך האזור.
            <br /><strong>שימו לב: שירותינו מיועדים לרכבים פרטיים ומסחריים בלבד.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קריית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בשירותי הגרירה שלנו?</h2>
          <ul className="space-y-4">
            <li>✓ זמינות 24/7 לכל קריאה בכביש 4 ובאזור הקריות</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח</li>
            <li>✓ פתרונות מהירים לנהגים עם <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-400">שירותי גרירה במחיר משתלם בצק פוסט</Link></li>
            <li>✓ שירות מקצועי עבור <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-400">גרירת חירום בכביש 22 עוקף קריות</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 4</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מהו זמן ההגעה הממוצע בכביש 4 ליד קריית מוצקין?</h3>
              <p>אנו מגיעים לכל קריאה באזור בתוך כ-30 דקות בממוצע, בהתאם לעומסי התנועה בצירים הראשיים של אזור הקריות.</p>
            </div>
            <div>
              <h3 className="font-bold">מה לעשות אם הרכב שבק חיים והוא גורם לעיכוב בתנועה?</h3>
              <p>יש להפעיל אורות מהבהבים ולצאת בבטחה מהרכב לכיוון מעקה הבטיחות. במידה ומדובר ברכב ישן, אנו מציעים גם שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-600">פינוי רכבים לפירוק בחיפה והקריות</Link> הכוללים גרירה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מספקים פתרונות גרירה גם לבעיות שטח?</h3>
              <p>כן, במקרה של רכבי 4x4 שנתקעו בבוץ, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/4x4-mud-rescue-carmel" className="text-blue-600">חילוץ רכבי שטח מהבוץ בכרמל</Link> המקצועיים שלנו.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}