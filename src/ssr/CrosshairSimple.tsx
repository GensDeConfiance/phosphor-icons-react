
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CrosshairSimple";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm04LDE5MS42M1YxODRhOCw4LDAsMCwwLTE2LDB2MzEuNjNBODguMTMsODguMTMsMCwwLDEsNDAuMzcsMTM2SDcyYTgsOCwwLDAsMCwwLTE2SDQwLjM3QTg4LjEzLDg4LjEzLDAsMCwxLDEyMCw0MC4zN1Y3MmE4LDgsMCwwLDAsMTYsMFY0MC4zN0E4OC4xMyw4OC4xMywwLDAsMSwyMTUuNjMsMTIwSDE4NGE4LDgsMCwwLDAsMCwxNmgzMS42M0E4OC4xMyw4OC4xMywwLDAsMSwxMzYsMjE1LjYzWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm00LDE5MS45MVYxODRhNCw0LDAsMCwwLTgsMHYzNS45MUE5Mi4xMyw5Mi4xMywwLDAsMSwzNi4wOSwxMzJINzJhNCw0LDAsMCwwLDAtOEgzNi4wOUE5Mi4xMyw5Mi4xMywwLDAsMSwxMjQsMzYuMDlWNzJhNCw0LDAsMCwwLDgsMFYzNi4wOUE5Mi4xMyw5Mi4xMywwLDAsMSwyMTkuOTEsMTI0SDE4NGE0LDQsMCwwLDAsMCw4aDM1LjkxQTkyLjEzLDkyLjEzLDAsMCwxLDEzMiwyMTkuOTFaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm02LDE5MS44VjE4NGE2LDYsMCwwLDAtMTIsMHYzMy44QTkwLjE1LDkwLjE1LDAsMCwxLDM4LjIsMTM0SDcyYTYsNiwwLDAsMCwwLTEySDM4LjJBOTAuMTUsOTAuMTUsMCwwLDEsMTIyLDM4LjJWNzJhNiw2LDAsMCwwLDEyLDBWMzguMkE5MC4xNSw5MC4xNSwwLDAsMSwyMTcuOCwxMjJIMTg0YTYsNiwwLDAsMCwwLDEyaDMzLjhBOTAuMTUsOTAuMTUsMCwwLDEsMTM0LDIxNy44WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0xMiwxOTEuMTNWMTg0YTEyLDEyLDAsMCwwLTI0LDB2MjcuMTNBODQuMTgsODQuMTgsMCwwLDEsNDQuODcsMTQwSDcyYTEyLDEyLDAsMCwwLDAtMjRINDQuODdBODQuMTgsODQuMTgsMCwwLDEsMTE2LDQ0Ljg3VjcyYTEyLDEyLDAsMCwwLDI0LDBWNDQuODdBODQuMTgsODQuMTgsMCwwLDEsMjExLjEzLDExNkgxODRhMTIsMTIsMCwwLDAsMCwyNGgyNy4xM0E4NC4xOCw4NC4xOCwwLDAsMSwxNDAsMjExLjEzWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTM2aDIzLjU0QTcyLjExLDcyLjExLDAsMCwxLDEzNiwxOTkuNTRWMTc2YTgsOCwwLDAsMC0xNiwwdjIzLjU0QTcyLjExLDcyLjExLDAsMCwxLDU2LjQ2LDEzNkg4MGE4LDgsMCwwLDAsMC0xNkg1Ni40NkE3Mi4xMSw3Mi4xMSwwLDAsMSwxMjAsNTYuNDZWODBhOCw4LDAsMCwwLDE2LDBWNTYuNDZBNzIuMTEsNzIuMTEsMCwwLDEsMTk5LjU0LDEyMEgxNzZhOCw4LDAsMCwwLDAsMTZabTU2LThBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tMTYsMGE4OCw4OCwwLDEsMC04OCw4OEE4OC4xLDg4LjEsMCwwLDAsMjE2LDEyOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptOCwxOTEuNjNWMTg0YTgsOCwwLDAsMC0xNiwwdjMxLjYzQTg4LjEzLDg4LjEzLDAsMCwxLDQwLjM3LDEzNkg3MmE4LDgsMCwwLDAsMC0xNkg0MC4zN0E4OC4xMyw4OC4xMywwLDAsMSwxMjAsNDAuMzdWNzJhOCw4LDAsMCwwLDE2LDBWNDAuMzdBODguMTMsODguMTMsMCwwLDEsMjE1LjYzLDEyMEgxODRhOCw4LDAsMCwwLDAsMTZoMzEuNjNBODguMTMsODguMTMsMCwwLDEsMTM2LDIxNS42M1oiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CrosshairSimple";
export { I as CrosshairSimple }
