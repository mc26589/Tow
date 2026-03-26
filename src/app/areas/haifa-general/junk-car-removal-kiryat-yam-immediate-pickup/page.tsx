import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "פינוי רכב לפירוק בקרית ים - פינוי מיידי 24/7",
  description: "שירות פינוי רכבים לפירוק בקרית ים. פינוי מיידי, מקצועי וללא עלות. צרו קשר עכשיו לפינוי מהיר של רכבים ישנים או תקולים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים",
    "areaServed": { "@type": "City", "name": "Kiryat Yam" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.835", "longitude": "35.071" },
    "priceRange": "$",
    "serviceType": "Junk car removal and towing"
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכב לפירוק בקרית ים – פינוי מיידי ושירות מקצועי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב לפירוק בקרית ים? אנו מתמחים בפינוי רכבים, רכבים מסחריים ורכבי 4x4. השירות ניתן במהירות ובמקצועיות. (שימו לב: איננו מפנים אופנועים).</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לנציג
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ פינוי מיידי ללא עיכובים מיותרים בקרית ים.</li>
          <li>✓ שירות אדיב ומקצועי לכל סוגי הרכבים (למעט אופנועים).</li>
          <li>✓ הצעת מחיר הוגנת ושקופה בטלפון.</li>
          <li>✓ זמינות מלאה 24/7 לכל קריאה.</li>
        </ul>
      </section>
    </main>
  );
}