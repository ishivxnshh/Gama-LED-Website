const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, 'src/data/products');
const files = ['indoor.ts', 'outdoor.ts', 'creative.ts', 'modules.ts', 'rental.ts', 'standees.ts'];

let mapping = [];
files.forEach(file => {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const blockRegex = /name:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;
  let match;
  while ((match = blockRegex.exec(content)) !== null) {
    if (match[2].startsWith('/products/')) {
        mapping.push({ file, name: match[1], image: match[2] });
    }
  }
});
console.log(JSON.stringify(mapping, null, 2));
