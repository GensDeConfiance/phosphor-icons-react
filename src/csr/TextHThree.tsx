
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/TextHThree";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsNTZWMTc2YTgsOCwwLDAsMS0xNiwwVjEyNEg0OHY1MmE4LDgsMCwwLDEtMTYsMFY1NmE4LDgsMCwwLDEsMTYsMHY1Mmg4OFY1NmE4LDgsMCwwLDEsMTYsMFptNzMuNTIsOTAuNjMsMjEtMzBBOCw4LDAsMCwwLDI0MCwxMDRIMTkyYTgsOCwwLDAsMCwwLDE2aDMyLjYzbC0xOS4xOCwyNy40MUE4LDgsMCwwLDAsMjEyLDE2MGEyMCwyMCwwLDEsMS0xNC4yOSwzNCw4LDgsMCwxLDAtMTEuNDIsMTEuMTlBMzYsMzYsMCwwLDAsMjQ4LDE4MCwzNi4wNywzNi4wNywwLDAsMCwyMjUuNTIsMTQ2LjYzWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTgwYTMyLDMyLDAsMCwxLTU0Ljg2LDIyLjQsNCw0LDAsMCwxLDUuNzItNS42QTI0LDI0LDAsMSwwLDIxMiwxNTZhNCw0LDAsMCwxLTMuMjgtNi4yOUwyMzIuMzIsMTE2SDE5MmE0LDQsMCwwLDEsMC04aDQ4YTQsNCwwLDAsMSwzLjI4LDYuMjlMMjE5LjEyLDE0OC44QTMyLjA2LDMyLjA2LDAsMCwxLDI0NCwxODBaTTE0NCw1MmE0LDQsMCwwLDAtNCw0djU2SDQ0VjU2YTQsNCwwLDAsMC04LDBWMTc2YTQsNCwwLDAsMCw4LDBWMTIwaDk2djU2YTQsNCwwLDAsMCw4LDBWNTZBNCw0LDAsMCwwLDE0NCw1MloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsMTgwYTM0LDM0LDAsMCwxLTU4LjI5LDIzLjc5LDYsNiwwLDAsMSw4LjU4LTguMzlBMjIsMjIsMCwxLDAsMjEyLDE1OGE2LDYsMCwwLDEtNC45Mi05LjQ0TDIyOC40OCwxMThIMTkyYTYsNiwwLDAsMSwwLTEyaDQ4YTYsNiwwLDAsMSw0LjkxLDkuNDRsLTIyLjUyLDMyLjE4QTM0LjA2LDM0LjA2LDAsMCwxLDI0NiwxODBaTTE0NCw1MGE2LDYsMCwwLDAtNiw2djU0SDQ2VjU2YTYsNiwwLDAsMC0xMiwwVjE3NmE2LDYsMCwwLDAsMTIsMFYxMjJoOTJ2NTRhNiw2LDAsMCwwLDEyLDBWNTZBNiw2LDAsMCwwLDE0NCw1MFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIsMTgwYTQwLDQwLDAsMCwxLTY4LjU3LDI4LDEyLDEyLDAsMSwxLDE3LjE0LTE2Ljc5QTE2LDE2LDAsMSwwLDIxMiwxNjRhMTIsMTIsMCwwLDEtOS44My0xOC44OEwyMTcsMTI0SDE5MmExMiwxMiwwLDAsMSwwLTI0aDQ4YTEyLDEyLDAsMCwxLDkuODMsMTguODhsLTE4LjM0LDI2LjJBNDAsNDAsMCwwLDEsMjUyLDE4MFpNMTQ0LDQ0YTEyLDEyLDAsMCwwLTEyLDEydjQ4SDUyVjU2YTEyLDEyLDAsMCwwLTI0LDBWMTc2YTEyLDEyLDAsMCwwLDI0LDBWMTI4aDgwdjQ4YTEyLDEyLDAsMCwwLDI0LDBWNTZBMTIsMTIsMCwwLDAsMTQ0LDQ0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTEyOCwxNjBhOCw4LDAsMCwxLTE2LDBWMTI4SDcydjMyYTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSwxNiwwdjMyaDQwVjgwYTgsOCwwLDAsMSwxNiwwWm00MCwyNGEzMiwzMiwwLDAsMS0yMS4zNC04LjE1LDgsOCwwLDEsMSwxMC42OC0xMS45MkExNiwxNiwwLDEsMCwxNjgsMTM2YTgsOCwwLDAsMS02LjQtMTIuOEwxNzYsMTA0SDE1MmE4LDgsMCwwLDEsMC0xNmg0MGE4LDgsMCwwLDEsNi40LDEyLjhsLTE2LjcxLDIyLjI4QTMyLDMyLDAsMCwxLDE2OCwxODRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNzJWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjU2SDIyNEExNiwxNiwwLDAsMSwyNDAsNzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTUyLDU2VjE3NmE4LDgsMCwwLDEtMTYsMFYxMjRINDh2NTJhOCw4LDAsMCwxLTE2LDBWNTZhOCw4LDAsMCwxLDE2LDB2NTJoODhWNTZhOCw4LDAsMCwxLDE2LDBabTczLjUyLDkwLjYzLDIxLTMwQTgsOCwwLDAsMCwyNDAsMTA0SDE5MmE4LDgsMCwwLDAsMCwxNmgzMi42M2wtMTkuMTgsMjcuNDFBOCw4LDAsMCwwLDIxMiwxNjBhMjAsMjAsMCwxLDEtMTQuMjksMzQsOCw4LDAsMSwwLTExLjQyLDExLjE5QTM2LDM2LDAsMCwwLDI0OCwxODAsMzYuMDcsMzYuMDcsMCwwLDAsMjI1LjUyLDE0Ni42M1oiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TextHThree";
export { I as TextHThree }
