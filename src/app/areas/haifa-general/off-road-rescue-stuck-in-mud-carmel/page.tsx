import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ בכרמל? צוות חילוץ שטח 4x4 בדרך אליכם! הגעה מהירה תוך דקות, ציוד מקצועי ומחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו לחילוץ מיידי!",
  alternates: { canonical: "/areas/haifa-general/off-road-rescue-stuck-in-mud-carmel" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ שטח וגרירה בכרמל",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$, $$$",
    "serviceType": "Off-road vehicle recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח לרכב ששקע בבוץ בכרמל</h1>
          <p className="text-xl mb-8">נתקעתם בדרכי העפר של הכרמל? צוות חילוץ מקצועי עם כננת וציוד 4x4 בדרך אליכם. פתרון מהיר ובטוח לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              הזמנת חילוץ עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מדוע לבחור בנו לחילוץ בכרמל?</h2>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים ששקעו בבוץ בדרכי עפר ובשטחים טרשיים. אם אתם זקוקים ל- 
        <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 font-semibold underline">חילוץ רכב מבוץ באזור הכרמל</Link> 
        או שירות מקצועי של 
        <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="text-blue-600 font-semibold underline">חילוץ חירום מבוץ ביערות הכרמל</Link>, הניסיון שלנו מבטיח עבודה בטוחה ללא נזקים.</p>
        <p>זקוקים לחילוץ מורכב יותר בדרכים המהירות? אנו מציעים גם פתרונות לכל רכב תקוע באזור הצפון.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ שטח</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">מה לעשות כשהרכב שוקע בבוץ?</h3>
              <p>חשוב לכבות מנוע ולא לנסות להאיץ כדי לא להעמיק את השקיעה. צרו קשר מיד, וצוות החילוץ שלנו יגיע במהירות למיקומכם בכרמל.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים רכבים פרטיים בלבד?</h3>
              <p>אנו מתמקדים בחילוץ וגרירה של רכבים פרטיים, ג'יפים ורכבי שטח. איננו מטפלים באופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">איך נקבע מחיר החילוץ בכרמל?</h3>
              <p>המחיר נקבע בהתאם למורכבות החילוץ, מיקום הרכב וסוג הציוד הנדרש. אנו דוגלים בשקיפות מלאה ובמחירים הוגנים עבור כל שירותי החילוץ שלנו.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}