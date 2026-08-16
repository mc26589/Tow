import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | שירות מהיר 24/7",
  description: "זקוקים לחילוץ רכב ששקע בבוץ באזור הכרמל? צוות מומחים זמין עבורכם 24/7. שירות מקצועי, מהיר ובמחירים הוגנים. התקשרו עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב בחיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם בבוץ? אל תנסו להמשיך ללחוץ על הגז – זה עלול להחמיר את המצב. אנו מספקים שירותי חילוץ מקצועיים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים באזור הכרמל. 
            חשוב לציין: איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ <strong>זמינות מלאה:</strong> שירות חילוץ 24/7 בכל ימות השבוע.</li>
          <li>✅ <strong>ציוד מתקדם:</strong> רכבי חילוץ המצוידים בכננות וציוד עזר לחילוץ בבוץ עמוק.</li>
          <li>✅ <strong>מומחיות שטח:</strong> היכרות מעמיקה עם דרכי העפר והשטחים הבוציים באזור הכרמל.</li>
          <li>✅ <strong>מחירים הוגנים:</strong> שקיפות מלאה והצעת מחיר הוגנת בטלפון לפני היציאה לשטח.</li>
        </ul>
      </section>
    </main>
  );
}