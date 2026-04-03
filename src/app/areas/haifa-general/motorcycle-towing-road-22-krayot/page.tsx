import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            גרר אופנוע כבד תקוע בכביש 22 עוקף קריות - שירותי גרירה לרכבים
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            נתקעת בכביש 22? אנו כאן לסייע לרכבים פרטיים, מסחריים ורכבי 4x4. שים לב: איננו גוררים אופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשר עכשיו לחילוץ רכב
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מידע חשוב לגבי גרירת אופנועים</h2>
        <p className="text-lg leading-relaxed mb-4">
          אנו מקבלים פניות רבות בנוגע לגרירת אופנועים בכביש 22 עוקף קריות. ברצוננו לעדכן כי הציוד והמומחיות שלנו מותאמים אך ורק לרכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4).
        </p>
        <p className="text-lg leading-relaxed">
          אם נתקעת עם רכבך, אנו מציעים שירות מהיר, אמין ובמחירים הוגנים. צור קשר לקבלת הצעת מחיר בטלפון.
        </p>
      </section>
    </main>
  );
}