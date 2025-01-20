
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/MusicNotesPlus";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDhhOCw4LDAsMCwxLTgsOEgyMDhWNzJhOCw4LDAsMCwxLTE2LDBWNTZIMTc2YTgsOCwwLDAsMSwwLTE2aDE2VjI0YTgsOCwwLDAsMSwxNiwwVjQwaDE2QTgsOCwwLDAsMSwyMzIsNDhabS0xNiw2NHY1MmEzNiwzNiwwLDEsMS0xNi0yOS45MlYxMTJhOCw4LDAsMCwxLDE2LDBabS0xNiw1MmEyMCwyMCwwLDEsMC0yMCwyMEEyMCwyMCwwLDAsMCwyMDAsMTY0Wk04OCwxMTAuMjVWMTk2YTM2LDM2LDAsMSwxLTE2LTI5LjkyVjU2YTgsOCwwLDAsMSw2LjA2LTcuNzZsNTYtMTRhOCw4LDAsMCwxLDMuODgsMTUuNTJMODgsNjIuMjV2MzEuNWw3MC4wNi0xNy41MWE4LDgsMCwwLDEsMy44OCwxNS41MlpNNzIsMTk2YTIwLDIwLDAsMSwwLTIwLDIwQTIwLDIwLDAsMCwwLDcyLDE5NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNDhhNCw0LDAsMCwxLTQsNEgyMDRWNzJhNCw0LDAsMCwxLTgsMFY1MkgxNzZhNCw0LDAsMCwxLDAtOGgyMFYyNGE0LDQsMCwwLDEsOCwwVjQ0aDIwQTQsNCwwLDAsMSwyMjgsNDhabS0xNiw2NHY1MmEzMi4wNiwzMi4wNiwwLDEsMS04LTIxLjEzVjExMmE0LDQsMCwwLDEsOCwwWm0tOCw1MmEyNCwyNCwwLDEsMC0yNCwyNEEyNCwyNCwwLDAsMCwyMDQsMTY0Wk04NCwxMDcuMTJWMTk2YTMyLjA2LDMyLjA2LDAsMSwxLTgtMjEuMTNWNTZhNCw0LDAsMCwxLDMtMy44OGw1Ni0xNEE0LDQsMCwwLDEsMTM3LDQ1Ljg4TDg0LDU5LjEyVjk4Ljg4bDc1LTE4Ljc2QTQsNCwwLDAsMSwxNjEsODcuODhaTTc2LDE5NmEyNCwyNCwwLDEsMC0yNCwyNEEyNCwyNCwwLDAsMCw3NiwxOTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsNDhhNiw2LDAsMCwxLTYsNkgyMDZWNzJhNiw2LDAsMCwxLTEyLDBWNTRIMTc2YTYsNiwwLDAsMSwwLTEyaDE4VjI0YTYsNiwwLDAsMSwxMiwwVjQyaDE4QTYsNiwwLDAsMSwyMzAsNDhabS0xNiw2NHY1MmEzNC4wNiwzNC4wNiwwLDEsMS0xMi0yNS44OVYxMTJhNiw2LDAsMCwxLDEyLDBabS0xMiw1MmEyMiwyMiwwLDEsMC0yMiwyMkEyMiwyMiwwLDAsMCwyMDIsMTY0Wk04NiwxMDguNjhWMTk2YTM0LjA2LDM0LjA2LDAsMSwxLTEyLTI1Ljg5VjU2YTYsNiwwLDAsMSw0LjU0LTUuODJsNTYtMTRhNiw2LDAsMSwxLDIuOTIsMTEuNjRMODYsNjAuNjhWOTYuMzJsNzIuNTQtMTguMTRhNiw2LDAsMSwxLDIuOTIsMTEuNjRaTTc0LDE5NmEyMiwyMiwwLDEsMC0yMiwyMkEyMiwyMiwwLDAsMCw3NCwxOTZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNDhhMTIsMTIsMCwwLDEtMTIsMTJIMjEyVjcyYTEyLDEyLDAsMCwxLTI0LDBWNjBIMTc2YTEyLDEyLDAsMCwxLDAtMjRoMTJWMjRhMTIsMTIsMCwwLDEsMjQsMFYzNmgxMkExMiwxMiwwLDAsMSwyMzYsNDhabS0xNiw2NHY1MmE0MCw0MCwwLDEsMS0yNC0zNi42NVYxMTJhMTIsMTIsMCwwLDEsMjQsMFptLTI0LDUyYTE2LDE2LDAsMSwwLTE2LDE2QTE2LDE2LDAsMCwwLDE5NiwxNjRaTTkyLDExMy4zN1YxOTZhNDAsNDAsMCwxLDEtMjQtMzYuNjVWNTZhMTIsMTIsMCwwLDEsOS4wOS0xMS42NGw1Ni0xNGExMiwxMiwwLDAsMSw1LjgyLDIzLjI4TDkyLDY1LjM3Vjg4LjYzbDY1LjA5LTE2LjI3YTEyLDEyLDAsMCwxLDUuODIsMjMuMjhaTTY4LDE5NmExNiwxNiwwLDEsMC0xNiwxNkExNiwxNiwwLDAsMCw2OCwxOTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDhhOCw4LDAsMCwxLTgsOEgyMDhWNzJhOCw4LDAsMCwxLTE2LDBWNTZIMTc2YTgsOCwwLDAsMSwwLTE2aDE2VjI0YTgsOCwwLDAsMSwxNiwwVjQwaDE2QTgsOCwwLDAsMSwyMzIsNDhaTTE2MC42LDc3Ljg2bC02Ljc2LTYuNzZBMzIuODUsMzIuODUsMCwwLDEsMTQ0LDQ5LjMzYTMxLjg3LDMxLjg3LDAsMCwxLDEuNjctMTEuNjYsNCw0LDAsMCwwLTQuNzYtNS4xNEw3OC4wNiw0OC4yNUE4LDgsMCwwLDAsNzIsNTZWMTY2LjFBMzYsMzYsMCwxLDAsNTIuNDIsMjMyQzcyLjI1LDIzMS43Nyw4OCwyMTUuMTMsODgsMTk1LjNWMTAyLjI1bDcwLjc0LTE3LjY5QTQsNCwwLDAsMCwxNjAuNiw3Ny44NlptNTAuMTEsMjQuMzFhMzEuOTEsMzEuOTEsMCwwLDEtNy4xNCwxLjYzLDQsNCwwLDAsMC0zLjU3LDRWMTM0LjFBMzYsMzYsMCwxLDAsMTgwLjQyLDIwMGMxOS44My0uMjMsMzUuNTgtMTYuODYsMzUuNTgtMzYuN1YxMDZBNCw0LDAsMCwwLDIxMC43MSwxMDIuMTdaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTY0YTI4LDI4LDAsMSwxLTI4LTI4QTI4LDI4LDAsMCwxLDIwOCwxNjRaTTUyLDE2OGEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCw1MiwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDQ4YTgsOCwwLDAsMS04LDhIMjA4VjcyYTgsOCwwLDAsMS0xNiwwVjU2SDE3NmE4LDgsMCwwLDEsMC0xNmgxNlYyNGE4LDgsMCwwLDEsMTYsMFY0MGgxNkE4LDgsMCwwLDEsMjMyLDQ4Wm0tMTYsNjR2NTJhMzYsMzYsMCwxLDEtMTYtMjkuOTJWMTEyYTgsOCwwLDAsMSwxNiwwWm0tMTYsNTJhMjAsMjAsMCwxLDAtMjAsMjBBMjAsMjAsMCwwLDAsMjAwLDE2NFpNODgsMTEwLjI1VjE5NmEzNiwzNiwwLDEsMS0xNi0yOS45MlY1NmE4LDgsMCwwLDEsNi4wNi03Ljc2bDU2LTE0YTgsOCwwLDAsMSwzLjg4LDE1LjUyTDg4LDYyLjI1djMxLjVsNzAuMDYtMTcuNTFhOCw4LDAsMCwxLDMuODgsMTUuNTJaTTcyLDE5NmEyMCwyMCwwLDEsMC0yMCwyMEEyMCwyMCwwLDAsMCw3MiwxOTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "MusicNotesPlus";
export { I as MusicNotesPlus }
