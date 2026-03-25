import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
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
      "latitude": "32.8350",
      "longitude": "35.0650"
    },
    "serviceType": "Junk car removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">פינוי רכבים לפירוק באזור חוף קריית ים</h1>
          <p className="text-lg mb-8 max-w-2xl">
            אנו מציעים שירות פינוי רכבים לפירוק מהיר ומקצועי באזור חוף קריית ים והסביבה. אם ברשותכם רכב ישן, תקול או מושבת, אנו נדאג לפינויו המיידי. אנו מתמחים בפינוי רכבים פרטיים, מסחריים ורכבי שטח (4x4). 
            <br /><br />
            <strong>הערה חשובה:</strong> שירותי הפינוי שלנו מיועדים לרכבים בלבד. איננו מספקים שירותי פינוי או גרירה לאופנועים.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✓ שירות מהיר באזור חוף קריית ים והקריות.</li>
            <li>✓ פינוי מקצועי של רכבים לפירוק ללא עלות.</li>
            <li>✓ מחירים הוגנים עבור רכבים בעלי ערך לחלפים.</li>
            <li>✓ זמינות 24/7 לכל קריאה.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}