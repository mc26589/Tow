import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": ["Towing", "Roadside Assistance"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכבים באחוזה חיפה - שירות מקצועי לרכבים, מסחריות ו-4x4</h1>
          <p className="text-xl mb-8">נתקעת באחוזה? אנו כאן לסייע לרכבים פרטיים, מסחריים ורכבי שטח 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">חשוב לדעת על שירותי הגרירה שלנו</h2>
        <div className="prose max-w-3xl">
          <p>אנו מתמחים בחילוץ וגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4 באזור אחוזה והסביבה. <strong>שימו לב: איננו מספקים שירותי גרירה לאופנועים או דו-גלגלי.</strong></p>
          <p>השירות שלנו מתמקד במקצועיות, מהירות ומחירים הוגנים. אנו מבינים את החשיבות של פינוי מהיר של הרכב מהכביש כדי למנוע עומסי תנועה וסכנות בטיחותיות.</p>
          <p>לבירור עלות השירות וזמן הגעה משוער לאזור אחוזה, צרו איתנו קשר טלפוני בכל שעה.</p>
        </div>
      </section>
    </main>
  );
}