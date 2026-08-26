import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7936",
      "longitude": "35.0355"
    },
    "priceRange": "$",
    "serviceType": "Emergency Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט קרית אתא</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? שירות גרירה מקצועי, מהיר ובמחיר הוגן לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
          <p className="mb-4">אנו מבינים את הלחץ שנתקעים בכביש סואן כמו צומת צ'ק פוסט. לכן, אנו מתחייבים להגעה מהירה, צוות מיומן וציוד חדיש.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 לכל קריאה</li>
            <li>מחירים הוגנים ושקופים</li>
            <li>שירות מקצועי לרכבים פרטיים, מסחריים ו-4x4</li>
            <li>הגעה מהירה לכל אזור קרית אתא והסביבה</li>
          </ul>
          <p className="mt-6 text-sm text-gray-400">
            *הערה: השירות אינו כולל גרירת אופנועים. אנו מתמחים ברכבים פרטיים ומסחריים בלבד.
          </p>
        </div>
      </section>
    </main>
  );
}