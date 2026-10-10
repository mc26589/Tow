import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת הארלי דייווידסון בקניון חיפה? מצא שירות גרירה מקצועי | 24/7",
  description: "נתקעת עם האופנוע ליד קניון חיפה? גלה את השירותים הרלוונטיים באזור והיכן ניתן למצוא גרירה מקצועית לאופנועים. לחץ כאן לייעוץ מהיר ושירות זמין.",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-harley-davidson-haifa-grand-canyon"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ בחיפה",
    "areaServed": "Haifa",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ בחיפה: מידע חשוב עבור אופנועי הארלי דייווידסון
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת ליד קניון חיפה? אנו מספקים מענה מקצועי לרכבים פרטיים ומסחריים. במידה ואתה מחפש סיוע לאופנוע, חשוב לבחור במומחים המתאימים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold">
              חיוג מהיר למוקד
            </a>
            <WhatsAppCTA cityName="חיפה" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">מדוע חשוב לבחור בשירות מותאם לאופנוע?</h2>
        <p className="mb-4">
          גרירת אופנוע מסוג הארלי דייווידסון דורשת ציוד עיגון מיוחד וניסיון רב. אנו מתמחים בחילוץ רכבים ורכבי שטח, אך עבור דו-גלגלי אנו ממליצים לפנות לשירותים ייעודיים כמו <Link href="/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa" className="text-blue-600 underline">גרירת אופנועים כבדים באחוזה</Link> או לבדוק אפשרויות נוספות עבור <Link href="/areas/haifa-general/heavy-motorcycle-breakdown-towing-route-22-check-post-haifa" className="text-blue-600 underline">גרירת אופנוע כבד בצק פוסט</Link> כדי להבטיח את שלמות הכלי שלך.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה באזור חיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">האם אתם מציעים שירותי חילוץ נוספים באזור חיפה?</h3>
              <p>כן, אנו מטפלים במגוון מקרים, החל מ- <Link href="/areas/haifa-general/emergency-car-rescue-mud-carmel-forest" className="text-blue-600 underline">חילוץ רכב תקוע בבוץ בכרמל</Link> ועד <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">שירותי גרירה במחיר הוגן בצק פוסט</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה לעשות אם האופנוע נתקע ליד אזור הקניון?</h3>
              <p>מומלץ לוודא שימוש בגרר פלטה המותאם לאופנועים, במיוחד כאשר מדובר באופנועי קאסטום כבדים. הימנעו מניסיונות גרירה עצמאיים העלולים לגרום לנזק לשלדת האופנוע.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}