const fs = require('fs');
const path = require('path');

const mappings = {
  // modules.ts
  'indoor-modules': 'Indoor LED Modules.jpeg',
  'outdoor-modules': 'Outdoor LED Modules.jpeg',
  'flexible-modules': 'FLEXIBLE MODULE GAMA FLEXIBLE MODULE.png',
  'gob-modules': 'GOB MODULE GAMA GOB MODULE.png',

  // indoor.ts
  'ma960-indoor': 'INDOOR FIXED.png',
  'ev960': 'OUTDOOR SCREEN EV 960 - GAMA OV 960.png',
  'ma640s-indoor': 'INDOOR SCREEN MA640S - GAMA I- 640.png',
  'ma600-smd': 'INDOOR SCREEN MA600 - GAMA I-600.png',
  'ma600-cob': 'INDOOR SCREEN MA600 - GAMA I-600.png',
  'ma250': 'INDOOR SCREEN MA250 - GAMA I-250.png',
  'indoor-fixed': 'INDOOR FIXED.png',

  // outdoor.ts
  'ma960-outdoor': 'OUTDOOR FIXED.png',
  'es960-outdoor': 'OUTDOOR SCREEN ES 960 - GAMA OS960.png',
  'of800-outdoor': 'OUTDOOR FIXED.png',
  'of1000-outdoor': 'OUTDOOR SCREEN OF 1000 - GAMA OF 1000.png',
  'outdoor-fixed': 'OUTDOOR FIXED.png',
  'ev1000-outdoor-3d': 'OUTDOOR SCREEN EV 1000 - GAMA OEV 1000.png',

  // rental.ts
  'ms500-ms1000-indoor': 'RENTAL SERIES MS SERIES - GAMA RS SERIES.png',
  'ms500-ms1000-outdoor': 'RENTAL SERIES MS SERIES - GAMA RS SERIES.png',
  'my500-my1000-indoor': 'RENTAL SERIES MY SERIES - GAMA RY SERIES.png',
  'my500-my1000-outdoor': 'RENTAL SERIES MY SERIES - GAMA RY SERIES.png',
  'xr500-stage': 'STAGE SCREEN XR STAGE - GAMA RX STAGE SCREEN.png',

  // creative.ts
  'ev1000-3d': 'OUTDOOR SCREEN EV 1000 - GAMA OEV 1000.png',
  'lc60cf-poster': 'LED POSTER - GAMA LED POSTER.png',
  'shelf-led': 'SHELF LED.png',
  'or-transparent': 'TRANSPARENT SERIES OR TRANSPARENT - GAMA TR TRANSPARENT SERIES.png',
  'wave-m': 'TRANSPARENT SERIES WAVE SERIES- GAMA T WAVE SERIES.png',
  'if-transparent': 'TRANSPARENT IF SERIES - GAMA TI SERIES.png'
};

const files = [
  'src/data/products/modules.ts',
  'src/data/products/indoor.ts',
  'src/data/products/outdoor.ts',
  'src/data/products/rental.ts',
  'src/data/products/creative.ts'
];

files.forEach(file => {
  let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
  
  // For each series mapping
  for (const [id, image] of Object.entries(mappings)) {
    // Find where this series starts
    const seriesIdx = content.indexOf(`id: "${id}"`);
    if (seriesIdx === -1) continue;

    // Find where the NEXT series starts (either another series or end of array)
    // We can look for the next `id: "` but it might match a product ID.
    // Wait, products also have `id: "..."`.
    // So looking for `id: "` will stop at the first product!
    // A better way: find the start of the next SERIES object.
    // Actually, it's easier to just do a string replace, but we don't want it bleeding.
    // Let's find the series block by looking for the next `{ id: "` or end of file.
    let nextSeriesIdx = content.indexOf('\n    {', seriesIdx); 
    if (nextSeriesIdx === -1) nextSeriesIdx = content.length;

    // Extract the block
    let block = content.substring(seriesIdx, nextSeriesIdx);
    
    // Replace placeholder with new image
    block = block.replace(/\/placeholder\.png/g, `/products/${image}`);
    
    // Put the block back
    content = content.substring(0, seriesIdx) + block + content.substring(nextSeriesIdx);
  }

  fs.writeFileSync(path.join(__dirname, file), content);
});
console.log("Done");
