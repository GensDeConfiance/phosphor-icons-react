
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Cookie";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQuNDksMTYzLjUxYTEyLDEyLDAsMSwxLTE3LDBBMTIsMTIsMCwwLDEsMTY0LjQ5LDE2My41MVptLTgxLThhMTIsMTIsMCwxLDAsMTcsMEExMiwxMiwwLDAsMCw4My41MSwxNTUuNTFabTktMzlhMTIsMTIsMCwxLDAtMTcsMEExMiwxMiwwLDAsMCw5Mi40OSwxMTYuNDlabTQ4LTFhMTIsMTIsMCwxLDAsMCwxN0ExMiwxMiwwLDAsMCwxNDAuNDksMTE1LjUxWk0yMzIsMTI4QTEwNCwxMDQsMCwxLDEsMTI4LDI0YTgsOCwwLDAsMSw4LDgsNDAsNDAsMCwwLDAsNDAsNDAsOCw4LDAsMCwxLDgsOCw0MCw0MCwwLDAsMCw0MCw0MEE4LDgsMCwwLDEsMjMyLDEyOFptLTE2LjMxLDcuMzlBNTYuMTMsNTYuMTMsMCwwLDEsMTY4LjUsODcuNWE1Ni4xMyw1Ni4xMywwLDAsMS00Ny44OS00Ny4xOSw4OCw4OCwwLDEsMCw5NS4wOCw5NS4wOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjEuNjYsMTY2LjM0YTgsOCwwLDEsMS0xMS4zMiwwQTgsOCwwLDAsMSwxNjEuNjYsMTY2LjM0Wm0tNzUuMzItOGE4LDgsMCwxLDAsMTEuMzIsMEE4LDgsMCwwLDAsODYuMzQsMTU4LjM0Wm0zLjMyLTU2YTgsOCwwLDEsMCwwLDExLjMyQTgsOCwwLDAsMCw4OS42NiwxMDIuMzRabTM2LjY4LDE2YTgsOCwwLDEsMCwxMS4zMiwwQTgsOCwwLDAsMCwxMjYuMzQsMTE4LjM0Wk0yMjgsMTI4QTEwMCwxMDAsMCwxLDEsMTI4LDI4YTQsNCwwLDAsMSw0LDQsNDQuMDUsNDQuMDUsMCwwLDAsNDQsNDQsNCw0LDAsMCwxLDQsNCw0NC4wNSw0NC4wNSwwLDAsMCw0NCw0NEE0LDQsMCwwLDEsMjI4LDEyOFptLTguMDgsMy44NGE1Mi4wOCw1Mi4wOCwwLDAsMS00Ny43OC00OCw1Mi4wOCw1Mi4wOCwwLDAsMS00OC00Ny43OCw5Miw5MiwwLDEsMCw5NS43Niw5NS43NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjMuMDcsMTY0LjkzYTEwLDEwLDAsMSwxLTE0LjE0LDBBMTAsMTAsMCwwLDEsMTYzLjA3LDE2NC45M1ptLTc4LjE0LThhMTAsMTAsMCwxLDAsMTQuMTQsMEExMCwxMCwwLDAsMCw4NC45MywxNTYuOTNabTYuMTQtNDEuODZhMTAsMTAsMCwxLDAtMTQuMTQsMEExMCwxMCwwLDAsMCw5MS4wNywxMTUuMDdabTMzLjg2LDEuODZhMTAsMTAsMCwxLDAsMTQuMTQsMEExMCwxMCwwLDAsMCwxMjQuOTMsMTE2LjkzWk0yMzAsMTI4QTEwMiwxMDIsMCwxLDEsMTI4LDI2YTYsNiwwLDAsMSw2LDYsNDIsNDIsMCwwLDAsNDIsNDIsNiw2LDAsMCwxLDYsNiw0Miw0MiwwLDAsMCw0Miw0MkE2LDYsMCwwLDEsMjMwLDEyOFptLTEyLjE4LDUuNjVBNTQuMDksNTQuMDksMCwwLDEsMTcwLjMsODUuN2E1NC4wOSw1NC4wOSwwLDAsMS00OC00Ny41Myw5MCw5MCwwLDEsMCw5NS40Nyw5NS40OFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjcuMzEsMTYwLjY5YTE2LDE2LDAsMSwxLTIyLjYyLDBBMTYsMTYsMCwwLDEsMTY3LjMxLDE2MC42OVptLTg2LjYyLThhMTYsMTYsMCwxLDAsMjIuNjIsMEExNiwxNiwwLDAsMCw4MC42OSwxNTIuNjlabTE0LjYyLTMzLjM4YTE2LDE2LDAsMSwwLTIyLjYyLDBBMTYsMTYsMCwwLDAsOTUuMzEsMTE5LjMxWm00OC02LjYyYTE2LDE2LDAsMSwwLDAsMjIuNjJBMTYsMTYsMCwwLDAsMTQzLjMxLDExMi42OVpNMjM2LDEyOEExMDgsMTA4LDAsMSwxLDEyOCwyMGExMiwxMiwwLDAsMSwxMiwxMiwzNiwzNiwwLDAsMCwzNiwzNiwxMiwxMiwwLDAsMSwxMiwxMiwzNiwzNiwwLDAsMCwzNiwzNkExMiwxMiwwLDAsMSwyMzYsMTI4Wm0tMjQuNjcsMTAuNjVBNjAuMTcsNjAuMTcsMCwwLDEsMTY1LDkxYTYwLjE3LDYwLjE3LDAsMCwxLTQ3LjY2LTQ2LjMyLDg0LDg0LDAsMSwwLDk0LDk0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTIwYTQwLDQwLDAsMCwxLTQwLTQwLDgsOCwwLDAsMC04LTgsNDAsNDAsMCwwLDEtNDAtNDAsOCw4LDAsMCwwLTgtOEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsOCw4LDAsMCwwLDIyNCwxMjBaTTc1LjUxLDk5LjUxYTEyLDEyLDAsMSwxLDAsMTdBMTIsMTIsMCwwLDEsNzUuNTEsOTkuNTFabTI1LDczYTEyLDEyLDAsMSwxLDAtMTdBMTIsMTIsMCwwLDEsMTAwLjQ5LDE3Mi40OVptMjMtNDBhMTIsMTIsMCwxLDEsMTcsMEExMiwxMiwwLDAsMSwxMjMuNTEsMTMyLjQ5Wm00MSw0OGExMiwxMiwwLDEsMSwwLTE3QTEyLDEyLDAsMCwxLDE2NC40OSwxODAuNDlaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2LDQ4LDQ4LDAsMCwwLDQ4LDQ4QTQ4LDQ4LDAsMCwwLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTY0LjQ5LDE2My41MWExMiwxMiwwLDEsMS0xNywwQTEyLDEyLDAsMCwxLDE2NC40OSwxNjMuNTFabS04MS04YTEyLDEyLDAsMSwwLDE3LDBBMTIsMTIsMCwwLDAsODMuNTEsMTU1LjUxWm05LTM5YTEyLDEyLDAsMSwwLTE3LDBBMTIsMTIsMCwwLDAsOTIuNDksMTE2LjQ5Wm00OC0xYTEyLDEyLDAsMSwwLDAsMTdBMTIsMTIsMCwwLDAsMTQwLjQ5LDExNS41MVpNMjMyLDEyOEExMDQsMTA0LDAsMSwxLDEyOCwyNGE4LDgsMCwwLDEsOCw4LDQwLDQwLDAsMCwwLDQwLDQwLDgsOCwwLDAsMSw4LDgsNDAsNDAsMCwwLDAsNDAsNDBBOCw4LDAsMCwxLDIzMiwxMjhabS0xNi4zMSw3LjM5QTU2LjEzLDU2LjEzLDAsMCwxLDE2OC41LDg3LjVhNTYuMTMsNTYuMTMsMCwwLDEtNDcuODktNDcuMTksODgsODgsMCwxLDAsOTUuMDgsOTUuMDhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Cookie";
export { I as Cookie }
