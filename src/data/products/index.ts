import { ledModules } from "./modules";
import { indoorScreens } from "./indoor";
import { outdoorScreens } from "./outdoor";
import { rentalScreens } from "./rental";
import { creativeScreens } from "./creative";
import { ledStandees } from "./standees";
import type { LEDProductType, LEDSeries, LEDProduct } from "./types";

export const fixedScreens: LEDProductType = {
  id: "fixed-screens",
  name: "Indoor & Outdoor LED Screens",
  description: "High-resolution seamless indoor and outdoor displays for commercial and architectural applications.",
  series: [
    ...indoorScreens.series,
    ...outdoorScreens.series
  ]
};

export const productCategories: LEDProductType[] = [
  ledModules,
  fixedScreens,
  rentalScreens,
  creativeScreens,
  ledStandees
];

export type { LEDProductType, LEDSeries, LEDProduct };

export function getProductTypeBySlug(slug: string): LEDProductType | undefined {
  return productCategories.find(c => c.id === slug);
}

export function getSeriesBySlug(typeSlug: string, seriesSlug: string): LEDSeries | undefined {
  const type = getProductTypeBySlug(typeSlug);
  return type?.series.find(s => s.id === seriesSlug);
}

export function getProductBySlug(typeSlug: string, seriesSlug: string, productSlug: string): LEDProduct | undefined {
  const series = getSeriesBySlug(typeSlug, seriesSlug);
  return series?.products.find(p => p.id === productSlug);
}
