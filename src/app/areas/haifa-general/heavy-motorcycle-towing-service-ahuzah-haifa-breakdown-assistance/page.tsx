import type { Metadata } from 'next';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "Towing Rescue Haifa",
  "description": "24/7 heavy motorcycle towing service and breakdown assistance in Ahuzah, Haifa, and Krayot. Fully licensed and insured.",
  "url": "https://www.towingrescuehaifa.co.il/heavy-motorcycle-towing-service-ahuzah-haifa-breakdown-assistance",
  "telephone": "tel:+972501234567",
  "priceRange": "250 ILS - 600 ILS",
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
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7940, // Approximate center of Haifa
    "longitude": 34.9896 // Approximate center of Haifa
  },
  "serviceType": [
    "Heavy Motorcycle Towing",
    "Motorcycle Breakdown Assistance",
    "Roadside Assistance",
    "Emergency Towing"
  ],
  "image": "https://www.towingrescuehaifa.co.il/images/heavy-motorcycle-towing.jpg"
};

export const metadata: Metadata = {
  title: 'שירותי גרירה לאופנועים כבדים אחוזה חיפה וסיוע בדרכים | Towing Rescue Haifa',
  description: 'Need heavy motorcycle towing or breakdown assistance in Ahuzah, Haifa? Towing Rescue Haifa offers 24/7 licensed and insured service. Starting at 250 ILS. Call 050-1234567.',
  keywords: ['heavy motorcycle towing Ahuzah Haifa', 'motorcycle breakdown assistance Haifa', 'towing service Ahuzah', 'emergency motorcycle towing Haifa', 'אופנועים כבדים גרירה אחוזה חיפה', 'סיוע בדרכים אופנועים חיפה'],
  alternates: {
    canonical: 'https://www.towingrescuehaifa.co.il/heavy-motorcycle-towing-service-ahuzah-haifa-breakdown-assistance',
  },
  openGraph: {
    title: 'שירותי גרירה לאופנועים כבדים אחוזה חיפה וסיוע בדרכים | Towing Rescue Haifa',
    description: 'Need heavy motorcycle towing or breakdown assistance in Ahuzah, Haifa? Towing Rescue Haifa offers 24/7 licensed and insured service. Starting at 250 ILS. Call 050-1234567.',
    url: 'https://www.towingrescuehaifa.co.il/heavy-motorcycle-towing-service-ahuzah-haifa-breakdown-assistance',
    images: [
      {
        url: 'https://www.towingrescuehaifa.co.il/images/heavy-motorcycle-towing.jpg',
        alt: 'Heavy Motorcycle Towing Service in Ahuzah, Haifa',
      },
    ],
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
      <main className="container mx-auto p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          שירותי גרירה לאופנועים כבדים אחוזה חיפה וסיוע בדרכים
        </h1>

        <section className="py-8 px-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <p className="text-lg mb-6 leading-relaxed text-gray-800">
                <strong>Yes, Towing Rescue Haifa provides immediate and professional heavy motorcycle towing service and breakdown assistance in Ahuzah, Haifa, and throughout the Krayot area, 24/7.</strong> Whether you've experienced a flat tire, engine trouble, or an accident, our specialized team is equipped to handle all types of heavy motorcycles with the utmost care and efficiency.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Towing Rescue Haifa for Heavy Motorcycle Assistance in Ahuzah?</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>
                    <strong>24/7 Emergency Service:</strong> We are available around the clock, every day of the week, to ensure you're never stranded.
                </li>
                <li>
                    <strong>Specialized Equipment:</strong> Our tow trucks are fitted with advanced equipment designed specifically for safe and secure heavy motorcycle transport, preventing any damage during towing.
                </li>
                <li>
                    <strong>Experienced Technicians:</strong> Our team comprises highly trained and experienced professionals who understand the unique requirements of heavy motorcycles.
                </li>
                <li>
                    <strong>Fast Response Times:</strong> We prioritize rapid deployment to your location in Ahuzah, Haifa, and surrounding areas.
                </li>
                <li>
                    <strong>Comprehensive Breakdown Assistance:</strong> Beyond towing, we offer on-site assistance for minor issues, helping you get back on the road quickly if possible.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Transparent Pricing & Professional Assurance (E-E-A-T)</h2>
            <p className="mb-4 text-gray-700">
                Our commitment to transparency means you'll know the cost upfront. <strong>Transparent pricing for heavy motorcycle towing starts at just 250 ILS</strong>, varying based on distance, time of day, and specific service requirements. We provide clear quotes before any service begins.
            </p>
            <p className="mb-6 text-gray-700">
                <strong>Towing Rescue Haifa is a fully licensed and insured towing service</strong>, ensuring that your valuable heavy motorcycle is in safe hands. We adhere to all industry standards and regulations, providing you with peace of mind.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Towing Rescue Haifa (NAP)</h2>
            <p className="mb-2 text-gray-700">
                For immediate heavy motorcycle towing or breakdown assistance in Ahuzah, Haifa, or the Krayot region, contact us now:
            </p>
            <p className="text-xl font-bold text-blue-700 mb-4">
                Name: Towing Rescue Haifa<br />
                Phone: <a href="tel:+972501234567" className="text-blue-700 hover:underline">050-1234567</a>
            </p>
            <p className="text-gray-700">
                We are your reliable partner for emergency roadside assistance, dedicated to getting you and your heavy motorcycle safely to your destination.
            </p>
        </section>
      </main>
    </>
  );
}