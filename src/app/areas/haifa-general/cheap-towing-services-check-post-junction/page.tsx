import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בצומת צ'ק פוסט | מחיר הוגן 24/7 | הגעה מהירה",
  description: "נתקעתם עם הרכב בצומת צ'ק פוסט? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים במחיר משתלם. זמינות 24/7 באזור חיפה והקריות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "חיפה והקריות",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8 leading-relaxed">
            זקוקים לשירותי גרירה בצומת צ'ק פוסט? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4 באזור חיפה והקריות. 
            בין אם מדובר בתקלה פתאומית בכביש או <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="underline font-semibold">גרירת רכב בחירום בכביש 22</Link>, אנחנו כאן עבורכם עם מחירים הוגנים ושירות מקצועי 24 שעות ביממה.
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ זמינות מלאה 24/7 לכל קריאה באזור הצומת.</li>
          <li>✓ מחיר זול והוגן ללא הפתעות.</li>
          <li>✓ צוות מיומן ומקצועי עם ציוד גרירה מתקדם.</li>
          <li>✓ התמחות ברכבים פרטיים, מסחריים ו-4x4.</li>
          <li>✓ גישה נוחה לדרכים ראשיות: <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-600 hover:underline">גרירת רכבים בכביש 22</Link>.</li>
        </ul>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">תוך כמה זמן תגיעו לצומת צ'ק פוסט?</h4>
              <p>צוות הגרירה שלנו עובד בפריסה רחבה בחיפה, מה שמאפשר לנו זמני הגעה מהירים מאוד לצומת צ'ק פוסט והסביבה הקרובה.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מציעים שירותי גרירה זולים באזור?</h4>
              <p>כן, אנו מאמינים במתן מחיר תחרותי והוגן לכל שירותי הגרירה שלנו בחיפה. ניתן להתרשם משירותינו גם ב-<Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-600 hover:underline">שירותי גרירה משתלמים בצ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}