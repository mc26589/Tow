import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת הארלי דייווידסון בחיפה - שירות מקצועי ליד הקניון | 24/7",
  description: "נתקעת עם האופנוע ליד קניון חיפה? זקוק לגרר לאופנועים כבדים? אנו מספקים שירותי גרירה מקצועיים ומהירים בחיפה. חייגו עכשיו לייעוץ ללא עלות!",
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
            שירותי גרירה וחילוץ בחיפה: פתרונות לאופנועים כבדים
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת ליד קניון חיפה? אופנוע כבד דורש מומחיות וציוד עיגון מיוחד. אל תסתכן בנזק לשילדה - הזמן שירות גרר מקצועי שיודע איך לטפל בכלים יקרים.
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
        <h2 className="text-2xl font-bold mb-4">מדוע לבחור בשירות גרירה מותאם לאופנוע?</h2>
        <p className="mb-4">
          גרירת אופנועי הארלי דייווידסון או אופנועים כבדים אחרים דורשת ניסיון רב במניעת תזוזות. אנו ממליצים תמיד לבדוק את זמינות השירותים שלנו כמו 
          <Link href="/areas/haifa-general/heavy-motorcycle-towing-service-ahuzah-haifa-now" className="text-blue-600 underline"> גרירת אופנועים כבדים באחוזה</Link> או 
          <Link href="/areas/haifa-general/heavy-motorcycle-flat-tire-towing-ahuza-haifa" className="text-blue-600 underline"> טיפול בפנצ'ר לאופנוע כבד באחוזה</Link> 
          כדי להבטיח את הגעת האופנוע ליעדו ללא שריטות.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה וחילוץ בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">מה עושים אם נתקעתי עם אופנוע ליד הצק פוסט?</h3>
              <p>במידה ונתקעת ליד הצק פוסט, ניתן להזמין 
                <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-600 underline"> שירותי גרירה במחיר הוגן בצק פוסט</Link>.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מטפלים גם בחילוצי שטח בחיפה?</h3>
              <p>כן, אנו מבצעים חילוצים מורכבים. קראו עוד על 
                <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-600 underline"> חילוץ רכב שנתקע בבוץ בכרמל</Link>.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו טווח המחירים לגרירה באזור הקריות?</h3>
              <p>המחיר תלוי במרחק הגרירה ובסוג הכלי. במידה ואתה זקוק לעזרה באזור הצפוני, ניתן לבדוק 
                <Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="text-blue-600 underline"> שירותי גרירה דחופים בכביש 22</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}