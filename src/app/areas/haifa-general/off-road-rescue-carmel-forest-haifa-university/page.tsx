import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב שטח ביער הכרמל | הגעה מהירה לאזור אוניברסיטת חיפה | 24/7",
  description: "נתקעתם בבוץ ביער הכרמל? שירות חילוץ רכב שטח מקצועי 24/7 סמוך לאוניברסיטת חיפה. הגעה מהירה, ציוד מתקדם ומחיר הוגן. התקשרו עכשיו לחילוץ בטוח!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-rescue-carmel-forest-haifa-university"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב שטח חיפה והכרמל",
    "areaServed": "Haifa, Carmel Forest, University of Haifa",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.762,
      "longitude": 35.015
    },
    "priceRange": "$$, מחיר הוגן",
    "serviceType": "Off-road vehicle recovery, 4x4 towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב שטח מבוץ ביער הכרמל סמוך לאוניברסיטת חיפה</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם רכב השטח בבוץ העמוק של יער הכרמל? אנו מתמחים בחילוץ רכבי 4x4, רכבי שטח ורכבים פרטיים באזור אוניברסיטת חיפה והסביבה. אנו מספקים מענה מקצועי גם למי שמחפש <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="underline font-semibold">חילוץ שטח דחוף בכרמל</Link>. הצוות שלנו זמין 24/7 ומגיע מצויד בכל הציוד הנדרש.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ ביער הכרמל?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ מומחיות בחילוץ רכבי שטח מבוץ, חול ותנאי שטח קשים.</li>
            <li>✓ הגעה מהירה לאזור אוניברסיטת חיפה וציר הכרמל.</li>
            <li>✓ מחירים הוגנים ושירות מקצועי ללא פשרות.</li>
            <li>✓ אם הרכב ספג נזק כבד, ניתן להסתייע בשירות <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה</Link>.</li>
          </ul>
          
          <div className="mt-12 bg-gray-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ בשטח</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold">כמה זמן לוקח לכם להגיע ליער הכרמל?</p>
                <p>אנו פרוסים באזור חיפה והכרמל ומגיעים בדרך כלל תוך זמן קצר לאזור אוניברסיטת חיפה והדרכים הסמוכות.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם מחלצים גם רכבים פרטיים?</p>
                <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600 underline">גרירה וחילוץ לכל סוגי הרכבים</Link>, פרטיים ומסחריים, לא רק רכבי שטח.</p>
              </div>
              <div>
                <p className="font-bold">האם השירות כולל פינוי רכב לפירוק?</p>
                <p>במידה והרכב הושבת כתוצאה מהתקיעה, אנו מסייעים גם בתהליכי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600 underline">פינוי רכבים ישנים וגרירתם למגרש</Link>.</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            *שימו לב: אנו מתמחים בחילוץ רכבי שטח, רכבים פרטיים ומסחריים. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}