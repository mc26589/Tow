import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בטכניון חיפה | חילוץ 24/7 | מחיר הוגן",
  description: "נתקעתם עם רכב חשמלי בטכניון? גרר מקצועי 24/7 בחיפה זמין עבורכם. התמחות בחילוץ רכבים חשמליים, הגעה מהירה ומחיר הוגן. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/24-7-towing-electric-car-battery-dead-technion-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "כמה זמן לוקח לגרר להגיע לטכניון?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "אנו מפעילים צי גרריסטים בפריסה ארצית בחיפה, מה שמאפשר לנו להגיע לטכניון תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה באזור."
        }
      },
      {
        "@type": "Question",
        "name": "האם אתם גוררים רכבים חשמליים?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן, אנו מתמחים בגרירת רכבים חשמליים ומצוידים בציוד המתאים למניעת נזק למערכות הרכב והסוללה, תוך הקפדה על נהלי יצרן."
        }
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה 24/7 לרכב חשמלי בטכניון חיפה</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בטכניון עם רכב חשמלי שהמצבר שלו התרוקן? אנו מספקים שירותי חילוץ מקצועיים. 
            זקוקים לעזרה נוספת? אנו מציעים גם <Link href="/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university" className="underline">חילוץ רכבי שטח באוניברסיטה</Link> ובכל אזור הכרמל.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בטכניון?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✅ זמינות מלאה 24/7 לסטודנטים ואנשי סגל בכל אזור הקמפוס.</li>
          <li>✅ מומחיות טכנית בטיפול במערכות רכב חשמלי והנעה.</li>
          <li>✅ שירות מהיר הכולל גם <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600">גרירת רכבים בצירים מרכזיים בחיפה</Link>.</li>
          <li>✅ שירות מקצועי באזור אחוזה והכרמל, בדומה לסטנדרט ב-<Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600">גרירת רכב חשמלי באחוזה</Link>.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על שירותי גרירה באזור</h3>
          <p><strong>איך יודעים אם צריך גרר או רק טעינה?</strong> אם הרכב לא מגיב כלל, ייתכן שנדרשת גרירה למטען הקרוב. אנו מאבחנים את הבעיה בטלפון.</p>
          <p className="mt-2"><strong>האם אתם גוררים רכבים שנתקעו בדרכי עפר?</strong> כן, במקרה הצורך אנו מבצעים <Link href="/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa" className="text-blue-600">חילוץ רכבים שנתקעו בבוץ בכרמל</Link>.</p>
          <p className="mt-2"><strong>איך מזמינים גרירה?</strong> פשוט לחצו על כפתור הוואטסאפ או התקשרו למספר המופיע באתר בכל שעה.</p>
        </div>
      </section>
    </main>
  );
}