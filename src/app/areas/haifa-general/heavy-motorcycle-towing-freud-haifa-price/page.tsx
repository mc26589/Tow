import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בדרך פרויד חיפה | שירות 24/7 | הגעה מהירה ומחיר הוגן",
  description: "נתקעת בדרך פרויד בחיפה? צריכים גרר דחוף? שירותי גרירה מקצועיים 24/7 לרכבים פרטיים ומסחריים בדרך פרויד והכרמל. מחיר הוגן ושירות אמין. התקשרו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-freud-haifa-price"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ בדרך פרויד חיפה",
    "areaServed": "Haifa",
    "priceRange": "₪₪",
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
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ בדרך פרויד חיפה
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            נתקעת עם הרכב בדרך פרויד? צוות המומחים שלנו זמין עבורך 24/7. שירות גרירה מהיר ומקצועי לרכבים פרטיים, מסחריים ורכבי שטח.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">שירות גרירה אמין ומקצועי בכל אזור חיפה</h2>
          <p className="mb-6">
            זמן הוא גורם קריטי כשנתקעים בדרך פרויד. אנו מספקים מענה מהיר לכל ציר מרכזי בכרמל. בין אם מדובר ברכב תקוע או צורך בחילוץ מורכב יותר, אנו כאן לעזור. צוותנו מתמחה גם בפתרונות עבור <Link href="/areas/haifa-general/4x4-vehicle-stuck-in-mud-carmel-forest" className="text-blue-600 underline">חילוץ רכב תקוע בבוץ ביערות הכרמל</Link> או מענה מהיר עבור <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">גרירת רכבים חשמליים עם מצבר ריק באחוזה</Link>. אנו מתחייבים למחיר הוגן ומקצועיות ללא פשרות.
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-black text-white py-4 px-8 rounded-lg text-center font-bold hover:bg-gray-800 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות על שירותי גרירה בדרך פרויד</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold">האם אתם גוררים רכבים מכל הסוגים בדרך פרויד?</p>
                <p>אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח. למידע נוסף על אזורים אחרים, ניתן לבדוק גם <Link href="/areas/haifa-general/towing-stuck-vehicle-road-22-haifa" className="text-blue-600 underline">שירותי גרירת רכב תקוע בכביש 22</Link>.</p>
              </div>
              <div>
                <p className="font-bold">מה עושים במקרה של תאונה בדרך פרויד?</p>
                <p>חשוב להישאר בטוחים ולפנות את הרכב מהנתיב אם ניתן. אנו מספקים שירותי פינוי לאחר תאונות. למידע על חילוץ מורכב, עיינו גם במידע על <Link href="/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass" className="text-blue-600 underline">חילוץ רכבים חשמליים לאחר תאונה</Link>.</p>
              </div>
              <div>
                <p className="font-bold">מהו טווח המחירים לגרירה באזור חיפה?</p>
                <p>המחיר תלוי בסוג הרכב וביעד הגרירה. אנו ידועים במחירים שקופים. למי שמחפש פתרונות נוספים, ניתן לבדוק גם <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">שירותי גרירה זולים בצ'ק פוסט</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}