import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

const H1_TITLE = "חילוץ ואן מסחרי לאחר תאונה בצומת צ'ק פוסט חיפה | 24/7";
const SLUG = "commercial-van-accident-recovery-check-post-junction-haifa";
const COMPANY_NAME = "גרר מפרץ אקספרס";

export const metadata: Metadata = {
  title: H1_TITLE,
  description: "נתקעתם עם ואן מסחרי בצומת צ'ק פוסט? גרר מפרץ אקספרס מציעים שירות חילוץ מקצועי ומהיר 24/7. הגעה תוך זמן קצר, מחיר הוגן ושירות מוסמך. התקשרו עכשיו!",
  alternates: {
    canonical: `https://www.yourdomain.com/areas/haifa-general/${SLUG}`,
  },
  openGraph: {
    title: H1_TITLE,
    description: "שירותי גרירה וחילוץ לרכבים מסחריים ופרטיים בחיפה. זמינות 24/7, הגעה מהירה לצומת צ'ק פוסט והסביבה. התקשרו עכשיו למענה מהיר!",
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
            חילוץ מקצועי לרכבים מסחריים לאחר תאונה. הגעה מהירה לצומת צ'ק פוסט, שירות אמין ומחיר הוגן.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppCTA cityName="אזור חיפה והצ'ק פוסט" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-7 py-3.5 font-semibold text-base border border-white/25 hover:bg-white/25 transition-colors">
              📞 התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 py-12">
        <p className="text-lg mb-6 leading-relaxed text-gray-800">
          צומת צ'ק פוסט בחיפה הוא עורק תחבורה ראשי. אם נתקעתם עם רכב מסחרי, אנו מציעים שירות <Link href="/areas/haifa-general/urgent-towing-commercial-van-check-post-route-22" className="text-blue-600 underline">גרירה דחוף לרכבים מסחריים</Link> כדי לפנות אתכם בבטחה מהכביש הסואן. אנו מציעים גם פתרונות גרירה למקרים נוספים כמו <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">גרירה במחיר משתלם בצ'ק פוסט</Link>.
        </p>
        
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">מהו זמן ההגעה הממוצע לצומת צ'ק פוסט?</h3>
              <p className="text-gray-700">אנחנו ממוקמים בחיפה ומכירים את עומסי התנועה באזור. לרוב נגיע תוך זמן קצר מרגע הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים מסחריים כבדים?</h3>
              <p className="text-gray-700">כן, אנו ערוכים לחילוץ ואנים ורכבים מסחריים קלים. לצרכים אחרים, ניתן לבדוק גם <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת משאיות קלות בכביש 22</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}