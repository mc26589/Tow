import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ בוץ דחוף ביערות הכרמל חיפה | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ רכבים מקצועי בחיפה והסביבה. מחיר הוגן, צוות מנוסה וזמינות 24/7. לחילוץ מיידי התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-mud-recovery-service-carmel-forest-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7333",
      "longitude": "35.0000"
    },
    "serviceType": "Emergency Mud Recovery"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">שירות חילוץ בוץ דחוף ביערות הכרמל חיפה</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ בדרכי העפר? המומחים שלנו בדרך לחלץ אתכם בבטחה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="prose prose-invert max-w-3xl mx-auto">
          <h2>חילוץ רכבים תקועים בבוץ ביערות הכרמל</h2>
          <p>נתקעתם בבוץ בדרכי העפר של יערות הכרמל? אנו מספקים שירותי <Link href="/areas/haifa-general/mud-rescue-4x4-carmel-forest-haifa">חילוץ שטח מקצועי</Link>, מהיר ובטוח לרכבים פרטיים ורכבי 4x4 ששקעו בבוץ העמוק. הצוות שלנו מכיר היטב את תוואי השטח של אזור חיפה והכרמל ומגיע אליכם במהירות שיא.</p>
          
          <h3>למה לבחור בנו לחילוץ בשטח?</h3>
          <ul>
            <li><strong>זמינות 24/7:</strong> אנחנו כאן בשבילכם בכל שעה, גם בתנאי מזג אוויר קשים.</li>
            <li><strong>ציוד מקצועי:</strong> שימוש בכננות וציוד חילוץ מתקדם לשטח.</li>
            <li><strong>מומחיות מקומית:</strong> הכרה מעמיקה של אזורים כמו <Link href="/areas/haifa-general/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa">יערות הכרמל ודניה</Link>.</li>
            <li><strong>שירות אמין:</strong> מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
          </ul>
          
          <div className="mt-12">
            <h3>שאלות נפוצות על חילוץ בחיפה</h3>
            <p><strong>כמה זמן לוקח לכם להגיע ליערות הכרמל?</strong> בזכות זמינות מסביב לשעון באזור חיפה, אנו שואפים להגעה מהירה ככל הניתן בהתאם לתנאי השטח.</p>
            <p><strong>האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</strong> כן, אנו מצוידים בכלי עבודה המיועדים לחילוץ כלי רכב מרמת שקיעה קלה ועד קשה, למעט אופנועים.</p>
            <p><strong>האם אתם מציעים גם שירותי גרירה לאחר החילוץ?</strong> בהחלט. אם הרכב זקוק לתיקון, נוכל לסייע בגרירה למוסך הקרוב. למידע נוסף על שירותים אחרים, ניתן לעיין בדף <Link href="/areas/haifa-general/cheap-car-towing-service-neve-shaanan-haifa">גרירת רכבים בחיפה</Link>.</p>
          </div>

          <p><em>חשוב לציין: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</em></p>
        </div>
      </section>
    </main>
  );
}