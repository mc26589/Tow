import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "פינוי רכב לפירוק בקרית ים - הגעה מהירה ומחיר הוגן 24/7",
  description: "צריכים פינוי רכב לפירוק בקרית ים? פינוי מיידי, מקצועי וללא עלות לרכבים ישנים ותקולים. שירות אמין 24/7 באזור הקריות. התקשרו עכשיו לפינוי מהיר!",
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
    "priceRange": "$$,$",
    "serviceType": "Junk car removal and towing"
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכב לפירוק בקרית ים – פינוי מיידי ושירות מקצועי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב לפירוק בקרית ים? אנו מתמחים בפינוי רכבים, רכבים מסחריים ורכבי 4x4. השירות ניתן במהירות ובמקצועיות לכל תושבי האזור. (שימו לב: איננו מפנים אופנועים).</p>
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
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ פינוי מיידי ללא עיכובים מיותרים בכל רחבי קרית ים.</li>
          <li>✓ שירות אדיב ומקצועי לכל סוגי הרכבים (למעט אופנועים).</li>
          <li>✓ הצעת מחיר הוגנת ושקופה כבר בשיחת הטלפון.</li>
          <li>✓ זמינות מלאה 24/7 לכל קריאה של תושבי הצפון והקריות.</li>
        </ul>
        <p className="text-neutral-300">
          אנו משרתים גם אזורים נוספים, כגון <Link href="/areas/haifa-general/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup" className="text-blue-400 underline">פינוי רכב לפירוק בקרית מוצקין</Link> וכן שירותי <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-400 underline">פינוי רכב לפירוק באזור התעשייה קרית ביאליק</Link>.
        </p>
      </section>

      <section className="py-16 bg-neutral-900 container mx-auto px-4 rounded-xl">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכבים</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">תוך כמה זמן תגיעו לפנות את הרכב בקרית ים?</h3>
            <p className="text-neutral-400">אנו מתחייבים לשירות מהיר ואדיב. ברוב המקרים ניתן לבצע פינוי מיידי בתיאום טלפוני.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">האם אתם קונים רכבים ללא טסט?</h3>
            <p className="text-neutral-400">כן, אנו מפנים רכבים ישנים, רכבים תקולים, רכבים ללא טסט ורכבים מושבתים במחיר הוגן.</p>
          </div>
        </div>
      </section>
    </main>
  );
}