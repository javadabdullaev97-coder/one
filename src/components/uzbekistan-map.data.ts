import { regionsR1 } from "./uzbekistan-map.r1";
import { regionsR2 } from "./uzbekistan-map.r2";
import { regionsR3 } from "./uzbekistan-map.r3";
import { regionsR4 } from "./uzbekistan-map.r4";
import { regionsR5 } from "./uzbekistan-map.r5";
import { regionsR6 } from "./uzbekistan-map.r6";
import { regionsR7 } from "./uzbekistan-map.r7";

export { ARAL_D } from "./uzbekistan-map.aral";

export const W = 792.4873;
export const H = 516.87848;

export const REGIONS = [
  ...regionsR1,
  ...regionsR2,
  ...regionsR3,
  ...regionsR4,
  ...regionsR5,
  ...regionsR6,
  ...regionsR7,
];

export const TASHKENT = { cx: 612, cy: 264 };

/* Geographic sweep: west to east */
export const CYCLE_ORDER = ["UZ-QR", "UZ-XO", "UZ-NW", "UZ-BU", "UZ-SA", "UZ-QA", "UZ-SU", "UZ-JI", "UZ-SI", "UZ-TO", "UZ-NG", "UZ-FA", "UZ-AN"];
