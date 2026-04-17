import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": ["חיפה", "קרית אתא", "קרית ביאליק", "קרית מוצקין", "קרית ים"],
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
    "serviceType": "קניית רכבים לפירוק ופינוי רכבים"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          אנו מציעים שירות מקצועי, מהיר ואמין לקניית רכבים לפירוק בחיפה והקריות. אם הרכב שלכם אינו נוסע, עבר תאונה או שפשוט הגיע הזמן להיפרד ממנו - אנחנו כאן עבורכם. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. חשוב לציין: איננו מטפלים באופנועים.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <WhatsAppCTA cityName="חיפה והקריות" />
          <a 
            href={`tel:+${BUSINESS_INFO.phone}`} 
            className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
          >
            התקשרו עכשיו להצעת מחיר
          </a>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ <strong>פינוי מיידי:</strong> מגיעים לכל נקודה בחיפה והקריות בזמן הקצר ביותר.</li>
          <li>✅ <strong>מחירים הוגנים:</strong> אנו מעריכים את הרכב ומציעים מחיר הוגן בהתאם למצבו.</li>
          <li>✅ <strong>שירות מקצועי:</strong> טיפול בכל הבירוקרטיה הנדרשת לפירוק רכב.</li>
          <li>✅ <strong>זמינות 24/7:</strong> אנחנו כאן לכל קריאה, בכל שעה.</li>
        </ul>
        <p className="mt-8 text-gray-600">
          *הערה: השירות מיועד לרכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירותי פינוי לאופנועים.
        </p>
      </section>
    </main>
  );
}