import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר דחוף לכביש 22 עוקף קריות | שירות 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר דחוף זמין עבורכם 24/7. שירות מקצועי לרכבים פרטיים ומסחריים. התקשרו עכשיו להצעת מחיר הוגנת."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0555" },
    "priceRange": "$",
    "serviceType": "Emergency Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנחנו בדרך אליכם עם שירות גרירה אמין ומחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לגרר דחוף בכביש 22? אנחנו כאן בשבילכם.</h2>
        <p className="text-lg mb-4">
          אם נתקעתם עם הרכב בכביש עוקף קריות (כביש 22), צוות המומחים שלנו זמין להגעה מהירה לכל נקודה לאורך הציר. 
          אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4, ומבטיחים מענה מקצועי, בטיחותי ומהיר כדי להחזיר אתכם לשגרה.
        </p>
        <p className="text-lg font-semibold text-red-600 mb-6">
          חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
        </p>

        <h3 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בכביש 22?</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>זמינות מלאה: שירות 24/7, גם בשעות הלילה ובסופי שבוע.</li>
          <li>הגעה מהירה: היכרות מעמיקה עם כל מחלפי כביש 22 לקיצור זמני המתנה.</li>
          <li>מחירים הוגנים: שקיפות מלאה והצעת מחיר הוגנת בטלפון ללא הפתעות.</li>
          <li>ציוד מתקדם: גרירה בטוחה השומרת על הרכב שלכם.</li>
        </ul>
      </section>
    </main>
  );
}