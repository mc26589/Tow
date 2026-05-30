import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main className="bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי לפינוי וקניית רכבים לפירוק. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4. שירות מהיר, אמין ומחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים בחיפה והקריות. בין אם הרכב עבר תאונה, סובל מתקלה מכנית יקרה או פשוט ישן מדי, אנו כאן כדי לתת לכם פתרון מיידי.</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>קניית רכבים לפירוק במחירים הוגנים</li>
          <li>פינוי מהיר מכל נקודה בחיפה והקריות</li>
          <li>טיפול מלא בכל הניירת והבירוקרטיה</li>
          <li>שירות מקצועי לרכבים פרטיים, מסחריים ו-4x4</li>
        </ul>
        <p className="text-sm text-gray-400 italic">*הערה: איננו מטפלים באופנועים. השירות מיועד לרכבים בלבד.</p>
      </section>
    </main>
  );
}