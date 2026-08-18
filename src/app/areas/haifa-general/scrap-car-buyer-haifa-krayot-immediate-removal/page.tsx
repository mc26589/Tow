import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal"
  };

  return (
    <main className="bg-neutral-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן לשירותכם 24/7 עם מענה מהיר ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מקצועי</h2>
          <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק מכל הסוגים: רכבים פרטיים, מסחריים ורכבי שטח. אנו מציעים שירות פינוי מיידי בחיפה ובכל אזור הקריות.</p>
          <p className="mb-4"><strong>חשוב לציין:</strong> אנו מתמקדים ברכבים בעלי 4 גלגלים ומעלה. איננו מספקים שירותי פינוי או קנייה לאופנועים.</p>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>פינוי מיידי מהשטח ללא עיכובים</li>
              <li>מחירים הוגנים עבור הרכב שלכם</li>
              <li>טיפול מלא בכל הניירת הנדרשת</li>
              <li>זמינות מלאה 24 שעות ביממה</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}