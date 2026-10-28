import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט 24/7 | הגעה מהירה תוך 30 דקות",
  description: "נתקעתם בצומת צ'ק פוסט? גרר מפרץ אקספרס מציע גרירה וחילוץ 24/7 במחיר הוגן. הגעה מהירה לכל אזור חיפה והצפון. התקשרו עכשיו לסיוע!",
  alternates: {
    canonical: "https://www.towingrescuehaifa.co.il/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa",
  },
  openGraph: {
    title: "גרר בצומת צ'ק פוסט חיפה 24/7 | שירות מהיר ומקצועי",
    description: "זקוקים לגרר בצומת צ'ק פוסט? שירות גרירה וחילוץ תאונות 24/7 במחיר משתלם. הגעה מהירה לכל סוגי הרכבים.",
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
            גרירת וחילוץ תאונות 24/7 בצומת צ'ק פוסט חיפה
          </h1>
          <p className="mt-2 text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            שירותי גרירה מקצועיים בלב הצ'ק פוסט. הגעה מהירה לאחר תאונות או תקלות בצירי התנועה הראשיים של חיפה.
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
          נתקעתם עם הרכב בצומת העמוס בחיפה? בגרר מפרץ אקספרס אנו מספקים מענה מיידי למקרים של תאונות דרכים בכביש 4, תקלות מנוע או פנצ'רים בצומת צ'ק פוסט. אם אתם זקוקים ל- 
          <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">שירותי גרירה זמינים בצ'ק פוסט</Link> או מחפשים 
          <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-600 underline">גרירה זולה בצ'ק פוסט וקריות</Link>, הצוות שלנו ערוך לכל קריאה 24 שעות ביממה. אנו מנוסים מאוד בחילוץ רכבים מתעלות וצידי הדרכים. לתשומת לבכם, אנו מתמחים ברכבים פרטיים ומסחריים ואיננו מספקים שירותי גרירה לאופנועים.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">למה לבחור בגרר מפרץ אקספרס בצ'ק פוסט?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>זמינות 24/7:</strong> פריסה רחבה בחיפה, כולל שירות גרירה מהיר ומקצועי.</li>
            <li><strong>מחירים הוגנים:</strong> פתרון משתלם לכל צורך גרירה, כולל 
              <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-600 underline">גרירת רכב חשמלי בצ'ק פוסט</Link>.
            </li>
            <li><strong>חילוץ מורכב:</strong> מומחים בגרירת רכבים מסחריים וקלים בצירים ראשיים.</li>
            <li><strong>ניסיון רב:</strong> מספקים גם שירותי 
              <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">פינוי רכבים לפירוק בצ'ק פוסט</Link> במזומן.
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">מהו טווח הזמנים להגעה לצומת צ'ק פוסט?</h3>
              <p className="text-gray-700">בזכות המיקום המרכזי שלנו בחיפה, אנו שואפים להגעה מהירה לכל קריאה באזור הצ'ק פוסט, לרוב תוך פחות מ-30 דקות, בהתאם לעומסי התנועה בצירים.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים חשמליים?</h3>
              <p className="text-gray-700">בהחלט. אנו מציעים שירות מותאם לרכבים חשמליים והיברידיים, כולל גרירה בטוחה למוסך המורשה שבחרתם.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו מחיר הגרירה הממוצע בצ'ק פוסט?</h3>
              <p className="text-gray-700">המחיר נקבע לפי מרחק הגרירה וסוג הרכב. אנו מקפידים על מחיר גרירה הוגן ושקוף ללא הפתעות, התקשרו לקבלת הצעת מחיר מדויקת.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
