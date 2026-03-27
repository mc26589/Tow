import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ ביערות הכרמל | שירות חירום 24/7",
  description: "נתקעתם בבוץ ביערות הכרמל? צוות חילוץ מקצועי בחיפה זמין עבורכם 24/7. חילוץ רכבים, רכבי שטח ומסחריות. התקשרו עכשיו לסיוע מהיר."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
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
      "latitude": "32.7333",
      "longitude": "35.0000"
    },
    "serviceType": "Emergency Car Rescue and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ ביערות הכרמל – שירות חירום מהיר בחיפה</h1>
          <p className="text-xl mb-8">נתקעתם בדרכי העפר? הצוות שלנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2>זקוקים לחילוץ רכב מהבוץ ביערות הכרמל? אנחנו כאן בשבילכם.</h2>
        <p>אם נתקעתם עם הרכב בדרכי העפר של יערות הכרמל, אל תנסו להמשיך וללחוץ על הגז – זה עלול להחמיר את המצב. הצוות המקצועי שלנו מתמחה בחילוצי שטח מורכבים, כולל רכבים ששקעו בבוץ עמוק, חול או דרכים משובשות באזור חיפה והכרמל. אנו מגיעים במהירות עם ציוד חילוץ מתקדם כדי להחזיר אתכם לכביש בבטחה.</p>
        
        <h3>למה לבחור בנו לחילוץ בשטח?</h3>
        <ul>
          <li><strong>זמינות מלאה:</strong> שירות חירום 24/7 לכל אזור חיפה והקריות.</li>
          <li><strong>מומחיות בשטח:</strong> ניסיון רב בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4.</li>
          <li><strong>ציוד מקצועי:</strong> שימוש באמצעי גרירה וחילוץ המותאמים לתנאי השטח של הכרמל.</li>
          <li><strong>מחירים הוגנים:</strong> שירות מקצועי במחיר משתלם ללא הפתעות.</li>
        </ul>
        <p><em>חשוב לציין: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</em></p>
      </section>
    </main>
  );
}