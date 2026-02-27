import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/data";

export function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="flex items-center gap-2 group focus-ring rounded-lg p-1 -ml-1">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md relative overflow-hidden
                          group-hover:shadow-lg transition-shadow">
                        <Image src="/logo.png" alt="לוגו גרר מפרץ אקספרס" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-rubik font-black text-xl text-slate-900 leading-tight">
                            גרר מפרץ אקספרס
                        </span>
                        <span className="text-xs font-medium text-slate-500 leading-tight hidden sm:block">
                            שירותי גרירה 24/7
                        </span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/about" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                        אודות
                    </Link>
                    <Link href="/guides" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                        מדריכים וטיפים
                    </Link>
                </nav>

                {/* CTA Phone */}
                <a
                    href={`tel:+${BUSINESS_INFO.phone}`}
                    className="flex items-center gap-2 gradient-trust text-white rounded-full px-5 py-2.5
                     text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all focus-ring"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="hidden sm:inline">התקשרו עכשיו</span>
                    <span className="sm:hidden">חייגו</span>
                </a>
            </div>
        </header>
    );
}
