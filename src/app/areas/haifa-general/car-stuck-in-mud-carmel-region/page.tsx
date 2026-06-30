import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות המקצועי שלנו בדרך אליכם עם ציוד חילוץ מתקדם.</p>
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
        <h2 className="text-3xl font-semibold mb-6">שירות חילוץ שטח מקצועי</h2>
        <p className="mb-4">
          אזור הכרמל מציע נופים מרהיבים אך גם דרכי עפר מאתגרות. כאשר הרכב שוקע בבוץ, ניסיונות חילוץ עצמאיים עלולים להחמיר את המצב. אנו מציעים שירות חילוץ מהיר, בטוח ומקצועי לכל סוגי הרכבים (פרטיים, מסחריים ו-4x4).
        </p>
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-xl font-bold mb-3">הערה חשובה לגבי סוגי רכבים</h3>
          <p>
            אנו מתמחים בחילוץ רכבים בעלי 4 גלגלים ומעלה. שירותינו אינם כוללים חילוץ או גרירה של אופנועים מכל סוג שהוא.
          </p>
        </div>
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