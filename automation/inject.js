const fs = require('fs');
const path = require('path');

const appJsPath = '/Users/goya/Documents/Antigravity/聖書絵本制作/webapp/app.js';
const outputDir = '/Users/goya/Documents/Antigravity/聖書絵本制作/automation/output/';

// We want to keep the exact order of themes
const themeOrder = [
    'paradise-lost',
    'cain_and_abel',
    'noahs_ark',
    'abrahams_departure',
    'isaacs_birth',
    'abraham_and_isaac',
    'jacob_and_esau_1',
    'jacob_and_esau_2',
    'jacob_and_esau_3',
    'dreaming_joseph',
    'joseph_in_egypt',
    'josephs_reunion',
    'baby_moses',
    'exodus',
    'parting_of_the_sea',
    'birth_of_jesus',
    'calling_disciples',
    'five_loaves',
    'good_samaritan',
    'lost_sheep',
    'crucifixion',
    'ascension',
    'pentecost',
    'new_heaven_and_earth'
];

async function run() {
    let appJs = fs.readFileSync(appJsPath, 'utf8');

    // Extract creation and adam_and_eve
    // Using simple regex or manual string manipulation since it's hardcoded
    const booksMatch = appJs.match(/const books = \[([\s\S]*?)\];\n\n\/\/ 全ての絵本の最後に/);
    if (!booksMatch) {
        console.error("Could not find books array in app.js");
        return;
    }
    
    // We will build the new books array string manually.
    // Instead of parsing, we know creation is the first, adam_and_eve is the second.
    // Let's grab them using regex by matching the objects.
    const creationMatch = appJs.match(/\{\s*id:\s*"creation"[\s\S]*?\}\n\s+\},\n/);
    const adamEveMatch = appJs.match(/\{\s*id:\s*"adam_and_eve"[\s\S]*?\}\n\s+\}(,\n)?/);
    
    let newBooksStr = 'const books = [\n';
    
    if (creationMatch) {
        newBooksStr += '    ' + creationMatch[0].trim().replace(/,\n$/, '') + ',\n';
    }
    if (adamEveMatch) {
        newBooksStr += '    ' + adamEveMatch[0].trim().replace(/,\n$/, '') + ',\n';
    }

    // Now append all the generated ones
    for (let i = 0; i < themeOrder.length; i++) {
        const theme = themeOrder[i];
        const p = path.join(outputDir, theme, 'app_data.js');
        if (fs.existsSync(p)) {
            let data = fs.readFileSync(p, 'utf8').trim();
            // Remove wrapping var/let/const if present
            data = data.replace(/^(const|let|var)\s+\w+\s*=\s*/, '');
            // Remove trailing semicolon
            data = data.replace(/;$/, '');
            
            // Re-indent for neatness
            data = data.split('\n').map((line, idx) => {
                if (idx === 0) return '    ' + line;
                return '    ' + line;
            }).join('\n');
            
            newBooksStr += data;
            if (i < themeOrder.length - 1) {
                newBooksStr += ',\n';
            } else {
                newBooksStr += '\n';
            }
        } else {
            console.error("File not found for theme: " + theme);
        }
    }
    
    newBooksStr += '];';
    
    const newAppJs = appJs.replace(booksMatch[0], newBooksStr);
    
    fs.writeFileSync(appJsPath, newAppJs);
    console.log("Successfully updated app.js");
}

run();
