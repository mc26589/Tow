import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר בכביש 22 קריות | הגעה מהירה תוך 30 דקות | מחיר הוגן',
  description: 'נתקעתם בכביש 22? שירות גרירה מהיר ומקצועי לרכב פרטי ומסחרי. צוות מיומן זמין 24/7 באזור הקריות, מחיר הוגן ושקיפות מלאה. התקשרו עכשיו לחילוץ!',
  alternates: {
    canonical: '/areas/haifa-general/towing-service-road-22-krayot'
  }
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה בכביש 22 קריות',
    'areaServed': 'Haifa and Krayot',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.8156',
      'longitude': '35.0653'
    },
    'priceRange': '$',
    'serviceType': 'Towing and Roadside Assistance'
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 קריות – חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? אל תסתכנו בשוליים. אנחנו בדרך אליכם עם ציוד חילוץ מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות גרירה מקצועי לאורך ציר עוקף קריות</h2>
        <p className="mb-4">כביש 22 הוא עורק תחבורה ראשי ומהיר. אנו מספקים מענה מקצועי לכל תקלה, החל מהתחממות מנוע ועד תאונות דרכים, עם הקפדה על כללי בטיחות מחמירים.</p>
        <p className="mb-4">
          זקוקים לפתרונות נוספים? אנו מציעים גם <Link href="/areas/haifa-general/towing-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה בכביש עוקף קריות</Link> או <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-600 underline">גרירת חירום בקריית ביאליק</Link>.
        </p>
        <p className="mb-4"><strong>הערה:</strong> אנו מתמחים בגרירת רכבים פרטיים, רכבי שטח ומסחריים. איננו מספקים שירותי גרירה לאופנועים מכל סוג.</p>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה באזור הקריות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">מהו זמן ההגעה הממוצע לכביש 22?</h3>
              <p>בזכות הפריסה שלנו בחיפה ובקריות, אנו מגיעים לרוב תוך 30 עד 45 דקות, בהתאם לעומסי התנועה בציר.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה עושים אם הרכב מושבת לחלוטין?</h3>
              <p>מעבר לגרירה, אנו מציעים שירותי <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal" className="text-blue-600 underline">פינוי רכבים לפירוק בחיפה והקריות</Link> למי שמעוניין להיפטר מרכב ישן או מושבת.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם עובדים גם בערבי חג וסופי שבוע?</h3>
              <p>כן, אנו פעילים 24 שעות ביממה, 7 ימים בשבוע, כולל שבתות וחגים, כדי להבטיח שלעולם לא תשארו תקועים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}