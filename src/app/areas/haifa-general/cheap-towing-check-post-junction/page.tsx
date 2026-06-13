import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר זול בצומת צ'ק פוסט חיפה | שירות 24/7 | הגעה מהירה",
  description: "זקוקים לגרר בצומת צ'ק פוסט? שירותי גרירה מקצועיים ואמינים לרכבים פרטיים ומסחריים במחיר הוגן. זמינות 24/7, הגעה מהירה לכל אזור הצ'ק פוסט. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-junction",
  },
};

export default function Page() {
  return (
    <main>
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8">
            נתקעתם עם הרכב בצומת צ'ק פוסט? אנו מציעים מענה מיידי, מקצועי ובמחיר הוגן לכל סוגי הרכבים הפרטיים, המסחריים ורכבי השטח. 
            אנו מספקים שירותי גרירה מהירים לנהגים באזור, כולל עזרה בדרכים. 
            חשוב לציין: אנו מתמחים ברכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ זמינות מלאה 24/7 לכל קריאה באזור צומת צ'ק פוסט והסביבה.</li>
          <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>✓ צוות מיומן עם ציוד גרירה חדיש ובטוח.</li>
          <li>✓ התמחות ברכבים פרטיים, מסחריים ו-4x4.</li>
        </ul>
        <p className="text-lg">
          זקוקים לשירותים נוספים באזור חיפה? אנו מציעים גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-600 underline">שירותי גרירה נגישים בצ'ק פוסט</Link>, וכן טיפול ברכבים ישנים דרך שירות <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה כולל גרירה</Link>.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בצומת צ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לגרר להגיע לצומת צ'ק פוסט?</h3>
              <p>בדרך כלל אנו מגיעים לכל נקודה באזור הצ'ק פוסט והסביבה הקרובה תוך 30-45 דקות, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מפנים רכבים ישנים לפירוק באזור?</h3>
              <p>כן, אנו מספקים מענה מהיר גם למי שזקוק לשירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">פינוי רכבים לפירוק בחיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoTowing",
            "name": "שירותי גרירה צ'ק פוסט",
            "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
            "priceRange": "$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "geo": { "@type": "GeoCoordinates", "latitude": "32.7936", "longitude": "35.0253" },
            "serviceType": "Towing Service"
          }),
        }}
      />
    </main>
  );
}