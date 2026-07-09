const fs = require('fs');

const lc60s_models = [
  { pitch: "1.25", type: "SMD1010", goob: true, res: "512 x 1536", scan: "1/64 Scan" },
  { pitch: "1.538", type: "SMD1212", goob: true, res: "416 x 1248", scan: "1/52 Scan" },
  { pitch: "1.86", type: "SMD1515", goob: false, res: "344 x 1032", scan: "1/43 Scan" },
  { pitch: "2", type: "SMD1515", goob: false, res: "320 x 960", scan: "1/40 Scan" },
  { pitch: "2.5", type: "SMD2020", goob: false, res: "256 x 768", scan: "1/32 Scan" }
];

const lc70_models = [
  { pitch: "1.25", type: "SMD1010(GOB)", res: "600X1600", scan: "Constant, 1/50 Scan", bright: "600" },
  { pitch: "1.5625", type: "SMD1212(GOB)", res: "480X1280", scan: "Constant, 1/40 scan", bright: "600" },
  { pitch: "1.95", type: "SMD1515", res: "384X1024", scan: "Constant, 1/32 scan", bright: "800" },
  { pitch: "2.5", type: "SMD1515", res: "300X800", scan: "Constant, 1/25 scan", bright: "800" }
];

const lc70d_models = [
  { pitch: "1.25", type: "SMD1010(GOB)", res: "600X1600", scan: "Constant, 1/50 Scan", bright: "600" },
  { pitch: "1.5625", type: "SMD1212(GOB)", res: "480X1280", scan: "Constant, 1/40 scan", bright: "600" },
  { pitch: "1.95", type: "SMD1515", res: "384X1024", scan: "Constant, 1/32 scan", bright: "800" },
  { pitch: "2.5", type: "SMD1515", res: "300X800", scan: "Constant, 1/25 scan", bright: "800" },
  { pitch: "2.604", type: "SMD1515", res: "288X768", scan: "Constant, 1/32 scan", bright: "800" },
  { pitch: "2.976", type: "SMD1515", res: "252X672", scan: "Constant, 1/28 scan", bright: "800" },
  { pitch: "3.91", type: "SMD1515", res: "192X512", scan: "Constant, 1/16 scan", bright: "1000" }
];

let output = `import type { LEDProductType } from "./types";

export const ledStandees: LEDProductType = {
  id: "led-standees",
  name: "LED Standees",
  description: "Sleek, standalone LED displays perfect for retail, exhibitions, and digital signage.",
  series: [
    {
      id: "lc60s-series",
      name: "LC60S Series",
      description: "Sleek and standalone LED poster displays with integrated CNC-moulded aluminum alloy cabinet.",
      image: "/products/LC60S.png",
      products: [
`;

lc60s_models.forEach(m => {
  let pitchStr = `P${m.pitch}${m.goob ? ' (GOB)' : ''}`;
  output += `        {
          id: "lc60s-p${m.pitch.replace('.', '-')}",
          name: "LC60S ${pitchStr}",
          description: "${pitchStr} LED Poster",
          image: "/products/LC60S.png",
          pixelPitch: "${m.pitch}mm",
          brightness: "600 nits",
          specifications: {
            "LED Type": "${m.type}",
            "Pixel Pitch": "${pitchStr}",
            "Product Dimensions": "670 × 2073 × 465 mm",
            "Display Size": "640 × 1920 mm",
            "Resolution": "${m.res}",
            "Weight": "47 kg",
            "Material": "Integrated CNC-moulded aluminum alloy cabinet",
            "Module Size": "320 × 160 mm",
            "Brightness": "600 nits",
            "Refresh Rate": "3840 Hz",
            "Color Temperature": "9000 ± 1000 K",
            "Viewing Angle": "140° / 140°",
            "Driving Method": "${m.scan}",
            "AC Operating Voltage": "AC 200~240 (wide voltage optional)",
            "Power Consumption (Max/Avg)": "490 / 163 W/set",
            "Storage Temperature": "-40 ~ +60 °C",
            "Operating Temperature": "-10 ~ +40 °C",
            "Storage Humidity": "10% ~ 90%",
            "Operating Humidity": "10% ~ 90%",
            "Protection Level": "IP40 / IP20",
            "LED Lifespan (H)": "100,000",
            "Module Maintenance": "Rear Maintenance",
            "Power & Other Maintenance": "Rear Maintenance",
            "Seamless Splicing": "Supported",
            "Installation Method": "Hanging / Wall-mounted (optional), Floor Stand, Splicing"
          }
        },
`;
});

output += `      ]
    },
    {
      id: "lc70-series",
      name: "LC70 Series",
      description: "Premium standalone LED posters with slim profile and front maintenance.",
      image: "/products/LC 70.png",
      products: [
`;

lc70_models.forEach(m => {
  let pitchStr = `P${m.pitch}`;
  output += `        {
          id: "lc70-p${m.pitch.replace('.', '-')}",
          name: "LC70 ${pitchStr}",
          description: "${pitchStr} LED Poster",
          image: "/products/LC 70.png",
          pixelPitch: "${m.pitch}mm",
          brightness: "${m.bright} nits",
          specifications: {
            "LED Type": "${m.type}",
            "Pixel Pitch": "${pitchStr}",
            "Physical Density": "${m.type.includes('1010') ? '640000' : m.type.includes('1212') ? '409600' : m.pitch === '1.95' ? '262144' : '160000'} Dots/㎡",
            "Display Resolution": "${m.res}",
            "Module Size": "250X250 mm",
            "Display Dimension": "750X2000X33 mm",
            "Weight": "39.6 kg",
            "Maintenance Mode": "Front",
            "Materials": "Aluminum",
            "Brightness": "${m.bright} nits",
            "Color Temp": "3200-9300 K",
            "Viewing Angle": "160°/160°",
            "Brightness/Color Uniformity": "≥97%",
            "Contrast Ratio": "15000 : 1",
            "Frame Frequency": "50/60",
            "Scan Mode": "${m.scan}",
            "Gray Scale": "14/16 optional",
            "Refresh Rate": "3840 Hz",
            "Max Consumption": "650 W/㎡",
            "Average Consumption": "100-200 W/㎡",
            "Power Voltage Range": "AC90-264V,47-63Hz",
            "Working Temp/Humidity": "-20~60℃/10%~85%",
            "Stock Temp/Humidity": "-20~60℃/10%~85%",
            "Certificates": "CCC/CE/RoHS/FCC/CB/TUV/IEC/BIS"
          }
        },
`;
});

output += `      ]
    },
    {
      id: "lc70d-series",
      name: "LC70D Series",
      description: "Double-sided or thicker profile LED posters with front maintenance.",
      image: "/products/LC70D.png",
      products: [
`;

lc70d_models.forEach(m => {
  let pitchStr = `P${m.pitch}`;
  output += `        {
          id: "lc70d-p${m.pitch.replace('.', '-')}",
          name: "LC70D ${pitchStr}",
          description: "${pitchStr} LED Poster",
          image: "/products/LC70D.png",
          pixelPitch: "${m.pitch}mm",
          brightness: "${m.bright} nits",
          specifications: {
            "LED Type": "${m.type}",
            "Pixel Pitch": "${pitchStr}",
            "Module Resolution": "${m.res}",
            "Module Size": "250X250 mm",
            "Display Dimension": "750X2000X54 mm",
            "Weight": "50.2 kg",
            "Maintenance Mode": "Front",
            "Materials": "Aluminum",
            "Brightness": "${m.bright} nits",
            "Color Temp": "3200-9300 K",
            "Viewing Angle": "160°/160°",
            "Brightness/Color Uniformity": "297%",
            "Contrast Ratio": "15000:1",
            "Frame Frequency": "50/60",
            "Scan Mode": "${m.scan}",
            "Gray Scale": "14/16 optional",
            "Refresh Rate": "3840 Hz",
            "Max Consumption": "650 W/m",
            "Average Consumption": "100-200 W/m",
            "Power Voltage Range": "AC90-264V,47-63Hz",
            "Working Temp/Humidity": "-20~60°C/10%~85%",
            "Stock Temp/Humidity": "-20~60°C/10%~86%",
            "Certificates": "CCC/CE/RoHS/FCC/CB/TUV/IEC/BIS"
          }
        },
`;
});

output += `      ]
    }
  ]
};
`;

fs.writeFileSync('src/data/products/standees.ts', output);
console.log('Successfully wrote standees.ts');
