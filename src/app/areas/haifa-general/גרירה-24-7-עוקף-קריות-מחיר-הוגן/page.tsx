import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירה 24/7 בכביש 22 עוקף קריות | הגעה מהירה ומחיר הוגן",
  description: "נתקעתם בכביש 22 עוקף קריות? שירותי גרירה וחילוץ 24/7 לרכבים. הגעה מהירה תוך 30-45 דקות במחיר הוגן ושקוף. התקשרו עכשיו לסיוע מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ 24/7 בכביש 22 עוקף קריות",
    "description": "שירותי גרירה וחילוץ מהירים ומקצועיים 24/7 לכל סוגי הרכבים בכביש 22 עוקף קריות.",
    "url": "https://yourdomain.com/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "₪₪",
    "areaServed": [
      { "@type": "Place", "name": "כביש 22 עוקף קריות" },
      { "@type": "Place", "name": "אזור חיפה והקריות" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.818", "longitude": "35.055" },
    "serviceType": ["גרירת רכב", "חילוץ רכב תקוע", "שירות גרירה 24/7", "גרירה בכביש 22"]
  };

  return (
    <>
      <Script
        id="json-ld-auto-towing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            גרירת רכב 24/7 בכביש 22 עוקף קריות במחיר הוגן
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם באמצע הדרך? צוות הגרירה המקצועי שלנו זמין עבורכם 24/7. הגעה מהירה לרכבים פרטיים ומסחריים בכביש עוקף קריות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="כביש 22 עוקף קריות" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-100 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">שירותי גרירה מקצועיים בכביש 22</h2>
            <p className="text-lg leading-relaxed mb-4">
              כביש 22 עוקף קריות הוא עורק תחבורה מרכזי. במקרה של תקלה או תאונה, אתם צריכים <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-300 underline">fast towing services road 22 krayot bypass</Link>. אנו מציעים מענה מיידי לרכבים רגילים וגם שירות ייעודי עבור <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-300 underline">electric vehicle breakdown towing route 22 krayot bypass</Link>.
            </p>
            <p className="text-lg leading-relaxed">
              זקוקים לסיוע משלים? אנו זמינים גם עבור <Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="text-blue-300 underline">accident towing road 22 check post krayot</Link> וטיפול בפריקת מצברים לרכבים חשמליים דרך <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-300 underline">electric vehicle flat battery towing route 22 krayot</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">שאלות נפוצות</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl">תוך כמה זמן תגיעו אלי לעוקף קריות?</h3>
                <p>הצוותים שלנו מפוזרים באזור חיפה והקריות, לכן אנו מתחייבים להגעה מהירה במיוחד לכביש 22, בדרך כלל תוך פחות מ-45 דקות.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">האם אתם גוררים רכבים חשמליים?</h3>
                <p>כן, אנו ערוכים לטיפול וגרירה של רכבים חשמליים תוך שמירה על כללי הבטיחות הנדרשים ליצרן.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">מהו אזור הפעילות המדויק שלכם?</h3>
                <p>אנו מספקים שירותי גרירה בכל ציר עוקף קריות, כולל חיבורים לצומת צ'ק פוסט והסביבה הקרובה.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}