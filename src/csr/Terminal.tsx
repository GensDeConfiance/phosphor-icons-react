
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Terminal";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTcuMzEsMTM0bC03Miw2NGE4LDgsMCwxLDEtMTAuNjMtMTJMMTAwLDEyOCwzNC42OSw3MEE4LDgsMCwxLDEsNDUuMzIsNThsNzIsNjRhOCw4LDAsMCwxLDAsMTJaTTIxNiwxODRIMTIwYTgsOCwwLDAsMCwwLDE2aDk2YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsMTI4YTQsNCwwLDAsMS0xLjM0LDNsLTcyLDY0YTQsNCwwLDEsMS01LjMyLTZMMTA2LDEyOCwzNy4zNCw2N2E0LDQsMCwwLDEsNS4zMi02bDcyLDY0QTQsNCwwLDAsMSwxMTYsMTI4Wm0xMDAsNjBIMTIwYTQsNCwwLDAsMCwwLDhoOTZhNCw0LDAsMCwwLDAtOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsMTMyLjQ4bC03Miw2NGE2LDYsMCwwLDEtOC05TDEwMywxMjgsMzYsNjguNDlhNiw2LDAsMCwxLDgtOWw3Miw2NGE2LDYsMCwwLDEsMCw5Wk0yMTYsMTg2SDEyMGE2LDYsMCwwLDAsMCwxMmg5NmE2LDYsMCwwLDAsMC0xMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTM3LDQ4LDIwMUExMiwxMiwwLDEsMSwzMiwxODNsNjEuOTEtNTVMMzIsNzNBMTIsMTIsMCwxLDEsNDgsNTVsNzIsNjRBMTIsMTIsMCwwLDEsMTIwLDEzN1ptOTYsNDNIMTIwYTEyLDEyLDAsMCwwLDAsMjRoOTZhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBaTTc3LjY2LDE3My42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTAwLjY5LDEyOCw2Ni4zNCw5My42NkE4LDgsMCwwLDEsNzcuNjYsODIuMzRsNDAsNDBhOCw4LDAsMCwxLDAsMTEuMzJaTTE5MiwxNzZIMTI4YTgsOCwwLDAsMSwwLTE2aDY0YTgsOCwwLDAsMSwwLDE2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODBWMTkySDQwVjY0SDIwMEExNiwxNiwwLDAsMSwyMTYsODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTE3LjMxLDEzNGwtNzIsNjRhOCw4LDAsMSwxLTEwLjYzLTEyTDEwMCwxMjgsMzQuNjksNzBBOCw4LDAsMSwxLDQ1LjMyLDU4bDcyLDY0YTgsOCwwLDAsMSwwLDEyWk0yMTYsMTg0SDEyMGE4LDgsMCwwLDAsMCwxNmg5NmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Terminal";
export { I as Terminal }
