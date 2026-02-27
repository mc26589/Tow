import { GUIDES } from "@/lib/guides";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "מדריכי גרירה וחילוץ - גרר מפרץ אקספרס",
    description: "מרכז המידע של גרר מפרץ אקספרס: טיפים לבטיחות בדרכים, הכנת הרכב לחורף, מה לעשות לאחר תאונה ועוד.",
};

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-rubik font-black mb-4">טיפים ומדריכים לדרך</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        כל מה שצריך לדעת כדי לשמור על הבטיחות ועל הרכב שלכם בדרכי הצפון.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {GUIDES.map((guide) => (
                            <Link
                                href={`/guides/${guide.slug}`}
                                key={guide.slug}
                                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col group"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {guide.category}
                                        </span>
                                        <span className="text-slate-400 text-sm">{guide.readTime} קריאה</span>
                                    </div>
                                    <h2 className="text-2xl font-rubik font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {guide.title}
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                        {guide.description}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <span className="text-blue-600 font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                            קראו עוד
                                            <span dir="ltr">→</span>
                                        </span>
                                        <span className="text-slate-400 text-sm">{guide.publishDate}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
