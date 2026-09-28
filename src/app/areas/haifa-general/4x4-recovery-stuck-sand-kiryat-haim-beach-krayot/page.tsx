import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ 4x4 בחוף קרית חיים | תקועים בחול? הגעה מהירה ב-30 דקות',
  description: 'נתקעתם עם רכב השטח בחולות חוף קרית חיים? צוות חילוץ 4x4 מקצועי זמין 24/7. מחיר הוגן, ציוד חילוץ מתקדם והגעה תוך 30 דקות. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'חילוץ 4x4 מקצועי בחוף קרית חיים',
    'description': 'שירותי חילוץ מהירים לרכבי 4x4 שנתקעו בחולות חוף קרית חיים והסביבה. זמינות מלאה 24/7.',
    'url': `https://yourdomain.com/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot`,
    'telephone': `+${BUSINESS_INFO.phone}`,
    'priceRange': 'החל מ-300 ש"ח',
    'areaServed': { '@type': 'Place', 'name': 'חיפה והקריות' },
    'openingHoursSpecification': { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59' },
    'geo': { '@type': 'GeoCoordinates', 'latitude': 32.819, 'longitude': 35.050 },
    'serviceType': ['חילוץ רכב 4x4', 'חילוץ רכב שטח', 'חילוץ רכב תקוע בחול']
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">חילוץ רכב 4x4 תקוע בחול בחוף קרית חיים</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">נתקעתם עם רכב השטח בחולות? צוות החילוץ שלנו זמין 24/7 להוצאת רכבי 4x4 מחוף קרית חיים והסביבה. מענה מהיר, מחיר הוגן וציוד חילוץ מקצועי.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-600">התקשרו עכשיו לחילוץ מהיר!</a>
            <WhatsAppCTA cityName="הקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">למה לבחור בנו לחילוץ רכב השטח שלכם בקריות?</h2>
          <p className="mb-6">אנו מתמחים בחילוצי 4x4 מורכבים. אם נתקעתם בחוף קרית חיים, אנו כאן כדי לסייע במהירות. אנו מציעים גם פתרונות נוספים כגון <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-yellow-400 underline">גרירה דחופה בקרית ביאליק</Link> ואף <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-yellow-400 underline">שירותי גרירה מקצועיים באזור צומת צ'ק פוסט</Link>.</p>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">שירותים משלימים באזור הקריות</h3>
            <div className="space-y-2">
              <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="block text-yellow-400 underline">חילוץ וגרירת משאיות קלות בכביש 22 עוקף קריות</Link>
              <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="block text-yellow-400 underline">חילוץ רכבי 4x4 בבוץ באזור הכרמל</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על חילוץ רכב בחול</h2>
          <div className="space-y-6">
            <div><h3 className="font-bold text-yellow-400">תוך כמה זמן תגיעו לחוף קרית חיים?</h3><p>אנו מגיעים תוך 30 עד 45 דקות מרגע הקריאה, בהתאם לעומסי התנועה בצירים המובילים לחוף.</p></div>
            <div><h3 className="font-bold text-yellow-400">מה טווח המחירים לחילוץ בחול?</h3><p>המחיר נקבע לפי רמת הקושי, סוג הרכב והציוד הנדרש. אנו מבטיחים מחיר הוגן ושקוף ללא הפתעות.</p></div>
            <div><h3 className="font-bold text-yellow-400">האם אתם מחלצים רכבים פרטיים?</h3><p>התמחותנו היא בחילוצי שטח מורכבים. אנו מעניקים שירותי גרירה לרכבים פרטיים בכל האזור, אך לא נותנים מענה לאופנועים.</p></div>
            <div><h3 className="font-bold text-yellow-400">באילו עוד אזורים אתם פועלים?</h3><p>מעבר לחילוצים בחוף, אנו פעילים בכל רחבי חיפה והקריות, כולל אזורי התעשייה וצירים מרכזיים כמו כביש 22.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}