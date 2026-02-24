import type { Metadata } from 'next';

// Define the JSON-LD schema directly
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "Towing Rescue Haifa",
  "description": "Towing Rescue Haifa offers cash for junk cars and scrap vehicle removal services in Kiryat Motzkin, Haifa, and the Krayot region. We provide competitive cash offers for unwanted vehicles and ensure environmentally responsible disposal.",
  "url": "https://www.towingrescuehaifa.com/cash-for-junk-cars-scrap-vehicle-removal-kiryat-motzkin",
  "telephone": "050-1234567",
  "priceRange": "Competitive cash offers (300 ILS - 3000+ ILS)",
  "serviceType": [
    "Junk Car Removal",
    "Scrap Vehicle Removal",
    "Cash for Cars",
    "Vehicle Recycling"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Haifa and Krayot",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.8126, // Approximate center of Haifa/Krayot
      "longitude": 35.0000
    }
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};

export const metadata: Metadata = {
  title: 'מזומן עבור רכבי גרוטאות ופינוי רכבים לפירוק בקרית מוצקין | Towing Rescue Haifa',
  description: 'Towing Rescue Haifa provides cash for junk cars and scrap vehicle removal in Kiryat Motzkin. Get competitive offers, licensed service, and hassle-free pickup. Call 050-1234567.',
  alternates: {
    canonical: 'https://www.towingrescuehaifa.com/cash-for-junk-cars-scrap-vehicle-removal-kiryat-motzkin',
  },
  openGraph: {
    title: 'מזומן עבור רכבי גרוטאות ופינוי רכבים לפירוק בקרית מוצקין | Towing Rescue Haifa',
    description: 'Towing Rescue Haifa provides cash for junk cars and scrap vehicle removal in Kiryat Motzkin. Get competitive offers, licensed service, and hassle-free pickup. Call 050-1234567.',
    url: 'https://www.towingrescuehaifa.com/cash-for-junk-cars-scrap-vehicle-removal-kiryat-motzkin',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <h1>מזומן עבור רכבי גרוטאות ופינוי רכבים לפירוק בקרית מוצקין</h1>

        <section>
          <p>
            Yes, Towing Rescue Haifa offers comprehensive services for **cash for junk cars and efficient scrap vehicle removal in Kiryat Motzkin** and across the entire Haifa and Krayot region. We specialize in providing a quick, easy, and profitable solution for disposing of your unwanted, damaged, or non-running vehicles.
          </p>
          <h2>Why Choose Towing Rescue Haifa for Your Scrap Vehicle?</h2>
          <ul>
            <li>
              <strong>Competitive Cash Offers:</strong> We provide transparent and fair cash offers for your junk car, often ranging from **300 ILS to 3,000 ILS or more**, depending on the vehicle's make, model, year, condition, and current scrap metal market values. Get a free, no-obligation quote today!
            </li>
            <li>
              <strong>Hassle-Free Removal:</strong> Our team handles all the logistics, from paperwork to towing, making the process seamless for you.
            </li>
            <li>
              <strong>Licensed & Insured:</strong> As a **fully licensed and insured** towing and vehicle removal service, Towing Rescue Haifa guarantees professional, reliable, and legal disposal of your vehicle, giving you peace of mind.
            </li>
            <li>
              <strong>Serving Kiryat Motzkin & Krayot:</strong> We offer prompt and reliable service directly in Kiryat Motzkin, as well as Haifa, Kiryat Yam, Kiryat Bialik, Kiryat Haim, and surrounding areas.
            </li>
            <li>
              <strong>Environmentally Responsible:</strong> We ensure your vehicle is recycled and disposed of in an environmentally friendly manner.
            </li>
          </ul>
          <p>
            Ready to turn your old car into cash? Contact **Towing Rescue Haifa** today for a free quote and immediate scrap vehicle removal.
            Call us now at <a href="tel:0501234567"><strong>050-1234567</strong></a>.
          </p>
        </section>
      </main>
    </>
  );
}
