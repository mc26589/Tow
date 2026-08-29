import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": "Towing Service for Cars and 4x4"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה לרכבים ורכבי שטח</h1>
          <p className="text-lg mb-6">
            אנו מבינים את הצורך הדחוף בשירותי גרירה באזור אחוזה בחיפה. חשוב להבהיר: אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4 בלבד. 
            נכון לעכשיו, איננו מספקים שירותי גרירה לאופנועים או אופנועים כבדים. אנו ממליצים לפנות למוסך מורשה או לחברה המתמחה בשינוע דו-גלגלי כדי להבטיח את שלמות הכלי שלכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד השירות
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">מדוע לבחור בנו לגרירת רכבים באזור חיפה?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24/7 לכל אזור חיפה והקריות.</li>
          <li>ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>צוות מקצועי ומיומן עם ניסיון רב בשטח.</li>
        </ul>
      </section>
    </main>
  );
}