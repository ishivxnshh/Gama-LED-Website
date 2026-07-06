import type { LEDProductType } from "./types";

export const ledModules: LEDProductType = {
  id: "led-modules",
  name: "LED Modules",
  description: "High-quality raw LED display modules for custom fabrication and assembly.",
  series: [
    {
      id: "indoor-modules",
      name: "320x160 Indoor LED Modules",
      description: "Standardized 320x160mm indoor LED modules for seamless videowalls.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      products: [
        {
          id: "indoor-mod-p1-25", name: "Indoor Module P1.25", description: "P1.25mm Indoor LED Module", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", pixelPitch: "1.25mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P1.25mm", "LED": "1010 (Black LED)", "Module Resolution": "256*128", "LED Type": "SMD 3in1", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/64 Scan" }
        },
        {
          id: "indoor-mod-p1-538", name: "Indoor Module P1.538", description: "P1.538mm Indoor LED Module", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", pixelPitch: "1.538mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P1.538mm", "LED": "1010 (Black LED)", "Module Resolution": "208*104", "LED Type": "SMD 3in1", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/52 Scan" }
        },
        {
          id: "indoor-mod-p1-667", name: "Indoor Module P1.667", description: "P1.667mm Indoor LED Module", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", pixelPitch: "1.667mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P1.667mm", "LED": "1010 (Black LED)", "Module Resolution": "192*96", "LED Type": "SMD 3in1", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/64 Scan" }
        },
        {
          id: "indoor-mod-p1-86", name: "Indoor Module P1.86", description: "P1.86mm Indoor LED Module", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", pixelPitch: "1.86mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P1.86mm", "LED": "1515 (Black LED)", "Module Resolution": "172*86", "LED Type": "SMD 3in1", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/43 Scan" }
        },
        {
          id: "indoor-mod-p2", name: "Indoor Module P2", description: "P2mm Indoor LED Module", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", pixelPitch: "2mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P2mm", "LED": "1515 (Black LED)", "Module Resolution": "160*80", "LED Type": "SMD 3in1", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/40 Scan" }
        },
        {
          id: "indoor-mod-p2-5", name: "Indoor Module P2.5", description: "P2.5mm Indoor LED Module", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", pixelPitch: "2.5mm", brightness: "800-1000 Nits",
          specifications: { "Pixel Pitch": "P2.5mm", "LED": "2121 (Black LED)", "Module Resolution": "128*64", "LED Type": "SMD 3in1", "Brightness": "800-1000 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/32 Scan" }
        },
        {
          id: "indoor-mod-p3-076", name: "Indoor Module P3.076", description: "P3.076mm Indoor LED Module", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", pixelPitch: "3.076mm", brightness: "800-1000 Nits",
          specifications: { "Pixel Pitch": "P3.076mm", "LED": "2121 (Black LED)", "Module Resolution": "104*52", "LED Type": "SMD 3in1", "Brightness": "800-1000 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/26 Scan" }
        },
        {
          id: "indoor-mod-p4", name: "Indoor Module P4", description: "P4mm Indoor LED Module", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", pixelPitch: "4mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P4mm", "LED": "2121 (Black LED)", "Module Resolution": "80*40", "LED Type": "SMD 3in1", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/20 Scan" }
        },
        {
          id: "indoor-mod-p5", name: "Indoor Module P5", description: "P5mm Indoor LED Module", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", pixelPitch: "5mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P5mm", "LED": "2121 (Black LED)", "Module Resolution": "64*32", "LED Type": "SMD 3in1", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/16 Scan" }
        }
      ]
    },
    {
      id: "outdoor-modules",
      name: "320x160 Outdoor LED Modules",
      description: "High brightness 320x160mm outdoor LED modules for exterior applications.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      products: [
        {
          id: "outdoor-mod-p2-5", name: "Outdoor Module P2.5", description: "P2.5mm Outdoor LED Module", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800", pixelPitch: "2.5mm", brightness: ">5500 Nits",
          specifications: { "Pixel Pitch": "P2.5mm", "LED": "SMD1415", "Module Resolution": "128*64", "LED Type": "SMD 3in1", "Brightness": ">5500 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/16 Scan" }
        },
        {
          id: "outdoor-mod-p3-076", name: "Outdoor Module P3.076", description: "P3.076mm Outdoor LED Module", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800", pixelPitch: "3.076mm", brightness: ">5000 Nits",
          specifications: { "Pixel Pitch": "P3.076mm", "LED": "SMD1415", "Module Resolution": "104*52", "LED Type": "SMD 3in1", "Brightness": ">5000 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/13 Scan" }
        },
        {
          id: "outdoor-mod-p3-33", name: "Outdoor Module P3.33", description: "P3.33mm Outdoor LED Module", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800", pixelPitch: "3.33mm", brightness: ">5500 Nits",
          specifications: { "Pixel Pitch": "P3.33mm", "LED": "SMD1921", "Module Resolution": "96*48", "LED Type": "SMD 3in1", "Brightness": ">5500 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/12 Scan" }
        },
        {
          id: "outdoor-mod-p4", name: "Outdoor Module P4", description: "P4mm Outdoor LED Module", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800", pixelPitch: "4mm", brightness: ">5500 Nits",
          specifications: { "Pixel Pitch": "P4mm", "LED": "SMD1921", "Module Resolution": "80*40", "LED Type": "SMD 3in1", "Brightness": ">5500 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/10 Scan" }
        },
        {
          id: "outdoor-mod-p5", name: "Outdoor Module P5", description: "P5mm Outdoor LED Module", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800", pixelPitch: "5mm", brightness: ">5200 Nits",
          specifications: { "Pixel Pitch": "P5mm", "LED": "SMD2525", "Module Resolution": "64*32", "LED Type": "SMD 3in1", "Brightness": ">5200 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/8 Scan" }
        },
        {
          id: "outdoor-mod-p6-67", name: "Outdoor Module P6.67", description: "P6.67mm Outdoor LED Module", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800", pixelPitch: "6.67mm", brightness: ">5500 Nits",
          specifications: { "Pixel Pitch": "P6.67mm", "LED": "SMD3535", "Module Resolution": "48*24", "LED Type": "SMD 3in1", "Brightness": ">5500 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/6 Scan" }
        },
        {
          id: "outdoor-mod-p8", name: "Outdoor Module P8", description: "P8mm Outdoor LED Module", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800", pixelPitch: "8mm", brightness: ">5800 Nits",
          specifications: { "Pixel Pitch": "P8mm", "LED": "SMD3535", "Module Resolution": "40*20", "LED Type": "SMD 3in1", "Brightness": ">5800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/5 Scan" }
        },
        {
          id: "outdoor-mod-p10", name: "Outdoor Module P10 (>6000Nits)", description: "P10mm High-Brightness Outdoor LED Module", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800", pixelPitch: "10mm", brightness: ">6000 Nits",
          specifications: { "Pixel Pitch": "P10mm", "LED": "SMD3535", "Module Resolution": "32*16", "LED Type": "SMD 3in1", "Brightness": ">6000 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/2 Scan" }
        },
        {
          id: "outdoor-mod-p10-4500", name: "Outdoor Module P10 (>4500Nits)", description: "P10mm Standard Outdoor LED Module", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800", pixelPitch: "10mm", brightness: ">4500 Nits",
          specifications: { "Pixel Pitch": "P10mm", "LED": "SMD3535", "Module Resolution": "32*16", "LED Type": "SMD 3in1", "Brightness": ">4500 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/4 Scan" }
        }
      ]
    },
    {
      id: "flexible-modules",
      name: "320x160 Flexible Modules",
      description: "Bendable and flexible 320x160mm LED modules for curved and creative shapes.",
      image: "https://images.unsplash.com/photo-1616781297597-5a1a1eb3d52c?w=800",
      products: [
        {
          id: "flex-mod-p1-86", name: "Flexible Module P1.86", description: "P1.86mm Flexible LED Module", image: "https://images.unsplash.com/photo-1616781297597-5a1a1eb3d52c?w=800", pixelPitch: "1.86mm", brightness: "700-750 Nits",
          specifications: { "Pixel Pitch": "1.86mm", "LED Type": "SMD1515", "Density": "288906 dot/m²", "Module Pixel": "172*86", "Module Size": "320*160 mm", "Driving Mode": "1/43 Scan", "Brightness": "700-750 Nits" }
        },
        {
          id: "flex-mod-p2", name: "Flexible Module P2", description: "P2mm Flexible LED Module", image: "https://images.unsplash.com/photo-1616781297597-5a1a1eb3d52c?w=800", pixelPitch: "2mm", brightness: "700-750 Nits",
          specifications: { "Pixel Pitch": "2mm", "LED Type": "SMD1515", "Density": "250000 dot/m²", "Module Pixel": "160*80", "Module Size": "320*160 mm", "Driving Mode": "1/40 Scan", "Brightness": "700-750 Nits" }
        },
        {
          id: "flex-mod-p2-5", name: "Flexible Module P2.5", description: "P2.5mm Flexible LED Module", image: "https://images.unsplash.com/photo-1616781297597-5a1a1eb3d52c?w=800", pixelPitch: "2.5mm", brightness: "700-750 Nits",
          specifications: { "Pixel Pitch": "2.5mm", "LED Type": "SMD1515", "Density": "160000 dot/m²", "Module Pixel": "128*64", "Module Size": "320*160 mm", "Driving Mode": "1/32 Scan", "Brightness": "700-750 Nits" }
        },
        {
          id: "flex-mod-p3", name: "Flexible Module P3", description: "P3mm Flexible LED Module", image: "https://images.unsplash.com/photo-1616781297597-5a1a1eb3d52c?w=800", pixelPitch: "3mm", brightness: "650-750 Nits",
          specifications: { "Pixel Pitch": "3mm", "LED Type": "SMD1515", "Density": "105625 dot/m²", "Module Pixel": "104*52", "Module Size": "320*160 mm", "Driving Mode": "1/26 Scan", "Brightness": "650-750 Nits" }
        },
        {
          id: "flex-mod-p4", name: "Flexible Module P4", description: "P4mm Flexible LED Module", image: "https://images.unsplash.com/photo-1616781297597-5a1a1eb3d52c?w=800", pixelPitch: "4mm", brightness: "700-750 Nits",
          specifications: { "Pixel Pitch": "4mm", "LED Type": "SMD2020", "Density": "62500 dot/m²", "Module Pixel": "80*40", "Module Size": "320*160 mm", "Driving Mode": "1/20 Scan", "Brightness": "700-750 Nits" }
        }
      ]
    },
    {
      id: "gob-modules",
      name: "320x160 GOB Modules",
      description: "Glue-on-Board (GOB) protected 320x160mm modules for maximum durability and protection.",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800",
      products: [
        {
          id: "gob-mod-p1-25", name: "GOB Module P1.25", description: "P1.25mm GOB LED Module", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800", pixelPitch: "1.25mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P1.25mm", "LED": "1010 (Black LED)", "Module Resolution": "256*128", "IC Number": "96", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/64 Scan" }
        },
        {
          id: "gob-mod-p1-538", name: "GOB Module P1.538", description: "P1.538mm GOB LED Module", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800", pixelPitch: "1.538mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P1.538mm", "LED": "1010 (Black LED)", "Module Resolution": "208*104", "IC Number": "84", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/52 Scan" }
        },
        {
          id: "gob-mod-p1-667", name: "GOB Module P1.667", description: "P1.667mm GOB LED Module", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800", pixelPitch: "1.667mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P1.667mm", "LED": "1010 (Black LED)", "Module Resolution": "192*96", "IC Number": "72", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/64 Scan" }
        },
        {
          id: "gob-mod-p1-839", name: "GOB Module P1.839", description: "P1.839mm GOB LED Module", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800", pixelPitch: "1.839mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P1.839mm", "LED": "1515 (Black LED)", "Module Resolution": "174*87", "IC Number": "52", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/58 Scan" }
        },
        {
          id: "gob-mod-p1-86", name: "GOB Module P1.86", description: "P1.86mm GOB LED Module", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800", pixelPitch: "1.86mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P1.86mm", "LED": "1515 (Black LED)", "Module Resolution": "172*86", "IC Number": "66", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/43 Scan" }
        },
        {
          id: "gob-mod-p2", name: "GOB Module P2", description: "P2mm GOB LED Module", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800", pixelPitch: "2mm", brightness: "600-800 Nits",
          specifications: { "Pixel Pitch": "P2mm", "LED": "1515 (Black LED)", "Module Resolution": "160*80", "IC Number": "60", "Brightness": "600-800 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/40 Scan" }
        },
        {
          id: "gob-mod-p2-5", name: "GOB Module P2.5", description: "P2.5mm GOB LED Module", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800", pixelPitch: "2.5mm", brightness: "800-1000 Nits",
          specifications: { "Pixel Pitch": "P2.5mm", "LED": "2121 (Black LED)", "Module Resolution": "128*64", "IC Number": "48", "Brightness": "800-1000 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/32 Scan" }
        },
        {
          id: "gob-mod-p3-076", name: "GOB Module P3.076", description: "P3.076mm GOB LED Module", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800", pixelPitch: "3.076mm", brightness: "800-1000 Nits",
          specifications: { "Pixel Pitch": "P3.076mm", "LED": "2121 (Black LED)", "Module Resolution": "104*52", "IC Number": "42", "Brightness": "800-1000 Nits", "Module Size": "320*160 mm", "Driving Mode": "1/26 Scan" }
        }
      ]
    }
  ]
};
