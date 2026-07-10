import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ מקצועי, מהיר ובמחיר הוגן לכל סוגי הרכבים באזור חיפה והכרמל. הצוות שלנו בדרך אליכם. התקשרו עכשיו!",
  alternates: { canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-area" }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
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
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם עם ציוד חילוץ מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ רכב שנתקע בבוץ באזור הכרמל?</h2>
        <p className="mb-4">אם הרכב שלכם שקע בבוץ בדרכי העפר או בשטחים הפתוחים של הכרמל, אנחנו כאן כדי לסייע לכם באופן מיידי. אנו מתמחים בחילוצי שטח לרכבים פרטיים ורכבים מסחריים שנתקעו בתנאי שטח קשים. אם אתם זקוקים לחילוץ מורכב יותר, ראו גם את שירותי ה-<Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="text-blue-400 underline">car extraction from mud carmel reserve haifa</Link> שלנו.</p>
        <p className="mb-4">הצוות שלנו מצויד בציוד חילוץ מתקדם המאפשר לנו להוציא את הרכב בבטחה מבלי לגרום לו נזק נוסף. אנו מציעים מחירים הוגנים ושירות אדיב לכל תושבי האזור.</p>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
          <h3 className="text-2xl font-bold mb-4">חשוב לדעת</h3>
          <p>אנו מתמחים בחילוץ רכבים פרטיים ומסחריים. <strong>איננו מספקים שירותי חילוץ או גרירה לאופנועים.</strong></p>
        </div>

        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על חילוץ רכב באזור הכרמל</h2>
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold">תוך כמה זמן תגיעו לחילוץ בכרמל?</h4>
                    <p className="text-neutral-400">אנו שואפים להגיע לכל נקודה באזור הכרמל תוך זמן קצר ככל האפשר, בהתאם לעומסי התנועה ותנאי השטח.</p>
                </div>
                <div>
                    <h4 className="font-bold">האם אתם מחלצים רכבים שנתקעו בשטח?</h4>
                    <p className="text-neutral-400">כן, אנו מתמחים בחילוץ רכבים מבוץ, חול או תנאי שטח מאתגרים בעזרת ציוד ייעודי.</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}