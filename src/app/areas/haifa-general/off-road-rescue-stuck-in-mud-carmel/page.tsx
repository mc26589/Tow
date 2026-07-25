import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ בכרמל | חילוץ שטח 24/7 | הגעה מהירה",
  description: "נתקעתם בבוץ בכרמל? צוות חילוץ שטח מקצועי בדרך אליכם! שירות 24/7 לרכבים פרטיים ו-4x4 במחיר הוגן. הגעה מהירה לכל אזור הכרמל. התקשרו עכשיו!",
  alternates: { canonical: "/areas/haifa-general/off-road-rescue-stuck-in-mud-carmel" },
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
    "serviceType": "Off-road vehicle recovery and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח לרכב תקוע בבוץ בכרמל</h1>
          <p className="text-xl mb-8">נתקעתם בשטח? צוות חילוץ מיומן עם ציוד ייעודי בדרך אליכם. פתרון מהיר, מקצועי ובטוח לכל רכב ששקע.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מקצועיים בכרמל</h2>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים, ג'יפים ורכבי 4x4 ששקעו בבוץ בדרכי עפר באזור הכרמל. בין אם מדובר ב-<Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 font-semibold">חילוץ 4x4 ביער הכרמל</Link> או בחיפוש אחר <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 font-semibold">חילוץ רכב מהבוץ בכרמל</Link>, אנחנו הכתובת שלכם. הניסיון שלנו מאפשר לנו לבצע חילוץ בטוח ללא נזקים לשלדת הרכב.</p>
        <p>צוות החילוץ שלנו ערוך לכל סוגי השטח ומגיע עם ציוד חילוץ מתקדם. שימו לב: אנו לא נותנים שירות לאופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ בבוץ בכרמל</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן צוות החילוץ מגיע לכרמל?</h3>
              <p>אנו פרוסים בחיפה והסביבה ומשתדלים להגיע לכל נקודה בכרמל תוך זמן קצר מרגע הקריאה, בהתאם לתנאי השטח.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם המחיר לחילוץ בבוץ משתנה?</h3>
              <p>אנו מקפידים על מחיר הוגן ושקוף. עלות החילוץ נקבעת לפי מורכבות השקיעה, הציוד הנדרש ומיקום הרכב בשטח.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">באילו אזורים בכרמל אתם מספקים חילוץ שטח?</h3>
              <p>אנו מכסים את כל שמורת הכרמל, יערות הכרמל, דרכי העפר ליד אזורי מגורים וצירים מורכבים. לצורך שירותים נוספים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-600 font-semibold">שירותי גרירה באחוזה</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}