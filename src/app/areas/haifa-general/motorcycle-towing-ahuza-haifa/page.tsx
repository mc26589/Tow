import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכבים באחוזה חיפה | שירות 24/7 - מחיר הוגן",
  description: "נתקעתם עם הרכב באחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ רכבים מקצועיים ומהירים 24/7. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירת רכבים באחוזה חיפה - זמינות 24/7</h1>
          <p className="text-xl mb-8">נתקעתם עם הרכב? הצוות שלנו בדרך אליכם. שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בשירותי הגרירה שלנו באחוזה?</h2>
        <div className="prose prose-invert max-w-3xl">
          <p>זקוקים לחילוץ רכב באחוזה? אנו מספקים מענה מהיר לכל סוגי הרכבים. למי שמחפש פתרונות נוספים, ניתן לבדוק גם <Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles">שירותי גרירת רכבים נוספים באזור אחוזה</Link>.</p>
          <p>אם הרכב נתקע בשל בעיות חשמל או מצבר, מומלץ לבחון את השירות שלנו עבור <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa">תקלות מצבר ורכב חשמלי באחוזה</Link>.</p>
          <p><strong>הבהרה חשובה:</strong> השירות שלנו ממוקד ברכבים פרטיים ורכבי שטח. איננו מטפלים בשינוע דו-גלגלי. אם אתם זקוקים לחילוץ רכב שטח בשטח פתוח, אנו ממליצים על <Link href="/areas/haifa-general/4x4-stuck-mud-rescue-carmel-forest-haifa-university">חילוץ 4x4 ביערות הכרמל</Link>.</p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4 text-white">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות</h2>
        <div className="space-y-4 max-w-3xl">
          <div>
            <h3 className="font-bold text-lg">האם אתם גוררים אופנועים באחוזה?</h3>
            <p className="text-neutral-300">לא, השירות שלנו מתמקד ברכבים פרטיים, רכבים מסחריים ורכבי שטח בלבד.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">מהו טווח המחירים לגרירת רכב באחוזה?</h3>
            <p className="text-neutral-300">המחיר נקבע לפי סוג הרכב, המרחק מהיעד ומורכבות החילוץ. צרו קשר עם המוקד לקבלת הצעת מחיר הוגנת ומדויקת.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">האם אתם פעילים בשבתות ובחגים?</h3>
            <p className="text-neutral-300">אנו מספקים שירותי גרירה 24/7, בפריסה ארצית ובאזור חיפה והכרמל בפרט, בהתאם לזמינות הצוותים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}