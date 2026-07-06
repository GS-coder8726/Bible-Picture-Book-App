const fs = require('fs');
const path = require('path');

const appJsPath = '/Users/goya/Documents/Antigravity/聖書絵本制作/webapp/app.js';
const outputDir = '/Users/goya/Documents/Antigravity/聖書絵本制作/automation/output/';

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

    // Match the entire line of the comment so we don't leave trailing text
    const booksMatch = appJs.match(/const books = \[([\s\S]*?)\];\n\n\/\/ 全ての絵本の最後に「おしまい」のシーンを自動追加/);
    if (!booksMatch) {
        console.error("Could not find books array in app.js");
        return;
    }
    
    const creationMatch = appJs.match(/\{\s*id:\s*"creation"[\s\S]*?\}\n\s+\},\n/);
    const adamEveMatch = appJs.match(/\{\s*id:\s*"adam_and_eve"[\s\S]*?\}\n\s+\}(,\n)?/);
    
    let newBooksStr = 'const books = [\n';
    
    if (creationMatch) {
        newBooksStr += '    ' + creationMatch[0].trim().replace(/,\n$/, '') + ',\n';
    }
    if (adamEveMatch) {
        newBooksStr += '    ' + adamEveMatch[0].trim().replace(/,\n$/, '') + ',\n';
    }

    for (let i = 0; i < themeOrder.length; i++) {
        const theme = themeOrder[i];
        
        let targetDir = null;
        const dirs = fs.readdirSync(outputDir);
        for (const dir of dirs) {
            const scriptPath = path.join(outputDir, dir, 'script.json');
            if (fs.existsSync(scriptPath)) {
                try {
                    const scriptJson = JSON.parse(fs.readFileSync(scriptPath, 'utf8'));
                    if (scriptJson.id === theme) {
                        targetDir = dir;
                        break;
                    }
                } catch (e) { }
            }
        }
        
        if (!targetDir) {
            console.error("Could not find directory for theme: " + theme);
            continue;
        }

        const p = path.join(outputDir, targetDir, 'app_data.js');
        if (fs.existsSync(p)) {
            let data = fs.readFileSync(p, 'utf8').trim();
            const firstBrace = data.indexOf('{');
            const lastBrace = data.lastIndexOf('}');
            if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
                data = data.substring(firstBrace, lastBrace + 1);
            }
            
            data = data.split('\n').map((line) => '    ' + line).join('\n');
            
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
    
    // Add back the closing bracket and the comment exactly as it was matched
    newBooksStr += '];\n\n// 全ての絵本の最後に「おしまい」のシーンを自動追加';
    
    const newAppJs = appJs.replace(booksMatch[0], newBooksStr);
    
    fs.writeFileSync(appJsPath, newAppJs);
    console.log("Successfully updated app.js");
}

run();
