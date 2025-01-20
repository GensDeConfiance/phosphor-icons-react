
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Sigma";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNzJWNTZIODAuNjVsNTMuNiw2N2E4LDgsMCwwLDEsMCwxMGwtNTMuNiw2N0gxODRWMTg0YTgsOCwwLDAsMSwxNiwwdjI0YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLTYuMjUtMTNsNjAtNzUtNjAtNzVBOCw4LDAsMCwxLDY0LDQwSDE5MmE4LDgsMCwwLDEsOCw4VjcyYTgsOCwwLDAsMS0xNiwwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsNzJWNTJINzIuMzJsNTguOCw3My41YTQsNCwwLDAsMSwwLDVMNzIuMzIsMjA0SDE4OFYxODRhNCw0LDAsMCwxLDgsMHYyNGE0LDQsMCwwLDEtNCw0SDY0YTQsNCwwLDAsMS0zLjEyLTYuNWw2Mi03Ny41LTYyLTc3LjVBNCw0LDAsMCwxLDY0LDQ0SDE5MmE0LDQsMCwwLDEsNCw0VjcyYTQsNCwwLDAsMS04LDBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODYsNzJWNTRINzYuNDhsNTYuMjEsNzAuMjVhNiw2LDAsMCwxLDAsNy41TDc2LjQ4LDIwMkgxODZWMTg0YTYsNiwwLDAsMSwxMiwwdjI0YTYsNiwwLDAsMS02LDZINjRhNiw2LDAsMCwxLTQuNjktOS43NWw2MS03Ni4yNS02MS03Ni4yNUE2LDYsMCwwLDEsNjQsNDJIMTkyYTYsNiwwLDAsMSw2LDZWNzJhNiw2LDAsMCwxLTEyLDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsNzJWNjBIODlsNDguNCw2MC41YTEyLDEyLDAsMCwxLDAsMTVMODksMTk2aDkxVjE4NGExMiwxMiwwLDAsMSwyNCwwdjI0YTEyLDEyLDAsMCwxLTEyLDEySDY0YTEyLDEyLDAsMCwxLTkuMzctMTkuNWw1OC03Mi41LTU4LTcyLjVBMTIsMTIsMCwwLDEsNjQsMzZIMTkyYTEyLDEyLDAsMCwxLDEyLDEyVjcyYTEyLDEyLDAsMCwxLTI0LDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMDAsMjRaTTE4NCw4OGE4LDgsMCwwLDEtMTYsMFY3Mkg5NmwzOC40LDUxLjJhOCw4LDAsMCwxLDAsOS42TDk2LDE4NGg3MlYxNjhhOCw4LDAsMCwxLDE2LDB2MjRhOCw4LDAsMCwxLTgsOEg4MGE4LDgsMCwwLDEtNi40LTEyLjhMMTE4LDEyOCw3My42LDY4LjhBOCw4LDAsMCwxLDgwLDU2aDk2YTgsOCwwLDAsMSw4LDhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNDhWMjA4SDY0bDY0LTgwTDY0LDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4NCw3MlY1Nkg4MC42NWw1My42LDY3YTgsOCwwLDAsMSwwLDEwbC01My42LDY3SDE4NFYxODRhOCw4LDAsMCwxLDE2LDB2MjRhOCw4LDAsMCwxLTgsOEg2NGE4LDgsMCwwLDEtNi4yNS0xM2w2MC03NS02MC03NUE4LDgsMCwwLDEsNjQsNDBIMTkyYTgsOCwwLDAsMSw4LDhWNzJhOCw4LDAsMCwxLTE2LDBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Sigma";
export { I as Sigma }
