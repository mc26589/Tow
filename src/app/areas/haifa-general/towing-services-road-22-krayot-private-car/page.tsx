import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בכביש 22 קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בכביש 22 (עוקף קריות)? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-services-road-22-krayot-private-car",
  },
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
      "latitude": "32.8156",
      "longitude": "35.0653"
    },
    "serviceType": "Towing and Roadside Assistance for private cars"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה לרכב תקוע בכביש 22 קריות רכב פרטי</h1>
          <p className="text-xl mb-8">זקוקים לחילוץ דחוף? אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. שירות מהיר ומקצועי לאורך כל כביש עוקף קריות. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ הגעה מהירה לכל נקודה לאורך כביש 22 והקריות.</li>
            <li>✓ שירות מקצועי לרכבים פרטיים, מסחריים ורכבי שטח.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
          </ul>
          <p>מחפשים שירותים נוספים באזור? בדקו גם את <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 font-bold hover:underline">שירותי הגרירה הדחופים לעוקף קריות</Link> או <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-600 font-bold hover:underline">גרירת רכבים בקרית מוצקין</Link>.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן תגיעו אלי בכביש 22?</h3>
              <p>זמני ההגעה שלנו משתנים בהתאם לעומסי התנועה, אך אנו עושים מאמץ להגיע לכל קריאה בכביש 22 במינימום זמן.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים גם אופנועים?</h3>
              <p>לא, אנו מתמחים בגרירת רכבים פרטיים ומסחריים בלבד. לרכבים דו-גלגליים מומלץ לחפש שירות מתמחה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מציעים חילוץ רכב תקוע בבוץ?</h3>
              <p>במידה ונתקעתם מחוץ לכביש הסלול, אנו ממליצים לעיין בשירותי <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-600">חילוץ רכב תקוע בבוץ באזור הכרמל</Link> המותאמים למקרי שטח.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}