import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בדרך בר יהודה חיפה | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעת בדרך בר יהודה בחיפה? שירותי גרירה וחילוץ מקצועיים לרכב פרטי ומסחרי. הגעה מהירה, זמינות 24/7 ומחירים הוגנים. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-harley-davidson-derech-bar-yehuda-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בדרך בר יהודה חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0000" },
    "priceRange": "$$,$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירות גרירה וחילוץ בדרך בר יהודה חיפה</h1>
          <p className="text-lg mb-8">
            נתקעת בדרך בר יהודה בחיפה? אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים ומסחריים בכל אזור חיפה. 
            במידה ואתם בקרבת <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="underline font-semibold">צומת צ'ק פוסט</Link>, נדע להגיע אליכם במהירות שיא. 
            זקוקים לשירות נוסף באזור? אנו מציעים גם <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline">סיוע במקרי תקלות בדרכים בצ'ק פוסט</Link>. 
            חשוב להבהיר: איננו מספקים שירותי גרירה לאופנועים. הצוות שלנו זמין 24/7 לכל תקלה.
          </p>
          <div className="flex gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold"
            >
              התקשר עכשיו
            </a>
            <WhatsAppCTA cityName="Haifa" />
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו בחיפה?</h2>
        <ul className="list-disc pr-5 space-y-2 mb-10">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>זמני הגעה מהירים לדרך בר יהודה וצירים מרכזיים בחיפה.</li>
          <li>שירות מקצועי לרכבים פרטיים, רכבי שטח ומסחריים קלים.</li>
          <li>מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בחיפה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">תוך כמה זמן תגיעו לחלץ אותי בדרך בר יהודה?</h3>
            <p>אנו פרוסים ברחבי חיפה ומגיעים לכל קריאה בדרך בר יהודה בזמן קצר, בהתאם לעומסי התנועה באזור הצ'ק פוסט.</p>
          </div>
          <div>
            <h3 className="font-bold">באילו רכבים אתם מטפלים?</h3>
            <p>אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח. אם נתקעת בדרכים מהירות, תוכלו להיעזר גם בשירות <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירה בטוחה בכביש 22</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים אופנועים?</h3>
            <p>לא, איננו מספקים שירותי גרירה לאופנועים. אנו מתמקדים בפתרונות גרירה וחילוץ לרכבים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}