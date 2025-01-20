
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/CornersIn";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsOTZWNDhhOCw4LDAsMCwxLDE2LDBWODhoNDBhOCw4LDAsMCwxLDAsMTZIMTYwQTgsOCwwLDAsMSwxNTIsOTZaTTk2LDE1Mkg0OGE4LDgsMCwwLDAsMCwxNkg4OHY0MGE4LDgsMCwwLDAsMTYsMFYxNjBBOCw4LDAsMCwwLDk2LDE1MlptMTEyLDBIMTYwYTgsOCwwLDAsMC04LDh2NDhhOCw4LDAsMCwwLDE2LDBWMTY4aDQwYTgsOCwwLDAsMCwwLTE2Wk05Niw0MGE4LDgsMCwwLDAtOCw4Vjg4SDQ4YTgsOCwwLDAsMCwwLDE2SDk2YTgsOCwwLDAsMCw4LThWNDhBOCw4LDAsMCwwLDk2LDQwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsOTZWNDhhNCw0LDAsMCwxLDgsMFY5Mmg0NGE0LDQsMCwwLDEsMCw4SDE2MEE0LDQsMCwwLDEsMTU2LDk2Wk05NiwxNTZINDhhNCw0LDAsMCwwLDAsOEg5MnY0NGE0LDQsMCwwLDAsOCwwVjE2MEE0LDQsMCwwLDAsOTYsMTU2Wm0xMTIsMEgxNjBhNCw0LDAsMCwwLTQsNHY0OGE0LDQsMCwwLDAsOCwwVjE2NGg0NGE0LDQsMCwwLDAsMC04Wk05Niw0NGE0LDQsMCwwLDAtNCw0VjkySDQ4YTQsNCwwLDAsMCwwLDhIOTZhNCw0LDAsMCwwLDQtNFY0OEE0LDQsMCwwLDAsOTYsNDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTQsOTZWNDhhNiw2LDAsMCwxLDEyLDBWOTBoNDJhNiw2LDAsMCwxLDAsMTJIMTYwQTYsNiwwLDAsMSwxNTQsOTZaTTk2LDE1NEg0OGE2LDYsMCwwLDAsMCwxMkg5MHY0MmE2LDYsMCwwLDAsMTIsMFYxNjBBNiw2LDAsMCwwLDk2LDE1NFptMTEyLDBIMTYwYTYsNiwwLDAsMC02LDZ2NDhhNiw2LDAsMCwwLDEyLDBWMTY2aDQyYTYsNiwwLDAsMCwwLTEyWk05Niw0MmE2LDYsMCwwLDAtNiw2VjkwSDQ4YTYsNiwwLDAsMCwwLDEySDk2YTYsNiwwLDAsMCw2LTZWNDhBNiw2LDAsMCwwLDk2LDQyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsOTZWNDhhMTIsMTIsMCwwLDEsMjQsMFY4NGgzNmExMiwxMiwwLDAsMSwwLDI0SDE2MEExMiwxMiwwLDAsMSwxNDgsOTZaTTk2LDE0OEg0OGExMiwxMiwwLDAsMCwwLDI0SDg0djM2YTEyLDEyLDAsMCwwLDI0LDBWMTYwQTEyLDEyLDAsMCwwLDk2LDE0OFptMTEyLDBIMTYwYTEyLDEyLDAsMCwwLTEyLDEydjQ4YTEyLDEyLDAsMCwwLDI0LDBWMTcyaDM2YTEyLDEyLDAsMCwwLDAtMjRaTTk2LDM2QTEyLDEyLDAsMCwwLDg0LDQ4Vjg0SDQ4YTEyLDEyLDAsMCwwLDAsMjRIOTZhMTIsMTIsMCwwLDAsMTItMTJWNDhBMTIsMTIsMCwwLDAsOTYsMzZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsOTZWNDhhOCw4LDAsMCwxLDEzLjY2LTUuNjZsNDgsNDhBOCw4LDAsMCwxLDIwOCwxMDRIMTYwQTgsOCwwLDAsMSwxNTIsOTZaTTk2LDE1Mkg0OGE4LDgsMCwwLDAtNS42NiwxMy42Nmw0OCw0OEE4LDgsMCwwLDAsMTA0LDIwOFYxNjBBOCw4LDAsMCwwLDk2LDE1MlpNOTkuMDYsNDAuNjFhOCw4LDAsMCwwLTguNzIsMS43M2wtNDgsNDhBOCw4LDAsMCwwLDQ4LDEwNEg5NmE4LDgsMCwwLDAsOC04VjQ4QTgsOCwwLDAsMCw5OS4wNiw0MC42MVpNMjA4LDE1MkgxNjBhOCw4LDAsMCwwLTgsOHY0OGE4LDgsMCwwLDAsMTMuNjYsNS42Nmw0OC00OEE4LDgsMCwwLDAsMjA4LDE1MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNjRWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDY0YTE2LDE2LDAsMCwxLTE2LTE2VjY0QTE2LDE2LDAsMCwxLDY0LDQ4SDE5MkExNiwxNiwwLDAsMSwyMDgsNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTUyLDk2VjQ4YTgsOCwwLDAsMSwxNiwwVjg4aDQwYTgsOCwwLDAsMSwwLDE2SDE2MEE4LDgsMCwwLDEsMTUyLDk2Wk05NiwxNTJINDhhOCw4LDAsMCwwLDAsMTZIODh2NDBhOCw4LDAsMCwwLDE2LDBWMTYwQTgsOCwwLDAsMCw5NiwxNTJabTExMiwwSDE2MGE4LDgsMCwwLDAtOCw4djQ4YTgsOCwwLDAsMCwxNiwwVjE2OGg0MGE4LDgsMCwwLDAsMC0xNlpNOTYsNDBhOCw4LDAsMCwwLTgsOFY4OEg0OGE4LDgsMCwwLDAsMCwxNkg5NmE4LDgsMCwwLDAsOC04VjQ4QTgsOCwwLDAsMCw5Niw0MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CornersIn";
export { I as CornersIn }
