import { IconProps } from './types';
import { iconMap } from './iconMap';

export const Icon = ({ name, color = 'currentColor', size, ...props }: IconProps) =>
  iconMap[name] &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  iconMap[name]({
    size,
    color,
    ...props,
  });
