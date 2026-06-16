import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר מהיר בכביש 22 צ'ק פוסט | הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם עם פנצ'ר בכביש 22 מחלף צ'ק פוסט? גרר זמין 24/7, הגעה מהירה, מחיר הוגן ומקצועיות ללא פשרות. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/fast-towing-flat-tire-road-22-check-post"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרר חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0340"
    },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרר מהיר לרכב עם פנצ'ר בכביש 22 מחלף צ'ק פוסט</h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            נתקעתם עם פנצ'ר בכביש 22 באזור מחלף צ'ק פוסט? אנו מבינים את הדחיפות והסכנה בעצירה בצד הדרך המהירה. הצוות המקצועי שלנו מתמחה בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 ומגיע אליכם במהירות שיא. אם מדובר בתאונה, ניתן להיעזר גם בשירות <Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="underline">גרירה לאחר תאונה בכביש 22</Link>. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <ul className="space-y-4 text-lg mb-10">
          <li>✅ <strong>זמינות מלאה:</strong> שירות 24/7 לכל אורך כביש עוקף קריות.</li>
          <li>✅ <strong>הגעה מהירה:</strong> פריסה רחבה המבטיחה זמן הגעה קצר למחלף צ'ק פוסט.</li>
          <li>✅ <strong>מקצועיות:</strong> טיפול בטוח ברכבכם ללא נזקים מיותרים.</li>
          <li>✅ <strong>מחירים הוגנים:</strong> <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="underline text-blue-600">שירותי גרירה במחיר משתלם בצ'ק פוסט</Link> ושקיפות מלאה.</li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">תוך כמה זמן תגיעו למחלף צ'ק פוסט?</h3>
              <p>אנו משתדלים להגיע לכל קריאה באזור מחלף צ'ק פוסט תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם נותנים שירות לאופנועים?</h3>
              <p>לא, איננו מספקים שירותי גרירה או חילוץ לאופנועים, השירות מיועד לרכבים פרטיים, מסחריים ו-4x4 בלבד.</p>
            </div>
            <div>
              <h3 className="font-bold">מה עושים במקרה של תאונה בכביש 22?</h3>
              <p>במקרה של תאונה, בטיחות היא לפני הכל. פינוי רכב לאחר תאונה דורש מקצועיות, ניתן לקרוא עוד על <Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="text-blue-600">גרירת רכבים לאחר תאונה</Link> כאן.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}