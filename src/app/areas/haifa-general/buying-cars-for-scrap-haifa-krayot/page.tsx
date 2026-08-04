import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מהיר ומזומן - 24/7",
  description: "רוצים למכור רכב ישן או תקול? אנו קונים רכבים לפירוק בחיפה והקריות במחיר הוגן! פינוי וגרירה ללא עלות. שירות מקצועי ומהיר - התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/buying-cars-for-scrap-haifa-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main className="bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק באזור חיפה והקריות</h1>
        <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנחנו כאן בשבילכם 24/7 עם שירות מקצועי, מהיר והוגן.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <WhatsAppCTA cityName="Haifa and Krayot" />
          <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 transition">
            התקשרו עכשיו לקבלת הצעת מחיר
          </a>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ שירות מהיר בכל אזור חיפה, הקריות והסביבה.</li>
          <li>✓ תשלום הוגן ומיידי עבור הרכב שלכם.</li>
          <li>✓ פינוי וגרירה ללא עלות נוספת.</li>
          <li>✓ טיפול מקצועי ברכבים פרטיים, מסחריים ורכבי 4x4.</li>
        </ul>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-2xl font-bold mb-4">זקוקים לשירותים נוספים באזור?</h3>
          <p className="mb-4">מעבר לפירוק רכבים, אנו מציעים מגוון פתרונות גרירה וחילוץ:</p>
          <ul className="list-disc list-inside space-y-2 text-blue-400">
            <li><Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup">מכירת רכב פגום לפירוק בחיפה</Link></li>
            <li><Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included">פינוי רכבים לפירוק כולל גרירה</Link></li>
            <li><Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot">שירותי גרירה במקרה של תקלה בצ'ק פוסט</Link></li>
          </ul>
        </div>

        <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-6">שאלות נפוצות</h2>
            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-xl">האם אתם קונים כל סוג של רכב?</h4>
                    <p>אנו מתמחים ברכבים פרטיים ומסחריים. איננו מטפלים באופנועים.</p>
                </div>
                <div>
                    <h4 className="font-bold text-xl">האם הפינוי כולל גרירה?</h4>
                    <p>בהחלט, אנחנו מספקים שירותי פינוי וגרירה בחינם כחלק מעסקת הפירוק.</p>
                </div>
            </div>
        </div>

        <p className="mt-8 text-slate-400">
          *חשוב לציין: אנו מתמחים בפירוק רכבים פרטיים ומסחריים בלבד.
        </p>
      </section>
    </main>
  );
}