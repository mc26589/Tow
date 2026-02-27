import { GUIDES } from "@/lib/guides";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return GUIDES.map((guide) => ({
        slug: guide.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const guide = GUIDES.find(g => g.slug === params.slug);
    if (!guide) return {};

    return {
        title: `${guide.title} | גרר מפרץ אקספרס`,
        description: guide.description,
    };
}

export default function GuideArticlePage({ params }: Props) {
    const guide = GUIDES.find(g => g.slug === params.slug);
    if (!guide) notFound();

    return (
        <article className="min-h-screen bg-white">
            <JsonLd
                guide={{
                    title: guide.title,
                    description: guide.description,
                    publishDate: guide.publishDate,
                    slug: guide.slug,
                    author: guide.author
                }}
            />

            <header className="bg-slate-50 py-16 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Link href="/guides" className="text-blue-600 font-bold mb-8 inline-block hover:underline">
                        חזרה לכל המדריכים
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-md uppercase">
                            {guide.category}
                        </span>
                        <time className="text-slate-500 text-sm">{guide.publishDate}</time>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-rubik font-black text-slate-900 leading-tight mb-8">
                        {guide.title}
                    </h1>
                    <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                            AS
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">{guide.author}</p>
                            <p className="text-xs text-slate-500">מומחה לחילוץ וגרירה</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <div
                    className="prose prose-lg prose-slate max-w-none 
                               prose-headings:font-rubik prose-headings:font-bold prose-headings:text-slate-900
                               prose-p:text-slate-600 prose-p:leading-relaxed
                               prose-li:text-slate-600
                               prose-strong:text-slate-900 prose-strong:font-bold"
                    dangerouslySetInnerHTML={{ __html: guide.content }}
                />

                <div className="mt-16 pt-10 border-t border-slate-100 bg-slate-50 p-8 rounded-3xl text-center">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">צריכים חילוץ או גרירה עכשיו?</h3>
                    <p className="text-slate-600 mb-8">אנחנו זמינים עבורכם 24/7 באזור חיפה והצפון.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:+972549174414" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all">
                            התקשרו עכשיו
                        </a>
                        <a href="https://wa.me/972549174414" className="bg-whatsapp text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all">
                            שלחו הודעת וואטסאפ
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
