import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": "קריית חיים",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8192",
      "longitude": "35.0556"
    },
    "priceRange": "$",
    "serviceType": "פינוי רכב לפירוק"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכב לפירוק בקריית חיים – הצעת מחיר במזומן</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או מושבת? אנו מציעים שירות מהיר, אמין ומקצועי עם תשלום הוגן במזומן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קריית חיים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים לפירוק בקריית חיים ובכל אזור הקריות. אנו מספקים מענה מהיר לרכבים שאינם בנסיעה, רכבים לאחר תאונה או רכבים ישנים שצברו אבק.</p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>פינוי מהיר ומקצועי ללא עלות גרירה.</li>
          <li>הצעת מחיר הוגנת במזומן במקום.</li>
          <li>שירות אדיב וזמינות 24/7.</li>
          <li>טיפול בכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4.</li>
        </ul>
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <p className="text-sm text-neutral-400">
            *הערה חשובה: אנו מתמחים ברכבים בעלי ארבעה גלגלים ומעלה. איננו מספקים שירותי פינוי או גרירה לאופנועים מכל סוג שהוא.
          </p>
        </div>
      </section>
    </main>
  );
}