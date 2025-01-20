
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/NumberNine";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNDBhNTYsNTYsMCwxLDAsMTUuNjIsMTA5Ljc3TDExMywyMDQuMDdBOCw4LDAsMSwwLDEyNywyMTEuOTJsNDkuNTUtODhBNTYsNTYsMCwwLDAsMTI4LDQwWm0wLDk2YTQwLDQwLDAsMSwxLDQwLTQwQTQwLDQwLDAsMCwxLDEyOCwxMzZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNDRhNTIsNTIsMCwxLDAsMjQuNzQsOTcuNzNMMTE2LjUxLDIwNmE0LDQsMCwwLDAsNywzLjkyTDE3MywxMjJBNTIsNTIsMCwwLDAsMTI4LDQ0Wm0wLDk2YTQ0LDQ0LDAsMSwxLDQ0LTQ0QTQ0LjA1LDQ0LjA1LDAsMCwxLDEyOCwxNDBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNDJhNTQsNTQsMCwxLDAsMTkuOTQsMTA0LjE3bC0zMy4xNyw1OC44OGE2LDYsMCwxLDAsMTAuNDYsNS44OWw0OS41NC04OEE1NCw1NCwwLDAsMCwxMjgsNDJabTAsOTZhNDIsNDIsMCwxLDEsNDItNDJBNDIsNDIsMCwwLDEsMTI4LDEzOFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsOTZhNjAsNjAsMCwxLDAtNjAsNjAsNTkuMjEsNTkuMjEsMCwwLDAsNy44MS0uNTNsLTI2LjI3LDQ2LjY0YTEyLDEyLDAsMCwwLDIwLjkyLDExLjc4bDQ5LjU0LTg4QTU5LjU3LDU5LjU3LDAsMCwwLDE4OCw5NlpNOTIsOTZhMzYsMzYsMCwxLDEsMzYsMzZBMzYsMzYsMCwwLDEsOTIsOTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMDAsMjRaTTE2Ni4zLDEyOS42MiwxMzIuNjIsMTg4YTgsOCwwLDAsMS0xMy44Ni04bDE2LjUyLTI4LjYxQTQ0Ljc5LDQ0Ljc5LDAsMCwxLDEyOCwxNTJhNDQuMDUsNDQuMDUsMCwxLDEsMzguMy0yMi4zOFpNMTU2LDEwOGEyOCwyOCwwLDEsMS0yOC0yOEEyOCwyOCwwLDAsMSwxNTYsMTA4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBWMjE2YTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjQwQTE2LDE2LDAsMCwxLDU2LDI0SDIwMEExNiwxNiwwLDAsMSwyMTYsNDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDQwYTU2LDU2LDAsMSwwLDE1LjYyLDEwOS43N0wxMTMsMjA0LjA3QTgsOCwwLDEsMCwxMjcsMjExLjkybDQ5LjU1LTg4QTU2LDU2LDAsMCwwLDEyOCw0MFptMCw5NmE0MCw0MCwwLDEsMSw0MC00MEE0MCw0MCwwLDAsMSwxMjgsMTM2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "NumberNine";
export { I as NumberNine }
