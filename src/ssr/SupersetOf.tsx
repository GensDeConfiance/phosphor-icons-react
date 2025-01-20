
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/SupersetOf";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjAwYTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLDAtMTZIMjA4QTgsOCwwLDAsMSwyMTYsMjAwWm0tNjQtNDhINTZhOCw4LDAsMCwwLDAsMTZoOTZhNjQsNjQsMCwwLDAsMC0xMjhINTZhOCw4LDAsMCwwLDAsMTZoOTZhNDgsNDgsMCwwLDEsMCw5NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMjAwYTQsNCwwLDAsMS00LDRINTZhNCw0LDAsMCwxLDAtOEgyMDhBNCw0LDAsMCwxLDIxMiwyMDBabS02MC00NEg1NmE0LDQsMCwwLDAsMCw4aDk2YTYwLDYwLDAsMCwwLDAtMTIwSDU2YTQsNCwwLDAsMCwwLDhoOTZhNTIsNTIsMCwwLDEsMCwxMDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsMjAwYTYsNiwwLDAsMS02LDZINTZhNiw2LDAsMCwxLDAtMTJIMjA4QTYsNiwwLDAsMSwyMTQsMjAwWm0tNjItNDZINTZhNiw2LDAsMCwwLDAsMTJoOTZhNjIsNjIsMCwwLDAsMC0xMjRINTZhNiw2LDAsMCwwLDAsMTJoOTZhNTAsNTAsMCwwLDEsMCwxMDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMjAwYTEyLDEyLDAsMCwxLTEyLDEySDU2YTEyLDEyLDAsMCwxLDAtMjRIMjA4QTEyLDEyLDAsMCwxLDIyMCwyMDBabS02OC01Mkg1NmExMiwxMiwwLDAsMCwwLDI0aDk2YTY4LDY4LDAsMCwwLDAtMTM2SDU2YTEyLDEyLDAsMCwwLDAsMjRoOTZhNDQsNDQsMCwwLDEsMCw4OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE3NiwxODRIODBhOCw4LDAsMCwxLDAtMTZoOTZhOCw4LDAsMCwxLDAsMTZabS0zMi0zMkg4MGE4LDgsMCwwLDEsMC0xNmg2NGEyNCwyNCwwLDAsMCwwLTQ4SDgwYTgsOCwwLDAsMSwwLTE2aDY0YTQwLDQwLDAsMCwxLDAsODBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTA0YTU2LDU2LDAsMCwxLTU2LDU2SDU2VjQ4aDk2QTU2LDU2LDAsMCwxLDIwOCwxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDIwMGE4LDgsMCwwLDEtOCw4SDU2YTgsOCwwLDAsMSwwLTE2SDIwOEE4LDgsMCwwLDEsMjE2LDIwMFptLTY0LTQ4SDU2YTgsOCwwLDAsMCwwLDE2aDk2YTY0LDY0LDAsMCwwLDAtMTI4SDU2YTgsOCwwLDAsMCwwLDE2aDk2YTQ4LDQ4LDAsMCwxLDAsOTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SupersetOf";
export { I as SupersetOf }
