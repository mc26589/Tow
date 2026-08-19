import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ בוץ דחוף ביערות הכרמל | חילוץ רכב תקוע 24/7",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ מקצועי, מהיר ובטוח 24/7. הגעה מהירה לכל אזור בכרמל. מחיר הוגן ושירות אמין – התקשרו עכשיו לחילוץ מיידי!",
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
    "priceRange": "$$,$",
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
          <p className="text-xl mb-8">נתקעתם בבוץ בדרכי העפר? המומחים שלנו בדרך לחלץ אתכם בבטחה ובמהירות.</p>
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
          <p>נתקעתם בבוץ בדרכי העפר של יערות הכרמל? אנו מספקים שירותי <Link href="/areas/haifa-general/hilutz-4x4-butz-carmel-haifa">חילוץ שטח מקצועי</Link> ומהיר. הצוות שלנו מיומן בחילוץ <Link href="/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa">רכב תקוע בבוץ ביערות הכרמל</Link> ומכיר היטב את תנאי השטח בחיפה ובסביבתה.</p>
          
          <h3>למה לבחור בנו לחילוץ בשטח?</h3>
          <ul>
            <li><strong>זמינות 24/7:</strong> חילוץ בכל שעה, כולל סופי שבוע וחגים.</li>
            <li><strong>ציוד מקצועי:</strong> שימוש בכננות מקצועיות ורכבי שטח ייעודיים.</li>
            <li><strong>מומחיות מקומית:</strong> הכרה מעמיקה של אזורים כמו <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7">יערות הכרמל ונס ציונה</Link>.</li>
            <li><strong>שירות אמין:</strong> מחירים הוגנים ללא הפתעות.</li>
          </ul>

          <div className="mt-12">
            <h3>שאלות נפוצות</h3>
            <p><strong>כמה זמן לוקח לכם להגיע ליערות הכרמל?</strong> בזכות זמינות מסביב לשעון בחיפה והאזור, אנו מגיעים במהירות האפשרית לכל נקודה בדרכי העפר.</p>
            <p><strong>האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</strong> כן, אנו מצוידים בכלי עבודה מתקדמים המיועדים לחילוץ כלי רכב פרטיים ורכבי 4x4 ששקעו בבוץ, למעט אופנועים.</p>
            <p><strong>האם אתם מציעים גם גרירה?</strong> בהחלט. במקרה שהרכב אינו מניע או זקוק לטיפול במוסך, נוכל לבצע גרירה מקצועית. לפרטים על שירותים נוספים, ניתן לבקר בעמוד <Link href="/areas/haifa-general/towing-service-bat-galim-haifa">גרירת רכבים בחיפה</Link>.</p>
            <p><strong>כיצד ניתן לקבל שירות חילוץ מהיר?</strong> לחיצה על כפתור הוואטסאפ או חיוג טלפוני תפעיל אותנו מיידית.</p>
          </div>

          <p><em>חשוב לציין: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</em></p>
        </div>
      </section>
    </main>
  );
}