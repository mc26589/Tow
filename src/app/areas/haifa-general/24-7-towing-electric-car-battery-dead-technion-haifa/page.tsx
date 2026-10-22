import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בטכניון חיפה | חילוץ 24/7 | הגעה תוך 30 דקות",
  description: "נתקע רכב חשמלי בטכניון? גרר מקצועי 24/7 זמין להגעה מהירה לקמפוס. שירות מומחה לרכבים חשמליים, ללא נזק ובמחיר הוגן. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/24-7-towing-electric-car-battery-dead-technion-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "כמה זמן לוקח לגרר להגיע לקמפוס הטכניון?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "אנו מפעילים צי גרריסטים בפריסה רחבה בחיפה, מה שמאפשר לנו להגיע לכל חניוני הטכניון תוך זמן קצר מרגע הקריאה, גם בשעות הלילה ובסופי השבוע."
        }
      },
      {
        "@type": "Question",
        "name": "האם אתם גוררים רכבים חשמליים ללא נזק?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן, אנו מתמחים בחילוץ רכבים חשמליים ומצוידים בציוד המתאים למניעת נזק למערכות הסוללה והחשמל, תוך עבודה מדויקת לפי הנחיות היצרן."
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה 24/7 לרכב חשמלי בטכניון חיפה</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בטכניון עם רכב חשמלי שהסוללה התרוקנה? אנו מספקים חילוץ מקצועי, מהיר ובמחיר הוגן. 
            זקוקים לעזרה נוספת באזור? אנו מציעים גם <Link href="/areas/haifa-general/mud-rescue-4x4-carmel-forest-haifa" className="underline">חילוץ רכב תקוע בבוץ בכרמל</Link> או <Link href="/areas/haifa-general/towing-service-bat-galim-haifa" className="underline">שירותי גרירה באזור בת גלים</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="טכניון חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בטכניון ובאזור הכרמל?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✅ זמינות מלאה 24 שעות ביממה לסטודנטים ואנשי סגל בכל אזור הקמפוס.</li>
          <li>✅ מומחיות טכנית בטיפול במערכות רכב חשמלי ורכבים מודרניים.</li>
          <li>✅ ניסיון רב בחילוץ וגרירה בחיפה, כולל <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600">חילוץ מהיר בצומת הצ\'ק פוסט</Link>.</li>
          <li>✅ פתרונות מקצועיים ל-<Link href="/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal" className="text-blue-600">פינוי רכב תקול או גריטה בחיפה והקריות</Link>.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <p><strong>האם אתם מגיעים לכל אזור הטכניון?</strong> אנו מגיעים לכל החניונים והצירים בתוך הקמפוס במהירות, גם כשמדובר בחילוץ מורכב בדרך אל הלימודים או מהם.</p>
          <p className="mt-2"><strong>צריך לחלץ רכב בדרך חזרה מהטכניון לכיוון הקריות?</strong> אנו זמינים גם ל-<Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600">חילוץ רכב לאחר תאונה בכביש 22 עוקף קריות</Link>.</p>
          <p className="mt-2"><strong>איך מזמינים?</strong> לחצו על כפתור הוואטסאפ או התקשרו למספר המופיע באתר – הצוות שלנו בדרך אליכם.</p>
        </div>
      </section>
    </main>
  );
}