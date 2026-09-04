import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי במזומן 24/7",
  description: "צריכים לפנות רכב ישן או תקול? אנחנו קונים רכבים לפירוק בחיפה והקריות עם פינוי מיידי, שירות מהיר ומחיר הוגן. התקשרו עכשיו לפינוי הרכב שלכם!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי רכבים לפירוק חיפה והקריות",
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
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו קונים רכבים מכל הסוגים, מגיעים עד אליכם בפריסה ארצית מהירה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מקצועי באזור הצפון</h2>
        <p className="mb-4">
          אנו מתמחים בקניית רכבים לפירוק בחיפה והקריות. אם הרכב שלכם עומד ללא שימוש, עבר תאונה או שאינו עובר טסט, אנו נגיע עד אליכם לפינוי מיידי.
          השירות שלנו מאפשר לכם להיפטר מרכבים תקועים במהירות. אם אתם זקוקים לשירותי גרירה נוספים באזור, ראו גם את השירות שלנו ל- 
          <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="text-blue-600 underline">גרר זול לרכב תקוע בקרית ים</Link> או 
          <Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="text-blue-600 underline">גרירת רכב תקוע בכביש 22</Link>.
        </p>
        <p className="font-semibold text-red-600">
          לתשומת לבכם: אנו לא מטפלים באופנועים. השירות מיועד לרכבים בעלי 4 גלגלים ומעלה בלבד.
        </p>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים לפירוק</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם מפנים רכבים מכל סוג?</h3>
              <p>כן, אנו קונים רכבים פרטיים, מסחריים ו-4x4. שימו לב: אנו לא מספקים שירותי <Link href="/areas/haifa-general/motorcycle-towing-road-22-krayot" className="text-blue-600 underline">גרירת אופנועים</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>אנו מתחייבים לשירות מהיר ואמין בכל רחבי חיפה והקריות, תוך תיאום מראש בהתאם למיקומכם.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}