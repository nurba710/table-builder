import { SVGProps as _SVGProps } from 'react';
import { iconMap } from './iconMap';

export interface SVGProps extends _SVGProps<SVGSVGElement> {
  size: number;
  color?: string | 'currentColor';
}

export type IconNames = keyof typeof iconMap;

export interface IconProps extends Omit<SVGProps, 'size' | 'ref'> {
  size: number;
  name: IconNames;
}
