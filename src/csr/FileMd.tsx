
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FileMd";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDB2NzJhOCw4LDAsMCwwLDE2LDBWNDBoODhWODhhOCw4LDAsMCwwLDgsOGg0OFYyMjRhOCw4LDAsMCwwLDE2LDBWODhBOCw4LDAsMCwwLDIxMy42Niw4Mi4zNFpNMTYwLDUxLjMxLDE4OC42OSw4MEgxNjBaTTE0NCwxNDRIMTI4YTgsOCwwLDAsMC04LDh2NTZhOCw4LDAsMCwwLDgsOGgxNmEzNiwzNiwwLDAsMCwwLTcyWm0wLDU2aC04VjE2MGg4YTIwLDIwLDAsMCwxLDAsNDBabS00MC00OHY1NmE4LDgsMCwwLDEtMTYsMFYxNzcuMzhMNzQuNTUsMTk2LjU5YTgsOCwwLDAsMS0xMy4xLDBMNDgsMTc3LjM4VjIwOGE4LDgsMCwwLDEtMTYsMFYxNTJhOCw4LDAsMCwxLDE0LjU1LTQuNTlMNjgsMTc4LjA1bDIxLjQ1LTMwLjY0QTgsOCwwLDAsMSwxMDQsMTUyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsODUuMTdsLTU2LTU2QTQsNCwwLDAsMCwxNTIsMjhINTZBMTIsMTIsMCwwLDAsNDQsNDB2NzJhNCw0LDAsMCwwLDgsMFY0MGE0LDQsMCwwLDEsNC00aDkyVjg4YTQsNCwwLDAsMCw0LDRoNTJWMjI0YTQsNCwwLDAsMCw4LDBWODhBNCw0LDAsMCwwLDIxMC44Myw4NS4xN1pNMTU2LDQxLjY1LDE5OC4zNCw4NEgxNTZaTTE0NCwxNDhIMTI4YTQsNCwwLDAsMC00LDR2NTZhNCw0LDAsMCwwLDQsNGgxNmEzMiwzMiwwLDAsMCwwLTY0Wm0wLDU2SDEzMlYxNTZoMTJhMjQsMjQsMCwwLDEsMCw0OFptLTQ0LTUydjU2YTQsNCwwLDAsMS04LDBWMTY0LjY5bC0yMC43MiwyOS42YTQsNCwwLDAsMS02LjU2LDBMNDQsMTY0LjY5VjIwOGE0LDQsMCwwLDEtOCwwVjE1MmE0LDQsMCwwLDEsNy4yOC0yLjI5TDY4LDE4NWwyNC43Mi0zNS4zMUE0LDQsMCwwLDEsMTAwLDE1MloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsODMuNzZsLTU2LTU2QTYsNiwwLDAsMCwxNTIsMjZINTZBMTQsMTQsMCwwLDAsNDIsNDB2NzJhNiw2LDAsMCwwLDEyLDBWNDBhMiwyLDAsMCwxLDItMmg5MFY4OGE2LDYsMCwwLDAsNiw2aDUwVjIyNGE2LDYsMCwwLDAsMTIsMFY4OEE2LDYsMCwwLDAsMjEyLjI0LDgzLjc2Wk0xNTgsNDYuNDgsMTkzLjUyLDgySDE1OFpNMTQ0LDE0NkgxMjhhNiw2LDAsMCwwLTYsNnY1NmE2LDYsMCwwLDAsNiw2aDE2YTM0LDM0LDAsMCwwLDAtNjhabTAsNTZIMTM0VjE1OGgxMGEyMiwyMiwwLDAsMSwwLDQ0Wm0tNDItNTB2NTZhNiw2LDAsMCwxLTEyLDBWMTcxTDcyLjkyLDE5NS40NGE2LDYsMCwwLDEtOS44NCwwTDQ2LDE3MXYzN2E2LDYsMCwwLDEtMTIsMFYxNTJhNiw2LDAsMCwxLDEwLjkyLTMuNDRsMjMuMDgsMzMsMjMuMDgtMzNBNiw2LDAsMCwxLDEwMiwxNTJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTUydjU2YTEyLDEyLDAsMCwxLTI0LDBWMTkwLjA3bC02LjE3LDguODFhMTIsMTIsMCwwLDEtMTkuNjYsMEw0NCwxOTAuMDdWMjA4YTEyLDEyLDAsMCwxLTI0LDBWMTUyYTEyLDEyLDAsMCwxLDIxLjgzLTYuODhMNjAsMTcxLjA3bDE4LjE3LTI1Ljk1QTEyLDEyLDAsMCwxLDEwMCwxNTJabTg0LDI4YTQwLDQwLDAsMCwxLTQwLDQwSDEyOGExMiwxMiwwLDAsMS0xMi0xMlYxNTJhMTIsMTIsMCwwLDEsMTItMTJoMTZBNDAsNDAsMCwwLDEsMTg0LDE4MFptLTI0LDBhMTYsMTYsMCwwLDAtMTYtMTZoLTR2MzJoNEExNiwxNiwwLDAsMCwxNjAsMTgwWm02MC05MlYyMjRhMTIsMTIsMCwwLDEtMjQsMFYxMDRIMTQ4YTEyLDEyLDAsMCwxLTEyLTEyVjQ0SDYwdjY0YTEyLDEyLDAsMCwxLTI0LDBWNDBBMjAsMjAsMCwwLDEsNTYsMjBoOTZhMTIsMTIsMCwwLDEsOC40OSwzLjUybDU2LDU2QTEyLDEyLDAsMCwxLDIyMCw4OFptLTYwLThoMjNMMTYwLDU3WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDB2NzZhNCw0LDAsMCwwLDQsNEgxOTZhNCw0LDAsMCwxLDQsNFYyMjRhOCw4LDAsMCwwLDkuMTksNy45MSw4LjE1LDguMTUsMCwwLDAsNi44MS04LjE2Vjg4QTgsOCwwLDAsMCwyMTMuNjYsODIuMzRaTTE1Miw4OFY0NGw0NCw0NFptLTgsNTZIMTI4YTgsOCwwLDAsMC04LDh2NTZhOCw4LDAsMCwwLDgsOGgxNS4zMmMxOS42NiwwLDM2LjIxLTE1LjQ4LDM2LjY3LTM1LjEzQTM2LDM2LDAsMCwwLDE0NCwxNDRabS0uNDksNTZIMTM2VjE2MGg4YTIwLDIwLDAsMCwxLDIwLDIwLjc3QzE2My41OCwxOTEuNTksMTU0LjM0LDIwMCwxNDMuNTEsMjAwWk0xMDQsMTUydjU1LjczQTguMTcsOC4xNywwLDAsMSw5Ni41MywyMTYsOCw4LDAsMCwxLDg4LDIwOFYxNzcuMzhsLTEzLjMyLDE5YTguMyw4LjMsMCwwLDEtNC4yLDMuMiw4LDgsMCwwLDEtOS0zTDQ4LDE3Ny4zOHYzMC4zNUE4LjE3LDguMTcsMCwwLDEsNDAuNTMsMjE2LDgsOCwwLDAsMSwzMiwyMDhWMTUyLjMxYTguMjcsOC4yNywwLDAsMSw0LjU2LTcuNTMsOCw4LDAsMCwxLDEwLDIuNjNMNjgsMTc4LjA1bDIxLjI3LTMwLjM5YTguMjgsOC4yOCwwLDAsMSw4LjA2LTMuNTVBOCw4LDAsMCwxLDEwNCwxNTJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODhIMTUyVjMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxMy42Niw4Mi4zNGwtNTYtNTZBOCw4LDAsMCwwLDE1MiwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MHY3MmE4LDgsMCwwLDAsMTYsMFY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4VjIyNGE4LDgsMCwwLDAsMTYsMFY4OEE4LDgsMCwwLDAsMjEzLjY2LDgyLjM0Wk0xNjAsNTEuMzEsMTg4LjY5LDgwSDE2MFpNMTQ0LDE0NEgxMjhhOCw4LDAsMCwwLTgsOHY1NmE4LDgsMCwwLDAsOCw4aDE2YTM2LDM2LDAsMCwwLDAtNzJabTAsNTZoLThWMTYwaDhhMjAsMjAsMCwwLDEsMCw0MFptLTQwLTQ4djU2YTgsOCwwLDAsMS0xNiwwVjE3Ny4zOEw3NC41NSwxOTYuNTlhOCw4LDAsMCwxLTEzLjEsMEw0OCwxNzcuMzhWMjA4YTgsOCwwLDAsMS0xNiwwVjE1MmE4LDgsMCwwLDEsMTQuNTUtNC41OUw2OCwxNzguMDVsMjEuNDUtMzAuNjRBOCw4LDAsMCwxLDEwNCwxNTJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FileMd";
export { I as FileMd }
