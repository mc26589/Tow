import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ בכרמל | 24/7 הגעה מהירה | מחיר הוגן",
  description: "נתקעתם בבוץ בכרמל? צוות חילוץ שטח מקצועי בדרך אליכם! הגעה מהירה, מחיר הוגן ושירות בטוח לכל סוגי הרכבים. התקשרו עכשיו לחילוץ מיידי!",
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
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם. שירות מקצועי, מהיר ובטוח.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מקצועיים</h2>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים, רכבי 4x4 ורכבים מסחריים ששקעו בבוץ באזור הכרמל. למידע נוסף על חילוץ ספציפי ניתן לבדוק גם <Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa">חילוץ רכב משמורת הכרמל</Link> או לבצע <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7">חילוץ שטח בנשר 24/7</Link>. חשוב להדגיש: אנו לא נותנים שירות לאופנועים.</p>
        <p>הצוות שלנו מגיע מצויד בכל הציוד הנדרש כדי להוציא את הרכב שלכם מהבוץ ללא נזקים מיותרים. אנו מציעים מחירים הוגנים ושירות ללא פשרות.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ בבוץ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</h3>
              <p>אנו משתדלים להגיע לכל נקודה באזור הכרמל תוך זמן קצר מרגע הקריאה, בהתאם לתנאי הדרך ועומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים רכבים בכל סוגי הבוץ?</h3>
              <p>כן, אנו ערוכים לחילוצי שטח מורכבים. אם נתקעתם בדרכי עפר או בשמורות הטבע, אל תהססו ליצור קשר.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}