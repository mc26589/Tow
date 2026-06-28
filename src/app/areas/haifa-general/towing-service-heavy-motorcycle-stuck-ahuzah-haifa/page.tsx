import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותי גרירה וחילוץ באחוזה חיפה | מחיר הוגן 24/7 | הגעה מהירה",
  description: "נתקעת באחוזה, חיפה? אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים, מסחריים ו-4x4. שירות מהיר, אמין ובמחיר הוגן. התקשרו עכשיו לפתרון מיידי!",
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
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה חיפה: רכבים פרטיים, מסחריים ו-4x4</h1>
          <p className="text-xl mb-8">נתקעת באזור אחוזה? צוות מקצועי בדרך אליך. מענה מהיר 24/7 לכל סוגי הרכבים.</p>
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
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה אמינים באזור אחוזה</h2>
        <p className="mb-4">
          אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח. אם נתקעת בדרכים עם רכב תקול, אנו מציעים שירות מקצועי. 
          למידע נוסף על חילוצי שטח, ניתן לעיין ב- <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-600 underline">חילוץ רכב תקוע בבוץ באזור הכרמל</Link> או ב-<Link href="/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university" className="text-blue-600 underline">חילוץ 4x4 ביערות הכרמל</Link>.
        </p>
        <p className="font-semibold text-red-600 mb-4">
          לידיעתך: אנו מתמקדים ברכבים ואיננו מספקים שירותי גרירה לאופנועים או דו-גלגלי. 
          לבעלי דו-גלגלי, מומלץ לבדוק <Link href="/areas/haifa-general/heavy-motorcycle-towing-freud-haifa-price" className="text-blue-600 underline">מחיר גרירת אופנוע כבד בחיפה</Link>.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים חשמליים?</h3>
              <p>כן, אנו נותנים מענה למגוון רכבים. לבעלי רכבים חשמליים שנתקעו, ניתן לקרוא על <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">שירותי גרירת רכב חשמלי באחוזה</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו זמן ההגעה לאזור אחוזה?</h3>
              <p>אנו שואפים להגיע במהירות המקסימלית לכל קריאה באחוזה והסביבה. שירות הוגן ומהיר הוא בראש סדר העדיפויות שלנו.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}