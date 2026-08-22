import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 22 (עוקף קריות) | הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם עם הרכב בכביש 22? שירותי גרירה מקצועיים ומהירים לרכבים פרטיים ומסחריים 24/7. מחיר הוגן, הגעה מהירה לכל נקודה בקריות. התקשרו עכשיו!",
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
    "priceRange": "₪₪",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה לרכב תקוע בכביש 22 (עוקף קריות)</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנו מספקים חילוץ וגרירה מקצועיים לרכבים פרטיים ומסחריים לאורך כביש 22. זמינות מלאה, הגעה מהירה ומחיר הוגן.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="כביש 22 קריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לסיוע מיידי
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בקריות?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 – גם בחגים ובסופי שבוע.</li>
            <li>✓ מומחיות בחילוץ רכבים תקועים ב<Link href="/areas/haifa-general/towing-stuck-vehicle-road-22-haifa" className="text-blue-600 underline">כביש 22 וסביבתו</Link>.</li>
            <li>✓ שירות מהיר לתושבי האזור, כולל <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 underline">קרית ביאליק</Link> ומוצקין.</li>
            <li>✓ שקיפות מלאה במחיר ללא הפתעות מיותרות.</li>
          </ul>
          <p>זקוקים לשירותים נלווים? אנו מציעים גם פתרונות ל<Link href="/areas/haifa-general/buy-cars-for-scrap-krayot-immediate-removal" className="text-blue-600 font-bold hover:underline">פינוי רכבים לגריטה בקריות</Link> או <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-600 font-bold hover:underline">גרירה בצומת צ'ק פוסט</Link>.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים מהצד של כביש 22?</h3>
              <p>כן, אנו מנוסים מאוד בעבודה לאורך צירי התנועה הראשיים ובמתן מענה מהיר לבטיחות הנוסעים והרכב.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מהו אזור הפעילות שלכם מעבר לכביש 22?</h3>
              <p>אנו פרוסים בכל אזור חיפה והקריות. אם נתקעתם בנקודה מרוחקת יותר, נשמח להפנות אתכם לשירותי <Link href="/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22" className="text-blue-600">חילוץ וגרירה מורחבים</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מספקים שירותי גרירה לאופנועים?</h3>
              <p>לא, אנו מתמחים אך ורק ברכבים פרטיים ומסחריים. לטיפול באופנועים מומלץ לפנות לספקי שירות ייעודיים לכלים דו-גלגליים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}