
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ImagesSquare";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJIODBBMTYsMTYsMCwwLDAsNjQsNDhWNjRINDhBMTYsMTYsMCwwLDAsMzIsODBWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDE3NmExNiwxNiwwLDAsMCwxNi0xNlYxOTJoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjA4LDMyWk04MCw0OEgyMDh2NjkuMzhsLTE2LjctMTYuN2ExNiwxNiwwLDAsMC0yMi42MiwwTDkzLjM3LDE3Nkg4MFptOTYsMTYwSDQ4VjgwSDY0djk2YTE2LDE2LDAsMCwwLDE2LDE2aDk2Wm0zMi0zMkgxMTZsNjQtNjQsMjgsMjh2MzZabS04OC02NEEyNCwyNCwwLDEsMCw5Niw4OCwyNCwyNCwwLDAsMCwxMjAsMTEyWm0wLTMyYTgsOCwwLDEsMS04LDhBOCw4LDAsMCwxLDEyMCw4MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZIODBBMTIsMTIsMCwwLDAsNjgsNDhWNjhINDhBMTIsMTIsMCwwLDAsMzYsODBWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDE3NmExMiwxMiwwLDAsMCwxMi0xMlYxODhoMjBhMTIsMTIsMCwwLDAsMTItMTJWNDhBMTIsMTIsMCwwLDAsMjA4LDM2Wk03Niw0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0djc5bC0yMy41MS0yMy41MmExMiwxMiwwLDAsMC0xNywwTDk1LDE4MEg4MGE0LDQsMCwwLDEtNC00Wk0xODAsMjA4YTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY4MGE0LDQsMCwwLDEsNC00SDY4VjE3NmExMiwxMiwwLDAsMCwxMiwxMkgxODBabTI4LTI4SDEwNi4zNGw3MC44My03MC44M2E0LDQsMCwwLDEsNS42NiwwTDIxMiwxMzguMzRWMTc2QTQsNCwwLDAsMSwyMDgsMTgwWm0tODgtNzJhMjAsMjAsMCwxLDAtMjAtMjBBMjAsMjAsMCwwLDAsMTIwLDEwOFptMC0zMmExMiwxMiwwLDEsMS0xMiwxMkExMiwxMiwwLDAsMSwxMjAsNzZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRIODBBMTQsMTQsMCwwLDAsNjYsNDhWNjZINDhBMTQsMTQsMCwwLDAsMzQsODBWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDE3NmExNCwxNCwwLDAsMCwxNC0xNFYxOTBoMThhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsMjA4LDM0Wk03OCw0OGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwydjc0LjJsLTIwLjEtMjAuMWExNCwxNCwwLDAsMC0xOS44LDBMOTQuMiwxNzhIODBhMiwyLDAsMCwxLTItMlpNMTc4LDIwOGEyLDIsMCwwLDEtMiwySDQ4YTIsMiwwLDAsMS0yLTJWODBhMiwyLDAsMCwxLDItMkg2NnY5OGExNCwxNCwwLDAsMCwxNCwxNGg5OFptMzAtMzBIMTExLjE3bDY3LjQxLTY3LjQxYTIsMiwwLDAsMSwyLjgzLDBMMjEwLDEzOS4xN1YxNzZBMiwyLDAsMCwxLDIwOCwxNzhabS04OC02OEEyMiwyMiwwLDEsMCw5OCw4OCwyMiwyMiwwLDAsMCwxMjAsMTEwWm0wLTMyYTEwLDEwLDAsMSwxLTEwLDEwQTEwLDEwLDAsMCwxLDEyMCw3OFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhIODhBMjAsMjAsMCwwLDAsNjgsNDhWNjBINDhBMjAsMjAsMCwwLDAsMjgsODBWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDE3NmEyMCwyMCwwLDAsMCwyMC0yMFYxODhoMTJhMjAsMjAsMCwwLDAsMjAtMjBWNDhBMjAsMjAsMCwwLDAsMjA4LDI4Wk05Miw1MkgyMDR2NTkuNzJsLTkuODYtOS44NmEyMCwyMCwwLDAsMC0yOC4yOCwwTDEwMy43MiwxNjRIOTJabTgwLDE1Mkg1MlY4NEg2OHY4NGEyMCwyMCwwLDAsMCwyMCwyMGg4NFptLTM0LjM0LTQwTDE4MCwxMjEuNjZsMjQsMjRWMTY0Wk0xMDgsODhhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTA4LDg4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJIODBBMTYsMTYsMCwwLDAsNjQsNDhWNjRINDhBMTYsMTYsMCwwLDAsMzIsODBWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDE3NmExNiwxNiwwLDAsMCwxNi0xNlYxOTJoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjA4LDMyWk04MCw0OEgyMDh2NjkuMzhsLTE2LjctMTYuN2ExNiwxNiwwLDAsMC0yMi42MiwwTDkzLjM3LDE3Nkg4MFptOTYsMTYwSDQ4VjgwSDY0djk2YTE2LDE2LDAsMCwwLDE2LDE2aDk2Wk0xMDQsODhhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsMTA0LDg4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBIODBhOCw4LDAsMCwwLTgsOFYxNzZhOCw4LDAsMCwwLDgsOEg5Ni42OWw3Ny42NS03Ny42NmE4LDgsMCwwLDEsMTEuMzIsMEwyMTYsMTM2LjY5VjQ4QTgsOCwwLDAsMCwyMDgsNDBabS04OCw2NGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjAsMTA0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwzMkg4MEExNiwxNiwwLDAsMCw2NCw0OFY2NEg0OEExNiwxNiwwLDAsMCwzMiw4MFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMTc2YTE2LDE2LDAsMCwwLDE2LTE2VjE5MmgxNmExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTgwLDQ4SDIwOHY2OS4zOGwtMTYuNy0xNi43YTE2LDE2LDAsMCwwLTIyLjYyLDBMOTMuMzcsMTc2SDgwWm05NiwxNjBINDhWODBINjR2OTZhMTYsMTYsMCwwLDAsMTYsMTZoOTZabTMyLTMySDExNmw2NC02NCwyOCwyOHYzNlptLTg4LTY0QTI0LDI0LDAsMSwwLDk2LDg4LDI0LDI0LDAsMCwwLDEyMCwxMTJabTAtMzJhOCw4LDAsMSwxLTgsOEE4LDgsMCwwLDEsMTIwLDgwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ImagesSquare";
export { I as ImagesSquare }
