import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22? שירותי גרירה מקצועיים 24/7. הגעה תוך 30 דקות, מחיר הוגן וצוות אמין לכל סוגי הרכבים. התקשרו עכשיו לחילוץ מהיר מהכביש!",
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
          <p className="text-xl mb-8">נתקעתם בדרך המהירה? הצוות שלנו זמין עבורכם עם גרירה מקצועית ומחירים הוגנים בכביש 22 והסביבה.</p>
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
        <p className="mb-4">אנו מבינים את הלחץ שבהיתקעות בכביש מהיר כמו כביש 22. לכן, אנו מתחייבים להגעה מהירה וטיפול בטוח ברכבכם. אנו מציעים מגוון פתרונות, כולל <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-600 underline">גרירה במשאית גרר לעבודה נקייה בכביש 22</Link> ושירותי <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">גרירה לאחר תאונה בכביש 22</Link>. צוות הגרר שלנו מיומן בחילוץ מהיר שיחזיר אתכם לשגרת היום ללא עיכובים מיותרים.</p>
      </section>

      <section className="py-12 bg-gray-50 container mx-auto px-4 rounded-lg">
        <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg">מהו זמן ההגעה הממוצע בכביש 22?</h4>
            <p>הצוותים שלנו מפוזרים בנקודות אסטרטגיות ליד צמתים מרכזיים בכביש 22, מה שמאפשר לנו להגיע אליכם בזמן קצר מאוד מרגע הקריאה.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">האם אתם נותנים שירות גם במקרים של תאונות דרכים?</h4>
            <p>בהחלט. אנו ערוכים לכל סוגי החילוצים, כולל גרירה דחופה לאחר תאונה. למידע נוסף ניתן לעיין בעמוד <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600 underline">גרירה לאחר תאונה בצומת צ'ק פוסט</Link>.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">מה עושים אם הרכב מושבת לגמרי?</h4>
            <p>במקרים של רכב מושבת או רכב ישן שלא שווה לתקן, אנו מספקים גם שירותי <Link href="/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק באזור הקריות</Link> עם פינוי מיידי מהמקום.</p>
          </div>
        </div>
      </section>
    </main>
  );
}