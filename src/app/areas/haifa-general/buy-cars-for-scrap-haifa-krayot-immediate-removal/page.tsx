import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי | שירות 24/7",
  description: "מחפשים קונה רכבים לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי, הצעת מחיר הוגנת ושירות מקצועי לרכבים פרטיים, מסחריים ו-4x4. צרו קשר עכשיו!",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "priceRange": "$",
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
    "serviceType": "Car Scrap Removal"
  };

  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן בשבילכם 24/7 עם שירות מהיר ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות קניית רכבים לפירוק בחיפה והקריות – פינוי מהיר ומקצועי</h2>
        <p className="mb-4">אנו מספקים שירות מקצועי ואמין לקניית רכבים לפירוק בחיפה, הקריות והסביבה, עם דגש על פינוי מיידי מהשטח. אם הרכב שלכם אינו תקין, עבר תאונה או שפשוט אינכם זקוקים לו עוד, אנו כאן כדי להעניק לכם פתרון מהיר, הוגן ונוח. אנו מתמחים ברכבים פרטיים, רכבים מסחריים ורכבי 4x4. <strong>חשוב לציין: איננו מטפלים בפינוי או קנייה של אופנועים.</strong></p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4">למה לבחור בנו לפינוי הרכב שלכם?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li><strong>פינוי מיידי:</strong> צוות הפינוי שלנו זמין להגיע לכל נקודה בחיפה ובקריות בזמן הקצר ביותר.</li>
          <li><strong>הצעת מחיר הוגנת:</strong> אנו מעריכים את הרכב שלכם ומציעים מחיר הוגן בהתאם למצבו.</li>
          <li><strong>שירות ללא עלות:</strong> השירות שלנו כולל פינוי וגרירה ללא עלויות נסתרות.</li>
          <li><strong>ניסיון ומומחיות:</strong> צוות מיומן שמכיר את כל אזורי הצפון ומבצע את העבודה בבטיחות מרבית.</li>
        </ul>
      </section>
    </main>
  );
}