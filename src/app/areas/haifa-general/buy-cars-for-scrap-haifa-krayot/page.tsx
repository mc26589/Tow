import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנחנו כאן בשבילכם 24/7 עם שירות מקצועי, מהיר והוגן.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
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

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
          <p className="mb-4">אנו מציעים שירות אמין ומהיר לתושבי חיפה והקריות. אנו קונים רכבים לפירוק במחירים הוגנים, ומפנים את הרכב מהשטח ללא עלות נוספת.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>פינוי רכבים מכל סוג: פרטיים, מסחריים ו-4x4.</li>
            <li>טיפול מלא בביטול רישוי מול משרד התחבורה.</li>
            <li>זמינות מלאה 24 שעות ביממה.</li>
            <li>תשלום הוגן במקום.</li>
          </ul>
          <p className="text-sm text-gray-400 italic">* שים לב: השירות אינו כולל פינוי או קנייה של אופנועים.</p>
        </div>
      </section>
    </main>
  );
}