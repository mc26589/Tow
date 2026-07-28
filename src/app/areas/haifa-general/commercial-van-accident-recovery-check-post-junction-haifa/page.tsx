import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

const H1_TITLE = "חילוץ ואן מסחרי בצומת צ'ק פוסט חיפה | הגעה מהירה 24/7";
const SLUG = "commercial-van-accident-recovery-check-post-junction-haifa";
const COMPANY_NAME = "גרר מפרץ אקספרס";

export const metadata: Metadata = {
  title: "חילוץ ואן מסחרי בצומת צ'ק פוסט חיפה | הגעה תוך 30 דקות",
  description: "נתקעתם עם ואן מסחרי בצומת צ'ק פוסט? גרר מפרץ אקספרס מספקים חילוץ מקצועי ומהיר 24/7. שירות אמין ומחיר הוגן לכל רכב מסחרי. התקשרו עכשיו!",
  alternates: {
    canonical: `https://www.yourdomain.com/areas/haifa-general/${SLUG}`,
  },
  openGraph: {
    title: H1_TITLE,
    description: "שירותי גרירה וחילוץ לרכבים מסחריים בצומת צ'ק פוסט חיפה. זמינות 24/7, מחירים הוגנים ושירות מקצועי. חייגו אלינו עכשיו!",
    siteName: COMPANY_NAME,
    locale: 'he_IL',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": COMPANY_NAME,
  "description": "שירותי חילוץ וגרירה 24/7 לרכבים מסחריים לאחר תאונה או תקלה בצומת צ'ק פוסט חיפה.",
  "telephone": BUSINESS_INFO.phone,
  "priceRange": "החל מ-250 ש\"ח",
  "areaServed": { "@type": "Place", "name": "חיפה והצפון" },
  "openingHours": "Mo-Su 00:00-23:59"
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{H1_TITLE}</h1>
          <p className="mt-2 text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            חילוץ מקצועי לרכבים מסחריים לאחר תאונה או תקלה. הגעה מהירה לצומת צ'ק פוסט, שירות אמין ומחיר הוגן.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppCTA cityName="צומת צ'ק פוסט" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-7 py-3.5 font-semibold text-base border border-white/25 hover:bg-white/25 transition-colors">
              📞 התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 py-12">
        <p className="text-lg mb-6 leading-relaxed text-gray-800">
          צומת צ'ק פוסט בחיפה הוא אחד הצמתים העמוסים ביותר בישראל. אם נתקעתם עם רכב מסחרי, אנו מציעים שירות 
          <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600 underline font-bold"> גרירה זולה בצומת צ'ק פוסט</Link> כדי לפנות אתכם בבטחה מהכביש הסואן. 
          למי שמחפש פתרונות מהירים, ניתן להיעזר גם בשירות <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-600 underline">גרירה בכביש 22</Link> המהיר. 
          בנוסף, אם אתם זקוקים לפתרון גרירה באזור, יש לנו גם <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-600 underline">גרירה זולה לצ'ק פוסט והקריות</Link> זמינה 24/7.
        </p>
        
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">מהו זמן ההגעה הממוצע לצומת צ'ק פוסט?</h3>
              <p className="text-gray-700">אנו פועלים באזור חיפה והקריות ומכירים היטב את עומסי התנועה באזור. לרוב נגיע תוך זמן קצר מרגע הקריאה כדי לחלץ את הרכב שלכם בבטחה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים מסחריים כבדים?</h3>
              <p className="text-gray-700">אנו ערוכים לחילוץ ואנים ורכבים מסחריים קלים. לצרכים מורכבים יותר על כביש 22 או כבישים בינעירוניים, ניתן לפנות אלינו לייעוץ טלפוני לפני ההזמנה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מספקים חילוץ במקרים מיוחדים?</h3>
              <p className="text-gray-700">כן, במידה ונתקעתם בשטח או מחוץ לכביש הסלול באזור הצפון, אנו מציעים שירות <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 underline">חילוץ רכב מבוץ באזור הכרמל</Link> במקצועיות רבה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}