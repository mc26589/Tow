import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקרית מוצקין במזומן | שירות מהיר",
  description: "מחפשים קונה רכבים לפירוק בקרית מוצקין? אנו קונים רכבים לפירוק במזומן, כולל גרירה חינם. שירות מקצועי ואמין לכל סוגי הרכבים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8356",
      "longitude": "35.0715"
    },
    "serviceType": "Scrap Car Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקרית מוצקין במזומן</h1>
          <p className="text-xl mb-8">פינוי רכבים מהיר, הוגן ומקצועי ללא עלות גרירה</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות קניית רכבים לפירוק בקרית מוצקין</h2>
        <p className="mb-4">אנו מציעים פתרון מלא לכל מי שמחפש קונה רכבים לפירוק בקרית מוצקין במזומן. אנו קונים רכבים במגוון מצבים: רכבים ישנים, רכבים לאחר תאונה, רכבים ללא טסט או רכבים עם תקלות מכניות קשות.</p>
        <p className="mb-4">השירות שלנו מתבצע בשקיפות מלאה. אנו מגיעים עד אליכם, בוחנים את הרכב ומציעים מחיר הוגן במזומן. הפינוי מתבצע באמצעות גרר מקצועי ללא עלות נוספת מצדכם.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">חשוב לדעת</h3>
          <p>אנו מתמחים בפירוק רכבים פרטיים, מסחריים ורכבי 4x4. <strong>לידיעתכם, איננו מטפלים באופנועים.</strong> אנא ודאו כי הרכב בבעלותכם לפני תיאום הפינוי.</p>
        </div>
      </section>
    </main>
  );
}