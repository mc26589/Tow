import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 קריות | הגעה מהירה 24/7",
  description: "נתקעתם ללא סוללה בכביש 22? שירות גרירת רכבים חשמליים מהיר ומקצועי לקריות וחיפה. מחיר הוגן וזמינות 24/7. התקשרו עכשיו לחילוץ מקצועי!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-electric-car-route-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ קריות וחיפה",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0653" },
    "priceRange": "$",
    "serviceType": "Emergency Electric Vehicle Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה דחוף לרכב חשמלי שנתקע ללא סוללה בכביש 22 בקריות</h1>
          <p className="text-xl mb-8">נתקעתם ללא סוללה בדרך? אנו מספקים מענה מהיר ומקצועי לרכבים חשמליים באזור הקריות. חשוב לציין: אנו מתמחים ברכבים פרטיים, מסחריים ו-4x4, ואיננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ הרכב החשמלי שלכם?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ זמינות 24/7 לכל אורך <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-blue-600 underline">כביש 22 ומחלפי הקריות</Link>.</li>
          <li>✓ ציוד גרירה מתקדם המותאם למשקל ולמבנה של רכבים חשמליים.</li>
          <li>✓ צוות מיומן המכיר את נהלי הבטיחות של רכבים חשמליים.</li>
          <li>✓ שירות משלים באזור: <Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="text-blue-600 underline">גרירת רכבים לאחר תאונות בצומת צ'ק פוסט</Link>.</li>
          <li>✓ שקיפות מלאה ומחירים הוגנים ללא הפתעות.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירת רכב חשמלי</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם ניתן לגרור רכב חשמלי בכל מצב?</h3>
              <p>כן, אנו משתמשים בציוד ייעודי המאפשר גרירת רכב חשמלי בצורה בטוחה תוך שמירה על המערכות האלקטרוניות והסוללה של הרכב.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות אם נתקעתי בכביש 22?</h3>
              <p>יש לעצור בצד הדרך בבטחה, להפעיל אורות מצוקה ולהתקשר אלינו. אנחנו מכירים היטב את אזור הקריות ומגיעים במהירות לכל נקודה על ציר כביש 22.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם נותנים שירות גם באזורים סמוכים?</h3>
              <p>בהחלט. אנו מספקים גם <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-600 underline">שירותי גרירה זולים בקרית מוצקין</Link> ובכל אזור חיפה והקריות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}