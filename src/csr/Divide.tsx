
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Divide";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMTI4Wk0xMjgsODBhMTYsMTYsMCwxLDAtMTYtMTZBMTYsMTYsMCwwLDAsMTI4LDgwWm0wLDk2YTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDEyOCwxNzZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTI4YTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLDAtOEgyMTZBNCw0LDAsMCwxLDIyMCwxMjhaTTEyOCw3NmExMiwxMiwwLDEsMC0xMi0xMkExMiwxMiwwLDAsMCwxMjgsNzZabTAsMTA0YTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDEyOCwxODBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTI4YTYsNiwwLDAsMS02LDZINDBhNiw2LDAsMCwxLDAtMTJIMjE2QTYsNiwwLDAsMSwyMjIsMTI4Wk0xMjgsNzhhMTQsMTQsMCwxLDAtMTQtMTRBMTQsMTQsMCwwLDAsMTI4LDc4Wm0wLDEwMGExNCwxNCwwLDEsMCwxNCwxNEExNCwxNCwwLDAsMCwxMjgsMTc4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDQwYTEyLDEyLDAsMCwxLDAtMjRIMjE2QTEyLDEyLDAsMCwxLDIyOCwxMjhaTTEyOCw4NGEyMCwyMCwwLDEsMC0yMC0yMEEyMCwyMCwwLDAsMCwxMjgsODRabTAsODhhMjAsMjAsMCwxLDAsMjAsMjBBMjAsMjAsMCwwLDAsMTI4LDE3MloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTEyOCw2NGExNiwxNiwwLDEsMS0xNiwxNkExNiwxNiwwLDAsMSwxMjgsNjRabTAsMTI4YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDEyOCwxOTJabTU2LTU2SDcyYTgsOCwwLDAsMSwwLTE2SDE4NGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDU2LDQwSDIwMEExNiwxNiwwLDAsMSwyMTYsNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDEyOGE4LDgsMCwwLDEtOCw4SDQwYTgsOCwwLDAsMSwwLTE2SDIxNkE4LDgsMCwwLDEsMjI0LDEyOFpNMTI4LDgwYTE2LDE2LDAsMSwwLTE2LTE2QTE2LDE2LDAsMCwwLDEyOCw4MFptMCw5NmExNiwxNiwwLDEsMCwxNiwxNkExNiwxNiwwLDAsMCwxMjgsMTc2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Divide";
export { I as Divide }
