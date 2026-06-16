import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "החלפת גלגל בחוף קריית ים | שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם עם פנצ'ר בחוף קריית ים? שירות החלפת גלגל מקצועי ומהיר לכל סוגי הרכבים. הגעה תוך זמן קצר, מחירים הוגנים וזמינות מלאה מסביב לשעון. התקשרו עכשיו!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">סיוע בדרכים והחלפת גלגל באזור חוף קריית ים</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם פנצ'ר בחוף קריית ים? אנו כאן בשבילכם 24/7. שירות מקצועי לרכבים פרטיים, מסחריים ורכבי 4x4. 
            זקוקים לשירותי גרירה נוספים באזור? בדקו גם את שירותי ה-<Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="underline font-semibold">גרירה בקריית ביאליק</Link> שלנו.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
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
            <li>✓ הגעה מהירה לכל אזור חוף קריית ים והסביבה.</li>
            <li>✓ צוות מיומן ומקצועי להחלפת גלגל בבטחה.</li>
            <li>✓ מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
            <li>✓ זמינות מלאה מסביב לשעון, גם בסופי שבוע.</li>
          </ul>
          
          <div className="mt-12 pt-12 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">תוך כמה זמן תגיעו לחוף?</h4>
                <p className="text-gray-400">אנו שואפים להגיע לכל קריאה בחוף קריית ים תוך זמן קצר ככל הניתן בהתאם לעומסי התנועה.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם נותנים שירות גם בקריית מוצקין הסמוכה?</h4>
                <p className="text-gray-400">בהחלט, אנו מציעים שירות מקיף באזור הקריות, כולל <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-400">שירותי גרירה מקצועיים בקריית מוצקין</Link> 24/7.</p>
              </div>
              <div>
                <h4 className="font-bold">האם ניתן להזמין שירותי גרירה למוסך לאחר החלפת הגלגל?</h4>
                <p className="text-gray-400">במידה והתקלה דורשת טיפול עומק, אנו מציעים פתרונות גרירה ופינוי לרכבים תקועים ברחבי חיפה והצפון במחירים נוחים.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}