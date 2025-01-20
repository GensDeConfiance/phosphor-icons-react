
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TerminalWindow";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTI4YTgsOCwwLDAsMS0zLDYuMjVsLTQwLDMyYTgsOCwwLDEsMS0xMC0xMi41TDEwNy4xOSwxMjgsNzUsMTAyLjI1YTgsOCwwLDEsMSwxMC0xMi41bDQwLDMyQTgsOCwwLDAsMSwxMjgsMTI4Wm00OCwyNEgxMzZhOCw4LDAsMCwwLDAsMTZoNDBhOCw4LDAsMCwwLDAtMTZabTU2LTk2VjIwMGExNiwxNiwwLDAsMS0xNiwxNkg0MGExNiwxNiwwLDAsMS0xNi0xNlY1NkExNiwxNiwwLDAsMSw0MCw0MEgyMTZBMTYsMTYsMCwwLDEsMjMyLDU2Wk0yMTYsMjAwVjU2SDQwVjIwMEgyMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjIuNSwxMjQuODhhNCw0LDAsMCwxLDAsNi4yNGwtNDAsMzJhNCw0LDAsMCwxLTUtNi4yNEwxMTMuNiwxMjgsNzcuNSw5OS4xMmE0LDQsMCwwLDEsNS02LjI0Wk0xNzYsMTU2SDEzNmE0LDQsMCwwLDAsMCw4aDQwYTQsNCwwLDAsMCwwLThaTTIyOCw1NlYyMDBhMTIsMTIsMCwwLDEtMTIsMTJINDBhMTIsMTIsMCwwLDEtMTItMTJWNTZBMTIsMTIsMCwwLDEsNDAsNDRIMjE2QTEyLDEyLDAsMCwxLDIyOCw1NlptLTgsMGE0LDQsMCwwLDAtNC00SDQwYTQsNCwwLDAsMC00LDRWMjAwYTQsNCwwLDAsMCw0LDRIMjE2YTQsNCwwLDAsMCw0LTRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjYsMTI4YTYsNiwwLDAsMS0yLjI1LDQuNjlsLTQwLDMyYTYsNiwwLDAsMS03LjUtOS4zOEwxMTAuNCwxMjgsNzYuMjUsMTAwLjY5YTYsNiwwLDEsMSw3LjUtOS4zOGw0MCwzMkE2LDYsMCwwLDEsMTI2LDEyOFptNTAsMjZIMTM2YTYsNiwwLDAsMCwwLDEyaDQwYTYsNiwwLDAsMCwwLTEyWm01NC05OFYyMDBhMTQsMTQsMCwwLDEtMTQsMTRINDBhMTQsMTQsMCwwLDEtMTQtMTRWNTZBMTQsMTQsMCwwLDEsNDAsNDJIMjE2QTE0LDE0LDAsMCwxLDIzMCw1NlptLTEyLDBhMiwyLDAsMCwwLTItMkg0MGEyLDIsMCwwLDAtMiwyVjIwMGEyLDIsMCwwLDAsMiwySDIxNmEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Mi41LDE1MC42MywxMDAuNzksMTI4LDcyLjUsMTA1LjM3YTEyLDEyLDAsMSwxLDE1LTE4Ljc0bDQwLDMyYTEyLDEyLDAsMCwxLDAsMTguNzRsLTQwLDMyYTEyLDEyLDAsMCwxLTE1LTE4Ljc0Wk0xNDQsMTcyaDMyYTEyLDEyLDAsMCwwLDAtMjRIMTQ0YTEyLDEyLDAsMCwwLDAsMjRaTTIzNiw1NlYyMDBhMjAsMjAsMCwwLDEtMjAsMjBINDBhMjAsMjAsMCwwLDEtMjAtMjBWNTZBMjAsMjAsMCwwLDEsNDAsMzZIMjE2QTIwLDIwLDAsMCwxLDIzNiw1NlptLTI0LDRINDRWMTk2SDIxMloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabS05MSw5NC4yNS00MCwzMmE4LDgsMCwxLDEtMTAtMTIuNUwxMDcuMTksMTI4LDc1LDEwMi4yNWE4LDgsMCwxLDEsMTAtMTIuNWw0MCwzMmE4LDgsMCwwLDEsMCwxMi41Wk0xNzYsMTY4SDEzNmE4LDgsMCwwLDEsMC0xNmg0MGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMjAwYTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFY1NmE4LDgsMCwwLDEsOC04SDIxNkE4LDgsMCwwLDEsMjI0LDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyOCwxMjhhOCw4LDAsMCwxLTMsNi4yNWwtNDAsMzJhOCw4LDAsMSwxLTEwLTEyLjVMMTA3LjE5LDEyOCw3NSwxMDIuMjVhOCw4LDAsMSwxLDEwLTEyLjVsNDAsMzJBOCw4LDAsMCwxLDEyOCwxMjhabTQ4LDI0SDEzNmE4LDgsMCwwLDAsMCwxNmg0MGE4LDgsMCwwLDAsMC0xNlptNTYtOTZWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDQwLDQwSDIxNkExNiwxNiwwLDAsMSwyMzIsNTZaTTIxNiwyMDBWNTZINDBWMjAwSDIxNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TerminalWindow";
export { I as TerminalWindow }
