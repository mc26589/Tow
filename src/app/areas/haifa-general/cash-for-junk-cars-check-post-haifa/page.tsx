import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0230"
    },
    "priceRange": "$",
    "serviceType": "Junk Car Removal and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בצומת צ'ק פוסט חיפה – שירות מהיר ומקצועי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן בצומת צ'ק פוסט? אנו כאן בשבילכם 24/7 עם שירות אמין ומחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכבים בצ'ק פוסט?</h2>
          <p className="mb-4">אנו מתמחים בפינוי רכבים לפירוק מכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4. השירות שלנו מהיר, יעיל ומבוצע על ידי צוות מיומן. שימו לב: אנו לא מספקים שירותי גרירה או פינוי לאופנועים.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24/7 באזור חיפה והקריות</li>
            <li>פינוי מהיר מצומת צ'ק פוסט והסביבה</li>
            <li>הצעת מחיר הוגנת ומשתלמת</li>
            <li>טיפול מקצועי בכל סוגי הרכבים (למעט אופנועים)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}