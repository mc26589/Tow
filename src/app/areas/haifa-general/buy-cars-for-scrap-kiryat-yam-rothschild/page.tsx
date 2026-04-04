import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים קרית ים",
    "areaServed": "Kiryat Yam",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0714"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            קונה רכבים לפירוק בקרית ים רחוב רוטשילד – שירות מהיר ומקצועי
          </h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב לפירוק? אנחנו כאן בשבילכם 24/7.</p>
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

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות קניית רכבים לפירוק באזור רחוב רוטשילד, קרית ים</h2>
        <p className="mb-4">
          אנו מספקים שירות מקצועי ומהיר לקניית רכבים לפירוק בכל רחבי קרית ים, כולל הגעה ישירה לרחוב רוטשילד והסביבה. 
          אם ברשותך רכב ישן, תקול או רכב שאינו בנסיעה, אנו כאן כדי להעניק לך פתרון מיידי, הוגן ומשתלם.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה: שירות 24/7 לכל סוגי הרכבים (פרטיים, מסחריים ו-4x4).</li>
          <li>פינוי מהיר: הגעה לרחוב רוטשילד בקרית ים בזמן קצר.</li>
          <li>שקיפות מלאה: הצעת מחיר הוגנת ללא הפתעות.</li>
          <li>טיפול מקצועי: אנו מטפלים בכל הבירוקרטיה הנדרשת לפירוק רכבים.</li>
        </ul>

        <p className="mt-6 text-gray-700">
          חשוב לציין: אנו מתמחים ברכבים פרטיים, מסחריים ורכבי שטח. <strong>איננו נותנים שירות לפירוק או גרירת אופנועים.</strong>
        </p>
      </section>
    </main>
  );
}