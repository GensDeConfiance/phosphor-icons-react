
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/PencilCircle";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuNTQsNTQuNDZBMTA0LDEwNCwwLDAsMCw1NC40NiwyMDEuNTQsMTA0LDEwNCwwLDAsMCwyMDEuNTQsNTQuNDZaTTg4LDE5MmExNiwxNiwwLDAsMSwzMiwwdjIzLjU5YTg4LDg4LDAsMCwxLTMyLTkuMjJabTQ4LDBhMTYsMTYsMCwwLDEsMzIsMHYxNC4zN2E4OCw4OCwwLDAsMS0zMiw5LjIyWm0tMjguNzMtNTZoNDEuNDZsMTEuNTgsMjUuMUEzMS45MywzMS45MywwLDAsMCwxMjgsMTcwLjg3YTMxLjkzLDMxLjkzLDAsMCwwLTMyLjMxLTkuNzdabTcuMzktMTZMMTI4LDkxLjA5LDE0MS4zNCwxMjBabTc1LjU2LDcwLjIzYy0yLDItNC4wOCwzLjg3LTYuMjIsNS42NFYxNzZhNy45MSw3LjkxLDAsMCwwLS43NC0zLjM1bC00OC0xMDRhOCw4LDAsMCwwLTE0LjUyLDBsLTQ4LDEwNEE3LjkxLDcuOTEsMCwwLDAsNzIsMTc2djE5Ljg3Yy0yLjE0LTEuNzctNC4yMi0zLjY0LTYuMjItNS42NGE4OCw4OCwwLDEsMSwxMjQuNDQsMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguNzEsNTcuMjlBMTAwLDEwMCwwLDEsMCw1Ny4yOSwxOTguNzEsMTAwLDEwMCwwLDEsMCwxOTguNzEsNTcuMjlabS05NCw3NC43MWg0Ni41OGwxNy4yOCwzNy40NUEyOCwyOCwwLDAsMCwxMjgsMTc3LjZhMjgsMjgsMCwwLDAtNDAuNTctOC4xNVptMy43LThMMTI4LDgxLjU1LDE0Ny41OSwxMjRaTTEzMiwxOTJhMjAsMjAsMCwwLDEsNDAsMHYxNi44M2E5MS4zMSw5MS4zMSwwLDAsMS00MCwxMS4wN1ptLTQ4LDBhMjAsMjAsMCwwLDEsNDAsMHYyNy45YTkxLjMxLDkxLjMxLDAsMCwxLTQwLTExLjA3Wm0xMDkuMDUsMS4wNUE5Mi40MSw5Mi40MSwwLDAsMSwxODAsMjAzLjlWMTc2YTQuMDcsNC4wNywwLDAsMC0uMzctMS42OGwtNDgtMTA0YTQsNCwwLDAsMC03LjI2LDBsLTQ4LDEwNEE0LjA3LDQuMDcsMCwwLDAsNzYsMTc2djI3LjlhOTIuNDEsOTIuNDEsMCwwLDEtMTMtMTAuODUsOTIsOTIsMCwxLDEsMTMwLjEsMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAuMTIsNTUuODdBMTAyLDEwMiwwLDEsMCw1NS44OCwyMDAuMTIsMTAyLDEwMiwwLDEsMCwyMDAuMTIsNTUuODdaTTEwNiwxMzRoNDRsMTQuMSwzMC41NkEzMCwzMCwwLDAsMCwxMjgsMTc0YTMwLDMwLDAsMCwwLTM2LjExLTkuNDZabTUuNTQtMTJMMTI4LDg2LjMyLDE0NC40NywxMjJaTTEzNCwxOTJhMTgsMTgsMCwwLDEsMzYsMHYxNS42NGE4OS4yNiw4OS4yNiwwLDAsMS0zNiwxMC4xNFptLTQ4LDBhMTgsMTgsMCwwLDEsMzYsMHYyNS43OGE4OS4yNiw4OS4yNiwwLDAsMS0zNi0xMC4xNFptMTA1LjY0LS4zNkE5Mi43Niw5Mi43NiwwLDAsMSwxODIsMjAwVjE3NmE2LDYsMCwwLDAtLjU1LTIuNTFsLTQ4LTEwNGE2LDYsMCwwLDAtMTAuOSwwbC00OCwxMDRBNiw2LDAsMCwwLDc0LDE3NnYyNGE5Mi43Niw5Mi43NiwwLDAsMS05LjY0LTguMzcsOTAsOTAsMCwxLDEsMTI3LjI4LDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuMzcsNTEuNkExMDguMDgsMTA4LjA4LDAsMSwwLDIzNiwxMjgsMTA4LjA5LDEwOC4wOSwwLDAsMCwyMDQuMzcsNTEuNlpNOTIsMjAwYTEyLDEyLDAsMSwxLDI0LDB2MTEuMTFhODMuNzgsODMuNzgsMCwwLDEtMjQtNy4yMlptNDgsMGExMiwxMiwwLDEsMSwyNCwwdjMuODlhODMuNzgsODMuNzgsMCwwLDEtMjQsNy4yMlptLTMzLjg2LTUyaDQzLjcybDcuNTcsMTYuNDJBMzUuOTUsMzUuOTUsMCwwLDAsMTI4LDE3My4yMmEzNS45NSwzNS45NSwwLDAsMC0yOS40My04Ljc5Wm0xMS4wOC0yNEwxMjgsMTAwLjYyLDEzOC43OCwxMjRaTTE4OCwxODYuNzlWMTc2YTEyLjE1LDEyLjE1LDAsMCwwLTEuMS01bC00OC0xMDRhMTIsMTIsMCwwLDAtMjEuOCwwTDY5LjEsMTcxYTEyLjE1LDEyLjE1LDAsMCwwLTEuMSw1djEwLjc3YTg0LDg0LDAsMSwxLDEyMCwwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuNTQsNTQuNDZBMTA0LDEwNCwwLDAsMCw1NC40NiwyMDEuNTQsMTA0LDEwNCwwLDAsMCwyMDEuNTQsNTQuNDZaTTEyOCwxNzAuODdhMzEuOTMsMzEuOTMsMCwwLDAtMzIuMzEtOS43N0wxMTEsMTI4SDE0NWwxNS4yNywzMy4xQTMxLjkzLDMxLjkzLDAsMCwwLDEyOCwxNzAuODdabTQwLDM1LjVhODgsODgsMCwwLDEtMzIsOS4yMlYxOTJhMTYsMTYsMCwwLDEsMzIsMFptMjIuMjItMTYuMTRjLTIsMi00LjA4LDMuODctNi4yMiw1LjY0VjE3NmE3LjkxLDcuOTEsMCwwLDAtLjc0LTMuMzVsLTQ4LTEwNGE4LDgsMCwwLDAtMTQuNTIsMGwtNDgsMTA0QTcuOTEsNy45MSwwLDAsMCw3MiwxNzZ2MTkuODdjLTIuMTQtMS43Ny00LjIyLTMuNjQtNi4yMi01LjY0YTg4LDg4LDAsMSwxLDEyNC40NCwwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMjExLjE2Wm0tOTYsMFpNMjI0LDEyOEE5Niw5NiwwLDEsMCw4MCwyMTEuMTZWMTc2TDEyOCw3Mmw0OCwxMDR2MzUuMTZBOTYsOTYsMCwwLDAsMjI0LDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDEuNTQsNTQuNDZBMTA0LDEwNCwwLDAsMCw1NC40NiwyMDEuNTQsMTA0LDEwNCwwLDAsMCwyMDEuNTQsNTQuNDZaTTg4LDE5MmExNiwxNiwwLDAsMSwzMiwwdjIzLjU5YTg4LDg4LDAsMCwxLTMyLTkuMjJabTQ4LDBhMTYsMTYsMCwwLDEsMzIsMHYxNC4zN2E4OCw4OCwwLDAsMS0zMiw5LjIyWm0tMjguNzMtNTZoNDEuNDZsMTEuNTgsMjUuMUEzMS45MywzMS45MywwLDAsMCwxMjgsMTcwLjg3YTMxLjkzLDMxLjkzLDAsMCwwLTMyLjMxLTkuNzdabTcuMzktMTZMMTI4LDkxLjA5LDE0MS4zNCwxMjBabTc1LjU2LDcwLjIzYy0yLDItNC4wOCwzLjg3LTYuMjIsNS42NFYxNzZhNy45MSw3LjkxLDAsMCwwLS43NC0zLjM1bC00OC0xMDRhOCw4LDAsMCwwLTE0LjUyLDBsLTQ4LDEwNEE3LjkxLDcuOTEsMCwwLDAsNzIsMTc2djE5Ljg3Yy0yLjE0LTEuNzctNC4yMi0zLjY0LTYuMjItNS42NGE4OCw4OCwwLDEsMSwxMjQuNDQsMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PencilCircle";
export { I as PencilCircle }
