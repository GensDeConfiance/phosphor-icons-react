
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/LineSegment";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNjQsNDEuMzZhMzIsMzIsMCwwLDAtNTAuMiwzOC44OUw4MC4yNSwxNjQuNDRhMzIuMDYsMzIuMDYsMCwwLDAtMzguODksNC45NGgwYTMyLDMyLDAsMSwwLDUwLjIsNi4zN2w4NC4xOS04NC4xOWEzMiwzMiwwLDAsMCwzOC44OS01MC4yWm0tMTM5LjMzLDE2MmExNiwxNiwwLDAsMS0yMi42NC0yMi42NGgwYTE2LDE2LDAsMCwxLDIyLjYzLDBoMEExNiwxNiwwLDAsMSw3NS4zMSwyMDMuMzNabTEyOC0xMjhhMTYsMTYsMCwxLDEsMC0yMi42M0ExNiwxNiwwLDAsMSwyMDMuMzMsNzUuM1oiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuODEsNDQuMTlhMjgsMjgsMCwwLDAtNDIuMjMsMzYuNTdMODAuNzYsMTY5LjU4YTI4LDI4LDAsMCwwLTM2LjU3LDIuNjNoMGEyOCwyOCwwLDEsMCw0Mi4yMywzbDg4LjgyLTg4LjgyYTI4LDI4LDAsMCwwLDM2LjU3LTQyLjIzWm0tMTMzLjY3LDE2MmEyMCwyMCwwLDEsMSwwLTI4LjI4QTIwLDIwLDAsMCwxLDc4LjE0LDIwNi4xNVptMTI4LTEyOGEyMCwyMCwwLDAsMS0yOC4yOCwwaDBhMjAsMjAsMCwxLDEsMjguMjgsMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuMjMsNDIuNzdBMzAsMzAsMCwwLDAsMTY3LDgwLjU0TDgwLjU0LDE2N2EzMC4wNywzMC4wNywwLDAsMC0zNy43NywzLjgxaDBBMzAsMzAsMCwxLDAsODksMTc1LjQ2TDE3NS40Niw4OWEzMCwzMCwwLDAsMCwzNy43Ny00Ni4yNVptLTEzNi41MSwxNjJhMTgsMTgsMCwxLDEsMC0yNS40NkExOCwxOCwwLDAsMSw3Ni43MiwyMDQuNzRabTEyOC0xMjhhMTgsMTgsMCwwLDEtMjUuNDYsMGgwYTE4LDE4LDAsMSwxLDI1LjQ2LDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTcuNDcsMzguNTNhMzYsMzYsMCwwLDAtNTcuOTUsNDFsLTgwLDgwYTM2LjA3LDM2LjA3LDAsMCwwLTQxLDdoMGEzNiwzNiwwLDEsMCw1OCw5Ljk1bDgwLTgwYTM2LDM2LDAsMCwwLDQxLTU3Ljk1Wm0tMTQ1LDE2MmExMiwxMiwwLDEsMSwwLTE3QTEyLDEyLDAsMCwxLDcyLjQ4LDIwMC41Wm0xMjgtMTI4YTEyLDEyLDAsMCwxLTE3LDBoMGExMiwxMiwwLDEsMSwxNywwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuODEsODMuNzlhMjgsMjgsMCwwLDEtMzMuMTIsNC44M0w4OC42MiwxNzguNjlhMjgsMjgsMCwxLDEtNDQuNDMtNi40OGgwYTI4LDI4LDAsMCwxLDMzLjEyLTQuODNsOTAuMDctOTAuMDdhMjgsMjgsMCwxLDEsNDQuNDMsNi40OFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MSwxNzVBMjQsMjQsMCwxLDEsNDcsMTc1LDI0LDI0LDAsMCwxLDgxLDE3NVpNMjA5LDQ3QTI0LDI0LDAsMSwwLDIwOSw4MSwyNCwyNCwwLDAsMCwyMDksNDdaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE0LjY0LDQxLjM2YTMyLDMyLDAsMCwwLTUwLjIsMzguODlMODAuMjUsMTY0LjQ0YTMyLjA2LDMyLjA2LDAsMCwwLTM4Ljg5LDQuOTRoMGEzMiwzMiwwLDEsMCw1MC4yLDYuMzdsODQuMTktODQuMTlhMzIsMzIsMCwwLDAsMzguODktNTAuMlptLTEzOS4zMywxNjJhMTYsMTYsMCwwLDEtMjIuNjQtMjIuNjRoMGExNiwxNiwwLDAsMSwyMi42MywwaDBBMTYsMTYsMCwwLDEsNzUuMzEsMjAzLjMzWm0xMjgtMTI4YTE2LDE2LDAsMSwxLDAtMjIuNjNBMTYsMTYsMCwwLDEsMjAzLjMzLDc1LjNaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "LineSegment";
export { I as LineSegment }
