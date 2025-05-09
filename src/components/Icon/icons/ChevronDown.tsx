import { SVGProps } from 'components/Icon/types';

export default ({ size, color, ...props }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill={color}
        d="M6.989 9.928a.9.9 0 0 1-.672-.303L2.5 5.288A.718.718 0 0 1 3.58 4.34l3.336 3.792a.097.097 0 0 0 .146 0l3.336-3.792a.719.719 0 1 1 1.079.948L7.662 9.624a.9.9 0 0 1-.673.304"
      ></path>
    </svg>
  );
};
