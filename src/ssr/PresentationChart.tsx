
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/PresentationChart";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBIMTM2VjI0YTgsOCwwLDAsMC0xNiwwVjQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjE3NmExNiwxNiwwLDAsMCwxNiwxNkg3OS4zNkw1Ny43NSwyMTlhOCw4LDAsMCwwLDEyLjUsMTBsMjkuNTktMzdoNTYuMzJsMjkuNTksMzdhOCw4LDAsMSwwLDEyLjUtMTBsLTIxLjYxLTI3SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsMTM2SDQwVjU2SDIxNlYxNzZaTTEwNCwxMjB2MjRhOCw4LDAsMCwxLTE2LDBWMTIwYTgsOCwwLDAsMSwxNiwwWm0zMi0xNnY0MGE4LDgsMCwwLDEtMTYsMFYxMDRhOCw4LDAsMCwxLDE2LDBabTMyLTE2djU2YTgsOCwwLDAsMS0xNiwwVjg4YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRIMTMyVjI0YTQsNCwwLDAsMC04LDBWNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMTc2YTEyLDEyLDAsMCwwLDEyLDEySDg3LjY4bC0yNi44LDMzLjVhNCw0LDAsMSwwLDYuMjQsNUw5Ny45MiwxODhoNjAuMTZsMzAuOCwzOC41YTQsNCwwLDAsMCw2LjI0LTVMMTY4LjMyLDE4OEgyMTZhMTIsMTIsMCwwLDAsMTItMTJWNTZBMTIsMTIsMCwwLDAsMjE2LDQ0Wm00LDEzMmE0LDQsMCwwLDEtNCw0SDQwYTQsNCwwLDAsMS00LTRWNTZhNCw0LDAsMCwxLDQtNEgyMTZhNCw0LDAsMCwxLDQsNFpNMTAwLDEyMHYyNGE0LDQsMCwwLDEtOCwwVjEyMGE0LDQsMCwwLDEsOCwwWm0zMi0xNnY0MGE0LDQsMCwwLDEtOCwwVjEwNGE0LDQsMCwwLDEsOCwwWm0zMi0xNnY1NmE0LDQsMCwwLDEtOCwwVjg4YTQsNCwwLDAsMSw4LDBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJIMTM0VjI0YTYsNiwwLDAsMC0xMiwwVjQySDQwQTE0LDE0LDAsMCwwLDI2LDU2VjE3NmExNCwxNCwwLDAsMCwxNCwxNEg4My41Mkw1OS4zMSwyMjAuMjVhNiw2LDAsMCwwLDkuMzgsNy41TDk4Ljg4LDE5MGg1OC4yNGwzMC4xOSwzNy43NWE2LDYsMCwwLDAsOS4zOC03LjVMMTcyLjQ4LDE5MEgyMTZhMTQsMTQsMCwwLDAsMTQtMTRWNTZBMTQsMTQsMCwwLDAsMjE2LDQyWm0yLDEzNGEyLDIsMCwwLDEtMiwySDQwYTIsMiwwLDAsMS0yLTJWNTZhMiwyLDAsMCwxLDItMkgyMTZhMiwyLDAsMCwxLDIsMlpNMTAyLDEyMHYyNGE2LDYsMCwwLDEtMTIsMFYxMjBhNiw2LDAsMCwxLDEyLDBabTMyLTE2djQwYTYsNiwwLDAsMS0xMiwwVjEwNGE2LDYsMCwwLDEsMTIsMFptMzItMTZ2NTZhNiw2LDAsMCwxLTEyLDBWODhhNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZIMTQwVjI0YTEyLDEyLDAsMCwwLTI0LDBWMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMTc2YTIwLDIwLDAsMCwwLDIwLDIwSDcxbC0xNi40LDIwLjVhMTIsMTIsMCwwLDAsMTguNzQsMTVsMjguNC0zNS41aDUyLjQ2bDI4LjQsMzUuNWExMiwxMiwwLDAsMCwxOC43NC0xNUwxODUsMTk2aDMxYTIwLDIwLDAsMCwwLDIwLTIwVjU2QTIwLDIwLDAsMCwwLDIxNiwzNlptLTQsMTM2SDQ0VjYwSDIxMlpNMTA0LDEyMHYyNGExMiwxMiwwLDAsMS0yNCwwVjEyMGExMiwxMiwwLDAsMSwyNCwwWm0yNC0yOGExMiwxMiwwLDAsMSwxMiwxMnY0MGExMiwxMiwwLDAsMS0yNCwwVjEwNEExMiwxMiwwLDAsMSwxMjgsOTJabTI0LDUyVjg4YTEyLDEyLDAsMCwxLDI0LDB2NTZhMTIsMTIsMCwwLDEtMjQsMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBIMTM2VjI0YTgsOCwwLDAsMC0xNiwwVjQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjE3NmExNiwxNiwwLDAsMCwxNiwxNkg3OS4zNkw1Ny43NSwyMTlhOCw4LDAsMCwwLDEyLjUsMTBsMjkuNTktMzdoNTYuMzJsMjkuNTksMzdhOCw4LDAsMSwwLDEyLjUtMTBsLTIxLjYxLTI3SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBaTTEwNCwxNDRhOCw4LDAsMCwxLTE2LDBWMTIwYTgsOCwwLDAsMSwxNiwwWm0zMiwwYTgsOCwwLDAsMS0xNiwwVjEwNGE4LDgsMCwwLDEsMTYsMFptMzIsMGE4LDgsMCwwLDEtMTYsMFY4OGE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMTc2YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFY1NmE4LDgsMCwwLDEsOC04SDIxNkE4LDgsMCwwLDEsMjI0LDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw0MEgxMzZWMjRhOCw4LDAsMCwwLTE2LDBWNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMTc2YTE2LDE2LDAsMCwwLDE2LDE2SDc5LjM2TDU3Ljc1LDIxOWE4LDgsMCwwLDAsMTIuNSwxMGwyOS41OS0zN2g1Ni4zMmwyOS41OSwzN2E4LDgsMCwxLDAsMTIuNS0xMGwtMjEuNjEtMjdIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIxNiw0MFptMCwxMzZINDBWNTZIMjE2VjE3NlpNMTA0LDEyMHYyNGE4LDgsMCwwLDEtMTYsMFYxMjBhOCw4LDAsMCwxLDE2LDBabTMyLTE2djQwYTgsOCwwLDAsMS0xNiwwVjEwNGE4LDgsMCwwLDEsMTYsMFptMzItMTZ2NTZhOCw4LDAsMCwxLTE2LDBWODhhOCw4LDAsMCwxLDE2LDBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PresentationChart";
export { I as PresentationChart }
