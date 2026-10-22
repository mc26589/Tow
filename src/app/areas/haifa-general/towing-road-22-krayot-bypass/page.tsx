import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר בכביש 22 עוקף קריות | חילוץ מהיר 30 דקות | מחיר הוגן',
  description: 'נתקעתם בכביש 22? גרר מקצועי זמין 24/7 באזור עוקף קריות. הגעה מהירה, שירות אמין ומחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו לחילוץ בטוח!',
  alternates: {
    canonical: '/areas/haifa-general/towing-road-22-krayot-bypass',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה בכביש 22 - עוקף קריות',
    'description': 'שירותי גרירה וחילוץ רכבים מקצועיים בכביש 22 (עוקף קריות) והסביבה.',
    'areaServed': 'Haifa and Krayot',
    'priceRange': 'הוגן ומשתלם',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.8156',
      'longitude': '35.0653',
    },
    'serviceType': 'Emergency Roadside Assistance and Towing',
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר בכביש 22 עוקף קריות - חילוץ 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות הגרר שלנו מגיע במהירות לכל נקודה בכביש 22 לחילוץ מקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="כביש 22 עוקף קריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מהירים בכביש 22 עוקף קריות</h2>
        <p className="mb-4">זקוקים לעזרה בדרך? אנו מספקים פתרונות גרירה וחילוץ מקצועיים לרכבים פרטיים ומסחריים לאורך כביש 22. אם אתם מחפשים שירות אמין, ניתן לבדוק גם את <Link href="/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22" className="text-blue-600 underline">שירותי גרירה וחילוץ בקריות ובכביש 22</Link> או לשירות ייעודי באזור הצומת, ראו <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">גרר לאחר תאונה בכביש 22</Link>.</p>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים, רכבים מסחריים ורכבי ארבע על ארבע. אנו דוגלים בשקיפות מלאה ומחיר הוגן לכל לקוח. למידע נוסף, ניתן להתרשם ממידע על <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600 underline">גרירה 24 7 עוקף קריות במחיר הוגן</Link>.</p>
      </section>

      <section className="py-12 bg-gray-50 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">תוך כמה זמן הגרר מגיע לכביש 22?</h3>
            <p>אנו עושים את מירב המאמצים להגיע לכל נקודה על ציר עוקף קריות תוך 30 דקות בלבד, בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">אילו סוגי רכבים אתם גוררים?</h3>
            <p>אנו מספקים מענה לרכבים פרטיים, רכבי שטח (ארבע על ארבע) ורכבים מסחריים קלים. השירות ניתן בסטנדרטים מקצועיים גבוהים.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">איך נקבע מחיר הגרירה?</h3>
            <p>המחיר נקבע בהתאם למרחק הגרירה, סוג הרכב ומיקומכם המדויק על הכביש. אנו מבטיחים מחיר הוגן ושירות ללא הפתעות.</p>
          </div>
        </div>
      </section>
    </main>
  );
}