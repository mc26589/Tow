import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט חיפה 24/7 | הגעה מהירה - מחיר הוגן",
  description: "נתקעתם בצומת צ'ק פוסט? גרר מפרץ אקספרס מציע שירותי גרירה וחילוץ תאונות 24/7. הגעה תוך דקות, מחיר נוח ושירות אמין. לחילוץ רכבים מקצועי התקשרו עכשיו!",
  alternates: {
    canonical: "https://www.towingrescuehaifa.co.il/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa",
  },
  openGraph: {
    title: "גרר בצומת צ'ק פוסט חיפה 24/7 | הגעה מהירה - מחיר הוגן",
    description: "צריכים גרר בצומת צ'ק פוסט חיפה? שירות גרירה וחילוץ תאונות 24/7. הגעה מהירה, מחיר הוגן ושירות אמין.",
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
            שירותי גרירה וחילוץ מקצועיים בלב הצ'ק פוסט. הגעה מהירה, צוות מנוסה ומחירים ללא תחרות לכל תושבי האזור.
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
          נתקעתם עם הרכב בצומת העמוס בחיפה? ב-<strong className="font-semibold">גרר מפרץ אקספרס</strong> אנו מספקים מענה מיידי למקרים של תאונות דרכים, תקלות מנוע או פנצ'רים. אם אתם זקוקים ל-<Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline font-semibold">שירות גרירה מהיר בצ'ק פוסט</Link> או נתקעתם ב-<Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600 underline">חילוץ רכב מהתעלה בכביש 4</Link>, הצוות שלנו ערוך לכל קריאה. לתשומת לבכם, אנו מתמחים ברכבים פרטיים ומסחריים בלבד ואיננו מספקים שירותי גרירה לאופנועים.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">למה לבחור בנו?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong className="font-semibold">זמינות 24/7:</strong> פריסה רחבה בחיפה, כולל <Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="text-blue-600 underline">גרירה מהירה בכביש 22</Link>.</li>
            <li><strong className="font-semibold">מחירים הוגנים:</strong> פתרונות גרירה משתלמים לכל תקציב.</li>
            <li><strong className="font-semibold">מקצועיות:</strong> צוות מיומן שדואג לרכב שלכם כאילו היה שלו.</li>
            <li><strong className="font-semibold">הגעה מהירה:</strong> שאיפה להגעה תוך זמן קצר מרגע הקריאה.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו לצומת צ'ק פוסט?</h3>
              <p className="text-gray-700">בזכות המיקום האסטרטגי שלנו במפרץ חיפה, אנו שואפים להגיע לכל קריאה בצומת ובסביבתו בזמן הקצר ביותר, בהתאם לעומסי התנועה באזור כביש 4.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים גם מחוץ לצ'ק פוסט?</h3>
              <p className="text-gray-700">בהחלט, אנו מעניקים שירותי גרירה מקיפים לכל אזור הקריות, נשר ומרכז חיפה. זקוקים ל-<Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-600 underline">גרירה בקריות</Link>? אנחנו כאן בשבילכם.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם קונים רכבים לפירוק באזור?</h3>
              <p className="text-gray-700">כן, במידה והרכב במצב גרוטאה, תוכלו להתרשם משירותי <Link href="/areas/haifa-general/cash-for-junk-cars-check-post-haifa" className="text-blue-600 underline">פירוק רכבים בצ'ק פוסט</Link> שאנו מספקים.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}