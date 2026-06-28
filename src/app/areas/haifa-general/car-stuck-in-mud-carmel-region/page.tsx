import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? אנו מספקים שירותי חילוץ מקצועיים לרכבי שטח ופרטיים. זמינות 24/7, ציוד חילוץ מתקדם ומחיר הוגן. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car recovery from mud and off-road towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם. חילוץ מהיר, בטוח ומקצועי לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח באזור הכרמל</h2>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים, רכבי שטח (4x4) ורכבים מסחריים ששקעו בבוץ. חשוב להדגיש: אנו לא מספקים שירותי חילוץ או גרירה לאופנועים. אם אתם מחפשים <Link href="/areas/haifa-general/4x4-stuck-mud-rescue-carmel-forest-haifa" className="text-blue-600 font-bold underline">חילוץ 4x4 ביערות הכרמל</Link> או בסביבת <Link href="/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university" className="text-blue-600 font-bold underline">אוניברסיטת חיפה</Link>, הגעתם למקום הנכון.</p>
        <p>הצוות שלנו מכיר היטב את דרכי העפר והשטחים הבוציים של הכרמל. אנו מגיעים עם ציוד ייעודי לחילוץ עדין שמונע נזקים לשלדת הרכב. המחירים שלנו הוגנים ושקופים – צרו קשר לקבלת הצעת מחיר בטלפון.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ בבוץ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">כמה זמן לוקח לכם להגיע לחילוץ בבוץ?</h3>
              <p>באזור הכרמל והסביבה אנו משתדלים להגיע תוך 30-45 דקות, בהתאם לעומסי התנועה ותנאי השטח.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם מחלצים רכבי שטח ו-4x4?</h3>
              <p>כן, אנו מומחים בחילוץ רכבי שטח. ניתן לקרוא עוד על <Link href="/areas/haifa-general/4x4-stuck-in-mud-stella-maris-haifa" className="text-blue-600">חילוץ 4x4 באזור סטלה מאריס</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}