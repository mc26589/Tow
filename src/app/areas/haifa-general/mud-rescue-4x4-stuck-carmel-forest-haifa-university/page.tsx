import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ שטח 4x4 ביערות הכרמל חיפה | חילוץ מהיר 24/7',
  description: 'נתקעתם בבוץ באזור אוניברסיטת חיפה? חילוץ שטח 4x4 מקצועי ביערות הכרמל. הגעה מהירה, ציוד חילוץ מתקדם ומחיר הוגן. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/mud-rescue-4x4-stuck-carmel-forest-haifa-university',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי חילוץ שטח חיפה והקריות',
    'areaServed': 'Haifa and Krayot',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7625',
      'longitude': '35.0150',
    },
    'priceRange': '₪',
    'serviceType': '4x4 Mud Rescue and Off-road Recovery',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ שטח 4x4 בבוץ: תקועים ביערות הכרמל ליד אוניברסיטת חיפה?</h1>
          <p className="text-lg mb-8">
            נתקעתם בבוץ באזור יערות הכרמל? הצוות המקצועי שלנו מתמחה ב-<Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="underline">חילוץ שטח 4x4</Link> ורכבים מסחריים בתנאי שטח קשים. 
            אנו מגיעים במהירות לכל נקודה באזור אוניברסיטת חיפה והסביבה. 
            חשוב לציין: אנו מתמחים ברכבים ורכבי שטח בלבד ואיננו מספקים שירותי חילוץ לאופנועים.
          </p>
          <div className="flex flex-col gap-4 max-w-sm">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black font-bold py-4 px-6 rounded-lg text-center hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ ביערות הכרמל?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות 24/7 לכל קריאת חילוץ בשטח.</li>
          <li>ציוד חילוץ מתקדם המותאם לבוץ עמוק ותנאי שטח מאתגרים.</li>
          <li>ניסיון רב בחילוץ רכבי 4x4 באזור הכרמל.</li>
          <li>מחירים הוגנים ושירות אדיב ומקצועי.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוצי שטח בחיפה</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">כמה זמן לוקח לכם להגיע ליערות הכרמל?</h3>
            <p>אנחנו ממוקמים בחיפה והקריות, לרוב מגיעים לאזור האוניברסיטה ויערות הכרמל תוך זמן קצר מאוד, בהתאם לעומסי התנועה ותנאי השטח.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים גם רכבים פרטיים רגילים?</h3>
            <p>כן, אנו מספקים גם שירותי גרירה לרכבים פרטיים. ניתן לקרוא עוד על <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600">שירותי גרירה בחיפה</Link> שלנו במידת הצורך.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
