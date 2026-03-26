import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותי גרירה 24/7 בקרית ביאליק | החלפת גלגל ומענה מהיר",
  description: "נתקעתם עם פנצ'ר בקרית ביאליק? שירותי גרירה וחילוץ 24/7 במחיר הוגן. מענה מהיר לרכבים פרטיים ומסחריים. התקשרו עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ קריות",
    "areaServed": "Kiryat Bialik",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "priceRange": "$",
    "serviceType": ["Towing Service", "Flat Tire Repair", "Roadside Assistance"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה 24/7 בקרית ביאליק: החלפת גלגל ומענה מהיר במחיר הוגן</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם פנצ'ר או זקוקים לגרירה דחופה בקרית ביאליק? הצוות המקצועי שלנו זמין עבורכם בכל שעה. אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית ביאליק" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בקרית ביאליק?</h2>
          <ul className="space-y-4 text-lg">
            <li>✅ <strong>זמינות מלאה:</strong> שירות 24/7, גם בסופי שבוע וחגים.</li>
            <li>✅ <strong>מחיר הוגן:</strong> שקיפות מלאה והצעת מחיר הוגנת בטלפון.</li>
            <li>✅ <strong>מקצועיות:</strong> צוות מיומן בטיפול בפנצ'רים וחילוץ רכבים תקועים.</li>
            <li>✅ <strong>כיסוי אזורי:</strong> מענה מהיר לכל רחבי קרית ביאליק והקריות.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}