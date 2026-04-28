import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי | שירות 24/7",
  description: "מחפשים קונה רכבים לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי, שירות מקצועי ומחירים הוגנים לכל סוגי הרכבים (למעט אופנועים). צרו קשר עכשיו!",
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
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן בשבילכם 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לשיחת ייעוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2>שירות קניית רכבים לפירוק בחיפה והקריות – פינוי מהיר ומקצועי</h2>
          <p>אנו מתמחים בקניית רכבים לפירוק בחיפה, הקריות והסביבה, ומציעים שירות פינוי מיידי ללא עלות. אם הרכב שלכם עומד ללא שימוש, עבר תאונה או שאינו עובר טסט, אנו כאן כדי להעניק לכם פתרון מהיר, הוגן ומקצועי. אנו קונים רכבים פרטיים, רכבים מסחריים ורכבי 4x4. <strong>חשוב לציין: אנו לא מטפלים באופנועים.</strong></p>
          
          <h3>למה לבחור בנו לפינוי הרכב שלכם?</h3>
          <ul>
            <li><strong>פינוי מיידי:</strong> צוות הגרירה שלנו זמין בחיפה ובקריות להגעה מהירה לכל נקודה.</li>
            <li><strong>מחירים הוגנים:</strong> אנו מעריכים את הרכב שלכם ומציעים הצעת מחיר הוגנת בטלפון.</li>
            <li><strong>שירות ללא עלות:</strong> הפינוי והגרירה מתבצעים על ידינו ללא עלות נוספת ללקוח.</li>
            <li><strong>ניסיון ומוניטין:</strong> צוות מיומן שמכיר את כל אזורי חיפה והקריות ומבצע את העבודה בבטיחות מרבית.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}