/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M241.7,135l-52,72a11.9,11.9,0,0,1-19.4,0L76,76.5,33.7,135a12,12,0,1,1-19.4-14l52-72a11.9,11.9,0,0,1,19.4,0L180,179.5,222.3,121a12,12,0,0,1,19.4,14Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M76,56l52,72H24Zm156,72H128l52,72Z" opacity="0.2" />
    <path d="M238.5,132.7l-52,72a8.1,8.1,0,0,1-13,0L76,69.7l-45.5,63a8,8,0,1,1-13-9.4l52-72a8.1,8.1,0,0,1,13,0l97.5,135,45.5-63a8,8,0,0,1,13,9.4Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M238.5,132.7l-52,72a8.1,8.1,0,0,1-13,0L76,69.7l-45.5,63a8,8,0,1,1-13-9.4l52-72a8.1,8.1,0,0,1,13,0l97.5,135,45.5-63a8,8,0,0,1,13,9.4Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M236.9,131.5l-52,72a6.1,6.1,0,0,1-9.8,0L76,66.2,28.9,131.5a6,6,0,1,1-9.8-7l52-72a6.1,6.1,0,0,1,9.8,0L180,189.8l47.1-65.3a6,6,0,0,1,9.8,7Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M238.5,132.7l-52,72a8.1,8.1,0,0,1-13,0L76,69.7l-45.5,63a8,8,0,1,1-13-9.4l52-72a8.1,8.1,0,0,1,13,0l97.5,135,45.5-63a8,8,0,0,1,13,9.4Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M235.2,130.3l-52,72a3.9,3.9,0,0,1-6.4,0L76,62.8,27.2,130.3a3.9,3.9,0,1,1-6.4-4.6l52-72a3.9,3.9,0,0,1,6.4,0L180,193.2l48.8-67.5a3.9,3.9,0,0,1,6.4,4.6Z" />
  </>
);

const WaveTriangle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

WaveTriangle.displayName = "WaveTriangle";

export default WaveTriangle;