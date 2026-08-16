import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ותשלום במזומן",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? פינוי מהיר תוך זמן קצר, מחיר הוגן ותשלום במקום. שירות 24/7 לכל סוגי הרכבים. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן בשבילכם 24/7 עם שירות מהיר, אמין ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים לפירוק ללא עיכובים</h2>
          <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים: רכבים פרטיים, רכבים מסחריים ורכבי שטח. אם אתם מחפשים <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-600 underline">קונה רכבים לפירוק באזור חיפה והקריות</Link>, הגעתם למקום הנכון. חשוב לציין: אנו לא מטפלים באופנועים.</p>
          <p className="mb-4">השירות שלנו כולל הגעה לכל אזור חיפה והקריות, פינוי הרכב באמצעות גרר מקצועי ותשלום הוגן במקום. אם הרכב שלכם מושבת עקב תאונה, ניתן גם לבחון אפשרות ל<Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="text-blue-600 underline">מכירת רכב פגוע לחלפים</Link>.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים לפירוק</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">באילו אזורים אתם פועלים?</h4>
              <p>אנו מעניקים שירות פינוי רכבים בכל אזור חיפה, הקריות, ציר כביש 22 וסביבתם הקרובה.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם קונים כל סוג רכב?</h4>
              <p>אנו קונים רכבים פרטיים ומסחריים ללא תנועה או ישנים. איננו עוסקים בפינוי אופנועים.</p>
            </div>
            <div>
              <h4 className="font-bold">כמה זמן לוקח הפינוי?</h4>
              <p>אנו שואפים להגעה מהירה ככל הניתן. לתיאום פינוי דחוף באזור <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-600 underline">קרית ביאליק</Link> או חיפה, התקשרו אלינו.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}