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
        image: "https://images.unsplash.com/photo-1540039155732-6762cb353279?w=800",
        products: [
          {
            id: "mys500-p2-6",
            name: "MYS500 P2.6",
            description: "High-resolution rental display for premium indoor events.",
            image: "https://images.unsplash.com/photo-1540039155732-6762cb353279?w=800",
            pixelPitch: "2.6mm",
            brightness: "1000 nits",
            refreshRate: "3840Hz",
            applications: ["Concerts", "Corporate Events", "Exhibitions"],
            features: ["Fast Lock System", "Lightweight Cabinet", "High Refresh Rate"]
          }
        ]
      },
      {
        id: "xr-stage-series",
        name: "XR Stage Series",
        description: "Advanced LED panels designed for virtual production and XR studios.",
        image: "https://images.unsplash.com/photo-1518342417757-12eb224422e6?w=800",
        products: [
          {
            id: "xr-p1-9",
            name: "XR Stage P1.9",
            description: "Ultimate XR stage display with wide color gamut and ultra-high refresh.",
            image: "https://images.unsplash.com/photo-1518342417757-12eb224422e6?w=800",
            pixelPitch: "1.9mm",
            brightness: "1500 nits",
            refreshRate: "7680Hz",
            applications: ["Virtual Production", "Broadcast Studios", "Film Sets"],
            features: ["HDR Support", "Low Latency", "Wide Color Gamut"]
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
        image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=800",
        products: [
          {
            id: "poster-p2-5",
            name: "iPoster P2.5",
            description: "Plug-and-play digital poster with mobile app control.",
            image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=800",
            pixelPitch: "2.5mm",
            brightness: "1000 nits",
            refreshRate: "3840Hz",
            applications: ["Retail Stores", "Hotels", "Exhibitions"],
            features: ["Plug & Play", "Ultra Slim", "Multiple Splicing Options"]
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
