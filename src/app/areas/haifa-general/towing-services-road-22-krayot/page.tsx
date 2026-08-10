import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בכביש 22 קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22 (עוקף קריות)? שירותי גרירה מקצועיים 24/7. הגעה מהירה, מחיר הוגן ושירות לכל סוגי הרכבים. התקשרו עכשיו לקבלת סיוע מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/towing-services-road-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות - כביש 22",
    "areaServed": { "@type": "Place", "name": "כביש 22, קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" },
    "priceRange": "$-$$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים בכביש 22 (עוקף קריות) - 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בכביש 22? אנו מספקים שירותי גרירה מקצועיים ומחולצים לכל אורך עוקף קריות והסביבה. 
            בין אם אתם צריכים גרירה למרכז העיר או זקוקים ל- <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="underline">סיוע דחוף באזור צ'ק פוסט</Link>, אנחנו כאן בשבילכם.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ זמינות מלאה 24/7 לכל אורך כביש עוקף קריות.</li>
          <li>✓ ציוד גרירה חדיש המתאים לרכבים פרטיים, מסחריים ו-4x4.</li>
          <li>✓ שירות בפריסה רחבה הכולל גם <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 underline">גרירה בקרית ביאליק</Link> והסביבה.</li>
          <li>✓ שירות אדיב ומקצועי במחירים הוגנים ללא הפתעות.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">שאלות נפוצות</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לכביש 22?</h3>
                    <p>אנו משתדלים להגיע לכל נקודה בכביש 22 תוך זמן קצר ככל האפשר בהתאם לעומסי התנועה באזור הקריות.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">האם אתם גוררים רכבי שטח שנתקעו?</h3>
                    <p>כן, אנו מומחים בחילוץ וגרירה. אם נתקעתם בדרכי עפר ליד האזור, ייתכן שתרצו להציץ גם ב-<Link href="/areas/haifa-general/4x4-vehicle-stuck-in-mud-carmel-forest" className="text-blue-600 underline">שירותי חילוץ 4x4 שלנו</Link>.</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}