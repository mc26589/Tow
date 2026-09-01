import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי 24/7 | מחיר הוגן",
  description: "צריכים פינוי רכב ישן? קונה רכבים לפירוק בחיפה והקריות. שירות מהיר, תשלום במזומן ופינוי מיידי עד הבית 24/7. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": ["Haifa", "Kiryat Ata", "Kiryat Bialik", "Kiryat Motzkin", "Kiryat Yam"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    }
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
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן לשירותכם 24/7 עם מענה מהיר ומקצועי בכל אזור חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מהיר ואמין באזורכם</h2>
        <p className="mb-4">אנו מתמחים ב-<Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה והקריות</Link>. אם הרכב שלכם עומד ללא שימוש, תופס מקום או שאינו כשיר לנסיעה, אנו נגיע עד אליכם לפינוי מיידי במחיר הוגן.</p>
        <p className="mb-4">זקוקים לעזרה בדרכים? אנו מציעים גם שירותי גרירה מקצועיים כמו <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">גרירה בצומת הצ'ק פוסט</Link> ובכל רחבי האזור.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>פינוי מיידי ללא עיכובים מיותרים.</li>
          <li>הצעת מחיר הוגנת ומזומן במקום עבור הרכב שלכם.</li>
          <li>שירות מקצועי בפריסה רחבה: חיפה, קרית אתא, קרית ביאליק, קרית מוצקין וקרית ים.</li>
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-xl mt-12">
          <h3 className="text-2xl font-bold mb-6">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">באילו אזורים אתם פועלים?</h4>
              <p>אנו מספקים שירותי פינוי רכבים בכל חיפה, הקריות, וכן מתמחים בשירותי דרך ב-<Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">צ'ק פוסט חיפה</Link>.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם קונים כל רכב?</h4>
              <p>אנו קונים רכבים פרטיים, רכבים מסחריים ורכבי 4x4. איננו מספקים שירותי פינוי או גרירה לאופנועים.</p>
            </div>
            <div>
              <h4 className="font-bold">כמה זמן לוקח הפינוי?</h4>
              <p>אנו מתחייבים להגעה מהירה ככל הניתן בהתאם לעומסי התנועה באזור הקריות וחיפה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}