import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "פינוי רכב לפירוק בקרית ים | הגעה תוך 30 דקות | תשלום במזומן",
  description: "פינוי רכב לפירוק בקרית ים 24/7. משלמים במזומן על רכבים ישנים, לאחר תאונה או ללא טסט. שירות מהיר, אמין ומקצועי לתושבי הקריות. התקשרו עכשיו לפינוי מיידי!",
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
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכב לפירוק בקרית ים – הגעה מהירה 24/7</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן? זקוקים לפינוי רכב לפירוק בקרית ים? אנו מתמחים בפינוי מהיר של רכבים פרטיים ומסחריים במזומן. הגעה מהירה לכל שכונות העיר ללא עיכובים.</p>
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
        <h2 className="text-3xl font-bold mb-6">למה לבחור בשירות פינוי הרכב שלנו בקרית ים?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ <strong>זמינות מלאה</strong> – אנחנו כאן עבורכם בכל שעה בקרית ים.</li>
          <li>✓ <strong>פינוי מהיר</strong> – צוות מיומן המגיע לכל נקודה בעיר במהירות.</li>
          <li>✓ <strong>מחיר הוגן</strong> – אנו משלמים מחיר הוגן עבור הרכב שלכם במקום במזומן.</li>
          <li>✓ <strong>שירות מקצועי</strong> – גרירה זהירה ובטוחה לכל סוגי הרכבים.</li>
        </ul>
        <p className="text-neutral-300">
          אנו מספקים מענה מקיף לתושבי האזור, לרבות <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-400 underline">קניית רכבים לפירוק באזור חיפה והקריות</Link>. זקוקים לעזרה בדרכים? אנו מציעים גם <Link href="/areas/haifa-general/scrap-car-removal-kiryat-haim-cash" className="text-blue-400 underline">פינוי רכבים לפירוק בקרית חיים</Link> וסיוע בפינוי רכבים מכל סוג. שימו לב: שירותי הגרירה שלנו מיועדים לרכבים פרטיים ומסחריים בלבד.
        </p>
      </section>

      <section className="py-16 bg-neutral-900 container mx-auto px-4 rounded-xl">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכבים בקרית ים</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">האם אתם קונים רכבים ללא טסט?</h3>
            <p className="text-neutral-400">כן, אנו רוכשים ומפנים רכבים ללא טסט, רכבים מושבתים אחרי תאונות, ורכבים ישנים שאינם נוסעים במחיר הוגן.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">איך נקבע המחיר לפינוי הרכב?</h3>
            <p className="text-neutral-400">המחיר נקבע בהתאם לסוג הרכב, הדגם, המצב המכני והקרבה לאזור הפינוי בקרית ים. אנו מתחייבים להצעת מחיר שקופה ללא הפתעות.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">האם אתם מגיעים לכל חלקי קרית ים?</h3>
            <p className="text-neutral-400">בהחלט. הצוות שלנו פרוס באזור ומגיע לכל רחוב ושכונה בקרית ים וסביבתה בזמן קצר, גם בשעות הלילה.</p>
          </div>
        </div>
      </section>
    </main>
  );
}