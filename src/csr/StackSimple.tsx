
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/StackSimple";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMiwxMTFsMTEyLDY0YTgsOCwwLDAsMCw3Ljk0LDBsMTEyLTY0YTgsOCwwLDAsMCwwLTEzLjlsLTExMi02NGE4LDgsMCwwLDAtNy45NCwwbC0xMTIsNjRBOCw4LDAsMCwwLDEyLDExMVpNMTI4LDQ5LjIxLDIyMy44NywxMDQsMTI4LDE1OC43OSwzMi4xMywxMDRaTTI0Ni45NCwxNDBBOCw4LDAsMCwxLDI0NCwxNTFMMTMyLDIxNWE4LDgsMCwwLDEtNy45NCwwTDEyLDE1MUE4LDgsMCwwLDEsMjAsMTM3LjA1bDEwOCw2MS43NCwxMDgtNjEuNzRBOCw4LDAsMCwxLDI0Ni45NCwxNDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNCwxMDcuNDdsMTEyLDY0YTQsNCwwLDAsMCw0LDBsMTEyLTY0YTQsNCwwLDAsMCwwLTYuOTRsLTExMi02NGE0LDQsMCwwLDAtNCwwbC0xMTIsNjRhNCw0LDAsMCwwLDAsNi45NFpNMTI4LDQ0LjYxLDIzMS45NCwxMDQsMTI4LDE2My4zOSwyNC4wNiwxMDRaTTI0My40NywxNDJhNCw0LDAsMCwxLTEuNDksNS40NWwtMTEyLDY0YTQsNCwwLDAsMS00LDBsLTExMi02NGE0LDQsMCwwLDEsNC02Ljk0bDExMCw2Mi44NiwxMTAtNjIuODZBNCw0LDAsMCwxLDI0My40NywxNDJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMywxMDkuMjFsMTEyLDY0YTYsNiwwLDAsMCw2LDBsMTEyLTY0YTYsNiwwLDAsMCwwLTEwLjQybC0xMTItNjRhNiw2LDAsMCwwLTYsMGwtMTEyLDY0YTYsNiwwLDAsMCwwLDEwLjQyWm0xMTUtNjIuM0wyMjcuOTEsMTA0LDEyOCwxNjEuMDksMjguMDksMTA0Wk0yNDUuMjEsMTQxYTYsNiwwLDAsMS0yLjIzLDguMTlsLTExMiw2NGE2LDYsMCwwLDEtNiwwbC0xMTItNjRhNiw2LDAsMCwxLDYtMTAuNDJsMTA5LDYyLjMsMTA5LTYyLjNBNiw2LDAsMCwxLDI0NS4yMSwxNDFaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMC4wNSwxMTAuNDJsMTEyLDY0YTEyLDEyLDAsMCwwLDExLjksMGwxMTItNjRhMTIsMTIsMCwwLDAsMC0yMC44NGwtMTEyLTY0YTEyLDEyLDAsMCwwLTExLjksMGwtMTEyLDY0YTEyLDEyLDAsMCwwLDAsMjAuODRabTExOC02MC42TDIxNS44MSwxMDAsMTI4LDE1MC4xOCw0MC4xOSwxMDBabTEyMi40Miw5Mi4yM0ExMiwxMiwwLDAsMSwyNDYsMTU4LjQybC0xMTIsNjRhMTIsMTIsMCwwLDEtMTEuOSwwbC0xMTItNjRBMTIsMTIsMCwxLDEsMjIsMTM3LjU4bDEwNiw2MC42LDEwNi02MC42QTEyLDEyLDAsMCwxLDI1MC40MiwxNDIuMDVaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMiwxMTFsMTEyLDY0YTgsOCwwLDAsMCw3Ljk0LDBsMTEyLTY0YTgsOCwwLDAsMCwwLTEzLjlsLTExMi02NGE4LDgsMCwwLDAtNy45NCwwbC0xMTIsNjRBOCw4LDAsMCwwLDEyLDExMVoiLz48cGF0aCBkPSJNMjM2LDEzNy4wNSwxMjgsMTk4Ljc5LDIwLDEzNy4wNUE4LDgsMCwxLDAsMTIsMTUxbDExMiw2NGE4LDgsMCwwLDAsNy45NCwwbDExMi02NGE4LDgsMCwxLDAtNy45NC0xMy45WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA0LDEyOCwxNjgsMTYsMTA0LDEyOCw0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMiwxMTFsMTEyLDY0YTgsOCwwLDAsMCw3Ljk0LDBsMTEyLTY0YTgsOCwwLDAsMCwwLTEzLjlsLTExMi02NGE4LDgsMCwwLDAtNy45NCwwbC0xMTIsNjRBOCw4LDAsMCwwLDEyLDExMVpNMTI4LDQ5LjIxLDIyMy44NywxMDQsMTI4LDE1OC43OSwzMi4xMywxMDRaTTI0NywxNDBBOCw4LDAsMCwxLDI0NCwxNTFMMTMyLDIxNWE4LDgsMCwwLDEtNy45NCwwTDEyLDE1MUE4LDgsMCwxLDEsMjAsMTM3LjA1bDEwOCw2MS43NCwxMDgtNjEuNzRBOCw4LDAsMCwxLDI0NywxNDBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "StackSimple";
export { I as StackSimple }
