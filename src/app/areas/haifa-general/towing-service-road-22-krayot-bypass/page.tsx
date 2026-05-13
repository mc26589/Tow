import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0653" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנחנו בדרך אליכם עם שירות גרירה מקצועי, אמין ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">אם נתקעתם עם הרכב בכביש 22 (עוקף קריות), צוות המומחים שלנו זמין עבורכם 24 שעות ביממה, 7 ימים בשבוע. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4 במהירות ובבטיחות מרבית.</p>
        <p className="mb-4 font-semibold">חשוב לציין: אנו מתמקדים ברכבים בעלי 4 גלגלים ואיננו מספקים שירותי גרירה לאופנועים.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מיידית: הגעה מהירה לכל נקודה לאורך כביש 22.</li>
          <li>מקצועיות ללא פשרות: צוות מיומן המכיר היטב את צירי התנועה באזור חיפה והקריות.</li>
          <li>מחירים הוגנים: שירות אמין במחיר משתלם, עם הצעת מחיר שקופה בטלפון.</li>
        </ul>
      </section>
    </main>
  );
}