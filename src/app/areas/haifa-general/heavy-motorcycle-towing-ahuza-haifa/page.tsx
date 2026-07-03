import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנועים כבדים באחוזה חיפה - שירות מקצועי לרכבים ורכבי שטח</h1>
          <p className="text-xl mb-8">זקוקים לחילוץ רכב באחוזה? אנו כאן לשירותכם 24/7</p>
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

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">הבהרה חשובה בנוגע לשירותי גרירה</h2>
          <p className="text-neutral-300 leading-relaxed">
            אנו מודעים לחיפושים אחר שירותי גרירה לאופנועים כבדים באזור אחוזה בחיפה. ברצוננו לעדכן כי השירותים שלנו מתמקדים באופן בלעדי ברכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4). <strong>איננו מספקים שירותי גרירה לאופנועים מכל סוג שהוא.</strong>
          </p>
          <p className="text-neutral-300 leading-relaxed">
            אם נתקעת עם הרכב שלך, אנו מציעים מענה מהיר, מקצועי ובמחירים הוגנים לכל תושבי חיפה והסביבה. הצוות שלנו מצויד בגרר מתקדם המותאם לרכבים בעלי משקל גבוה ורכבי שטח, ומבטיח פינוי בטוח למוסך או לכל יעד שתבחרו.
          </p>
        </div>
      </section>
    </main>
  );
}