import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט חיפה 24/7 | הגעה תוך 30 דקות - שירות אמין",
  description: "נתקעתם בצומת צ'ק פוסט? גרר מפרץ אקספרס מספק גרירה וחילוץ תאונות 24/7. הגעה מהירה, מחיר הוגן ומקצועיות ללא פשרות. לכל סוגי הרכבים התקשרו עכשיו!",
  alternates: {
    canonical: "https://www.towingrescuehaifa.co.il/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa",
  },
  openGraph: {
    title: "גרר בצומת צ'ק פוסט חיפה 24/7 | הגעה תוך 30 דקות",
    description: "צריכים גרר בצומת צ'ק פוסט? שירות גרירה וחילוץ תאונות 24/7 עם הגעה מהירה ומחיר הוגן. התקשרו עכשיו!",
    url: "https://www.towingrescuehaifa.co.il/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa",
    siteName: "Towing Rescue Haifa",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            גרירת חילוץ תאונות 24/7 בצומת צ'ק פוסט חיפה
          </h1>
          <p className="mt-2 text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            שירותי גרירה וחילוץ מקצועיים בלב הצ'ק פוסט. הגעה מהירה לכל תאונה או תקלה, צוות מנוסה ומחירים ללא תחרות.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppCTA cityName="צומת צ'ק פוסט" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-7 py-3.5 font-semibold text-base border border-white/25 hover:bg-white/25 transition-colors w-full sm:w-auto justify-center">
              📞 התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 py-12">
        <p className="text-lg mb-4 leading-relaxed font-rubik text-gray-800">
          נתקעתם עם הרכב בצומת העמוס בחיפה? ב-<strong className="font-semibold">גרר מפרץ אקספרס</strong> אנו מספקים מענה מיידי למקרים של תאונות דרכים, תקלות מנוע או פנצ'רים. אם אתם זקוקים ל-<Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">שירות גרירה מהיר בצ'ק פוסט</Link> או נתקעתם בדרכים, הצוות שלנו ערוך לכל קריאה 24/7. אנו מנוסים מאוד בפינוי מהיר לאחר תאונות בכביש 4 ובצירי התנועה הראשיים. לתשומת לבכם, אנו מתמחים ברכבים פרטיים ומסחריים ואיננו מספקים שירותי גרירה לאופנועים.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">למה לבחור בגרר מפרץ אקספרס?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong className="font-semibold">זמינות 24/7:</strong> פריסה רחבה בחיפה, כולל <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירה מהירה בכביש 22</Link>.</li>
            <li><strong className="font-semibold">מחירים הוגנים:</strong> פתרונות גרירה משתלמים ושקופים לכל תקציב.</li>
            <li><strong className="font-semibold">מקצועיות בטיחותית:</strong> חילוץ רכבים מכל סוג תוך שמירה על שלמות הרכב.</li>
            <li><strong className="font-semibold">ניסיון רב:</strong> מומחים בפינוי כלי רכב לאחר תאונות דרכים קשות.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">האם אתם נותנים שירות גם מחוץ לצומת צ'ק פוסט?</h3>
              <p className="text-gray-700">בהחלט. אנו פעילים בכל אזור המפרץ, כולל <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">גרירה בדרכים מרכזיות</Link> כמו כביש 22 וציר ההסתדרות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה עושים אם הרכב מושבת לגמרי?</h3>
              <p className="text-gray-700">במקרים בהם הרכב אינו ראוי עוד לנסיעה, אנו מציעים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה</Link> במזומן ובפינוי מיידי.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים מהשטח?</h3>
              <p className="text-gray-700">אנחנו לא מתמחים בחילוצי שטח מורכבים כמו <Link href="/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa" className="text-blue-600 underline">חילוצי רכב מבוץ ביערות הכרמל</Link>, אך ערוכים לכל תקלה בכבישים סלולים.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}