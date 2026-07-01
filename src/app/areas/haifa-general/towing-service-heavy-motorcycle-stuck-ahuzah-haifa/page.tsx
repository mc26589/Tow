import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב באחוזה, חיפה - שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעת באחוזה, חיפה? אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים ומסחריים. הגעה מהירה, אמינות ללא פשרות ומחיר הוגן. צריכים עזרה בדרך? התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-heavy-motorcycle-stuck-ahuzah-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa",
    "priceRange": "₪₪",
    "serviceType": ["Car Towing", "Emergency Roadside Assistance", "4x4 Recovery"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה חיפה: מענה מהיר לרכב תקוע</h1>
          <p className="text-xl mb-8">נתקעת בדרך באזור אחוזה? הצוות המקצועי שלנו זמין עבורך 24/7. גרירת רכבים, מסחריים ו-4x4 במקצועיות ובמחיר הוגן.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירות גרירה מקצועי באחוזה והסביבה</h2>
        <p className="mb-4">
          התקעות עם רכב באזור הכרמל יכולה להיות מתסכלת, במיוחד באזור צפוף כמו אחוזה. אנו מתמחים בחילוץ רכבים מכל סוג. אם נתקעת בדרכך ליערות הכרמל, ניתן להיעזר במידע על <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-600 underline">חילוץ רכב מבוץ ביערות הכרמל</Link> או <Link href="/areas/haifa-general/emergency-tow-stuck-car-stella-maris-haifa-hills" className="text-blue-600 underline">חילוץ רכב תקוע באזור סטלה מאריס</Link>.
        </p>
        <p className="font-semibold text-red-600 mb-4">
          לידיעתך: אנו מתמחים בגרירת רכבים ואיננו מספקים שירותי גרירה לדו-גלגלי. למידע על גרירת אופנועים ניתן לבדוק <Link href="/areas/haifa-general/heavy-motorcycle-towing-check-post-highway-22" className="text-blue-600 underline">שירותי גרירת אופנוע כבד באזור צומת הצ'ק פוסט</Link>.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים חשמליים?</h3>
              <p>כן, אנו ערוכים לטיפול וגרירה של כל סוגי הרכבים, כולל רכבים חשמליים והיברידיים. סובל מתקלה חשמלית? אנו זמינים לסיוע.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו זמן ההגעה המשוער לאחוזה?</h3>
              <p>בשל הקרבה שלנו לאזור המרכז של חיפה, אנו שואפים להגיע לכל קריאה באחוזה במינימום זמן. השירות שלנו כולל גם <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600 underline">גרירה 24/7 במחיר הוגן</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}