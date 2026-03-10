import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export default function Page() {
  // Placeholder for BUSINESS_INFO.phone for JSON-LD, as it's not available at generation time.
  // In a real application, BUSINESS_INFO.phone would be directly accessible.
  const businessPhoneForJsonLd = BUSINESS_INFO.phone || "972501234567"; 

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבי גרוטאה חיפה והקריות",
    "description": "שירותי גרירה ופינוי רכבי גרוטאה לפירוק ולחלפים באזור צ'ק פוסט חיפה והקריות. קונים רכבים ישנים, תקולים, ללא טסט ולפירוק במחירים הוגנים.",
    "url": "https://yourdomain.com/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim", // Replace with actual domain
    "image": "https://yourdomain.com/images/towing-truck.jpg", // Replace with actual image URL
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.81",
        "longitude": "35.03"
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
    },
    "priceRange": "$",
    "serviceType": [
      "גרירת רכבים לפירוק",
      "פינוי רכבי גרוטאות",
      "קניית רכבים ישנים",
      "שירותי גרירה",
      "גרירת רכבים ללא טסט",
      "גרירת רכבים תקולים"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": `+${businessPhoneForJsonLd}`,
      "contactType": "customer service",
      "areaServed": "חיפה והקריות",
      "availableLanguage": "Hebrew"
    }
  };

  return (
    <>
      <Script
        id="json-ld-auto-towing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            פינוי רכב גרוטאה גרירה צ'ק פוסט חיפה קריות לחלפים
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            זקוקים לשירותי גרירה ופינוי רכב גרוטאה באזור צ'ק פוסט, חיפה והקריות? אנו קונים רכבים לפירוק ולחלפים ומציעים שירות מהיר, מקצועי ובמחירים הוגנים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-lg"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* SGE Answer-first content */}
          <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
              פינוי רכב גרוטאה וגרירה לחלפים בצ'ק פוסט, חיפה והקריות – השירות המהיר והמשתלם ביותר
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              כן, אנו מספקים שירותי גרירה ופינוי רכבי גרוטאה המיועדים לחלפים באזור צ'ק פוסט, חיפה והקריות. אם ברשותכם רכב ישן, תקול, ללא טסט, או כזה שאינו כשיר לנסיעה ואתם מעוניינים למכור אותו לפירוק, הגעתם למקום הנכון. אנו מציעים תהליך מהיר, יעיל ושקוף, עם תשלום במזומן במקום ופינוי הרכב מביתכם או מכל מיקום אחר באזור.
            </p>
            <p className="text-lg leading-relaxed">
              השירות שלנו מתמקד ברכבים פרטיים, רכבים מסחריים ורכבי שטח (4X4). <strong className="text-red-400">חשוב לציין: איננו מספקים שירותי גרירה או פינוי לאופנועים.</strong>
            </p>
          </section>

          {/* Why choose us */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 text-center">
              למה לבחור בנו לפינוי רכב הגרוטאה שלכם?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-3">שירות מהיר ויעיל</h3>
                <p className="text-gray-300">אנו מבינים את הצורך בפינוי מהיר. צוות הגרירה שלנו יגיע אליכם בהקדם האפשרי, לרוב תוך שעות ספורות מרגע הפנייה.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-3">מחירים הוגנים ותשלום במזומן</h3>
                <p className="text-gray-300">אנו מציעים הצעות מחיר אטרקטיביות עבור רכבים לפירוק, ותשלום מיידי במזומן בעת איסוף הרכב.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-3">מקצועיות ואמינות</h3>
                <p className="text-gray-300">עם שנים של ניסיון בתחום, אנו מבטיחים שירות מקצועי, אמין ובטוח, תוך הקפדה על כל ההליכים הנדרשים.</p>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 text-center">
              איך זה עובד? תהליך פינוי רכב הגרוטאה שלכם
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-lg bg-gray-800 p-6 rounded-lg shadow-lg">
              <li>
                <strong className="text-white">יצירת קשר:</strong> צרו עמנו קשר בטלפון או בוואטסאפ. ספרו לנו על הרכב שלכם (דגם, שנתון, מצב כללי).
              </li>
              <li>
                <strong className="text-white">קבלת הצעת מחיר:</strong> לאחר קבלת הפרטים, נספק לכם הצעת מחיר הוגנת עבור הרכב שלכם לפירוק.
              </li>
              <li>
                <strong className="text-white">תיאום איסוף:</strong> אם תאשרו את ההצעה, נתאם מועד נוח לאיסוף הרכב מכל מקום באזור חיפה והקריות, כולל צ'ק פוסט.
              </li>
              <li>
                <strong className="text-white">תשלום ופינוי:</strong> צוות הגרירה שלנו יגיע, ישלם לכם במזומן ויפנה את הרכב במהירות ובבטחה.
              </li>
            </ol>
          </section>

          {/* Benefits of selling junk car */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 text-center">
              היתרונות במכירת רכב גרוטאה לפירוק
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-3">פינוי מקום יקר</h3>
                <p className="text-gray-300">שחררו את חניית הרכב או את השטח שהרכב התקול תופס, ופנו מקום לשימושים אחרים.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-3">קבלת תמורה כספית</h3>
                <p className="text-gray-300">גם רכב ישן או תקול שאינו כשיר לנסיעה שווה כסף! קבלו תשלום הוגן עבורו.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-3">תרומה לאיכות הסביבה</h3>
                <p className="text-gray-300">מחזור חלקי הרכב מפחית זיהום ומסייע בשמירה על הסביבה.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-3">פתרון מהיר וקל</h3>
                <p className="text-gray-300">במקום להתמודד עם בירוקרטיה או תיקונים יקרים, קבלו פתרון מהיר ונטול דאגות.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center p-6 bg-blue-800 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              צריכים לפנות רכב גרוטאה בצ'ק פוסט, חיפה או הקריות?
            </h2>
            <p className="text-lg text-blue-100 mb-6">
              אל תחכו! צרו קשר עוד היום וקבלו הצעת מחיר אטרקטיבית ותיאום פינוי מהיר.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTA cityName="Haifa and Krayot" />
              <a
                href={`tel:+${BUSINESS_INFO.phone}`}
                className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-lg"
              >
                התקשרו עכשיו!
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}