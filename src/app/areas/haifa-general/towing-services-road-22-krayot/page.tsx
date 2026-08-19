import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) - הגעה מהירה ב-30 דקות",
  description: "נתקעתם בכביש 22 (עוקף קריות)? שירותי גרירה מקצועיים 24/7. הגעה מהירה, מחיר הוגן ושירות לכל סוגי הרכבים. התקשרו עכשיו להזמנת גרר!",
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
            נתקעתם עם הרכב בכביש 22? אנו מספקים שירותי גרירה מקצועיים ומהירים לכל אורך עוקף קריות והסביבה. 
            זקוקים ל-<Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="underline font-semibold">עזרה דחופה בכביש 22?</Link> הצוות שלנו זמין עבורכם מסביב לשעון.
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
        <h2 className="text-3xl font-bold mb-6">למה לבחור בשירות הגרירה שלנו בכביש 22?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ זמינות מלאה 24/7 לכל אורך ציר עוקף קריות.</li>
          <li>✓ הגעה מהירה לרכבים תקועים כולל <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת רכבים חשמליים בכביש 22</Link>.</li>
          <li>✓ ניסיון רב בחילוץ רכבים פרטיים ומסחריים ללא נזק.</li>
          <li>✓ שירות אמין במחיר הוגן המותאם לתושבי הקריות והסביבה.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לעוקף קריות?</h3>
                    <p>אנו מבינים את הדחיפות בעצירה בכביש מהיר. לרוב נגיע לכל נקודה בכביש 22 תוך כ-30 דקות, בהתאם לעומסי התנועה באזור הקריות.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">האם אתם נותנים שירות גם לרכבים חשמליים שנתקעו?</h3>
                    <p>כן, יש לנו ניסיון רב ב-<Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">גרירת רכבים חשמליים בכביש 22</Link> תוך שמירה על הנחיות היצרן.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">האם אתם מבצעים גרירה גם באזורי תעשייה קרובים?</h3>
                    <p>בהחלט. אנו מספקים מענה גם ל-<Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-600 underline">גרירה באזור התעשייה של קרית ביאליק</Link> ובכל מפרץ חיפה.</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}