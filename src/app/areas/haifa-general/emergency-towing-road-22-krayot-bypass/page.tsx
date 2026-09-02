import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה עוקף קריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8190",
      "longitude": "35.0630"
    },
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות – מענה מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? הצוות שלנו בדרך אליכם עם שירות מקצועי, אמין ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ דחוף בכביש 22? אנחנו כאן בשבילכם.</h2>
        <p className="mb-4">אם נתקעתם עם הרכב בכביש 22 (עוקף קריות), אנו מספקים שירותי גרירה וחילוץ מקצועיים, מהירים ובטוחים. הצוות שלנו מתמחה במתן מענה מיידי לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4, תוך הקפדה על זמני הגעה קצרים במיוחד לאורך כל ציר עוקף קריות.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li><strong>זמינות מלאה:</strong> שירות 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li><strong>מקצועיות:</strong> צוות מיומן עם ציוד גרירה מתקדם.</li>
          <li><strong>מחירים הוגנים:</strong> שקיפות מלאה ומחירים הוגנים ללא הפתעות.</li>
          <li><strong>התמחות:</strong> אנו מתמחים ברכבים פרטיים, מסחריים ורכבי שטח. <em>שימו לב: איננו מספקים שירותי גרירה לאופנועים.</em></li>
        </ul>
      </section>
    </main>
  );
}