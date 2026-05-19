import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road vehicle recovery and mud rescue"
  };

  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ בדרכי הכרמל? צוות החילוץ שלנו זמין 24/7 לחילוץ מקצועי, מהיר ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מקצועיים בכרמל</h2>
        <p className="mb-4">השטחים של הכרמל מציבים אתגרים לא פשוטים, במיוחד בעונת הגשמים. אם הרכב שלכם שקע בבוץ, אל תנסו להמשיך ללחוץ על הגז – זה עלול להחמיר את המצב. אנו מציעים שירותי חילוץ ייעודיים לרכבי 4x4, רכבים פרטיים ומסחריים.</p>
        <p className="mb-4"><strong>חשוב להדגיש:</strong> אנו מתמחים בחילוץ רכבים ורכבי שטח בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        <p>אנו גובים מחירים הוגנים עבור שירותי החילוץ שלנו. לקבלת הצעת מחיר מדויקת בהתאם למיקומכם ומצב הרכב, צרו איתנו קשר טלפוני.</p>
      </section>
    </main>
  );
}