import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ שטח בוץ בכרמל רכב תקוע | שירות 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ שטח מקצועי לרכבים פרטיים ו-4x4. זמינות מיידית, מחירים הוגנים וציוד חילוץ מתקדם. התקשרו עכשיו!",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road mud rescue and towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">שירות חילוץ מקצועי לרכבים ששקעו בבוץ. מהירות, אמינות ומחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2>זקוקים לחילוץ שטח מהיר בבוץ של הכרמל?</h2>
          <p>אם הרכב שלכם נתקע בבוץ באזור הכרמל, אל תנסו להמשיך ללחוץ על הגז – זה עלול להחמיר את המצב. הצוות המקצועי שלנו מתמחה בחילוצי שטח מורכבים, כולל רכבי 4x4, רכבים פרטיים ומסחריים ששקעו בבוץ עמוק. אנו מגיעים עם ציוד חילוץ מתקדם כדי להוציא אתכם בבטחה ובמהירות, תוך שמירה על שלמות הרכב.</p>
          
          <h3>למה לבחור בנו לחילוץ בכרמל?</h3>
          <ul>
            <li><strong>זמינות 24/7:</strong> אנחנו יודעים שבוץ לא מחכה לשעות העבודה.</li>
            <li><strong>מומחיות בשטח:</strong> היכרות מעמיקה עם תוואי השטח של הכרמל והאזור.</li>
            <li><strong>ציוד מקצועי:</strong> כננות וציוד גרירה ייעודי לחילוצי בוץ.</li>
            <li><strong>מחירים הוגנים:</strong> שירות מקצועי במחיר משתלם ללא הפתעות.</li>
          </ul>
          
          <p className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <strong>חשוב:</strong> אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}