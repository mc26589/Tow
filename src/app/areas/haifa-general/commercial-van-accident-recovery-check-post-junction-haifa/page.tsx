import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

const H1_TITLE = "חילוץ ואן מסחרי בצומת צ'ק פוסט חיפה | הגעה מהירה 24/7";
const SLUG = "commercial-van-accident-recovery-check-post-junction-haifa";
const COMPANY_NAME = "גרר מפרץ אקספרס";

export const metadata: Metadata = {
  title: H1_TITLE,
  description: "נתקעתם עם ואן מסחרי בצומת צ'ק פוסט? גרר מפרץ אקספרס מציעים חילוץ מקצועי, מחיר הוגן וזמינות 24/7. הגעה תוך זמן קצר לכל סוגי הרכבים המסחריים. התקשרו עכשיו!",
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
  "description": "שירותי חילוץ וגרירה 24/7 לרכבים מסחריים לאחר תאונה בצומת צ'ק פוסט חיפה.",
  "telephone": BUSINESS_INFO.phone,
  "priceRange": "החל מ-250 ש"ח",
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
          צומת צ'ק פוסט בחיפה הוא אחד הצמתים העמוסים בישראל. אם נתקעתם עם רכב מסחרי, אנו מציעים שירות <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600 underline font-bold">חילוץ לאחר תאונה בצ'ק פוסט 24/7</Link> כדי לפנות אתכם בבטחה מהכביש הסואן. בנוסף, אם נתקעתם עם רכב חשמלי באזור, אנו מציעים גם <Link href="/areas/haifa-general/flatbed-towing-electric-car-dead-battery-check-post-haifa" className="text-blue-600 underline">גרירת רכבים חשמליים בצ'ק פוסט</Link> באמצעות משטח.
        </p>
        
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">מהו זמן ההגעה הממוצע לצומת צ'ק פוסט?</h3>
              <p className="text-gray-700">אנחנו ממוקמים בחיפה ומכירים היטב את עומסי התנועה באזור. לרוב נגיע תוך זמן קצר מרגע הקריאה כדי לחלץ את הוואן שלכם בבטחה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים מסחריים כבדים?</h3>
              <p className="text-gray-700">אנו ערוכים לחילוץ ואנים ורכבים מסחריים קלים. לצרכים של גרירת משאיות או כלי רכב כבדים אחרים בדרכים הראשיות כמו כביש 22, ניתן לפנות אלינו לייעוץ טלפוני.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מספקים שירותי גרירה גם במקרים של רכב תקוע בבוץ?</h3>
              <p className="text-gray-700">כן, במידה ונתקעתם מחוץ לכביש הסלול, אנו מספקים גם שירותי <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 underline">חילוץ רכב מבוץ באזור חיפה והכרמל</Link> במקצועיות רבה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}