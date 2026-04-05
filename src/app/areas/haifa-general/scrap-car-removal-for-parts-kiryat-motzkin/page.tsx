import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8250",
      "longitude": "35.0750"
    },
    "serviceType": "Scrap car removal"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">פינוי רכבים לפירוק בקרית מוצקין – שירות מהיר ומקצועי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן? אנו כאן בשבילכם 24/7 עם שירות אמין ומחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              חייגו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">פינוי רכבים לפירוק בקרית מוצקין – מענה מיידי</h2>
        <p className="mb-4">אם ברשותכם רכב ישן, תקול או רכב שאינו נוסע ואתם מחפשים שירות פינוי רכבים לפירוק בקרית מוצקין, הגעתם למקום הנכון. אנו מתמחים בפינוי רכבים מכל סוג – רכבים פרטיים, מסחריים ורכבי 4x4 – ומעניקים שירות מקצועי, אמין ומהיר לתושבי הקריות.</p>
        <p className="mb-4 font-semibold text-red-400">חשוב לציין: אנו לא מטפלים בפינוי אופנועים, אלא מתמקדים אך ורק ברכבים בעלי ארבעה גלגלים ומעלה.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4">למה לבחור בנו לפינוי הרכב שלכם?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה: שירות 24/7 לכל אזור חיפה והקריות.</li>
          <li>מקצועיות: פינוי בטוח ללא נזק לסביבה.</li>
          <li>הוגנות: הצעת מחיר הוגנת ומשתלמת בהתאם למצב הרכב.</li>
          <li>שירות מקומי: היכרות מעמיקה עם כל השכונות בקרית מוצקין.</li>
        </ul>
      </section>
    </main>
  );
}