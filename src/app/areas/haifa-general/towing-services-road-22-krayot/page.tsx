import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) | הגעה מהירה 24/7 – מחיר הוגן",
  description: "נתקעתם בכביש 22? אנו מספקים שירותי גרירה מקצועיים ומהירים 24/7 לכל סוגי הרכבים באזור הקריות. הגעה תוך זמן קצר, שקיפות במחיר ושירות אמין. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/towing-services-road-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה כביש 22 קריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8156",
      "longitude": "35.0653"
    },
    "priceRange": "$ - $$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים בכביש 22 עוקף קריות – חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? הצוות שלנו זמין עבורכם עם גרירה מקצועית ומחירים הוגנים בכביש 22 והסביבה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="קריות" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ מקצועיים בכביש 22</h2>
        <p className="mb-4">אנו מבינים את הלחץ שבהיתקעות בכביש מהיר כמו כביש 22. לכן, אנו מתחייבים להגעה מהירה וטיפול בטוח ברכבכם. בין אם מדובר ברכב פרטי או מסחרי, ניתן להיעזר בשירותנו גם עבור <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירה דחופה בכביש עוקף קריות</Link>.
        במידה ונתקעתם עם רכב חשמלי בשל התרוקנות מצבר, אנו מספקים גם <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">גרירת רכב חשמלי בכביש 22</Link>.</p>
        <p className="text-sm text-gray-600 italic">* שים לב: איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50 container mx-auto px-4 rounded-lg">
        <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">מהו זמן ההגעה הממוצע בכביש 22?</h4>
            <p>אנו משתדלים להגיע לכל קריאה בזמן הקצר ביותר. בזכות המיקום האסטרטגי שלנו, אנו נותנים מענה מהיר לאורך כל התוואי של כביש 22.</p>
          </div>
          <div>
            <h4 className="font-bold">האם אתם מציעים גרירה לאחר תאונה בצומת צ'ק פוסט?</h4>
            <p>כן, אנו ערוכים לכל סוגי החילוצים. למידע נוסף ניתן לעיין בעמוד <Link href="/areas/haifa-general/towing-after-accident-check-post-haifa" className="text-blue-600 underline">גרירה לאחר תאונה בצומת צ'ק פוסט</Link>.</p>
          </div>
          <div>
            <h4 className="font-bold">האם אתם רוכשים רכבים ישנים לפירוק באזור?</h4>
            <p>כן, אנו מבצעים רכישת רכבים בכל מצב. לקבלת הצעת מחיר ופינוי מיידי, בקרו בעמוד <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה והקריות</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}