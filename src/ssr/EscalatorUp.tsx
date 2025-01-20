
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/EscalatorUp";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDBIMTY4YTgsOCwwLDAsMC01Ljg4LDIuNTdMNjguNSwxNDRIMzJhMTYsMTYsMCwwLDAtMTYsMTZ2NDBhMTYsMTYsMCwwLDAsMTYsMTZIODhhOCw4LDAsMCwwLDUuODgtMi41N0wxODcuNSwxMTJIMjI0YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIyNCw0MFptMCw1NkgxODRhOCw4LDAsMCwwLTUuODgsMi41N0w4NC41LDIwMEgzMlYxNjBINzJhOCw4LDAsMCwwLDUuODgtMi41N0wxNzEuNSw1NkgyMjRabTUuNjYsNzQuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDIwOCwxNzEuMzFWMjA4YTgsOCwwLDAsMS0xNiwwVjE3MS4zMWwtMTAuMzQsMTAuMzVhOCw4LDAsMCwxLTExLjMyLTExLjMybDI0LTI0YTgsOCwwLDAsMSwxMS4zMiwwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDRIMTY4YTQsNCwwLDAsMC0yLjk0LDEuMjlMNzAuMjUsMTQ4SDMyYTEyLDEyLDAsMCwwLTEyLDEydjQwYTEyLDEyLDAsMCwwLDEyLDEySDg4YTQsNCwwLDAsMCwyLjk0LTEuMjlMMTg1Ljc1LDEwOEgyMjRhMTIsMTIsMCwwLDAsMTItMTJWNTZBMTIsMTIsMCwwLDAsMjI0LDQ0Wm00LDUyYTQsNCwwLDAsMS00LDRIMTg0YTQsNCwwLDAsMC0yLjk0LDEuMjlMODYuMjUsMjA0SDMyYTQsNCwwLDAsMS00LTRWMTYwYTQsNCwwLDAsMSw0LTRINzJhNCw0LDAsMCwwLDIuOTQtMS4yOUwxNjkuNzUsNTJIMjI0YTQsNCwwLDAsMSw0LDRabS0xLjE3LDc3LjE3YTQsNCwwLDAsMS01LjY2LDUuNjZMMjA0LDE2MS42NlYyMDhhNCw0LDAsMCwxLTgsMFYxNjEuNjZsLTE3LjE3LDE3LjE3YTQsNCwwLDAsMS01LjY2LTUuNjZsMjQtMjRhNCw0LDAsMCwxLDUuNjYsMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDJIMTY4YTYsNiwwLDAsMC00LjQxLDEuOTNMNjkuMzcsMTQ2SDMyYTE0LDE0LDAsMCwwLTE0LDE0djQwYTE0LDE0LDAsMCwwLDE0LDE0SDg4YTYsNiwwLDAsMCw0LjQxLTEuOTNMMTg2LjYzLDExMEgyMjRhMTQsMTQsMCwwLDAsMTQtMTRWNTZBMTQsMTQsMCwwLDAsMjI0LDQyWm0yLDU0YTIsMiwwLDAsMS0yLDJIMTg0YTYsNiwwLDAsMC00LjQxLDEuOTNMODUuMzcsMjAySDMyYTIsMiwwLDAsMS0yLTJWMTYwYTIsMiwwLDAsMSwyLTJINzJhNiw2LDAsMCwwLDQuNDEtMS45M0wxNzAuNjMsNTRIMjI0YTIsMiwwLDAsMSwyLDJabTIuMjQsNzUuNzZhNiw2LDAsMSwxLTguNDgsOC40OEwyMDYsMTY2LjQ5VjIwOGE2LDYsMCwwLDEtMTIsMFYxNjYuNDlsLTEzLjc2LDEzLjc1YTYsNiwwLDAsMS04LjQ4LTguNDhsMjQtMjRhNiw2LDAsMCwxLDguNDgsMFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMzZIMTY4YTEyLDEyLDAsMCwwLTguODIsMy44Nkw2Ni43NSwxNDBIMzJhMjAsMjAsMCwwLDAtMjAsMjB2NDBhMjAsMjAsMCwwLDAsMjAsMjBIODhhMTIsMTIsMCwwLDAsOC44Mi0zLjg2TDE4OS4yNSwxMTZIMjI0YTIwLDIwLDAsMCwwLDIwLTIwVjU2QTIwLDIwLDAsMCwwLDIyNCwzNlptLTQsNTZIMTg0YTEyLDEyLDAsMCwwLTguODIsMy44Nkw4Mi43NSwxOTZIMzZWMTY0SDcyYTEyLDEyLDAsMCwwLDguODItMy44NkwxNzMuMjUsNjBIMjIwWm0xMi40OSw3NS41MWExMiwxMiwwLDAsMS0xNywxN0wyMTIsMTgxdjI3YTEyLDEyLDAsMCwxLTI0LDBWMTgxbC0zLjUxLDMuNTJhMTIsMTIsMCwwLDEtMTctMTdsMjQtMjRhMTIsMTIsMCwwLDEsMTcsMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNTZWOTZhMTYsMTYsMCwwLDEtMTYsMTZIMTg3LjVMOTMuODgsMjEzLjQzQTgsOCwwLDAsMSw4OCwyMTZIMzJhMTYsMTYsMCwwLDEtMTYtMTZWMTYwYTE2LDE2LDAsMCwxLDE2LTE2SDY4LjVMMTYyLjEyLDQyLjU3QTgsOCwwLDAsMSwxNjgsNDBoNTZBMTYsMTYsMCwwLDEsMjQwLDU2Wm0tMzQuMzQsOTAuMzRhOCw4LDAsMCwwLTExLjMyLDBsLTI0LDI0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMkwxOTIsMTcxLjMxVjIwOGE4LDgsMCwwLDAsMTYsMFYxNzEuMzFsMTAuMzQsMTAuMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTZWOTZhOCw4LDAsMCwxLTgsOEgxODRMODgsMjA4SDMyYTgsOCwwLDAsMS04LThWMTYwYTgsOCwwLDAsMSw4LThINzJMMTY4LDQ4aDU2QTgsOCwwLDAsMSwyMzIsNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDQwSDE2OGE4LDgsMCwwLDAtNS44OCwyLjU3TDY4LjUsMTQ0SDMyYTE2LDE2LDAsMCwwLTE2LDE2djQwYTE2LDE2LDAsMCwwLDE2LDE2SDg4YTgsOCwwLDAsMCw1Ljg4LTIuNTdMMTg3LjUsMTEySDIyNGExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMjQsNDBabTAsNTZIMTg0YTgsOCwwLDAsMC01Ljg4LDIuNTdMODQuNSwyMDBIMzJWMTYwSDcyYTgsOCwwLDAsMCw1Ljg4LTIuNTdMMTcxLjUsNTZIMjI0Wm01LjY2LDc0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwyMDgsMTcxLjMxVjIwOGE4LDgsMCwwLDEtMTYsMFYxNzEuMzFsLTEwLjM0LDEwLjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmwyNC0yNGE4LDgsMCwwLDEsMTEuMzIsMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "EscalatorUp";
export { I as EscalatorUp }
