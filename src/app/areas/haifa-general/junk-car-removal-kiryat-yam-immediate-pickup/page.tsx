import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "פינוי רכב לפירוק בקרית ים - הגעה מהירה 24/7 | מחיר הוגן",
  description: "צריכים פינוי רכב לפירוק בקרית ים? פינוי מיידי, מקצועי ובמחיר הוגן לכל סוגי הרכבים. זמינים 24/7 לתושבי הקריות. התקשרו עכשיו לפינוי מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/junk-car-removal-kiryat-yam-immediate-pickup"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים בקרית ים",
    "areaServed": { "@type": "City", "name": "Kiryat Yam" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.835", "longitude": "35.071" },
    "priceRange": "$$$",
    "serviceType": "Junk car removal"
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכב לפירוק בקרית ים – פינוי מיידי ושירות אמין</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן? זקוקים לפינוי רכב לפירוק בקרית ים? אנו מתמחים בפינוי מהיר של רכבים, רכבים מסחריים ורכבי 4x4. הגעה מהירה לכל נקודה בעיר.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors text-center"
            >
              חיוג מהיר לנציג
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בשירות פינוי הרכב שלנו?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ <strong>זמינות 24/7</strong> – אנחנו כאן עבורכם בכל שעה בקרית ים.</li>
          <li>✓ <strong>פינוי מהיר</strong> – הגעה תוך זמן קצר לכל שכונות העיר.</li>
          <li>✓ <strong>מחיר הוגן</strong> – תשלום הוגן על הרכב שלכם במקום.</li>
          <li>✓ <strong>מקצועיות</strong> – צוות מנוסה עם ציוד גרירה מתקדם.</li>
        </ul>
        <p className="text-neutral-300">
          צריכים עזרה נוספת? אנו מציעים גם <Link href="/areas/haifa-general/flat-tire-roadside-assistance-kiryat-yam-beach" className="text-blue-400 underline">סיוע בדרכים והחלפת גלגל בקרית ים</Link> וכן שירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-haifa-krayot" className="text-blue-400 underline">קניית רכבים לפירוק באזור חיפה והקריות</Link>. שימו לב: השירות אינו כולל גרירת אופנועים.
        </p>
      </section>

      <section className="py-16 bg-neutral-900 container mx-auto px-4 rounded-xl">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכבים</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">האם אתם קונים רכבים ללא טסט או רכבים מושבתים?</h3>
            <p className="text-neutral-400">בהחלט. אנו רוכשים ומפנים רכבים ללא טסט, רכבים אחרי תאונות, ורכבים ישנים שסיימו את חייהם על הכביש.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">מה טווח המחירים של פינוי רכב לפירוק?</h3>
            <p className="text-neutral-400">המחיר נקבע לפי סוג הרכב, דגם, והמרחק מהגרירה. צרו איתנו קשר לקבלת הצעת מחיר הוגנת ושקופה בטלפון.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">האם אתם מגיעים גם לאזורי התעשייה בקריות?</h3>
            <p className="text-neutral-400">כן, אנו נותנים שירות מלא בכל אזורי התעשייה בקרית ים, קרית ביאליק וקרית מוצקין.</p>
          </div>
        </div>
      </section>
    </main>
  );
}