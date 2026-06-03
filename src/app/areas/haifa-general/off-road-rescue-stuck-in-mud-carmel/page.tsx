import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח לרכב תקוע בבוץ בכרמל</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם. שירות חילוץ מקצועי, מהיר ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">שירותי חילוץ שטח מקצועיים</h2>
          <p>אנו מתמחים בחילוץ רכבים פרטיים, רכבי 4x4 ורכבים מסחריים שנתקעו בבוץ באזור הכרמל. חשוב לציין: אנו לא מספקים שירותי חילוץ או גרירה לאופנועים.</p>
          
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">למה אנחנו?</h3>
            <ul className="space-y-4">
              <li>✓ מענה מהיר לכל אזור הכרמל והסביבה.</li>
              <li>✓ צוות מיומן עם ציוד חילוץ מתקדם.</li>
              <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
              <li>✓ זמינות מלאה 24 שעות ביממה.</li>
            </ul>
          </div>

          <div className="text-center py-8">
            <p className="mb-6">זקוקים לחילוץ דחוף עכשיו?</p>
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="inline-block bg-yellow-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-700 transition"
            >
              התקשרו עכשיו לחילוץ מיידי
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}