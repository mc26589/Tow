import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? שירות חילוץ רכב מקצועי עם ציוד שטח מתקדם. פועלים 24/7, הגעה תוך 30 דקות. התקשרו עכשיו לחילוץ בטוח ומקצועי!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-area",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב בבוץ באזור הכרמל",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$, $$$",
    "serviceType": "Car recovery from mud and off-road towing"
  };

  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – הגעה מהירה 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ בדרכי העפר של הכרמל? הצוות שלנו מומחה בחילוצי שטח ומגיע אליכם עם ציוד כננות מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="הכרמל וחיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ רכב שנתקע בבוץ באזור הכרמל?</h2>
        <p className="mb-4">
          אם הרכב שלכם שקע בבוץ בדרכי העפר של הכרמל, אל תנסו להמשיך ללחוץ על הגז כדי לא לגרום לנזק נוסף. אנו מציעים שירות <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="text-blue-400 underline">חילוץ שטח בכרמל ובדניה</Link> ומספקים פתרונות מקצועיים לכל סוגי הרכבים. למי שמחפש פתרונות נוספים באזור הכרמל והסביבה, אנו זמינים לכל קריאה.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>ניסיון עשיר בחילוץ רכבים פרטיים, מסחריים ורכבי שטח.</li>
          <li>שימוש בציוד כננות מקצועי למניעת נזקים מיותרים לשלדת הרכב.</li>
          <li>מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות (FAQ)</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">מהו זמן ההגעה המשוער לחילוץ בכרמל?</p>
              <p className="text-neutral-400">אנו שואפים להגיע לכל נקודה בכרמל תוך 30-45 דקות, בהתאם לתנאי השטח ועומסי התנועה.</p>
            </div>
            <div>
              <p className="font-bold">אילו עוד שירותים אתם מספקים באזור?</p>
              <p className="text-neutral-400">
                בנוסף לחילוצי בוץ, אנו מציעים <Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles" className="text-blue-400 underline">שירותי גרירה וחילוץ באחוזה</Link> וכן שירותי פינוי גרוטאות כגון <Link href="/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal" className="text-blue-400 underline">פינוי רכבים לפירוק בחיפה והקריות</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl border border-neutral-800">
          <p className="text-sm text-neutral-400">
            <strong>הערה חשובה:</strong> אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. במקרה של רכב ישן שאינו שווה תיקון, ניתן לבדוק אפשרות ל-<Link href="/areas/haifa-general/buy-old-cars-for-scrap-kiryat-yam" className="text-blue-400 underline">מכירת רכב ישן לפירוק בקרית ים</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}