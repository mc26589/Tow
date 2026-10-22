import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 צ'ק פוסט | הגעה תוך 30 דקות | זמינות 24/7",
  description: "נתקעתם עם פנצ'ר בכביש 22 צ'ק פוסט? שירות גרר זמין 24/7, הגעה מהירה ומחיר הוגן לכל רכב. התקשרו עכשיו לחילוץ מקצועי ללא עיכובים!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרר מהיר וטיפול בפנצ'ר בכביש 22 מחלף צ'ק פוסט</h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            נתקעתם עם פנצ'ר או תקלה בכביש 22 באזור מחלף צ'ק פוסט? אנו מבינים את הדחיפות והסכנה בעצירה בדרך מהירה. הצוות המקצועי שלנו מתמחה בחילוץ רכבים פרטיים ומסחריים, ומגיע אליכם במהירות שיא. זקוקים גם ל<Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="underline">שירותי חילוץ לאחר תאונה בצ'ק פוסט</Link>? אנו זמינים לכל קריאה.
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
          <li>✅ <strong>זמינות מלאה:</strong> שירות 24/7 לכל אורך כביש עוקף קריות והסביבה.</li>
          <li>✅ <strong>הגעה מהירה:</strong> פריסה רחבה המבטיחה זמן הגעה קצר לצ'ק פוסט.</li>
          <li>✅ <strong>מקצועיות:</strong> טיפול בטוח ברכבכם ללא נזקים.</li>
          <li>✅ <strong>מחירים הוגנים:</strong> אנו מציעים <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="underline text-blue-600">גרירה במשטח (גרר שטוח) בכביש 22</Link> במחיר משתלם.</li>
          <li>✅ <strong>פתרונות מתקדמים:</strong> מענה מקצועי גם ל<Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="underline">גרירת רכבים כבדים בכביש 22</Link>.</li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו למחלף צ'ק פוסט?</h3>
              <p>אנו עושים את מירב המאמצים להגיע לכל קריאה באזור צ'ק פוסט בתוך זמן קצר, בהתאם לעומסי התנועה בצירים הראשיים.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מציעים גרירה לצורך פירוק רכב?</h3>
              <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-600">קניית רכבים לפירוק בצ'ק פוסט</Link> למי שמעוניין להיפטר מרכב ישן.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם נותנים שירות לאופנועים?</h3>
              <p>לא, אנו מתמקדים במתן שירותי גרירה לרכבים פרטיים ומסחריים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}