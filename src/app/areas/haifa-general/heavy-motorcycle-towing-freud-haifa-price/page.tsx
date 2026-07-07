import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בדרך פרויד חיפה | שירות חילוץ 24/7 | מחיר הוגן ומהיר",
  description: "נתקעת בדרך פרויד בחיפה? זקוקים לגרר בדחיפות? שירותי גרירה מקצועיים 24/7 לרכבים פרטיים ומסחריים. הגעה מהירה, שקיפות מלאה ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-freud-haifa-price"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa",
    "priceRange": "₪₪",
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
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ בדרך פרויד חיפה
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            נתקעת עם הרכב בעלייה או בירידה של דרך פרויד? צוות המומחים שלנו זמין עבורך 24/7. שירות גרירה מהיר ומקצועי לרכבים פרטיים, מסחריים ו-4x4.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">שירות גרירה אמין בחיפה</h2>
          <p className="mb-6">
            כשאנחנו מדברים על גרירה בחיפה, אנחנו מבינים שהזמן שלכם יקר. אם הרכב נתקע, אנו מספקים פתרונות נוספים באזור כגון <Link href="/areas/haifa-general/cheap-private-car-towing-ahuza-haifa" className="text-blue-600 underline">גרירת רכבים פרטיים באחוזה</Link> או חילוצי שטח במידת הצורך כמו <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">חילוץ 4x4 ביערות הכרמל</Link>. אנו מתמחים במתן מענה מהיר לכל ציר מרכזי בעיר.
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-black text-white py-4 px-8 rounded-lg text-center font-bold hover:bg-gray-800 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות על שירותי גרירה בדרך פרויד</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold">האם אתם גוררים אופנועים?</p>
                <p>למרות השם של הדף, אנו מתמקדים אך ורק בגרירת רכבים פרטיים, רכבי שטח ומסחריות ואיננו מספקים שירותי גרירה לאופנועים.</p>
              </div>
              <div>
                <p className="font-bold">מהו טווח המחירים לגרירה בחיפה?</p>
                <p>המחיר נקבע בהתאם למרחק הגרירה וסוג הרכב. אנו מקפידים על מחיר הוגן ושקוף לכל לקוח.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם מספקים חילוץ גם באזורים סמוכים לדרך פרויד?</p>
                <p>כן, אנו נותנים שירות לכל חיפה, כולל שכונות קרובות. תוכלו לקרוא עוד על <Link href="/areas/haifa-general/car-scrapping-neve-shaanan-haifa" className="text-blue-600 underline">פינוי רכבים לנסיעה בנווה שאנן</Link> או על שירותי גרירה באזורים נוספים בעיר.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}