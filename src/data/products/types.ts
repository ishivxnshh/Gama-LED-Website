export interface LEDProduct {
  id: string; // The slug for the product, e.g., 'ma640-p1-25'
  name: string;
  description: string;
  image: string;
  pixelPitch?: string;
  brightness?: string;
  refreshRate?: string;
  applications?: string[];
  features?: string[];
  specifications: Record<string, string>; // To store the complete tabular data
}

export interface LEDSeries {
  id: string; // The slug for the series
  name: string;
  description: string;
  image: string;
  products: LEDProduct[];
}

export interface LEDProductType {
  id: string; // The slug for the category
  name: string;
  description: string;
  series: LEDSeries[];
}
