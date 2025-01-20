
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/TrolleySuitcase";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwyMjRhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsODgsMjI0Wm0xMjgtMTZhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsMjE2LDIwOFptMjQtMzJINTZWNzUuMzFBMTUuODYsMTUuODYsMCwwLDAsNTEuMzEsNjRMMjkuNjYsNDIuMzRBOCw4LDAsMCwwLDE4LjM0LDUzLjY2TDQwLDc1LjMxVjE3NkgzMmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZaTTcyLDE0NFY3MkExNiwxNiwwLDAsMSw4OCw1NmgzMlY0MGExNiwxNiwwLDAsMSwxNi0xNmgzMmExNiwxNiwwLDAsMSwxNiwxNlY1NmgzMmExNiwxNiwwLDAsMSwxNiwxNnY3MmExNiwxNiwwLDAsMS0xNiwxNkg4OEExNiwxNiwwLDAsMSw3MiwxNDRabTY0LTg4aDMyVjQwSDEzNlpNODgsMTQ0SDIxNlY3Mkg4OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxNTZIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjcyYTEyLDEyLDAsMCwwLTEyLTEySDE4MFY0MGExMiwxMiwwLDAsMC0xMi0xMkgxMzZhMTIsMTIsMCwwLDAtMTIsMTJWNjBIODhBMTIsMTIsMCwwLDAsNzYsNzJ2NzJBMTIsMTIsMCwwLDAsODgsMTU2Wk0xMzIsNDBhNCw0LDAsMCwxLDQtNGgzMmE0LDQsMCwwLDEsNCw0VjYwSDEzMlpNODQsNzJhNCw0LDAsMCwxLDQtNEgyMTZhNCw0LDAsMCwxLDQsNHY3MmE0LDQsMCwwLDEtNCw0SDg4YTQsNCwwLDAsMS00LTRabTAsMTUyYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDg0LDIyNFptMTQ0LDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMjI4LDIyNFptMTYtNDBhNCw0LDAsMCwxLTQsNEgzMmE0LDQsMCwwLDEsMC04SDQ0Vjc1LjMxYTQsNCwwLDAsMC0xLjE3LTIuODNMMjEuMTcsNTAuODNhNCw0LDAsMCwxLDUuNjYtNS42Nkw0OC40OSw2Ni44M0ExMiwxMiwwLDAsMSw1Miw3NS4zMVYxODBIMjQwQTQsNCwwLDAsMSwyNDQsMTg0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxNThIMjE2YTE0LDE0LDAsMCwwLDE0LTE0VjcyYTE0LDE0LDAsMCwwLTE0LTE0SDE4MlY0MGExNCwxNCwwLDAsMC0xNC0xNEgxMzZhMTQsMTQsMCwwLDAtMTQsMTRWNThIODhBMTQsMTQsMCwwLDAsNzQsNzJ2NzJBMTQsMTQsMCwwLDAsODgsMTU4Wk0xMzQsNDBhMiwyLDAsMCwxLDItMmgzMmEyLDIsMCwwLDEsMiwyVjU4SDEzNFpNODYsNzJhMiwyLDAsMCwxLDItMkgyMTZhMiwyLDAsMCwxLDIsMnY3MmEyLDIsMCwwLDEtMiwySDg4YTIsMiwwLDAsMS0yLTJabTAsMTUyYTE0LDE0LDAsMSwxLTE0LTE0QTE0LDE0LDAsMCwxLDg2LDIyNFptMTQ0LDBhMTQsMTQsMCwxLDEtMTQtMTRBMTQsMTQsMCwwLDEsMjMwLDIyNFptMTYtNDBhNiw2LDAsMCwxLTYsNkgzMmE2LDYsMCwwLDEsMC0xMkg0MlY3NS4zMWEyLDIsMCwwLDAtLjU5LTEuNDFMMTkuNzYsNTIuMjRhNiw2LDAsMSwxLDguNDgtOC40OEw0OS45LDY1LjQxYTEzLjk0LDEzLjk0LDAsMCwxLDQuMSw5LjlWMTc4SDI0MEE2LDYsMCwwLDEsMjQ2LDE4NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwxNTZIMjE2YTIwLDIwLDAsMCwwLDIwLTIwVjc2YTIwLDIwLDAsMCwwLTIwLTIwSDE5MlY0MGEyMCwyMCwwLDAsMC0yMC0yMEgxNDBhMjAsMjAsMCwwLDAtMjAsMjBWNTZIOTZBMjAsMjAsMCwwLDAsNzYsNzZ2NjBBMjAsMjAsMCwwLDAsOTYsMTU2Wk0xNDQsNDRoMjRWNTZIMTQ0Wk0xMDAsODBIMjEydjUySDEwMFpNOTIsMjI0YTIwLDIwLDAsMSwxLTIwLTIwQTIwLDIwLDAsMCwxLDkyLDIyNFptMTQ0LDBhMjAsMjAsMCwxLDEtMjAtMjBBMjAsMjAsMCwwLDEsMjM2LDIyNFptMTYtNDRhMTIsMTIsMCwwLDEtMTIsMTJIMzJhMTIsMTIsMCwwLDEsMC0yNGg0Vjc3TDE1LjUxLDU2LjQ5YTEyLDEyLDAsMCwxLDE3LTE3TDU0LjE0LDYxLjE3QTE5Ljg2LDE5Ljg2LDAsMCwxLDYwLDc1LjMxVjE2OEgyNDBBMTIsMTIsMCwwLDEsMjUyLDE4MFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwyMjRhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsODgsMjI0Wm0xMjgtMTZhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsMjE2LDIwOFptMjQtMzJINTZWNzUuMzFBMTUuODYsMTUuODYsMCwwLDAsNTEuMzEsNjRMMjkuNjYsNDIuMzRBOCw4LDAsMCwwLDE4LjM0LDUzLjY2TDQwLDc1LjMxVjE3NkgzMmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZaTTcyLDE0NFY3MkExNiwxNiwwLDAsMSw4OCw1NmgzMlY0MGExNiwxNiwwLDAsMSwxNi0xNmgzMmExNiwxNiwwLDAsMSwxNiwxNlY1NmgzMmExNiwxNiwwLDAsMSwxNiwxNnY3MmExNiwxNiwwLDAsMS0xNiwxNkg4OEExNiwxNiwwLDAsMSw3MiwxNDRabTY0LTg4aDMyVjQwSDEzNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNzJ2NzJhOCw4LDAsMCwxLTgsOEg4OGE4LDgsMCwwLDEtOC04VjcyYTgsOCwwLDAsMSw4LThIMjE2QTgsOCwwLDAsMSwyMjQsNzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNODgsMjI0YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDg4LDIyNFptMTI4LTE2YTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDIxNiwyMDhabTI0LTMySDU2Vjc1LjMxQTE1Ljg2LDE1Ljg2LDAsMCwwLDUxLjMxLDY0TDI5LjY2LDQyLjM0QTgsOCwwLDAsMCwxOC4zNCw1My42Nkw0MCw3NS4zMVYxNzZIMzJhOCw4LDAsMCwwLDAsMTZIMjQwYTgsOCwwLDAsMCwwLTE2Wk03MiwxNDRWNzJBMTYsMTYsMCwwLDEsODgsNTZoMzJWNDBhMTYsMTYsMCwwLDEsMTYtMTZoMzJhMTYsMTYsMCwwLDEsMTYsMTZWNTZoMzJhMTYsMTYsMCwwLDEsMTYsMTZ2NzJhMTYsMTYsMCwwLDEtMTYsMTZIODhBMTYsMTYsMCwwLDEsNzIsMTQ0Wm02NC04OGgzMlY0MEgxMzZaTTg4LDE0NEgyMTZWNzJIODhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TrolleySuitcase";
export { I as TrolleySuitcase }
