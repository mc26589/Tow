import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">גרר רכבים לפירוק בקריית ביאליק</h1>
          <p className="text-xl mb-8">פינוי רכבים לפירוק בקריית ביאליק והסביבה – שירות מהיר, אמין ומקצועי לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="קריית ביאליק" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב לפירוק?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">זמינות מלאה</h3>
            <p>אנו זמינים עבורכם 24/7 לכל קריאה בקריית ביאליק והקריות.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">שירות מקצועי</h3>
            <p>צוות מיומן המבצע פינוי בטוח של רכבים פרטיים, מסחריים ורכבי 4x4.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">מחירים הוגנים</h3>
            <p>אנו מציעים מחיר הוגן ומשתלם עבור פינוי הרכב שלכם. צרו קשר לקבלת הצעת מחיר.</p>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-neutral-900 rounded-xl border border-red-900/30">
          <h3 className="text-2xl font-bold text-red-500 mb-4">הערה חשובה</h3>
          <p>אנו מתמחים בפינוי רכבים, רכבים מסחריים ורכבי 4x4 בלבד. שירותינו אינם כוללים גרירה או פינוי של אופנועים מכל סוג שהוא.</p>
        </div>
      </section>
    </main>
  );
}