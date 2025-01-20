
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Cat";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwxNDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsOTYsMTQwWm03Ni0xMmExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCwxNzIsMTI4Wm02MC04MHY4OGMwLDUyLjkzLTQ2LjY1LDk2LTEwNCw5NlMyNCwxODguOTMsMjQsMTM2VjQ4QTE2LDE2LDAsMCwxLDUxLjMxLDM2LjY5Yy4xNC4xNC4yNi4yNy4zOC40MUw2OSw1N2ExMTEuMjIsMTExLjIyLDAsMCwxLDExOC4xLDBMMjA0LjMxLDM3LjFjLjEyLS4xNC4yNC0uMjcuMzgtLjQxQTE2LDE2LDAsMCwxLDIzMiw0OFptLTE2LDAtMjEuNTYsMjQuOEE4LDgsMCwwLDEsMTgzLjYzLDc0LDg4Ljg2LDg4Ljg2LDAsMCwwLDE2OCw2NC43NVY4OGE4LDgsMCwxLDEtMTYsMFY1OS4wNWE5Ny40Myw5Ny40MywwLDAsMC0xNi0yLjcyVjg4YTgsOCwwLDEsMS0xNiwwVjU2LjMzYTk3LjQzLDk3LjQzLDAsMCwwLTE2LDIuNzJWODhhOCw4LDAsMSwxLTE2LDBWNjQuNzVBODguODYsODguODYsMCwwLDAsNzIuMzcsNzRhOCw4LDAsMCwxLTEwLjgxLTEuMTdMNDAsNDh2ODhjMCw0MS42NiwzNS4yMSw3Niw4MCw3OS42N1YxOTUuMzFsLTEzLjY2LTEzLjY2YTgsOCwwLDAsMSwxMS4zMi0xMS4zMUwxMjgsMTgwLjY4bDEwLjM0LTEwLjM0YTgsOCwwLDAsMSwxMS4zMiwxMS4zMUwxMzYsMTk1LjMxdjIwLjM2YzQ0Ljc5LTMuNjksODAtMzgsODAtNzkuNjdaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuNTksMzYuOTRhMTEuODMsMTEuODMsMCwwLDAtMTMuMDgsMi42MWwtLjE5LjJMMTg3Ljc3LDYyLjI0YTEwNy4xLDEwNy4xLDAsMCwwLTExOS41NCwwTDQ4LjY4LDM5Ljc1bC0uMTktLjJBMTIsMTIsMCwwLDAsMjgsNDh2ODhjMCw1MC43Miw0NC44Niw5MiwxMDAsOTJzMTAwLTQxLjI3LDEwMC05MlY0OEExMS44MiwxMS44MiwwLDAsMCwyMjAuNTksMzYuOTRaTTIyMCwxMzZjMCw0NS4wOS0zOS4xMiw4Mi04OCw4My45MVYxOTMuNjZsMTQuODMtMTQuODNhNCw0LDAsMSwwLTUuNjYtNS42NUwxMjgsMTg2LjM1bC0xMy4xNy0xMy4xN2E0LDQsMCwxLDAtNS42Niw1LjY1TDEyNCwxOTMuNjZ2MjYuMjZDNzUuMTIsMjE4LDM2LDE4MS4xLDM2LDEzNlY0OGEzLjkzLDMuOTMsMCwwLDEsMi40Ny0zLjcsNC4zOSw0LjM5LDAsMCwxLDEuNi0uMzEsMy43NywzLjc3LDAsMCwxLDIuNjcsMS4xTDY0LjU4LDcwLjIzYTQsNCwwLDAsMCw1LjQuNTlBOTQsOTQsMCwwLDEsOTIsNTguNzRWODhhNCw0LDAsMCwwLDgsMFY1NmExMDAuMDcsMTAwLjA3LDAsMCwxLDI0LTMuOTNWODhhNCw0LDAsMCwwLDgsMFY1Mi4wOUExMDAuMDcsMTAwLjA3LDAsMCwxLDE1Niw1NlY4OGE0LDQsMCwwLDAsOCwwVjU4Ljc0YTk0LDk0LDAsMCwxLDIyLDEyLjA4LDQsNCwwLDAsMCw1LjQtLjU5bDIxLjg0LTI1LjExQTQsNCwwLDAsMSwyMjAsNDhaTTkyLDE0MGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSw5MiwxNDBabTg4LDBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTgwLDE0MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuMzYsMzUuMDdhMTQsMTQsMCwwLDAtMTUuMjYsM2wtLjI5LjNMMTg3LjQyLDU5LjU4YTEwOS4xNiwxMDkuMTYsMCwwLDAtMTE4Ljg0LDBMNTAuMTksMzguNDFsLS4yOS0uM0ExNCwxNCwwLDAsMCwyNiw0OHY4OGMwLDUxLjgzLDQ1Ljc2LDk0LDEwMiw5NHMxMDItNDIuMTcsMTAyLTk0VjQ4QTE0LDE0LDAsMCwwLDIyMS4zNiwzNS4wN1pNMjE4LDEzNmMwLDQzLjM4LTM3LjE2LDc5LTg0LDgxLjgxVjE5NC40OGwxNC4yNC0xNC4yNGE2LDYsMCwwLDAtOC40OC04LjQ5TDEyOCwxODMuNTFsLTExLjc2LTExLjc2YTYsNiwwLDAsMC04LjQ4LDguNDlMMTIyLDE5NC40OHYyMy4zM0M3NS4xNiwyMTUsMzgsMTc5LjM4LDM4LDEzNlY0OGExLjkxLDEuOTEsMCwwLDEsMS4yMy0xLjg1LDIuMjgsMi4yOCwwLDAsMSwuODItLjE3LDEuODcsMS44NywwLDAsMSwxLjI2LjVsMjEuNzYsMjVhNiw2LDAsMCwwLDguMTEuODhBOTEuNTIsOTEuNTIsMCwwLDEsOTAsNjEuNjhWODhhNiw2LDAsMSwwLDEyLDBWNTcuNTFhOTcuODUsOTcuODUsMCwwLDEsMjAtMy4zMlY4OGE2LDYsMCwxLDAsMTIsMFY1NC4xOWE5Ny44NSw5Ny44NSwwLDAsMSwyMCwzLjMyVjg4YTYsNiwwLDEsMCwxMiwwVjYxLjY4YTkxLjUyLDkxLjUyLDAsMCwxLDE4LjgyLDEwLjczLDYsNiwwLDAsMCw4LjExLS44OGwyMS43Ni0yNUEyLDIsMCwwLDEsMjE4LDQ4Wk05NCwxNDBhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsOTQsMTQwWm04OCwwYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDE4MiwxNDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuNjUsMjkuNTNhMjAsMjAsMCwwLDAtMjEuNzksNC4zNGMtLjIuMi0uMzkuNC0uNTcuNjFsLTE1LDE3LjNhMTE1LjM0LDExNS4zNCwwLDAsMC0xMTYuNSwwbC0xNS0xNy4zYy0uMTgtLjIxLS4zNy0uNDEtLjU3LS42MUEyMCwyMCwwLDAsMCwyMCw0OHY4OGMwLDU1LjE0LDQ4LjQ1LDEwMCwxMDgsMTAwczEwOC00NC44NiwxMDgtMTAwVjQ4QTIwLDIwLDAsMCwwLDIyMy42NSwyOS41M1pNMjEyLDEzNmMwLDM4LjIyLTMxLjM1LDY5LjkzLTcyLDc1LjIxVjE5N2wxMi40OS0xMi40OWExMiwxMiwwLDAsMC0xNy0xN0wxMjgsMTc1bC03LjUxLTcuNTJhMTIsMTIsMCwwLDAtMTcsMTdMMTE2LDE5N3YxNC4yNGMtNDAuNjUtNS4yOC03Mi0zNy03Mi03NS4yMVY1OC43NEw1OC41NCw3NS40N2ExMiwxMiwwLDAsMCwxNi4yMSwxLjc2QTg2LDg2LDAsMCwxLDk2LDY1Ljc0Vjg4YTEyLDEyLDAsMCwwLDI0LDBWNjAuMzVxNC0uMzUsOC0uMzV0OCwuMzVWODhhMTIsMTIsMCwwLDAsMjQsMFY2NS43NGE4Ni4yLDg2LjIsMCwwLDEsMjEuMjUsMTEuNDksMTIsMTIsMCwwLDAsMTYuMjEtMS43NkwyMTIsNTguNzRabS0xMTIsNGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxMDAsMTQwWm04OCwwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE4OCwxNDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuODMsMzMuNTRhMTYsMTYsMCwwLDAtMTguMTQsMy4xNWMtLjE0LjE0LS4yNi4yNy0uMzguNDFMMTg3LjA1LDU3QTExMS4yOCwxMTEuMjgsMCwwLDAsNjksNTdMNTEuNjksMzcuMWMtLjEyLS4xNC0uMjQtLjI3LS4zOC0uNDFhMTYsMTYsMCwwLDAtMTguMTQtMy4xNUExNi40LDE2LjQsMCwwLDAsMjQsNDguNDZWMTM2YzAsNDksNDAuMDYsODkuNjMsOTEuNTYsOTUuMzJhNCw0LDAsMCwwLDQuNDQtNHYtMzJsLTEzLjQyLTEzLjQzYTguMjIsOC4yMiwwLDAsMS0uNDEtMTEuMzcsOCw4LDAsMCwxLDExLjQ5LS4xOEwxMjgsMTgwLjY4bDEwLjM0LTEwLjM1YTgsOCwwLDAsMSwxMS40OS4xOCw4LjIyLDguMjIsMCwwLDEtLjQxLDExLjM3TDEzNiwxOTUuMzF2MzJhNCw0LDAsMCwwLDQuNDQsNEMxOTEuOTQsMjI1LjYyLDIzMiwxODUsMjMyLDEzNlY0OC40NkExNi40LDE2LjQsMCwwLDAsMjIyLjgzLDMzLjU0Wk04NCwxNTJhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsODQsMTUyWm0yMC02NGE4LDgsMCwxLDEtMTYsMFY2OWE4LDgsMCwwLDEsMTYsMFptMzIsMGE4LDgsMCwxLDEtMTYsMFY2NGE4LDgsMCwwLDEsMTYsMFptMTYsMFY2OWE4LDgsMCwwLDEsMTYsMFY4OGE4LDgsMCwxLDEtMTYsMFptMjAsNjRhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTcyLDE1MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDh2ODhjMCw0OC42LTQzLDg4LTk2LDg4cy05Ni0zOS40LTk2LTg4VjQ4YTgsOCwwLDAsMSwxMy42Ni01LjY2TDY3LjYsNjcuNmgwYTEwMi44NywxMDIuODcsMCwwLDEsMTIwLjgsMGgwbDIxLjk0LTI1LjI0QTgsOCwwLDAsMSwyMjQsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNOTYsMTQwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDk2LDE0MFptNzYtMTJhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTcyLDEyOFptNjAtODB2ODhjMCw1Mi45My00Ni42NSw5Ni0xMDQsOTZTMjQsMTg4LjkzLDI0LDEzNlY0OEExNiwxNiwwLDAsMSw1MS4zMSwzNi42OWMuMTQuMTQuMjYuMjcuMzguNDFMNjksNTdhMTExLjIyLDExMS4yMiwwLDAsMSwxMTguMSwwTDIwNC4zMSwzNy4xYy4xMi0uMTQuMjQtLjI3LjM4LS40MUExNiwxNiwwLDAsMSwyMzIsNDhabS0xNiwwLTIxLjU2LDI0LjhBOCw4LDAsMCwxLDE4My42Myw3NCw4OC44Niw4OC44NiwwLDAsMCwxNjgsNjQuNzVWODhhOCw4LDAsMSwxLTE2LDBWNTkuMDVhOTcuNDMsOTcuNDMsMCwwLDAtMTYtMi43MlY4OGE4LDgsMCwxLDEtMTYsMFY1Ni4zM2E5Ny40Myw5Ny40MywwLDAsMC0xNiwyLjcyVjg4YTgsOCwwLDEsMS0xNiwwVjY0Ljc1QTg4Ljg2LDg4Ljg2LDAsMCwwLDcyLjM3LDc0YTgsOCwwLDAsMS0xMC44MS0xLjE3TDQwLDQ4djg4YzAsNDEuNjYsMzUuMjEsNzYsODAsNzkuNjdWMTk1LjMxbC0xMy42Ni0xMy42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzFMMTI4LDE4MC42OGwxMC4zNC0xMC4zNGE4LDgsMCwwLDEsMTEuMzIsMTEuMzFMMTM2LDE5NS4zMXYyMC4zNmM0NC43OS0zLjY5LDgwLTM4LDgwLTc5LjY3WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Cat";
export { I as Cat }
