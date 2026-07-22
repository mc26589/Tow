import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט חיפה 24/7 | חילוץ תאונות מקצועי ומהיר",
  description: "צריכים גרר בצומת צ'ק פוסט חיפה? שירות גרירה וחילוץ תאונות 24/7. הגעה מהירה, מחיר הוגן ושירות אמין. לחילוץ רכבים וגרירה מקצועית התקשרו עכשיו!",
  alternates: {
    canonical: "https://www.towingrescuehaifa.co.il/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa",
  },
  openGraph: {
    title: "גרר בצומת צ'ק פוסט חיפה 24/7 | חילוץ תאונות מקצועי ומהיר",
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
            שירותי גרירה וחילוץ מהירים בלב הצ'ק פוסט. הגעה מהירה, שירות אמין ומחירים נוחים לכל תושבי האזור.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppCTA cityName="אזור צ'ק פוסט" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-7 py-3.5 font-semibold text-base border border-white/25 hover:bg-white/25 transition-colors w-full sm:w-auto justify-center">
              📞 התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 py-12">
        <p className="text-lg mb-4 leading-relaxed font-rubik text-gray-800">
          נתקעתם עם הרכב בצומת העמוס בחיפה? ב-<strong className="font-semibold">גרר מפרץ אקספרס</strong> אנו מספקים מענה מהיר למקרים של תאונות וקלקולי מנוע. אם אתם מחפשים <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-600 underline font-semibold">שירות גרירה מהיר בצ'ק פוסט</Link> או זקוקים לפתרון זול, אנו כאן לשירותכם. לתשומת לבכם, אנו מתמחים ברכבים פרטיים ומסחריים ואיננו מספקים שירותי גרירה לאופנועים.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">למה לבחור בנו?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong className="font-semibold">זמינות 24/7:</strong> שירות גרירה מסביב לשעון באזור חיפה והקריות.</li>
            <li><strong className="font-semibold">מחירים הוגנים:</strong> פתרונות גרירה משתלמים כמו ב-<Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">שירות גרירה לצ'ק פוסט</Link>.</li>
            <li><strong className="font-semibold">מקצועיות:</strong> טיפול זהיר ומיומן ברכב שלכם.</li>
            <li><strong className="font-semibold">הגעה מהירה:</strong> צוותים פרוסים לזמני הגעה קצרים.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו לצומת צ'ק פוסט?</h3>
              <p className="text-gray-700">בזכות המיקום המרכזי שלנו, אנו שואפים להגיע לכל קריאה באזור הצ'ק פוסט במהירות האפשרית, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים גם באזור הקריות הסמוך?</h3>
              <p className="text-gray-700">בהחלט, אנו מספקים שירותי גרירה מלאים לכל אזור חיפה, הקריות, נשר והסביבה.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}