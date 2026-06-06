import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "גרר תאונה כביש 22 צ'ק פוסט קריות | הגעה מהירה 24/7",
  description: "נתקעתם בכביש 22 או בצ'ק פוסט? שירותי גרירה וחילוץ מקצועיים לאחר תאונה זמינים עבורכם 24/7. מחיר הוגן ושירות מהיר. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/accident-towing-road-22-check-post-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0350" },
    "priceRange": "$",
    "serviceType": "Accident Towing and Roadside Assistance"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר תאונה כביש 22 צ'ק פוסט קריות – שירות חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? זקוקים לפינוי מהיר מהצ'ק פוסט? אנחנו כאן בשבילכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים לאחר תאונה</h2>
        <p className="mb-4">
          אנו מספקים שירותי גרירה וחילוץ לכל סוגי הרכבים הפרטיים והמסחריים שנתקעו באזור כביש עוקף קריות (כביש 22) וצומת צ'ק פוסט. 
          למי שמחפש פתרונות נוספים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-400 underline">שירותי גרירה בחיפה</Link> או 
          <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-400 underline"> גרירה וחילוץ מהצ'ק פוסט</Link>.
        </p>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 my-8">
          <h3 className="text-2xl font-semibold mb-4">חשוב לדעת</h3>
          <ul className="list-disc pr-5 space-y-2">
            <li>זמינות מלאה 24/7 לכל אזור חיפה והקריות.</li>
            <li>התמחות בפינוי רכבים לאחר תאונות בדרכים מהירות.</li>
            <li>מחירים הוגנים ושירות אדיב.</li>
            <li><strong>הערה:</strong> איננו מספקים שירותי גרירה לאופנועים.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">תוך כמה זמן תגיעו לצ'ק פוסט?</h4>
              <p>הצוות שלנו פרוס באזור חיפה והקריות ומבצע הגעה מהירה ככל הניתן בהתאם לעומסי התנועה בציר 22.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">האם אתם גוררים רכבים מסחריים?</h4>
              <p>כן, אנו מספקים פתרונות גרירה גם לרכבים מסחריים ופרטיים, למעט אופנועים.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}