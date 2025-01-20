
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Desk";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsNjRIOEE4LDgsMCwwLDAsOCw4MGg4VjE5MmE4LDgsMCwwLDAsMTYsMFYxNDRIMjI0djQ4YTgsOCwwLDAsMCwxNiwwVjgwaDhhOCw4LDAsMCwwLDAtMTZaTTMyLDgwaDg4djQ4SDMyWm0xOTIsNDhIMTM2VjgwaDg4Wk05NiwxMDRhOCw4LDAsMCwxLTgsOEg2NGE4LDgsMCwwLDEsMC0xNkg4OEE4LDgsMCwwLDEsOTYsMTA0Wm02NCwwYTgsOCwwLDAsMSw4LThoMjRhOCw4LDAsMCwxLDAsMTZIMTY4QTgsOCwwLDAsMSwxNjAsMTA0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsNjhIOGE0LDQsMCwwLDAsMCw4SDIwVjE5MmE0LDQsMCwwLDAsOCwwVjE0MEgyMjh2NTJhNCw0LDAsMCwwLDgsMFY3NmgxMmE0LDQsMCwwLDAsMC04Wk0yOCw3Nmg5NnY1NkgyOFptMjAwLDU2SDEzMlY3Nmg5NlpNOTIsMTA0YTQsNCwwLDAsMS00LDRINjRhNCw0LDAsMCwxLDAtOEg4OEE0LDQsMCwwLDEsOTIsMTA0Wm03MiwwYTQsNCwwLDAsMSw0LTRoMjRhNCw0LDAsMCwxLDAsOEgxNjhBNCw0LDAsMCwxLDE2NCwxMDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsNjZIOEE2LDYsMCwwLDAsOCw3OEgxOFYxOTJhNiw2LDAsMCwwLDEyLDBWMTQySDIyNnY1MGE2LDYsMCwwLDAsMTIsMFY3OGgxMGE2LDYsMCwwLDAsMC0xMlpNMzAsNzhoOTJ2NTJIMzBabTE5Niw1MkgxMzRWNzhoOTJaTTk0LDEwNGE2LDYsMCwwLDEtNiw2SDY0YTYsNiwwLDAsMSwwLTEySDg4QTYsNiwwLDAsMSw5NCwxMDRabTY4LDBhNiw2LDAsMCwxLDYtNmgyNGE2LDYsMCwwLDEsMCwxMkgxNjhBNiw2LDAsMCwxLDE2MiwxMDRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsNjBIMTJhMTIsMTIsMCwwLDAsMCwyNGg0VjE5MmExMiwxMiwwLDAsMCwyNCwwVjE1NkgyMTZ2MzZhMTIsMTIsMCwwLDAsMjQsMFY4NGg0YTEyLDEyLDAsMCwwLDAtMjRaTTQwLDg0aDc2djQ4SDQwWm0xNzYsNDhIMTQwVjg0aDc2Wk0xMDAsMTA4YTEyLDEyLDAsMCwxLTEyLDEySDY4YTEyLDEyLDAsMCwxLDAtMjRIODhBMTIsMTIsMCwwLDEsMTAwLDEwOFptNTYsMGExMiwxMiwwLDAsMSwxMi0xMmgyMGExMiwxMiwwLDAsMSwwLDI0SDE2OEExMiwxMiwwLDAsMSwxNTYsMTA4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsNjRIOEE4LDgsMCwwLDAsOCw4MGg4VjE5MmE4LDgsMCwwLDAsMTYsMFYxNDRIMjI0djQ4YTgsOCwwLDAsMCwxNiwwVjgwaDhhOCw4LDAsMCwwLDAtMTZaTTgwLDExMkg1NmE4LDgsMCwwLDEsMC0xNkg4MGE4LDgsMCwwLDEsMCwxNlptNTYsOGE4LDgsMCwwLDEtMTYsMFY4OGE4LDgsMCwwLDEsMTYsMFptNjQtOEgxNzZhOCw4LDAsMCwxLDAtMTZoMjRhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNzJ2NjRIMjRWNzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQ4LDY0SDhBOCw4LDAsMCwwLDgsODBoOFYxOTJhOCw4LDAsMCwwLDE2LDBWMTQ0SDIyNHY0OGE4LDgsMCwwLDAsMTYsMFY4MGg4YTgsOCwwLDAsMCwwLTE2Wk0zMiw4MGg4OHY0OEgzMlptMTkyLDQ4SDEzNlY4MGg4OFpNOTYsMTA0YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLDAtMTZIODhBOCw4LDAsMCwxLDk2LDEwNFptNjQsMGE4LDgsMCwwLDEsOC04aDI0YTgsOCwwLDAsMSwwLDE2SDE2OEE4LDgsMCwwLDEsMTYwLDEwNFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Desk";
export { I as Desk }
