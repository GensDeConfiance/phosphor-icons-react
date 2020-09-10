/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z"
            opacity="0.2"
          />
          <path
            d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path d="M215.99512,71.99805H130.667l-27.75-20.80469a16.07363,16.07363,0,0,0-9.57812-3.19531H39.99512a16.01581,16.01581,0,0,0-16,16v136a16.01582,16.01582,0,0,0,16,16H216.88574a15.13062,15.13062,0,0,0,15.10938-15.10938V87.99805A16.01582,16.01582,0,0,0,215.99512,71.99805Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const FolderSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

FolderSimple.displayName = "FolderSimple";

export default FolderSimple;