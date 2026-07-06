import { ledModules } from "./modules";
import { indoorScreens } from "./indoor";
import { outdoorScreens } from "./outdoor";
import { rentalScreens } from "./rental";
import { creativeScreens } from "./creative";
import type { LEDProductType, LEDSeries, LEDProduct } from "./types";

export const productCategories: LEDProductType[] = [
  ledModules,
  indoorScreens,
  outdoorScreens,
  rentalScreens,
  creativeScreens
];

export type { LEDProductType, LEDSeries, LEDProduct };
