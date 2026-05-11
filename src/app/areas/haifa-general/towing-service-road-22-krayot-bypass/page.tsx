import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות הגרר שלנו בדרך אליכם לחילוץ מהיר ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-neutral-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">כביש 22 הוא ציר תנועה מרכזי, ותקיעה בו דורשת פינוי מהיר ומקצועי כדי למנוע סיכון בטיחותי. אנו מתמחים בחילוץ רכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4). שירות זה אינו כולל גרירת אופנועים.</p>
        <p className="mb-4">אנו מציעים מחירים הוגנים ושירות אדיב לכל תושבי חיפה והקריות. אל תמתינו שעות בצד הדרך – צרו קשר וקבלו הצעת מחיר בטלפון.</p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
              "latitude": "32.8156",
              "longitude": "35.0650"
            },
            "serviceType": "Towing and Roadside Assistance"
          }),
        }}
      />
    </main>
  );
}