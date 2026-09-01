import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 22 (עוקף קריות) | הגעה מהירה 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? אנו מציעים שירותי גרירה מקצועיים, מחיר הוגן והגעה מהירה בכל שעה. לכל סוגי הרכבים הקלים - התקשרו עכשיו לשירות אמין!",
  alternates: {
    canonical: "https://yourdomain.com/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חירום חיפה והקריות",
    "description": "שירותי גרירת חירום לרכבים קלים ומסחריים בכביש 22 (עוקף קריות) ובכל אזור חיפה והקריות, 24/7.",
    "url": "https://yourdomain.com/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "₪₪",
    "areaServed": { "@type": "Place", "name": "חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": 32.818, "longitude": 35.007 },
    "serviceType": ["גרירת רכבים", "חילוץ מהיר", "שירותי דרך"],
    "provider": { "@type": "Organization", "name": "שירותי גרירה וחילוץ חירום חיפה והקריות", "url": "https://yourdomain.com" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">גרירת רכב קל בכביש 22 (עוקף קריות) – זמינות 24/7</h1>
          <p className="text-xl md:text-2xl mb-8">נתקעתם עם הרכב על כביש 22? הצוותים שלנו פרוסים באזור ומגיעים תוך דקות ספורות. זקוקים גם ל<Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="underline">גרירת חירום במחלף קריית אתא</Link>? אנחנו כאן בשבילכם.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition">התקשרו עכשיו</a>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בשירותי הגרירה שלנו?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div><h3 className="text-2xl font-semibold mb-4">מענה מהיר 24/7</h3><p>פריסה אסטרטגית מאפשרת לנו להגיע לכל נקודה בכביש 22 ובאזור חיפה והקריות במהירות שיא.</p></div>
            <div><h3 className="text-2xl font-semibold mb-4">ציוד מתקדם</h3><p>אנו מפעילים צי גוררים חדיש לטיפול בטוח ברכבכם. אם נתקעתם עם רכב חשמלי, ניתן להזמין <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="underline">סיוע לרכב חשמלי בכביש 22</Link> במקצועיות מלאה.</p></div>
            <div><h3 className="text-2xl font-semibold mb-4">טיפול בתקלות דרך</h3><p>לעיתים אין צורך בגרירה מלאה, אלא רק ב<Link href="/areas/haifa-general/fast-towing-flat-tire-road-22-check-post" className="underline">שירות תיקון פנצ'ר בצ'ק פוסט</Link> או החלפת מצבר מהירה.</p></div>
            <div><h3 className="text-2xl font-semibold mb-4">מחיר הוגן</h3><p>אנו מאמינים בשקיפות מלאה ובמחיר הוגן ללא הפתעות, במיוחד במצבי חירום בכביש עוקף קריות.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div><h4 className="font-bold">מהו אזור הפעילות שלכם בכביש 22?</h4><p>אנו מכסים את כל אורכו של כביש 22 (עוקף קריות), ממחלף קריית אתא ועד חיפה והצ'ק פוסט.</p></div>
            <div><h4 className="font-bold">האם אתם מספקים גרירה גם לאחר תאונה?</h4><p>כן, אנו מתמחים ב<Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="underline">גרירה לאחר תאונות בכביש 22</Link> תוך שמירה על בטיחות מקסימלית לרכבכם.</p></div>
            <div><h4 className="font-bold">כמה זמן לוקח לכם להגיע?</h4><p>זמן ההגעה משתנה בהתאם לעומסי התנועה, אך הצוותים שלנו נמצאים תמיד בקרבת מקום כדי לקצר את ההמתנה.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}