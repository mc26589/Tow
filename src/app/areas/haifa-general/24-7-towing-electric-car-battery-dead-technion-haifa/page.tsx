import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בטכניון חיפה | חילוץ מצבר 24/7 | מחיר הוגן",
  description: "נתקעתם עם רכב חשמלי בטכניון? מציעים שירות גרירה וחילוץ מקצועי 24/7 בחיפה. הגעה מהירה, מחיר הוגן ושירות לכל סוגי הרכבים. התקשרו עכשיו!",
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
          "text": "אנו מפעילים צי גרריסטים בפריסה ארצית בחיפה, מה שמאפשר לנו להגיע לטכניון תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה."
        }
      },
      {
        "@type": "Question",
        "name": "האם אתם גוררים רכבים חשמליים?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן, אנו מתמחים בגרירת רכבים חשמליים ומצוידים בציוד המתאים למניעת נזק למערכות הרכב והסוללה."
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה 24/7 לרכב חשמלי בטכניון חיפה - חילוץ מהיר</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בטכניון עם רכב חשמלי שהמצבר שלו התרוקן? אנו מתמחים בחילוץ וגרירת רכבים חשמליים. 
            זקוקים לעזרה נוספת? אנו מציעים גם שירותי <Link href="/areas/haifa-general/suv-stuck-in-mud-rescue-haifa-university" className="underline">חילוץ רכבי שטח באוניברסיטה</Link> ובסביבת הכרמל.
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
          <li>✅ זמינות מלאה 24/7 לסטודנטים ואנשי סגל בכל אזור הטכניון.</li>
          <li>✅ מומחיות בטיפול במערכות רכב חשמלי.</li>
          <li>✅ שירות מהיר הכולל אפשרות ל<Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600">גרירה דחופה בצירים ראשיים</Link>.</li>
          <li>✅ מחירים הוגנים ושקופים ללא הפתעות.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <p><strong>האם אתם גוררים אופנועים?</strong> לצערנו לא, השירות ניתן לרכבים פרטיים ומסחריים בלבד.</p>
          <p className="mt-2"><strong>איך מזמינים גרירה?</strong> פשוט לחצו על כפתור הוואטסאפ או התקשרו למספר המופיע באתר.</p>
        </div>
      </section>
    </main>
  );
}