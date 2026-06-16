import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? אנו מציעים שירותי חילוץ רכבים מקצועיים עם ציוד 4x4. מענה מהיר, מחיר הוגן ושירות זמין מסביב לשעון. התקשרו עכשיו לחילוץ מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם עם ציוד חילוץ מתקדם לרכבים ורכבי שטח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
          <p className="mb-4">אנו מבינים את הקושי והלחץ שבהיתקעות בשטח. אנו מספקים מענה מקצועי גם למקרים מורכבים. אם אתם נמצאים בקרבת מקום, תוכלו להיעזר גם בשירותינו הנוספים כגון <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="underline">חילוץ רכב תקוע ביערות הכרמל</Link> או <Link href="/areas/haifa-general/suv-stuck-in-mud-rescue-haifa-university" className="underline">חילוץ רכבי שטח באוניברסיטת חיפה</Link>.</p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>ציוד חילוץ ייעודי לרכבי 4x4 ורכבים פרטיים.</li>
            <li>הגעה מהירה לכל נקודה באזור הכרמל והסביבה.</li>
            <li>שירות אדיב ומקצועי במחיר משתלם.</li>
          </ul>
          
          <div className="mt-12 bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ רכבים בכרמל</h3>
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</h4>
                    <p className="text-gray-300">זמני ההגעה תלויים בעומסי התנועה, אך אנו משתדלים להגיע לכל נקודה באזור הכרמל במינימום זמן מרגע הקריאה.</p>
                </div>
                <div>
                    <h4 className="font-bold">האם אתם מחלצים גם אופנועים?</h4>
                    <p className="text-gray-300">שימו לב: אנו מתמחים בחילוץ רכבים ורכבי שטח בלבד. איננו מספקים שירותי חילוץ לאופנועים.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}