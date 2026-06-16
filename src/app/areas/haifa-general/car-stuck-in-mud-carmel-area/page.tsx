import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? אנחנו כאן לחילוץ רכבים מקצועי ומהיר 24/7. הגעה מהירה, ציוד שטח מתקדם ומחירים הוגנים. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-area",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "serviceType": "Car recovery from mud and off-road towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם. שירות חילוץ מקצועי לרכבים פרטיים ורכבי 4x4.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h2>
        <p className="mb-4">אם הרכב שלכם שקע בבוץ בדרכי העפר או בשטחים הפתוחים של הכרמל, אנחנו כאן כדי לסייע לכם באופן מיידי. אנו מתמחים בחילוצי שטח, רכבי 4x4, ורכבים פרטיים שנתקעו בתנאי שטח קשים. אם אתם זקוקים לחילוץ מורכב יותר, ראו גם את השירות שלנו ל- <Link href="/areas/haifa-general/suv-stuck-in-mud-rescue-haifa-university" className="text-blue-400 underline">חילוץ רכבי שטח באזור אוניברסיטת חיפה</Link> או <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="text-blue-400 underline">חילוץ דחוף ביערות הכרמל</Link>.</p>
        <p className="mb-4"><strong>חשוב לציין:</strong> אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        
        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 mt-8">
          <h3 className="text-2xl font-semibold mb-4">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</p>
              <p className="text-neutral-400">אנו ערוכים לזמני הגעה מהירים במיוחד לכל חלקי הכרמל והסביבה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</p>
              <p className="text-neutral-400">כן, ברשותנו ציוד חילוץ כבד ומקצועי המותאם בדיוק למצבים של רכבים ששקעו בבוץ עמוק.</p>
            </div>
            <div>
              <p className="font-bold">מהו טווח המחירים לשירותי חילוץ?</p>
              <p className="text-neutral-400">אנו מספקים הצעת מחיר הוגנת ושקופה בטלפון, בהתאם למיקום ומורכבות החילוץ.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}