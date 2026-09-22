import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ בוץ ביערות הכרמל | חילוץ רכב תקוע 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ מקצועי ומהיר לכל סוגי הרכבים. זמינות 24/7, מחיר הוגן והגעה מהירה לכל אזור בכרמל. התקשרו עכשיו לחילוץ מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-mud-recovery-service-carmel-forest-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": "Haifa and Carmel",
    "priceRange": "$$$,$$",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ בוץ דחוף ביערות הכרמל חיפה</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ בדרכי העפר? צוות חילוץ מקצועי בדרך אליכם לחילוץ מהיר, בטוח ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והכרמל" />
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
          <p>נתקעתם בבוץ באחת מדרכי העפר של יערות הכרמל? אל תנסו "לחפור" ולסכן את הרכב. אנו מספקים שירותי חילוץ שטח מקצועי ומהיר לכל סוגי הרכבים. הצוות שלנו מיומן בחילוץ <Link href="/areas/haifa-general/off-road-mud-rescue-carmel-private-car">חילוץ רכב תקוע בבוץ ביערות הכרמל</Link> ומכיר היטב את תנאי השטח הייחודיים של חיפה והסביבה.</p>
          
          <h3>למה לבחור בנו לחילוץ בשטח?</h3>
          <ul>
            <li><strong>זמינות 24/7:</strong> חילוץ בכל שעה, כולל סוף השבוע וחגים.</li>
            <li><strong>ציוד מקצועי:</strong> שימוש בכננות מתקדמות ורכבי שטח חזקים.</li>
            <li><strong>מומחיות מקומית:</strong> הכרה מעמיקה של אזורי חילוץ מורכבים.</li>
            <li><strong>מחיר הוגן:</strong> שירות מקצועי ללא הפתעות במחיר משתלם.</li>
          </ul>

          <div className="mt-12">
            <h3>שאלות נפוצות</h3>
            <p><strong>כמה זמן לוקח לכם להגיע ליערות הכרמל?</strong> בזכות צוותים זמינים בחיפה והסביבה, אנו עושים מאמץ להגיע במהירות המרבית לכל נקודה בשטח.</p>
            <p><strong>האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</strong> כן, אנו ערוכים לחילוץ רכבים פרטיים ומסחריים ששקעו בבוץ. אנו מתמקדים בבטיחות הרכב שלכם.</p>
            <p><strong>האם אתם מציעים גם גרירה?</strong> בהחלט. אם לאחר החילוץ הרכב זקוק לטיפול, נוכל לבצע גרירה מקצועית. למידע נוסף ניתן לבקר בעמוד <Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles">שירותי גרירה וחילוץ בחיפה</Link>.</p>
            <p><strong>איך עובד תהליך החילוץ?</strong> פשוט מאוד: לחיצה על כפתור הוואטסאפ או חיוג טלפוני תפעיל אותנו מיידית.</p>
          </div>

          <p><em>הערה: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</em></p>
        </div>
      </section>
    </main>
  );
}