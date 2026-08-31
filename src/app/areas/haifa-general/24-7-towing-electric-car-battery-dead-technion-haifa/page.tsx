import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בטכניון חיפה | חילוץ 24/7 | הגעה מהירה",
  description: "נתקעתם עם רכב חשמלי בטכניון? גרר מקצועי 24/7 בחיפה זמין עבורכם. התמחות בחילוץ רכבים חשמליים ללא נזק, מחיר הוגן והגעה מהירה לקמפוס. התקשרו עכשיו לחילוץ!",
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
          "text": "אנו מפעילים צי גרריסטים בפריסה בחיפה והכרמל, מה שמאפשר לנו להגיע לקמפוס הטכניון תוך זמן קצר מרגע הקריאה, גם בשעות הלילה והסופ"ש."
        }
      },
      {
        "@type": "Question",
        "name": "האם אתם גוררים רכבים חשמליים ללא נזק?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן, אנו מתמחים בחילוץ רכבים חשמליים ומצוידים בציוד המתאים למניעת נזק למערכות הסוללה וההנעה, תוך עבודה לפי הנחיות היצרן."
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
            נתקעתם בטכניון עם רכב חשמלי שהסוללה התרוקנה? אנו מספקים חילוץ מקצועי, מהיר ובמחיר הוגן. 
            זקוקים לעזרה נוספת באזור? אנו מציעים גם <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="underline">חילוץ שטח בכרמל ודניה</Link> ושירותי גרירה מקיפים לכל אזור חיפה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="טכניון חיפה" />
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
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בטכניון ובאזור הכרמל?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✅ זמינות מלאה 24/7 לסטודנטים ואנשי סגל בכל אזור הקמפוס.</li>
          <li>✅ מומחיות טכנית בטיפול במערכות רכב חשמלי ורכבים מודרניים.</li>
          <li>✅ שירות מהיר הכולל גם <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="text-blue-600">שירותי גרירה דחופים באחוזה וחורב</Link>.</li>
          <li>✅ ניסיון רב בחילוץ וגרירה, בדומה לסטנדרט ב-<Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600">גרירת רכב חשמלי באחוזה</Link>.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <p><strong>האם אתם גוררים רכבים מהירים או ספורטיביים?</strong> בהחלט, אנו מציעים גם <Link href="/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa" className="text-blue-600">גרירה בטוחה לרכבים נמוכים וספורטיביים</Link> ללא שריטות.</p>
          <p className="mt-2"><strong>צריך לחלץ רכב שנתקע ליד ציר ראשי?</strong> אנו זמינים גם ל-<Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-600">חילוץ וגרירה בכביש 22 עוקף קריות</Link>.</p>
          <p className="mt-2"><strong>איך מזמינים?</strong> לחצו על כפתור הוואטסאפ או התקשרו למספר המופיע באתר – אנו בדרך אליכם.</p>
        </div>
      </section>
    </main>
  );
}