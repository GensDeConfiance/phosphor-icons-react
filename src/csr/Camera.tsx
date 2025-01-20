
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Camera";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTZIMTgwLjI4TDE2Ni42NSwzNS41NkE4LDgsMCwwLDAsMTYwLDMySDk2YTgsOCwwLDAsMC02LjY1LDMuNTZMNzUuNzEsNTZINDhBMjQsMjQsMCwwLDAsMjQsODBWMTkyYTI0LDI0LDAsMCwwLDI0LDI0SDIwOGEyNCwyNCwwLDAsMCwyNC0yNFY4MEEyNCwyNCwwLDAsMCwyMDgsNTZabTgsMTM2YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFY4MGE4LDgsMCwwLDEsOC04SDgwYTgsOCwwLDAsMCw2LjY2LTMuNTZMMTAwLjI4LDQ4aDU1LjQzbDEzLjYzLDIwLjQ0QTgsOCwwLDAsMCwxNzYsNzJoMzJhOCw4LDAsMCwxLDgsOFpNMTI4LDg4YTQ0LDQ0LDAsMSwwLDQ0LDQ0QTQ0LjA1LDQ0LjA1LDAsMCwwLDEyOCw4OFptMCw3MmEyOCwyOCwwLDEsMSwyOC0yOEEyOCwyOCwwLDAsMSwxMjgsMTYwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNjBIMTc4LjEzTDE2My4zMiwzNy43OEE0LDQsMCwwLDAsMTYwLDM2SDk2YTQsNCwwLDAsMC0zLjMyLDEuNzhMNzcuODUsNjBINDhBMjAsMjAsMCwwLDAsMjgsODBWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY4MEEyMCwyMCwwLDAsMCwyMDgsNjBabTEyLDEzMmExMiwxMiwwLDAsMS0xMiwxMkg0OGExMiwxMiwwLDAsMS0xMi0xMlY4MEExMiwxMiwwLDAsMSw0OCw2OEg4MGE0LDQsMCwwLDAsMy4zMy0xLjc4TDk4LjEzLDQ0aDU5LjcybDE0LjgyLDIyLjIyQTQsNCwwLDAsMCwxNzYsNjhoMzJhMTIsMTIsMCwwLDEsMTIsMTJaTTEyOCw5MmE0MCw0MCwwLDEsMCw0MCw0MEE0MCw0MCwwLDAsMCwxMjgsOTJabTAsNzJhMzIsMzIsMCwxLDEsMzItMzJBMzIsMzIsMCwwLDEsMTI4LDE2NFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNThIMTc5LjIxTDE2NSwzNi42N0E2LDYsMCwwLDAsMTYwLDM0SDk2YTYsNiwwLDAsMC01LDIuNjdMNzYuNzgsNThINDhBMjIsMjIsMCwwLDAsMjYsODBWMTkyYTIyLDIyLDAsMCwwLDIyLDIySDIwOGEyMiwyMiwwLDAsMCwyMi0yMlY4MEEyMiwyMiwwLDAsMCwyMDgsNThabTEwLDEzNGExMCwxMCwwLDAsMS0xMCwxMEg0OGExMCwxMCwwLDAsMS0xMC0xMFY4MEExMCwxMCwwLDAsMSw0OCw3MEg4MGE2LDYsMCwwLDAsNS0yLjY3TDk5LjIxLDQ2aDU3LjU3TDE3MSw2Ny4zM0E2LDYsMCwwLDAsMTc2LDcwaDMyYTEwLDEwLDAsMCwxLDEwLDEwWk0xMjgsOTBhNDIsNDIsMCwxLDAsNDIsNDJBNDIsNDIsMCwwLDAsMTI4LDkwWm0wLDcyYTMwLDMwLDAsMSwxLDMwLTMwQTMwLDMwLDAsMCwxLDEyOCwxNjJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTJIMTgyLjQyTDE3MCwzMy4zNEExMiwxMiwwLDAsMCwxNjAsMjhIOTZhMTIsMTIsMCwwLDAtMTAsNS4zNEw3My41Nyw1Mkg0OEEyOCwyOCwwLDAsMCwyMCw4MFYxOTJhMjgsMjgsMCwwLDAsMjgsMjhIMjA4YTI4LDI4LDAsMCwwLDI4LTI4VjgwQTI4LDI4LDAsMCwwLDIwOCw1MlptNCwxNDBhNCw0LDAsMCwxLTQsNEg0OGE0LDQsMCwwLDEtNC00VjgwYTQsNCwwLDAsMSw0LTRIODBhMTIsMTIsMCwwLDAsMTAtNS4zNEwxMDIuNDIsNTJoNTEuMTVMMTY2LDcwLjY2QTEyLDEyLDAsMCwwLDE3Niw3NmgzMmE0LDQsMCwwLDEsNCw0Wk0xMjgsODRhNDgsNDgsMCwxLDAsNDgsNDhBNDguMDUsNDguMDUsMCwwLDAsMTI4LDg0Wm0wLDcyYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDEyOCwxNTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTZIMTgwLjI4TDE2Ni42NSwzNS41NkE4LDgsMCwwLDAsMTYwLDMySDk2YTgsOCwwLDAsMC02LjY1LDMuNTZMNzUuNzEsNTZINDhBMjQsMjQsMCwwLDAsMjQsODBWMTkyYTI0LDI0LDAsMCwwLDI0LDI0SDIwOGEyNCwyNCwwLDAsMCwyNC0yNFY4MEEyNCwyNCwwLDAsMCwyMDgsNTZabS00NCw3NmEzNiwzNiwwLDEsMS0zNi0zNkEzNiwzNiwwLDAsMSwxNjQsMTMyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNjRIMTc2TDE2MCw0MEg5Nkw4MCw2NEg0OEExNiwxNiwwLDAsMCwzMiw4MFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjgwQTE2LDE2LDAsMCwwLDIwOCw2NFpNMTI4LDE2OGEzNiwzNiwwLDEsMSwzNi0zNkEzNiwzNiwwLDAsMSwxMjgsMTY4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCw1NkgxODAuMjhMMTY2LjY1LDM1LjU2QTgsOCwwLDAsMCwxNjAsMzJIOTZhOCw4LDAsMCwwLTYuNjUsMy41Nkw3NS43MSw1Nkg0OEEyNCwyNCwwLDAsMCwyNCw4MFYxOTJhMjQsMjQsMCwwLDAsMjQsMjRIMjA4YTI0LDI0LDAsMCwwLDI0LTI0VjgwQTI0LDI0LDAsMCwwLDIwOCw1NlptOCwxMzZhOCw4LDAsMCwxLTgsOEg0OGE4LDgsMCwwLDEtOC04VjgwYTgsOCwwLDAsMSw4LThIODBhOCw4LDAsMCwwLDYuNjYtMy41NkwxMDAuMjgsNDhoNTUuNDNsMTMuNjMsMjAuNDRBOCw4LDAsMCwwLDE3Niw3MmgzMmE4LDgsMCwwLDEsOCw4Wk0xMjgsODhhNDQsNDQsMCwxLDAsNDQsNDRBNDQuMDUsNDQuMDUsMCwwLDAsMTI4LDg4Wm0wLDcyYTI4LDI4LDAsMSwxLDI4LTI4QTI4LDI4LDAsMCwxLDEyOCwxNjBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Camera";
export { I as Camera }
