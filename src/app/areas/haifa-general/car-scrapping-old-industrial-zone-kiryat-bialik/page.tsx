import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק באזור התעשייה קרית ביאליק | תשלום מזומן במקום",
  description: "רוצים למכור רכב ישן? קונים רכבים לפירוק באזור התעשייה קרית ביאליק. תשלום הוגן במזומן, פינוי מהיר וגרירה חינם. התקשרו עכשיו להצעה משתלמת!",
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
    "priceRange": "$",
    "serviceType": "קניית רכבים לפירוק וברזל"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "תוך כמה זמן אתם מפנים רכב לפירוק באזור התעשייה בקרית ביאליק?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו מספקים פינוי מהיר באזור התעשייה הישן של קרית ביאליק, לרוב תוך זמן קצר מרגע השיחה ותיאום מול הלקוח." }
      },
      {
        "@type": "Question",
        "name": "האם אתם קונים רכבים ללא טסט או רכבים מושבתים?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו קונים רכבים ישנים, מושבתים, לאחר תאונה או רכבים המיועדים לפירוק לברזל, ומשלמים במזומן במקום." }
      }
    ]
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק באזור התעשייה קרית ביאליק</h1>
          <p className="text-lg md:text-xl mb-8">פינוי מהיר, תשלום הוגן במזומן וגרירה ללא עלות. המומחים לפינוי רכבים ישנים ומושבתים בקריות.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית ביאליק" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition">
              חייגו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">למה לבחור בנו לפירוק רכבים בקרית ביאליק?</h2>
        <p className="mb-4">
          אנו מציעים שירות מקצועי ומקיף באזור התעשייה הישן. אם הרכב שלכם תקוע או שאתם מחפשים <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-400">פירוק רכבים בקרית מוצקין</Link> או ביאליק, אנו הכתובת. 
          ניתן להתרשם גם משירותי <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-400">גרירה באזור צומת צ'ק פוסט</Link> או לבדוק שירותי <Link href="/areas/haifa-general/scrap-car-removal-kiryat-haim-cash" className="text-blue-400">פירוק רכבים בקרית חיים</Link> במזומן.
        </p>
        <p className="text-red-400 font-semibold mb-8">חשוב להבהיר: אנו מתמחים ברכבים ורכבים מסחריים בלבד ואיננו מטפלים באופנועים.</p>
        
        <div className="mt-12 bg-neutral-900 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות על פירוק רכבים</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">האם אתם מגיעים לכל האזור?</p>
              <p>כן, אנו פעילים בפריסה מלאה באזור הקריות, כולל שירותי גרירה מקצועיים כמו <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-400">גרירה בכביש 22 עוקף קריות</Link>.</p>
            </div>
            <div>
              <p className="font-bold">מהו תהליך העבודה?</p>
              <p>התהליך פשוט: מתקשרים, מתאמים הגעה, מקבלים תשלום במזומן במקום ואנו דואגים לפינוי הרכב בגרר, כולל טיפול בכל הניירת הנדרשת.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}