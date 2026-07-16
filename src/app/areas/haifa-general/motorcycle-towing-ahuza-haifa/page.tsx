import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר רכבים באחוזה חיפה 24/7 - שירות מהיר ומקצועי | מחיר הוגן",
  description: "צריכים גרר באחוזה, חיפה? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, שקיפות מלאה ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa"
  }
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים באחוזה חיפה - שירות מקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם עם הרכב באחוזה? אנו כאן לשירותכם עם ציוד גרירה מתקדם. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשר עכשיו לשירות גרירה
            </a>
            <WhatsAppCTA cityName="אחוזה חיפה" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-neutral-200">
        <h2 className="text-3xl font-bold mb-6 text-white">שירותי גרירה וחילוץ באזור אחוזה והכרמל</h2>
        <p className="mb-4">
          אנו מבינים את התסכול שבתקיעת רכב בלב שכונת אחוזה. הניסיון הרב שלנו מאפשר לנו להגיע לכל נקודה באזור במהירות. אם הרכב שלכם זקוק לטיפול, נשמח להמליץ גם על שירותים משלימים כמו <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-400 underline">טיפול במצברים לרכבים חשמליים באחוזה</Link>.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה</li>
          <li>ציוד גרירה מתקדם לרכבים מכל הסוגים</li>
          <li>צוות מיומן ומקצועי עם ידע מקומי</li>
          <li>מחירים הוגנים ושקיפות מלאה</li>
        </ul>
        
        <div className="mt-12 bg-neutral-900 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-4">שאלות נפוצות על גרירת רכבים באחוזה</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-white">תוך כמה זמן תגיעו אלי?</h4>
              <p>באזור אחוזה והסביבה אנו משתדלים לתת מענה מהיר במיוחד בהתאם לעומסי התנועה בכרמל.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">האם אתם גוררים רכבים פרטיים בלבד?</h4>
              <p>אנו מטפלים ברכבים פרטיים, רכבי שטח ומסחריות. לאופנועים, לצערנו, אין ביכולתנו לתת מענה. לבעלי רכבים ישנים, ניתן לבדוק גם אפשרויות של <Link href="/areas/haifa-general/cash-for-old-broken-car-neve-shaanan-haifa" className="text-blue-400 underline">קניית רכבים לפירוק בנווה שאנן</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}