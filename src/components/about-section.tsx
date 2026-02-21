export function AboutSection() {
    const features = [
        {
            icon: "⚡",
            title: "הגעה מהירה",
            description:
                "צוות הנהגים שלנו פרוס בכל אזור חיפה והצפון. אנחנו מגיעים אליכם תוך 30 דקות בממוצע, בכל שעה.",
        },
        {
            icon: "💰",
            title: "מחירים הוגנים",
            description:
                "מחיר סופי לפני שמתחילים. אין תוספות נסתרות, אין הפתעות. מה שסוכם — מה שמשלמים.",
        },
        {
            icon: "🛡️",
            title: "גרירה בטוחה",
            description:
                "ציוד גרירה מתקדם ונהגים מוסמכים. הרכב שלכם מגיע ליעד בשלמות, בלי שריטה.",
        },
        {
            icon: "🕐",
            title: "24/7 — תמיד זמינים",
            description:
                "שעתיים בלילה? שבת? חגים? לא משנה מתי — אנחנו כאן. גרר צפון עובד 24 שעות ביממה.",
        },
        {
            icon: "🚗",
            title: "כל סוגי הרכבים",
            description:
                "מרכב פרטי קטן ועד ג'יפ כבד, כולל רכבים חשמליים וטנדרים. יש לנו את הציוד המתאים.",
        },
        {
            icon: "📱",
            title: "הזמנה בקליק",
            description:
                "שלחו הודעת WhatsApp, התקשרו, או פנו דרך האתר. תוך דקות נהג בדרך אליכם.",
        },
    ];

    return (
        <section className="py-16" id="about">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="font-rubik font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                        🏆 למה לבחור בגרר צפון?
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        אנחנו לא סתם גוררים — אנחנו הפתרון המהיר, האמין והשקוף ביותר באזור חיפה והצפון
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm card-hover
                         hover:border-trust-blue-200"
                        >
                            <div className="text-3xl mb-3">{feature.icon}</div>
                            <h3 className="font-rubik font-semibold text-lg text-slate-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
