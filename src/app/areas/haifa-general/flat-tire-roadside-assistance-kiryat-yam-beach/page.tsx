import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "החלפת גלגל בחוף קריית ים | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם עם פנצ\'ר בחוף קריית ים? שירות החלפת גלגל מקצועי לכל סוגי הרכבים. הגעה מהירה, מחיר הוגן ושירות 24/7. התקשרו עכשיו לסיוע מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/flat-tire-roadside-assistance-kiryat-yam-beach"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Kiryat Yam",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0650"
    },
    "priceRange": "$",
    "serviceType": "Roadside Assistance, Flat Tire Change"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות החלפת גלגל בחוף קריית ים - זמינות 24/7</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם פנצ\'ר בחוף קריית ים? אנו מציעים שירותי דרך מקצועיים לכל סוגי הרכבים. זקוקים לסיוע דחוף בדרכים? אנו נותנים מענה גם למקרים ב-<Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="underline font-semibold">כביש 22 בקריות</Link>. זקוקים לשינוע נוסף? ראו גם <Link href="/areas/haifa-general/cheap-towing-kiryat-yam-to-kiryat-motzkin" className="underline font-semibold">שירותי גרירה זולים מקריית ים לקריית מוצקין</Link>.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Kiryat Yam" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לסיוע מיידי
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בקריית ים?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ הגעה מהירה לחוף קריית ים ולסביבה הקרובה.</li>
            <li>✓ צוות מיומן להחלפת גלגל בבטחה וביעילות לכל רכב פרטי.</li>
            <li>✓ מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
            <li>✓ מענה טלפוני 24 שעות ביממה, 7 ימים בשבוע.</li>
          </ul>
          
          <div className="mt-12 pt-12 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">תוך כמה זמן תגיעו אלי לחוף?</h4>
                <p className="text-gray-400">אנו שואפים להגיע לכל קריאה בחוף קריית ים בזמן המהיר ביותר האפשרי בהתאם לעומסי התנועה באזור.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם נותנים שירות גם בערים סמוכות?</h4>
                <p className="text-gray-400">כן, אנו מספקים מענה מהיר ב-<Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-400">קריית ביאליק</Link> ובכל אזור הקריות.</p>
              </div>
              <div>
                <h4 className="font-bold">מה עושים אם יש תקלה נוספת ברכב?</h4>
                <p className="text-gray-400">במידה והפנצ\'ר הוא רק תחילתה של בעיה, אנו מספקים שירותי גרירה מקצועיים ופינוי לרכבים תקועים במחירים הוגנים ללא קשר למרחק הנסיעה.</p>
              </div>
              <div>
                <h4 className="font-bold">האם השירות מתאים גם לרכבים גדולים?</h4>
                <p className="text-gray-400">אנו ערוכים לטפל ברוב סוגי הרכבים הפרטיים והמסחריים הקלים. במידה ומדובר ברכב כבד במיוחד, נשמח לייעץ טלפונית.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}