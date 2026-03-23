import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרר חיפה והקריות",
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
      "longitude": "35.0340"
    },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרר מהיר לרכב עם פנצ'ר בכביש 22 מחלף צ'ק פוסט</h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            נתקעתם עם פנצ'ר בכביש 22 באזור מחלף צ'ק פוסט? אנו מבינים את הדחיפות והסכנה בעצירה בצד הדרך המהירה. הצוות המקצועי שלנו מתמחה בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 ומגיע אליכם במהירות שיא. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ <strong>זמינות מלאה:</strong> שירות 24/7 לכל אורך כביש עוקף קריות.</li>
          <li>✅ <strong>הגעה מהירה:</strong> פריסה רחבה המבטיחה זמן הגעה קצר למחלף צ'ק פוסט.</li>
          <li>✅ <strong>מקצועיות:</strong> טיפול בטוח ברכבכם ללא נזקים מיותרים.</li>
          <li>✅ <strong>מחירים הוגנים:</strong> שקיפות מלאה והצעת מחיר הוגנת בטלפון.</li>
        </ul>
      </section>
    </main>
  );
}