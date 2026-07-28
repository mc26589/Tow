import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירה בקרית ביאליק 24/7 | החלפת גלגל ומענה מהיר תוך דקות",
  description: "נתקעתם עם פנצ'ר בקרית ביאליק? שירותי גרירה וחילוץ 24/7 במחיר הוגן. מענה מהיר לרכבים פרטיים ומסחריים, הגעה לכל חלקי הקריות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ קריות",
    "areaServed": "Kiryat Bialik",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "priceRange": "$$,$",
    "serviceType": ["Towing Service", "Flat Tire Repair", "Roadside Assistance"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה 24/7 בקרית ביאליק: מענה מהיר ומקצועי</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            זקוקים לחילוץ דחוף? אנו מציעים שירותי גרירה והחלפת גלגל בקרית ביאליק בכל שעה. אם אתם בדרכים באזור הקריות, דעו שאנו מפעילים גם <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="underline font-semibold">שירותי גרירה בכביש 22 עוקף קריות</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית ביאליק" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בקרית ביאליק?</h2>
          <ul className="space-y-4 text-lg mb-10">
            <li>✅ <strong>זמינות מלאה:</strong> שירות 24/7, כולל סופי שבוע וחגים.</li>
            <li>✅ <strong>מחיר הוגן:</strong> שקיפות מלאה והצעת מחיר נוחה ללא הפתעות.</li>
            <li>✅ <strong>מומחיות:</strong> צוות מנוסה בחילוץ רכבים פרטיים ומסחריים בלבד.</li>
            <li>✅ <strong>כיסוי רחב:</strong> פריסה מהירה לכל הקריות, כולל חיבור ל<Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-600">צומת צק פוסט</Link> הסמוך.</li>
          </ul>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה באזור</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">תוך כמה זמן תגיעו אלי בקרית ביאליק?</h4>
                <p>אנו משתדלים להגיע לכל נקודה בעיר ובסביבתה תוך זמן קצר ככל האפשר בהתאם לתנועה בכביש 22.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">האם אתם גוררים אופנועים?</h4>
                <p>לא, אנו מתמקדים אך ורק ברכבים פרטיים ומסחריים. במידה ואתם זקוקים לפתרון אחר, מומלץ לבדוק שירותים ייעודיים לדו-גלגלי.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}