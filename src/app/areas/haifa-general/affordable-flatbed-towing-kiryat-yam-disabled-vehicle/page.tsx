import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "latitude": "32.8358",
      "longitude": "35.0714"
    },
    "serviceType": "Flatbed Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרירת רכב תקול בקרית ים: שירות גרר משטח במחיר הוגן</h1>
          <p className="text-lg md:text-xl mb-8">זקוקים לגרר בקרית ים? אנחנו כאן בשבילכם 24/7 עם שירות מקצועי ומחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold text-lg">
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2>שירות גרירת רכב תקול בקרית ים – מענה מהיר ומקצועי</h2>
        <p>אם הרכב שלכם נתקע בקרית ים ואתם זקוקים לשירות גרירת משטח (Flatbed) אמין, הגעתם למקום הנכון. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4 תקולים, תוך הקפדה על בטיחות מרבית ושמירה על הרכב שלכם. אנו מציעים שירות זמין, מהיר ומקצועי במחירים הוגנים ללא הפתעות.</p>
        
        <h3>למה לבחור בשירות הגרירה שלנו בקרית ים?</h3>
        <ul>
          <li>ציוד מתקדם: שימוש בגרר משטח המבטיח העמסה בטוחה לרכבים תקולים.</li>
          <li>זמינות מלאה: צוותים פרוסים באזור חיפה והקריות למענה מהיר.</li>
          <li>שקיפות מלאה: הצעת מחיר הוגנת ומשתלמת בטלפון.</li>
          <li>מומחיות: ניסיון רב בגרירת רכבים פרטיים ורכבים כבדים יותר.</li>
        </ul>
        <p><em>חשוב לציין: אנו מתמחים בגרירת רכבים, רכבים מסחריים ורכבי 4x4. איננו מספקים שירותי גרירה לאופנועים.</em></p>
      </section>
    </main>
  );
}