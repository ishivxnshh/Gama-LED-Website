export interface LEDProduct {
  id: string; // The slug for the product, e.g., 'ma640-p1-25'
  name: string;
  description: string;
  image: string;
  pixelPitch: string;
  brightness: string;
  refreshRate: string;
  applications: string[];
  features: string[];
}

export interface LEDSeries {
  id: string; // The slug for the series, e.g., 'ma640-series'
  name: string;
  description: string;
  image: string;
  products: LEDProduct[];
}

export interface LEDProductType {
  id: string; // The slug for the category, e.g., 'indoor-led-display'
  name: string;
  description: string;
  series: LEDSeries[];
}

export const productCategories: LEDProductType[] = [
  {
    id: "indoor-led-display",
    name: "Indoor LED Display",
    description: "High-resolution, seamless indoor displays for corporate, retail, and broadcast environments.",
    series: [
      {
        id: "ma640-series",
        name: "MA640 Series",
        description: "Ultra-fine pitch LED displays delivering crystal-clear images and exceptional contrast.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
        products: [
          {
            id: "ma640-p1-25",
            name: "MA640 P1.25",
            description: "Premium P1.25 fine-pitch indoor LED display for control rooms and broadcast studios.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
            pixelPitch: "1.25mm",
            brightness: "800 nits",
            refreshRate: "3840Hz",
            applications: ["Control Rooms", "Broadcast Studios", "Corporate Boardrooms"],
            features: ["Front Maintenance", "Ultra-high Contrast", "Seamless Splicing"]
          },
          {
            id: "ma640-p1-53",
            name: "MA640 P1.53",
            description: "High-performance P1.53 indoor LED for premium retail and corporate environments.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
            pixelPitch: "1.53mm",
            brightness: "800 nits",
            refreshRate: "3840Hz",
            applications: ["Retail Stores", "Corporate Boardrooms", "Exhibitions"],
            features: ["High Refresh Rate", "Wide Viewing Angle", "Energy Efficient"]
          },
          {
            id: "ma640-p1-86",
            name: "MA640 P1.86",
            description: "Versatile P1.86 indoor LED for large scale indoor presentations.",
            image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800",
            pixelPitch: "1.86mm",
            brightness: "800 nits",
            refreshRate: "3840Hz",
            applications: ["Shopping Malls", "Conference Rooms", "Auditoriums"],
            features: ["Easy Installation", "High Stability", "True Color Reproduction"]
          }
        ]
      },
      {
        id: "cob-series",
        name: "COB Series",
        description: "Next-generation Chip-on-Board technology for extreme durability and contrast.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
        products: [
          {
            id: "cob-p0-9",
            name: "COB P0.9",
            description: "Ultra-fine pitch COB display for the most demanding visual environments.",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
            pixelPitch: "0.93mm",
            brightness: "1000 nits",
            refreshRate: "3840Hz",
            applications: ["Command Centers", "High-end Boardrooms"],
            features: ["Waterproof Surface", "Anti-collision", "Deep Black"]
          },
          {
            id: "cob-p1-25",
            name: "COB P1.25",
            description: "High-contrast COB display perfect for broadcast and corporate applications.",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800",
            pixelPitch: "1.25mm",
            brightness: "1000 nits",
            refreshRate: "3840Hz",
            applications: ["Broadcast Studios", "Corporate Environments"],
            features: ["Dustproof", "High Contrast", "Impact Resistant"]
          },
          {
            id: "cob-p1-5",
            name: "COB P1.56",
            description: "Reliable and durable COB display for public spaces and premium retail.",
            image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800",
            pixelPitch: "1.56mm",
            brightness: "1000 nits",
            refreshRate: "3840Hz",
            applications: ["Premium Retail", "Public Spaces", "Museums"],
            features: ["Easy to Clean", "Wide Viewing Angle", "Energy Efficient"]
          }
        ]
      }
    ]
  },
  {
    id: "outdoor-led-display",
    name: "Outdoor LED Display",
    description: "High-brightness, weatherproof displays for outdoor advertising and large venues.",
    series: [
      {
        id: "ma-series",
        name: "MA Series",
        description: "Robust and ultra-bright outdoor displays for maximum visibility.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
        products: [
          {
            id: "ma-p3-91",
            name: "MA Series P3.91",
            description: "High-definition outdoor display for premium advertising locations.",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
            pixelPitch: "3.91mm",
            brightness: "5500 nits",
            refreshRate: "3840Hz",
            applications: ["DOOH Advertising", "Shopping Malls", "Transportation Hubs"],
            features: ["IP65 Waterproof", "High Brightness", "Front & Rear Maintenance"]
          },
          {
            id: "ma-p4-81",
            name: "MA Series P4.81",
            description: "Durable and efficient outdoor display for widespread commercial use.",
            image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800",
            pixelPitch: "4.81mm",
            brightness: "6000 nits",
            refreshRate: "3840Hz",
            applications: ["Digital Billboards", "Stadiums", "Building Facades"],
            features: ["Excellent Heat Dissipation", "Energy Saving", "High Contrast"]
          },
          {
            id: "ma-p6-67",
            name: "MA Series P6.67",
            description: "High-brightness outdoor display perfect for long viewing distances.",
            image: "https://images.unsplash.com/photo-1460500063983-994d4c27756c?w=800",
            pixelPitch: "6.67mm",
            brightness: "6500 nits",
            refreshRate: "3840Hz",
            applications: ["Highway Billboards", "Building Facades", "Stadiums"],
            features: ["IP65 Waterproof", "High Stability", "Cost Effective"]
          }
        ]
      },
      {
        id: "eco-series",
        name: "ECO Series",
        description: "Energy-efficient outdoor displays designed to reduce running costs.",
        image: "https://images.unsplash.com/photo-1460500063983-994d4c27756c?w=800",
        products: [
          {
            id: "eco-p6-67",
            name: "ECO Series P6.67",
            description: "Cost-effective and energy-saving outdoor display for large billboards.",
            image: "https://images.unsplash.com/photo-1460500063983-994d4c27756c?w=800",
            pixelPitch: "6.67mm",
            brightness: "6500 nits",
            refreshRate: "3840Hz",
            applications: ["Highway Billboards", "Building Facades"],
            features: ["Ultra Low Power", "Fanless Design", "High Brightness"]
          },
          {
            id: "eco-p8",
            name: "ECO Series P8",
            description: "Durable and ultra-efficient P8 outdoor display for commercial zones.",
            image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800",
            pixelPitch: "8mm",
            brightness: "6500 nits",
            refreshRate: "3840Hz",
            applications: ["Commercial Plazas", "Sports Venues"],
            features: ["Low Heat Generation", "Wide Color Gamut", "High Contrast"]
          },
          {
            id: "eco-p10",
            name: "ECO Series P10",
            description: "The most economical choice for massive outdoor LED installations.",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
            pixelPitch: "10mm",
            brightness: "7000 nits",
            refreshRate: "3840Hz",
            applications: ["DOOH Advertising", "Rooftop Billboards"],
            features: ["Maximum Energy Savings", "All-Weather Reliability", "Easy Maintenance"]
          }
        ]
      }
    ]
  },
  {
    id: "rental-led-display",
    name: "Rental LED Display",
    description: "Lightweight, easy-to-assemble displays for live events and touring.",
    series: [
      {
        id: "mys500-series",
        name: "MYS500 Series",
        description: "Quick setup rental cabinets for seamless stage backgrounds.",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
        products: [
          {
            id: "mys500-p2-6",
            name: "MYS500 P2.6",
            description: "High-resolution rental display for premium indoor events.",
            image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
            pixelPitch: "2.6mm",
            brightness: "1000 nits",
            refreshRate: "3840Hz",
            applications: ["Concerts", "Corporate Events", "Exhibitions"],
            features: ["Fast Lock System", "Lightweight Cabinet", "High Refresh Rate"]
          },
          {
            id: "mys500-p2-9",
            name: "MYS500 P2.97",
            description: "Versatile indoor rental display with extreme stability.",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800",
            pixelPitch: "2.97mm",
            brightness: "1000 nits",
            refreshRate: "3840Hz",
            applications: ["Live Events", "Conferences", "Trade Shows"],
            features: ["Curve Assembly", "Corner Protection", "Dual Backup"]
          },
          {
            id: "mys500-p3-91",
            name: "MYS500 P3.91",
            description: "Standard indoor/outdoor rental display for diverse staging needs.",
            image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
            pixelPitch: "3.91mm",
            brightness: "4500 nits",
            refreshRate: "3840Hz",
            applications: ["Music Festivals", "Touring", "Outdoor Events"],
            features: ["IP65 Waterproof", "High Brightness", "Quick Maintenance"]
          }
        ]
      },
      {
        id: "xr-stage-series",
        name: "XR Stage Series",
        description: "Advanced LED panels designed for virtual production and XR studios.",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
        products: [
          {
            id: "xr-p1-9",
            name: "XR Stage P1.9",
            description: "Ultimate XR stage display with wide color gamut and ultra-high refresh.",
            image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
            pixelPitch: "1.9mm",
            brightness: "1500 nits",
            refreshRate: "7680Hz",
            applications: ["Virtual Production", "Broadcast Studios", "Film Sets"],
            features: ["HDR Support", "Low Latency", "Wide Color Gamut"]
          },
          {
            id: "xr-p2-6",
            name: "XR Stage P2.6",
            description: "Premium virtual production background display with zero scan lines.",
            image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800",
            pixelPitch: "2.6mm",
            brightness: "1500 nits",
            refreshRate: "7680Hz",
            applications: ["XR Studios", "Film Production", "Live Broadcast"],
            features: ["High Frame Rate", "Anti-reflection", "Deep Black"]
          }
        ]
      }
    ]
  },
  {
    id: "sports-led-display",
    name: "Sports LED Display",
    description: "Perimeter and scoreboard displays built for high-impact sports arenas.",
    series: [
      {
        id: "ev960-s-series",
        name: "EV960-S Series",
        description: "Durable perimeter LED displays with soft masks for player safety.",
        image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800",
        products: [
          {
            id: "ev960-s-p10",
            name: "EV960-S P10",
            description: "High-visibility perimeter display for outdoor sports stadiums.",
            image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800",
            pixelPitch: "10mm",
            brightness: "6500 nits",
            refreshRate: "3840Hz",
            applications: ["Football Stadiums", "Basketball Arenas", "Race Tracks"],
            features: ["Soft Top Cover", "High Impact Resistance", "Wide Viewing Angle"]
          },
          {
            id: "ev960-s-p8",
            name: "EV960-S P8",
            description: "High-definition perimeter display for close viewing distances.",
            image: "https://images.unsplash.com/photo-1518605368461-1ea4a4d65609?w=800",
            pixelPitch: "8mm",
            brightness: "6500 nits",
            refreshRate: "3840Hz",
            applications: ["Indoor Arenas", "Hockey Rinks", "Tennis Courts"],
            features: ["Soft Rubber Mask", "High Refresh Rate", "Adjustable Bracket"]
          }
        ]
      },
      {
        id: "center-hung-series",
        name: "Center Hung Series",
        description: "Massive suspended cube displays for central arena viewing.",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800",
        products: [
          {
            id: "center-hung-p4",
            name: "Center Hung P4",
            description: "High-definition center cube display for premium arenas.",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800",
            pixelPitch: "4mm",
            brightness: "2000 nits",
            refreshRate: "3840Hz",
            applications: ["Basketball Arenas", "Ice Hockey Rinks"],
            features: ["Seamless Corners", "Customizable Shapes", "High Contrast"]
          },
          {
            id: "center-hung-p5",
            name: "Center Hung P5",
            description: "Cost-effective suspended display for large stadiums.",
            image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800",
            pixelPitch: "5mm",
            brightness: "2000 nits",
            refreshRate: "3840Hz",
            applications: ["Multipurpose Stadiums", "Event Centers"],
            features: ["Lightweight Framework", "Wide Viewing Angle", "Easy Maintenance"]
          }
        ]
      }
    ]
  },
  {
    id: "commercial-led-display",
    name: "Commercial LED Display",
    description: "Creative and retail-focused displays including posters and floor LEDs.",
    series: [
      {
        id: "poster-led-display",
        name: "Poster LED Display",
        description: "Standalone digital posters for retail and hospitality.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        products: [
          {
            id: "poster-p2-5",
            name: "iPoster P2.5",
            description: "Plug-and-play digital poster with mobile app control.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
            pixelPitch: "2.5mm",
            brightness: "1000 nits",
            refreshRate: "3840Hz",
            applications: ["Retail Stores", "Hotels", "Exhibitions"],
            features: ["Plug & Play", "Ultra Slim", "Multiple Splicing Options"]
          },
          {
            id: "poster-p1-8",
            name: "iPoster P1.8",
            description: "High-resolution digital poster for luxury retail environments.",
            image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800",
            pixelPitch: "1.86mm",
            brightness: "1000 nits",
            refreshRate: "3840Hz",
            applications: ["Luxury Retail", "Car Showrooms", "Corporate Lobbies"],
            features: ["Cloud Management", "Wheeled Base", "Seamless Connection"]
          }
        ]
      },
      {
        id: "floor-led-series",
        name: "Interactive Floor Series",
        description: "Durable, walkable LED floors with touch interactivity.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
        products: [
          {
            id: "floor-p3-91",
            name: "iFloor P3.91",
            description: "High-resolution interactive floor display.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
            pixelPitch: "3.91mm",
            brightness: "1500 nits",
            refreshRate: "3840Hz",
            applications: ["Museums", "Stage Floors", "Exhibitions"],
            features: ["2000kg/sqm Load", "Anti-slip Surface", "Fast Interactive Response"]
          },
          {
            id: "floor-p5-2",
            name: "iFloor P5.2",
            description: "Robust interactive floor display for high-traffic events.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
            pixelPitch: "5.2mm",
            brightness: "1500 nits",
            refreshRate: "3840Hz",
            applications: ["Dance Clubs", "Auto Shows", "Theme Parks"],
            features: ["Scratch Resistant", "Waterproof Design", "High Durability"]
          }
        ]
      }
    ]
  },
  {
    id: "transparent-led-display",
    name: "Transparent LED Display",
    description: "High-transparency displays perfect for glass facades and retail windows.",
    series: [
      {
        id: "if-series",
        name: "IF Series",
        description: "Ultra-transparent displays that don't block natural light.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
        products: [
          {
            id: "if-p3-91",
            name: "IF Series P3.91-7.81",
            description: "Optimal balance of transparency and resolution for window displays.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
            pixelPitch: "3.91x7.81mm",
            brightness: "4500 nits",
            refreshRate: "3840Hz",
            applications: ["Retail Windows", "Glass Facades", "Shopping Malls"],
            features: ["70% Transparency", "Lightweight", "Customizable Sizes"]
          },
          {
            id: "if-p7-81",
            name: "IF Series P7.81",
            description: "High-transparency display for massive glass architecture installations.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
            pixelPitch: "7.81x7.81mm",
            brightness: "5500 nits",
            refreshRate: "3840Hz",
            applications: ["Building Facades", "Airports", "Auto Showrooms"],
            features: ["80% Transparency", "High Brightness", "Easy Maintenance"]
          }
        ]
      },
      {
        id: "film-led-series",
        name: "Adhesive LED Film Series",
        description: "Ultra-thin, flexible LED film that sticks directly to glass.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
        products: [
          {
            id: "film-p6",
            name: "Film LED P6",
            description: "Invisible LED film for storefront windows.",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
            pixelPitch: "6mm",
            brightness: "3000 nits",
            refreshRate: "3840Hz",
            applications: ["Retail Windows", "Glass Railings", "Bank Facades"],
            features: ["Self-adhesive", "90% Transparency", "Cuttable"]
          },
          {
            id: "film-p10",
            name: "Film LED P10",
            description: "Cost-effective LED film for large glass surfaces.",
            image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800",
            pixelPitch: "10mm",
            brightness: "3500 nits",
            refreshRate: "3840Hz",
            applications: ["Skyscrapers", "Transit Hubs", "Elevator Glass"],
            features: ["Flexible PCB", "High Transmittance", "Easy Application"]
          }
        ]
      }
    ]
  },
  {
    id: "led-modules",
    name: "LED Modules",
    description: "High-quality standalone LED modules for custom manufacturing and repairs.",
    series: [
      {
        id: "indoor-modules",
        name: "Indoor Modules",
        description: "Standard indoor LED modules for customized cabinet assembly.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        products: [
          {
            id: "indoor-p2-module",
            name: "Indoor P2 Module",
            description: "High-resolution 320x160mm indoor LED module.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
            pixelPitch: "2mm",
            brightness: "800 nits",
            refreshRate: "3840Hz",
            applications: ["Custom Displays", "OEM Assembly", "Repairs"],
            features: ["Standard 320x160mm Size", "Magnetic Front Service", "High Contrast"]
          },
          {
            id: "indoor-p2-5-module",
            name: "Indoor P2.5 Module",
            description: "Cost-effective 320x160mm indoor LED module.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
            pixelPitch: "2.5mm",
            brightness: "800 nits",
            refreshRate: "1920Hz",
            applications: ["Commercial Displays", "Information Boards"],
            features: ["Reliable Performance", "Easy Installation", "Standard Dimensions"]
          }
        ]
      },
      {
        id: "outdoor-modules",
        name: "Outdoor Modules",
        description: "Weatherproof outdoor LED modules for custom billboard construction.",
        image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800",
        products: [
          {
            id: "outdoor-p4-module",
            name: "Outdoor P4 Module",
            description: "High-definition 320x160mm waterproof outdoor LED module.",
            image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800",
            pixelPitch: "4mm",
            brightness: "6000 nits",
            refreshRate: "3840Hz",
            applications: ["Outdoor Advertising", "Custom Billboards", "Fascia Signs"],
            features: ["IP65 Waterproof", "High Brightness", "UV Resistant"]
          },
          {
            id: "outdoor-p5-module",
            name: "Outdoor P5 Module",
            description: "Standard 320x160mm waterproof outdoor LED module.",
            image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800",
            pixelPitch: "5mm",
            brightness: "6500 nits",
            refreshRate: "3840Hz",
            applications: ["DOOH Billboards", "Storefront Displays"],
            features: ["Durable Mask", "High Reliability", "Cost-effective"]
          }
        ]
      }
    ]
  }
];

export const getProductTypeBySlug = (slug: string): LEDProductType | undefined => {
  return productCategories.find(type => type.id === slug);
};

export const getSeriesBySlug = (typeSlug: string, seriesSlug: string): LEDSeries | undefined => {
  const type = getProductTypeBySlug(typeSlug);
  return type?.series.find(s => s.id === seriesSlug);
};

export const getProductBySlug = (typeSlug: string, seriesSlug: string, productSlug: string): LEDProduct | undefined => {
  const series = getSeriesBySlug(typeSlug, seriesSlug);
  return series?.products.find(p => p.id === productSlug);
};
