import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר לאופנוע כבד באחוזה חיפה | שירותי גרירה לרכבים",
  description: "זקוקים לשירותי גרירה באחוזה חיפה? אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. שימו לב: איננו מספקים שירותי גרירה לאופנועים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. שירות מהיר, אמין ומקצועי 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">חשוב לדעת על שירותי הגרירה שלנו</h2>
        <div className="prose max-w-3xl">
          <p>אנו מבינים את הצורך בשירותי גרירה מהירים באזור אחוזה בחיפה. עם זאת, חשוב לנו להיות שקופים עם לקוחותינו:</p>
          <ul className="list-disc pr-6 mb-6">
            <li>אנו מתמחים בגרירת רכבים פרטיים, רכבי שטח (4x4) ורכבים מסחריים.</li>
            <li><strong>איננו מספקים שירותי גרירה לאופנועים או אופנועים כבדים.</strong></li>
            <li>אנו מציעים מחירים הוגנים ושירות מקצועי לכל סוגי הרכבים האחרים.</li>
          </ul>
          <p>אם נתקעתם עם הרכב שלכם, הצוות שלנו זמין עבורכם בכל שעה ביום ובלילה.</p>
        </div>
      </section>
    </main>
  );
}