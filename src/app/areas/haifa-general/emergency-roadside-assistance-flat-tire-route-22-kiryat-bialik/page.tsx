import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "קריית ביאליק וכביש 22" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8250", "longitude": "35.0750" },
    "priceRange": "$",
    "serviceType": "Roadside Assistance, Flat Tire Change"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">סיוע בדרכים: החלפת גלגל בכביש 22 דרום ליד קריית ביאליק</h1>
          <p className="text-lg md:text-xl mb-8">נתקעתם עם פנצ'ר? אנחנו בדרך אליכם. שירות מהיר, מקצועי ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו לסיוע מיידי
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי חילוץ מהירים בכביש 22</h2>
        <p className="mb-4">
          אם נתקעתם עם פנצ'ר בכביש 22 לכיוון דרום באזור קריית ביאליק, הצוות שלנו זמין עבורכם 24/7. 
          אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 ומגיעים לנקודה המדויקת שלכם במהירות שיא.
        </p>
        <p className="font-semibold text-red-600">
          חשוב לציין: אנו מתמחים ברכבים פרטיים ומסחריים ואיננו מספקים שירותי גרירה או חילוץ לאופנועים.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24/7 לכל אזור הקריות וחיפה.</li>
            <li>צוות מיומן בטיפול בבעיות גלגלים ותקלות דרך נפוצות.</li>
            <li>שקיפות מלאה והצעת מחיר הוגנת בטלפון.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}