import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) - הגעה מהירה ב-30 דקות | 24/7",
  description: "נתקעתם בעוקף קריות? שירותי גרירה מקצועיים בכביש 22 זמינים 24/7. מחיר הוגן, הגעה מהירה לכל נקודה בדרך. התקשרו עכשיו לקבלת סיוע מידי!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8158",
      "longitude": "35.0567"
    },
    "priceRange": "מחיר הוגן",
    "serviceType": "Emergency Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 - עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנו מספקים שירותי גרירה מקצועיים ומהירים לאורך כביש 22. שירות בטוח לכל סוגי הרכבים הפרטיים והמסחריים עם זמינות מלאה סביב השעון.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירות גרירה בכביש 22?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ הגעה מהירה לכל נקודה בכביש 22 (עוקף קריות) - חוסכים לכם זמן המתנה יקר.</li>
          <li>✓ שירות 24/7 ללא הפסקה, כולל סופי שבוע וחגים.</li>
          <li>✓ מחירים הוגנים ושקופים – מקבלים הצעת מחיר כבר בשיחת הטלפון.</li>
          <li>✓ שירות בסטנדרט גבוה: <Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="text-blue-600 underline">גרר מהיר בכביש 22</Link> לכל רכב פרטי.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם מציעים גרירה לרכבים מסחריים בכביש 22?</h3>
            <p>כן, אנו מציעים <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת רכב מסחרי קל בכביש 22</Link> בצורה בטוחה ומקצועית.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם מספקים שירות גרירה במקרה של תקר בגלגל?</h3>
            <p>בהחלט, אנו מספקים <Link href="/areas/haifa-general/fast-towing-flat-tire-road-22-krayot" className="text-blue-600 underline">שירות גרירה עקב תקר בכביש 22</Link> ופתרונות עזרה ראשונה בדרך.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם ניתן לקבל שירות באזור צ\'ק פוסט?</h3>
            <p>כן, אנו פרוסים גם באזור זה ומציעים <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">שירותי גרירה משתלמים בצ\'ק פוסט</Link> לכל מי שנתקע בדרך לקריות.</p>
          </div>
        </div>

        <p className="mt-8 text-gray-600 italic">
          *שירותי גרירה מקצועיים לכל תושבי הצפון, זמינים לכל קריאה בחיפה והקריות.
        </p>
      </section>
    </main>
  );
}