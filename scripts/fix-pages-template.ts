import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.join(process.cwd(), 'src', 'app', 'areas', 'haifa-general');

function getHebrewContentTemplate(title: string, phone: string) {
    return `
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            ${title}
          </h1>
          <p className="mt-2 text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            שירותי גרירה וחילוץ מקצועיים 24/7. הגעה מהירה, שירות אמין ומחירים הוגנים לכל תושבי חיפה והקריות.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <WhatsAppCTA cityName="אזור חיפה" />
             <a href={\`tel:+\${BUSINESS_INFO.phone}\`} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-7 py-3.5 font-semibold text-base border border-white/25 hover:bg-white/25 transition-colors w-full sm:w-auto justify-center">
                📞 התקשרו עכשיו: ${phone}
             </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 py-12">
        <p className="text-lg mb-4 leading-relaxed font-rubik text-gray-800">
          נתקעתם עם הרכב? אנחנו ב-<strong className="font-semibold">גרר מפרץ אקספרס</strong> מבינים את המשמעות של מצב חירום. אנו מספקים מענה מהיר ומקצועי למגוון רחב של רכבים, כולל רכבים פרטיים, מסחריים וג'יפים, אך <strong className="font-semibold text-red-600">איננו מספקים שירותי גרירה לאופנועים</strong>.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">למה לבחור בנו?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong className="font-semibold">זמינות מלאה:</strong> אנחנו ערוכים לכל קריאה, 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li><strong className="font-semibold">מחירים הוגנים וזולים:</strong> אנו מבטיחים הצעת מחיר הוגנת ושקופה בטלפון, ללא הפתעות וטריקים מסחריים.</li>
            <li><strong className="font-semibold">מקצועיות ואמינות:</strong> צוות גוררים מוסמך בעל ניסיון רב, שידאג לרכב שלכם בשיא העדינות והבטיחות של רישיון וביטוח מקיף.</li>
            <li><strong className="font-semibold">הגעה מהירה:</strong> ממוקמים בלב חיפה ומגיעים במהירות לכל פינה בעיר ובקריות.</li>
          </ul>
        </div>
        
        <p className="text-lg leading-relaxed text-gray-800">
          צרו קשר עוד היום בוואטסאפ או בשיחה ישירה, ונהג גרירה מקצועי יהיה בדרך אליכם!
        </p>
      </section>
`;
}

async function run() {
    const files = fs.readdirSync(APP_DIR, { withFileTypes: true });
    for (const f of files) {
        if (f.isDirectory() && f.name !== 'emergency-towing-heavy-motorcycle-accident-ahuzah-haifa' && f.name !== 'heavy-motorcycle-towing-service-ahuzah-haifa-breakdown-assistance') {
            const pagePath = path.join(APP_DIR, f.name, 'page.tsx');
            if (fs.existsSync(pagePath)) {
                let content = fs.readFileSync(pagePath, 'utf-8');

                // Add the missing imports if they don't exist
                if (!content.includes('WhatsAppCTA')) {
                    content = content.replace("import type { Metadata } from 'next';", "import type { Metadata } from 'next';\nimport { WhatsAppCTA } from '@/components/whatsapp-cta';\nimport { BUSINESS_INFO } from '@/lib/data';\n");
                }

                // Extract original Hebrew H1 assuming it exists in the Metadata title
                const titleMatch = content.match(/title:\s*"(.*?)"/);
                const title = titleMatch ? titleMatch[1].split('|')[0].trim() : 'שירות יעיל ומהיר באזורך';
                const formattedPhone = "054-9174414"; // Display friendly version

                const newSection = getHebrewContentTemplate(title, formattedPhone);

                // Replace everything inside the export default function Page() { return ( <main ...> ... </main> ); }
                // Advanced replacement
                const extractSection = content.match(/(<section[\s\S]*?<\/section>[\s]*<section[\s\S]*?<\/section>|<section[\s\S]*?<\/section>)/);

                if (extractSection && extractSection.index !== undefined) {
                    const before = content.substring(0, extractSection.index);
                    const after = content.substring(extractSection.index + extractSection[0].length);
                    const updatedContent = before + newSection + after;
                    fs.writeFileSync(pagePath, updatedContent);
                    console.log(`Updated layout for: ${f.name}`);
                } else {
                    console.log(`Could not pattern match in: ${f.name}`);
                }
            }
        }
    }
}

run();
