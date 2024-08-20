import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface Vape {
  product_id: string;
  brand_name: string;
  model_name: string;
  puff_count: number;
  nicotine_concentration: number;
}
