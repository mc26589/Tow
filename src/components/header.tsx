import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/data";

export function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl gradient-trust flex items-center justify-center shadow-sm
                          group-hover:shadow-md transition-shadow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                            <path d="M15 18H9" />
                            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14v10" />
                            <circle cx="17" cy="18" r="2" />
                            <circle cx="7" cy="18" r="2" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-rubik font-bold text-lg text-trust-blue-700 leading-tight">
                            גרר צפון
                        </span>
                        <span className="text-xs text-slate-400 leading-tight hidden sm:block">
                            שירותי גרירה 24/7
                        </span>
                    </div>
                </Link>

                {/* CTA Phone */}
                <a
                    href={`tel:+${BUSINESS_INFO.phone}`}
                    className="flex items-center gap-2 gradient-trust text-white rounded-full px-4 py-2.5
                     text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
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
