const fs = require('fs');
const path = require('path');

// Fix indoor.ts
const indoorFile = path.join(__dirname, 'src/data/products/indoor.ts');
let indoorContent = fs.readFileSync(indoorFile, 'utf8');
const indoorStartIndex = indoorContent.indexOf('id: "ma960-indoor"');
const indoorEndIndex = indoorContent.indexOf('id: "ev960"');
let indoorBlock = indoorContent.substring(indoorStartIndex, indoorEndIndex);
indoorBlock = indoorBlock.replace(/\/products\/INDOOR FIXED\.png/g, '/products/MA 960 INDOOR-OUTDOOR.png');
indoorContent = indoorContent.substring(0, indoorStartIndex) + indoorBlock + indoorContent.substring(indoorEndIndex);
fs.writeFileSync(indoorFile, indoorContent);

// Fix outdoor.ts
const outdoorFile = path.join(__dirname, 'src/data/products/outdoor.ts');
let outdoorContent = fs.readFileSync(outdoorFile, 'utf8');
const outdoorStartIndex = outdoorContent.indexOf('id: "ma960-outdoor"');
const outdoorEndIndex = outdoorContent.indexOf('id: "es960-outdoor"');
let outdoorBlock = outdoorContent.substring(outdoorStartIndex, outdoorEndIndex);
outdoorBlock = outdoorBlock.replace(/\/products\/OUTDOOR FIXED\.png/g, '/products/MA 960 INDOOR-OUTDOOR.png');
outdoorContent = outdoorContent.substring(0, outdoorStartIndex) + outdoorBlock + outdoorContent.substring(outdoorEndIndex);
fs.writeFileSync(outdoorFile, outdoorContent);

console.log("Images for MA960 fixed!");
