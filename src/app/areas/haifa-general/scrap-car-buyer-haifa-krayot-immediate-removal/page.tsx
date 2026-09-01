import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": ["Haifa", "Kiryat Ata", "Kiryat Bialik", "Kiryat Motzkin", "Kiryat Yam"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
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

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מהיר ואמין</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק בחיפה והקריות. אם הרכב שלכם עומד ללא שימוש, תופס מקום או שאינו כשיר לנסיעה, אנו נגיע עד אליכם לפינוי מיידי.</p>
        <p className="mb-4"><strong>שימו לב:</strong> אנו מטפלים ברכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי פינוי או גרירה לאופנועים.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>פינוי מיידי ללא עיכובים מיותרים.</li>
          <li>הצעת מחיר הוגנת עבור הרכב שלכם.</li>
          <li>שירות מקצועי בפריסה רחבה בחיפה והקריות.</li>
          <li>זמינות מלאה 24 שעות ביממה.</li>
        </ul>
      </section>
    </main>
  );
}