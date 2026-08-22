import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בכביש 22 קריות | חילוץ מהיר 24/7 – מחיר הוגן",
  description: "נתקעתם בכביש 22? שירותי גרירה מקצועיים ומהירים לאזור הקריות וחיפה. מחירים הוגנים, צוות מיומן והגעה תוך זמן קצר. התקשרו עכשיו לחילוץ!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? הצוות שלנו בדרך אליכם עם שירות גרירה אמין ומחירים הוגנים.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">אנו מבינים את הלחץ שבהיתקעות בכביש מהיר כמו כביש 22. לכן, אנו מתחייבים להגעה מהירה וטיפול בטוח ברכבכם. אם אתם מחפשים <Link href="/areas/haifa-general/towing-stuck-vehicle-road-22-haifa" className="text-blue-600 underline">גרר לרכב תקוע בכביש 22</Link>, אנו כאן לשירותכם עבור רכבים פרטיים, מסחריים ורכבי 4x4.</p>
        <p className="text-sm text-gray-600 italic">* שים לב: איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50 container mx-auto px-4 rounded-lg">
        <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</h4>
            <p>אנו משתדלים להגיע לכל קריאה בכביש 22 ובאזור הקריות בזמן הקצר ביותר, בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h4 className="font-bold">מה עושים במקרה של תאונה בכביש 22?</h4>
            <p>במקרה של תאונה, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600 underline">חילוץ לאחר תאונה בצומת צ'ק פוסט</Link> והסביבה.</p>
          </div>
          <div>
            <h4 className="font-bold">האם אתם קונים רכבים לפירוק?</h4>
            <p>כן, אנו מציעים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-krayot-immediate-removal" className="text-blue-600 underline">פינוי רכבים לפירוק בקריות</Link> ללא עיכובים מיותרים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}