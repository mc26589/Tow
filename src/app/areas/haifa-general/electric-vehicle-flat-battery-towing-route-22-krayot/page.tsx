import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import Script from 'next/script';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22: חילוץ מקצועי תוך 30 דקות | 24/7",
  description: "נתקעתם ללא סוללה בכביש 22? אנו מספקים גרירת רכב חשמלי מומחית על פלטפורמה, מהקריות לצק פוסט במחיר הוגן. זמינות 24/7, התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "גרירת רכב חשמלי בכביש 22 והקריות",
    "description": "שירותי גרירת רכב חשמלי דחופים בכביש 22, הקריות וצומת צק פוסט. פלטפורמה ייעודית לרכבי EV ללא נזק.",
    "url": `https://yourdomain.com/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot`,
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": { "@type": "Place", "name": "כביש 22, קריות, חיפה, צק פוסט" }
  };

  return (
    <>
      <Script id="json-ld-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי בכביש 22 - חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם ללא סוללה בכביש 22? אנו מספקים שירותי גרירה מקצועיים לרכבים חשמליים באמצעות פלטפורמה בלבד, לשמירה מלאה על המצבר ומערכות הרכב שלכם.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full">התקשרו עכשיו לחילוץ: {BUSINESS_INFO.phone}</a>
            <WhatsAppCTA cityName="הקריות" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">שירותי גרירה לרכב חשמלי בכביש 22 והקריות</h2>
            <p className="mb-4">
              נתקעתם באמצע הדרך? אנו מומחים במתן <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-300 underline">שירותי גרירה דחופים וזולים בצק פוסט</Link> ובציר כביש 22. אם אתם זקוקים לחילוץ מקצועי, ניתן להסתייע ב-<Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-300 underline">גרירת רכב בכביש 22 עוקף קריות</Link>. אנו משתמשים בציוד ייעודי לרכבים חשמליים למניעת נזק. אם אתם תקועים בדרך ללא סוללה, אנו כאן לשירותכם עם פלטפורמות חדישות.
            </p>
          </section>

          <section className="mb-16 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">שאלות נפוצות: גרירת רכב חשמלי בצפון</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">למה חשוב לגרור רכב חשמלי רק על פלטפורמה?</h3>
                <p>גרירת רכב חשמלי בשיטה של גלגלים על הכביש עלולה לפגוע במערכת ההנעה הרגנרטיבית. אנו מקפידים על גרירה בטוחה על פלטפורמה בלבד כדי להגן על המערכות האלקטרוניות הרגישות.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">האם אתם נותנים שירות גם באזורים נוספים?</h3>
                <p>כן, אנו פעילים בפריסה רחבה. ניתן להזמין <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-300 underline">שירותי גרירה דחופים בכביש עוקף קריות</Link> או לבצע <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik-road-22" className="text-blue-300 underline">גרירה לגריטה בקריית ביאליק</Link> במידת הצורך.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">מהו טווח המחירים לגרירת רכב חשמלי?</h3>
                <p>המחיר נקבע לפי מרחק הגרירה, שעת הקריאה ומיקום הרכב. אנו מציעים שירות שקוף, הוגן ומקצועי. לבעלי רכבים ישנים שאינם נוסעים, אנו מספקים גם שירותי <Link href="/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין" className="text-blue-300 underline">פינוי רכב גרוטאה לחלפים בקריית מוצקין</Link>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}