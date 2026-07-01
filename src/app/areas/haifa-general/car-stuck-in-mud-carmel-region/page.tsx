import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ באזור הכרמל? אנחנו מציעים שירות חילוץ מקצועי, מהיר ובמחיר הוגן לכל סוגי הרכבים. אל תסתכנו, התקשרו עכשיו לחילוץ מוסמך!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region"
  }
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות המקצועי שלנו בדרך אליכם עם ציוד חילוץ מתקדם, 24/7.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 text-neutral-100">
        <h2 className="text-3xl font-semibold mb-6">שירות חילוץ שטח מקצועי בכרמל</h2>
        <p className="mb-4">
          אזור הכרמל מציע נופים מרהיבים אך גם דרכי עפר מאתגרות. אנו מספקים פתרונות מהירים, כגון <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-400 underline">חילוץ בוץ ביערות הכרמל ובנשר</Link> או באזור <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-400 underline">הכרמל ליד אוניברסיטת חיפה</Link>. כאשר הרכב שוקע, ניסיונות חילוץ עצמאיים עלולים להחמיר את המצב.
        </p>
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
          <h3 className="text-xl font-bold mb-3">הערה חשובה לגבי סוגי רכבים</h3>
          <p>
            אנו מתמחים בחילוץ רכבים בעלי 4 גלגלים ומעלה. שירותינו אינם כוללים חילוץ או גרירה של אופנועים מכל סוג שהוא. אם אתם זקוקים לסיוע בכבישים הסמוכים, נשמח לסייע גם בתיאום <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-400 underline">שירות גרירה 24/7</Link>.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על חילוץ רכב בבוץ</h2>
          <div className="space-y-4">
            <div className="border-b border-neutral-800 pb-4">
              <h4 className="font-bold">תוך כמה זמן תגיעו לחלץ אותי באזור הכרמל?</h4>
              <p>אנו משתדלים להגיע לכל נקודה באזור הכרמל תוך זמן קצר ככל הניתן, בהתאם לעומסי התנועה ותנאי השטח.</p>
            </div>
            <div className="border-b border-neutral-800 pb-4">
              <h4 className="font-bold">מהו מחיר חילוץ רכב מהבוץ?</h4>
              <p>המחיר נקבע בהתאם למורכבות החילוץ, סוג הרכב והציוד הנדרש. אנו מבטיחים מחיר הוגן ושקיפות מלאה.</p>
            </div>
          </div>
        </section>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoTowing",
            "name": "שירותי חילוץ וגרירה חיפה והקריות",
            "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה והקריות" },
            "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
            "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
            "priceRange": "$",
            "serviceType": "חילוץ רכב תקוע בבוץ"
          }),
        }}
      />
    </main>
  );
}