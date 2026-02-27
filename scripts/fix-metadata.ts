import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.join(process.cwd(), 'src/app/areas/haifa-general');
const files = fs.readdirSync(APP_DIR, { withFileTypes: true });

for (const f of files) {
    if (f.isDirectory() && f.name !== 'emergency-towing-heavy-motorcycle-accident-ahuzah-haifa' && f.name !== 'heavy-motorcycle-towing-service-ahuzah-haifa-breakdown-assistance') {
        const filePath = path.join(APP_DIR, f.name, 'page.tsx');
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf-8');

            // 1. Translate metadata and OpenGraph descriptions
            content = content.replace(/description:\s*[`'"].*?[`'"]/g, "description: 'גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי. התקשרו עכשיו!'");

            // 2. Translate keywords
            content = content.replace(/keywords:\s*[`'"].*?[`'"]/g, "keywords: 'גרר, גרירה, חילוץ, חיפה, קריות, חילוץ 4x4, שירותי גרירה, גרר מפרץ אקספרס'");

            // 3. Translate JSON-LD fields
            content = content.replace(/"name":\s*"Towing Rescue Haifa"/g, '"name": "גרר מפרץ אקספרס"');
            content = content.replace(/"description":\s*".*?"/g, (match) => {
                if (match.includes('תאונות') || match.includes('שירותי')) return match; // Already Hebrew
                return '"description": "גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי."';
            });
            content = content.replace(/"telephone":\s*".*?"/g, '"telephone": "tel:+972549174414"');
            content = content.replace(/"priceRange":\s*".*?"/g, '"priceRange": "$"');
            content = content.replace(/"serviceType":\s*\[[\s\S]*?\]/g, '"serviceType": ["גרירת רכבים", "חילוץ דרך", "שירותי גרירה", "חילוץ 4x4"]');

            fs.writeFileSync(filePath, content);
            console.log(`Fully translated metadata/JSON-LD for: ${f.name}`);
        }
    }
}
