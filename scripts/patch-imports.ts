import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.join(process.cwd(), 'src/app/areas/haifa-general');
const files = fs.readdirSync(APP_DIR, { withFileTypes: true });

for (const f of files) {
    if (f.isDirectory() && f.name !== 'emergency-towing-heavy-motorcycle-accident-ahuzah-haifa' && f.name !== 'heavy-motorcycle-towing-service-ahuzah-haifa-breakdown-assistance') {
        const filePath = path.join(APP_DIR, f.name, 'page.tsx');
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf-8');

            let updated = false;

            if (!content.includes('import { WhatsAppCTA }')) {
                // Find the last import statement and insert after
                const imports = content.match(/^import.*$/gm);
                if (imports && imports.length > 0) {
                    const lastImport = imports[imports.length - 1];
                    content = content.replace(lastImport, lastImport + "\nimport { WhatsAppCTA } from '@/components/whatsapp-cta';\nimport { BUSINESS_INFO } from '@/lib/data';");
                    updated = true;
                }
            }

            if (updated) {
                fs.writeFileSync(filePath, content);
                console.log(`Injected imports for: ${f.name}`);
            }
        }
    }
}
