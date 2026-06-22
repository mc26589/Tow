import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ שטח ביערות הכרמל ודניה | זמינות 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ ביערות הכרמל? צוות חילוץ שטח מקצועי באזור דניה והסביבה. הגעה מהירה, שירות 24/7 ומחירים הוגנים לכל סוגי הרכבים. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-rescue-carmel-forest-danya",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ רכב שטח חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7685",
      "longitude": "34.9895"
    },
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב שטח מבוץ ביערות הכרמל סמוך לשכונת דניה</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בבוץ? צוות החילוץ שלנו מתמחה בחילוץ רכבי שטח, רכבים פרטיים ורכבים מסחריים באזור יערות הכרמל ודניה. אנו מגיעים במהירות עם ציוד מקצועי כדי לחלץ אתכם בבטחה.
            אם אתם זקוקים לעזרה נוספת באזור, ניתן לעיין גם בשירותי <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="underline font-semibold">חילוץ בוץ דחוף ביערות הכרמל</Link> או <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="underline font-semibold">חילוץ רכב תקוע באזור האוניברסיטה</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ ביערות הכרמל?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24/7 לכל קריאת חילוץ.</li>
            <li>✓ מומחיות בחילוץ רכבי 4x4 מבוץ עמוק ושטח טרשי.</li>
            <li>✓ הגעה מהירה לאזור דניה ויערות הכרמל.</li>
            <li>✓ מחירים הוגנים ושירות מקצועי ללא פשרות.</li>
          </ul>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-6 text-gray-400">
              <div>
                <h4 className="font-bold text-white">כמה זמן לוקח לכם להגיע ליערות הכרמל?</h4>
                <p>אנו פרוסים באזור חיפה ודניה ומגיעים לרוב תוך זמן קצר מרגע הקריאה, בהתאם לתנאי השטח.</p>
              </div>
              <div>
                <h4 className="font-bold text-white">האם אתם מחלצים גם רכבים פרטיים שלא ירדו לשטח?</h4>
                <p>כן, אנו מספקים שירותי חילוץ וגרירה למגוון רחב של רכבים, כולל רכבים פרטיים שנתקעו בדרכי עפר או בצידי הדרך באזור דניה והכרמל.</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            * שימו לב: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}