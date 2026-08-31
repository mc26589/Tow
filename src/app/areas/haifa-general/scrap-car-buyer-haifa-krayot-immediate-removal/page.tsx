import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי 24/7',
  description: 'נתקעתם עם רכב ישן? קונה רכבים לפירוק בחיפה והקריות עם שירות פינוי מהיר, הוגן ומקצועי. זמינות 24/7 לכל סוגי הרכבים. התקשרו עכשיו לקבלת הצעת מחיר!',
  alternates: {
    canonical: '/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'האם אתם מפנים רכבים לפירוק גם באזור הקריות?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'כן, אנו מספקים שירותי פינוי רכבים מהירים לכל אזור הקריות, כולל חיפה, קרית ביאליק, קרית אתא, קרית מוצקין וקרית ים.' }
      },
      {
        '@type': 'Question',
        'name': 'האם אתם קונים גם אופנועים?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'לא, אנו מתמקדים בפינוי וקניית רכבים בעלי 4 גלגלים ומעלה בלבד. איננו מטפלים באופנועים.' }
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנחנו כאן בשבילכם 24/7 עם שירות מהיר, אמין ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים לפירוק ללא תחרות</h2>
          <p className="mb-4">
            אנו מתמחים בקניית רכבים לפירוק בחיפה והקריות. בין אם אתם זקוקים ל-<Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="underline">פינוי באזור התעשייה בקרית ביאליק</Link> או לשירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="underline">רכבים לפירוק באחוזה חיפה</Link>, אנו מציעים מענה מיידי.
          </p>
          <p className="mb-4"><strong>הערה חשובה:</strong> השירות שלנו מיועד לרכבים בעלי 4 גלגלים ומעלה בלבד. אנו לא מטפלים באופנועים.</p>
          <ul className="list-disc list-inside space-y-2 mt-6">
            <li>פינוי מיידי מהשטח</li>
            <li>הצעת מחיר הוגנת בטלפון</li>
            <li>זמינות מלאה 24/7 באזור חיפה והקריות</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על פינוי רכבים</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">מהו תהליך פינוי הרכב?</h3>
              <p>התהליך פשוט: אתם מתקשרים, מקבלים הצעת מחיר הוגנת, ואנו מגיעים עם גרר לפנות את הרכב בבטחה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}