import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.join(process.cwd(), 'src', 'app', 'areas', 'haifa-general');
const files = fs.readdirSync(APP_DIR, { withFileTypes: true });

for (const f of files) {
    if (f.isDirectory() && f.name !== 'emergency-towing-heavy-motorcycle-accident-ahuzah-haifa' && f.name !== 'heavy-motorcycle-towing-service-ahuzah-haifa-breakdown-assistance') {
        const filePath = path.join(APP_DIR, f.name, 'page.tsx');
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf-8');

            // Check if it already has <>
            if (content.includes('return (\n    <>\n')) continue;

            // Wrap the return block in a fragment
            content = content.replace(/return \(\s*<section/g, 'return (\n    <>\n      <section');
            content = content.replace(/<\/section>\s*\);\s*}\s*$/g, '</section>\n    </>\n  );\n}\n');

            fs.writeFileSync(filePath, content);
            console.log(`Patched fragments in: ${f.name}`);
        }
    }
}
