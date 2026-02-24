import type { Metadata } from 'next';

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "Towing Rescue Haifa",
  "description": "Affordable and specialized 24/7 towing for low-clearance sports cars in Ahuzah, Haifa, and Krayot. Fully licensed and insured.",
  "url": "https://www.towingrescuehaifa.co.il/affordable-low-clearance-sports-car-towing-ahuzah-haifa",
  "telephone": "050-1234567",
  "priceRange": "250 ILS - 800 ILS",
  "areaServed": [
    {
      "@type": "Place",
      "name": "Haifa"
    },
    {
      "@type": "Place",
      "name": "Krayot"
    },
    {
      "@type": "Place",
      "name": "Ahuzah, Haifa"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7940, // Approximate center of Haifa
    "longitude": 34.9896
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "https://schema.org/Monday",
      "https://schema.org/Tuesday",
      "https://schema.org/Wednesday",
      "https://schema.org/Thursday",
      "https://schema.org/Friday",
      "https://schema.org/Saturday",
      "https://schema.org/Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "serviceType": [
    "Low-clearance sports car towing",
    "Affordable towing",
    "Emergency towing",
    "Roadside assistance",
    "Flatbed towing",
    "Sports car recovery"
  ],
  "image": "https://www.towingrescuehaifa.co.il/images/low-clearance-towing.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Haifa",
    "addressCountry": "IL"
  }
};

// Metadata for the page
export const metadata: Metadata = {
  title: 'גרירת רכב ספורט נמוך במחיר נוח באחוזה חיפה | גרירה חילוץ חיפה',
  description: 'מחפשים גרירה לרכב ספורט נמוך באחוזה, חיפה? גרירה חילוץ חיפה מספקת שירותי גרירה מקצועיים, בטוחים ובמחיר נוח 24/7. מורשים ומבוטחים.',
  keywords: 'גרירת רכב ספורט, גרירה נמוכה, אחוזה חיפה, גרירה חיפה, חילוץ רכב, גרר רכב ספורט, מחיר נוח, 24/7',
  alternates: {
    canonical: 'https://www.towingrescuehaifa.co.il/affordable-low-clearance-sports-car-towing-ahuzah-haifa',
  },
  openGraph: {
    title: 'גרירת רכב ספורט נמוך במחיר נוח באחוזה חיפה | גרירה חילוץ חיפה',
    description: 'מחפשים גרירה לרכב ספורט נמוך באחוזה, חיפה? גרירה חילוץ חיפה מספקת שירותי גרירה מקצועיים, בטוחים ובמחיר נוח 24/7. מורשים ומבוטחים.',
    url: 'https://www.towingrescuehaifa.co.il/affordable-low-clearance-sports-car-towing-ahuzah-haifa',
    images: [
      {
        url: 'https://www.towingrescuehaifa.co.il/images/og-low-clearance-towing.jpg',
        alt: 'Low clearance sports car being towed in Haifa',
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-right mb-6">
          גרירת רכב ספורט נמוך במחיר נוח באחוזה חיפה
        </h1>

        <section className="text-right leading-relaxed">
          <p className="mb-4">
            כן, <strong>גרירה חילוץ חיפה</strong> מספקת שירותי גרירה מיוחדים ובמחיר נוח לרכבי ספורט בעלי מרווח גחון נמוך באחוזה, חיפה, ובכל אזור הקריות, 24 שעות ביממה, 7 ימים בשבוע.
          </p>
          <p className="mb-4">
            אנו מבינים את הרגישות והדרישות הייחודיות של גרירת רכבי ספורט יוקרתיים ונמוכים. הציוד שלנו כולל גרורים שטוחים (Flatbed) עם רמפות נמוכות במיוחד ורצועות קשירה רכות, המבטיחים העמסה ושינוע בטוחים לחלוטין, ללא כל נזק למרכב או למכלולים התחתונים של רכבכם.
          </p>
          <h2 className="text-2xl font-semibold mb-3">מחירים שקופים ושירות מקצועי</h2>
          <p className="mb-4">
            שירותי הגרירה שלנו לרכבים בעלי מרווח גחון נמוך מתחילים מ-<strong>250 ש"ח</strong>, ומבטיחים תמחור שקוף ותחרותי. אנו מתחייבים למחיר הוגן ללא הפתעות.
          </p>
          <h2 className="text-2xl font-semibold mb-3">אמינות, רישוי וביטוח מלא</h2>
          <p className="mb-4">
            <strong>גרירה חילוץ חיפה</strong> הינה חברה מורשית ומבוטחת במלואה, מה שמבטיח לכם שקט נפשי וביטחון מלא שרכבכם מטופל על ידי צוות מומחה ואחראי. אנו פועלים ברישיון ועם כיסוי ביטוחי מקיף לכל גרירה.
          </p>
          <h2 className="text-2xl font-semibold mb-3">זמינות מיידית באחוזה, חיפה והקריות</h2>
          <p className="mb-4">
            לשירות גרירה דחוף לרכב ספורט נמוך באחוזה, חיפה או בכל עיר בקריות, צרו קשר עם <strong>גרירה חילוץ חיפה</strong> בטלפון: <a href="tel:0501234567" className="text-blue-600 hover:underline">050-1234567</a>. אנו זמינים תמיד לספק מענה מהיר ויעיל.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-6 text-sm">
            <p className="mb-1">
              <strong>שם העסק:</strong> גרירה חילוץ חיפה
            </p>
            <p className="mb-1">
              <strong>טלפון:</strong> <a href="tel:0501234567" className="text-blue-600 hover:underline">050-1234567</a>
            </p>
            <p>
              <strong>אזור שירות:</strong> חיפה והקריות, כולל אחוזה, כרמל, נווה שאנן, קרית ים, קרית מוצקין, קרית ביאליק, קרית אתא.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
