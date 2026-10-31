import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'קונה רכבים לפירוק באחוזה חיפה | פינוי מהיר תוך 30 דקות | מזומן',
  description: 'מוכרים רכב לפירוק באחוזה חיפה? אנו קונים רכבים מכל הסוגים במחיר הוגן ותשלום במזומן. שירות פינוי מהיר, אמין ומקצועי. התקשרו עכשיו לתיאום פינוי!',
  alternates: {
    canonical: 'https://yourdomain.com/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי קניית רכבים לפירוק באחוזה חיפה',
    'description': 'שירות מקצועי לקניית רכבים לפירוק באחוזה חיפה, רכבים ישנים, תקולים או לאחר תאונה במחיר הוגן.',
    'url': 'https://yourdomain.com/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa',
    'telephone': `+${BUSINESS_INFO.phone}`,
    'areaServed': ['חיפה', 'אחוזה', 'מרכז הכרמל', 'חיפה והסביבה'],
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 32.7940,
      'longitude': 34.9896
    },
    'priceRange': 'מחיר הוגן',
    'serviceType': ['רכישת רכבים לפירוק', 'גריטת רכבים', 'פינוי רכבים ללא טסט']
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'תוך כמה זמן אתם מגיעים לפנות רכב לפירוק באחוזה?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'אנו מספקים שירות זמין ומהיר באחוזה. ברוב המקרים ניתן לתאם פינוי עוד באותו היום, ולעיתים קרובות אנו מגיעים תוך 30 דקות.' }
      },
      {
        '@type': 'Question',
        'name': 'האם אתם קונים גם רכבים ללא טסט?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'כן, אנו קונים כל סוגי הרכבים כולל רכבים ללא טסט, רכבים מושבתים, רכבים תקולים או כאלה שעברו תאונה.' }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">קונה רכבים לפירוק באחוזה חיפה – תשלום במזומן ופינוי מיידי</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            מחפשים שירות מקצועי לקניית רכבים לפירוק באחוזה? אנו מציעים מענה מהיר, מחיר הוגן ותשלום במזומן לכל סוגי הרכבים, כולל רכבים ישנים ותקולים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">התקשרו עכשיו</a>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 text-gray-800">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">למה לבחור בנו לפינוי רכבים באחוזה?</h2>
          <p className="mb-4">אנו מבינים את הצורך בפינוי מהיר של רכבים ישנים ותקולים מהחניה. לצד שירות פירוק הרכבים, אנו מספקים מענה מקצועי באזור הכרמל. זקוקים לעזרה בדרך? אנו מציעים שירות <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="text-blue-600 underline">גרירה דחופה בחורב ואחוזה</Link> ופתרונות נוספים למקרים של תקלות רכב בלתי צפויות.</p>
          <p>הצוות שלנו זמין עבורכם לכל צורך, בין אם מדובר ברכישת גרוטאות או בסיוע טכני דחוף כגון <Link href="/areas/haifa-general/towing-service-heavy-motorcycle-stuck-ahuzah-haifa" className="text-blue-600 underline">שירות גרירה לרכב שנתקע באחוזה</Link>.</p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות בנושא פירוק רכבים באחוזה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">באילו אזורים נוספים אתם פעילים?</h3>
              <p>אנו פרוסים בכל חיפה והקריות, כולל שירותים כמו <Link href="/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין" className="text-blue-600 underline">פינוי רכב גרוטאה לחלפים בקריית מוצקין</Link> ופריסה רחבה בצירים המרכזיים.</p>
            </div>
            <div>
              <h3 className="font-bold">איך מתבצע התשלום עבור הרכב?</h3>
              <p>התשלום מתבצע במקום במזומן, מיד עם פינוי הרכב על ידי צוות הגרירה המקצועי שלנו, לאחר הערכת שווי הרכב.</p>
            </div>
            <div>
              <h3 className="font-bold">מה עושים במקרה של רכב תקוע באזור הכרמל?</h3>
              <p>אם הרכב תקוע ולא ניתן להזיזו, אנו מספקים פתרונות מקצועיים. למידע נוסף על חילוצים באזור, ניתן לבדוק אפשרויות כגון <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="text-blue-600 underline">חילוץ רכב באזור יערות הכרמל ודניה</Link>.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}