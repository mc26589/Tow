import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק באזור התעשייה הישן קרית ביאליק - פינוי מהיר",
  description: "רוצים למכור רכב ישן? קונה רכבים לפירוק באזור התעשייה הישן של קרית ביאליק. תשלום במזומן, פינוי מהיר ושירות אמין. התקשרו עכשיו לקבלת הצעה משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": "קרית ביאליק",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "priceRange": "$",
    "serviceType": "קניית רכבים לפירוק וברזל"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "תוך כמה זמן אתם מפנים רכב לפירוק בקרית ביאליק?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו מספקים פינוי מהיר באזור התעשייה הישן של קרית ביאליק, לרוב תוך זמן קצר מרגע השיחה." }
      },
      {
        "@type": "Question",
        "name": "האם אתם קונים כל רכב?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו קונים רכבים פרטיים ומסחריים. חשוב לציין: איננו מטפלים באופנועים." }
      }
    ]
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק וברזל באזור התעשייה הישן של קרית ביאליק</h1>
          <p className="text-lg md:text-xl mb-8">פינוי מהיר, שירות אמין ותשלום הוגן במקום. אנו כאן לכל צורך ברכב מושבת או ישן.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית ביאליק" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition">
              חייגו עכשיו לבירור מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">למה לבחור בנו לפירוק רכבים בקרית ביאליק?</h2>
        <p className="mb-4">אנו מציעים שירות מקצועי באזור התעשייה הישן של קרית ביאליק. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4 במצבם הנוכחי. השירות כולל גרירה ופינוי מהיר ללא עלות נוספת. אם אתם זקוקים לשירותים נוספים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal" className="text-blue-400">שירותי פירוק נוספים בקרית ביאליק</Link> או <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-400">קניית רכבים לפירוק בחיפה והקריות</Link>.</p>
        <p className="text-red-400 font-semibold mb-8">חשוב להבהיר: איננו מטפלים באופנועים או בכל סוג של כלי רכב דו-גלגלי.</p>
        
        <div className="mt-12 bg-neutral-900 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות על פירוק רכבים</h3>
          <div className="space-y-4">
            <p><strong>תוך כמה זמן אתם מפנים את הרכב?</strong> פינוי מהיר ותשלום במזומן במעמד הפינוי.</p>
            <p><strong>אילו רכבים אתם קונים?</strong> רכבים ישנים, מושבתים, לאחר תאונה או רכבים לברזל (לא כולל אופנועים).</p>
          </div>
        </div>
      </section>
    </main>
  );
}