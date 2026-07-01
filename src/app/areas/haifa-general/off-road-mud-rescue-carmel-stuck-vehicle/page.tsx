import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה כרמל וקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "priceRange": "$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "serviceType": "Off-road vehicle recovery and mud extraction"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">נתקעת בבוץ? צוות החילוץ שלנו זמין 24/7 לחילוץ מקצועי, מהיר ובטוח בכרמל ובקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מקצועיים</h2>
        <p className="mb-4">השטח של הכרמל יכול להיות בוגדני, במיוחד לאחר גשמים. אם הרכב שלך שקע בבוץ, אל תנסה להמשיך ללחוץ על הגז - זה עלול להחמיר את המצב. הצוות שלנו מגיע עם ציוד ייעודי לחילוץ רכבים ששקעו.</p>
        <p className="mb-4">אנו מציעים מחירים הוגנים ושירות אדיב לכל תושבי האזור. אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. <strong>חשוב להדגיש: איננו מספקים שירותי חילוץ לאופנועים.</strong></p>
      </section>
    </main>
  );
}