import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר חירום רכב תקוע רחוב חורב אחוזה חיפה | שירות 24/7",
  description: "נתקעתם ברחוב חורב או אחוזה בחיפה? שירותי גרירה מקצועיים ומהירים לרכבים פרטיים ומסחריים. זמינות 24/7, מחירים הוגנים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "חיפה",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7845",
      "longitude": "34.9867"
    },
    "serviceType": "Emergency Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר חירום לרכב תקוע ברחוב חורב ואחוזה חיפה</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור חורב או אחוזה? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים. אנו מציעים שירות מהיר, אמין ומקצועי עם מחירים הוגנים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו באזור חורב ואחוזה?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ הגעה מהירה לכל נקודה בציר חורב-אחוזה.</li>
          <li>✓ צוות מיומן ומקצועי לטיפול בכל סוגי הרכבים (למעט אופנועים).</li>
          <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>✓ שקיפות מלאה והצעת מחיר הוגנת בטלפון.</li>
        </ul>
      </section>
    </main>
  );
}