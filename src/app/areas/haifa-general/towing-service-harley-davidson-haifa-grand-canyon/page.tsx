import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7858",
      "longitude": "34.9865"
    },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance for Cars and Commercial Vehicles"
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
            שירותי גרירה וחילוץ בחיפה: האם ניתן לגרור אופנוע הארלי דייווידסון ליד קניון חיפה?
          </h1>
          <p className="text-lg md:text-xl mb-8">
            אנו מתמחים בחילוץ רכבים פרטיים ומסחריים. שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold">
              חיוג מהיר למוקד
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">הבהרה בנוגע לשירותי גרירת אופנועים</h2>
        <p className="mb-4">
          אנו מבינים את התסכול שבנתקע עם אופנוע הארלי דייווידסון באזור קניון חיפה. עם זאת, חשוב להדגיש כי הציוד והמומחיות שלנו מותאמים אך ורק לרכבים פרטיים, רכבי שטח (4x4) ורכבים מסחריים.
        </p>
        <p>
          איננו מחזיקים בציוד המתאים לשינוע בטוח של אופנועים, ולכן לא נוכל לסייע במקרה זה. אנו ממליצים לפנות לשירותי גרירה המתמחים בדו-גלגלי כדי להבטיח את שלמות האופנוע שלכם.
        </p>
      </section>
    </main>
  );
}