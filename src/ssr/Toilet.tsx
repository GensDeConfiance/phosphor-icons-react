
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Toilet";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsNjRhOCw4LDAsMCwxLTgsOEg5NmE4LDgsMCwwLDEsMC0xNmgxNkE4LDgsMCwwLDEsMTIwLDY0Wm01Mi4zMiwxMzMuMTQsMy41MiwyNC42QTE2LDE2LDAsMCwxLDE2MCwyNDBIOTZhMTYsMTYsMCwwLDEtMTUuODQtMTguMjZsMy41Mi0yNC42QTk2LjA5LDk2LjA5LDAsMCwxLDMyLDExMmE4LDgsMCwwLDEsOC04SDU2VjQwQTE2LDE2LDAsMCwxLDcyLDI0SDE4NGExNiwxNiwwLDAsMSwxNiwxNnY2NGgxNmE4LDgsMCwwLDEsOCw4QTk2LjA5LDk2LjA5LDAsMCwxLDE3Mi4zMiwxOTcuMTRaTTcyLDEwNEgxODRWNDBINzJabTg1LjA3LDk5LjVhOTYuMTUsOTYuMTUsMCwwLDEtNTguMTQsMEw5NiwyMjRoNjRaTTIwNy42LDEyMEg0OC40YTgwLDgwLDAsMCwwLDE1OS4yLDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsNjRhNCw0LDAsMCwxLTQsNEg5NmE0LDQsMCwwLDEsMC04aDE2QTQsNCwwLDAsMSwxMTYsNjRabTUyLDEzMC44NiwzLjkyLDI3LjQ0QTEyLDEyLDAsMCwxLDE2MCwyMzZIOTZhMTIsMTIsMCwwLDEtMTEuODgtMTMuN0w4OCwxOTQuODZBOTIuMTEsOTIuMTEsMCwwLDEsMzYsMTEyYTQsNCwwLDAsMSw0LTRINjBWNDBBMTIsMTIsMCwwLDEsNzIsMjhIMTg0YTEyLDEyLDAsMCwxLDEyLDEydjY4aDIwYTQsNCwwLDAsMSw0LDRBOTIuMTEsOTIuMTEsMCwwLDEsMTY4LDE5NC44NlpNNjgsMTA4SDE4OFY0MGE0LDQsMCwwLDAtNC00SDcyYTQsNCwwLDAsMC00LDRabTkyLjM0LDkwLjEzYTkyLDkyLDAsMCwxLTY0LjY4LDBMOTIsMjIzLjQzYTQsNCwwLDAsMCwuOTQsMy4xOUEzLjkzLDMuOTMsMCwwLDAsOTYsMjI4aDY0YTMuOTMsMy45MywwLDAsMCwzLTEuMzgsNCw0LDAsMCwwLC45NC0zLjE5Wk0yMTEuOTEsMTE2SDQ0LjA5YTg0LDg0LDAsMCwwLDE2Ny44MiwwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTgsNjRhNiw2LDAsMCwxLTYsNkg5NmE2LDYsMCwwLDEsMC0xMmgxNkE2LDYsMCwwLDEsMTE4LDY0Wm01Mi4xNCwxMzIsMy43MiwyNkExNCwxNCwwLDAsMSwxNjAsMjM4SDk2YTE0LDE0LDAsMCwxLTEzLjg2LTE2bDMuNzItMjZBOTQuMSw5NC4xLDAsMCwxLDM0LDExMmE2LDYsMCwwLDEsNi02SDU4VjQwQTE0LDE0LDAsMCwxLDcyLDI2SDE4NGExNCwxNCwwLDAsMSwxNCwxNHY2NmgxOGE2LDYsMCwwLDEsNiw2QTk0LjEsOTQuMSwwLDAsMSwxNzAuMTQsMTk2Wk03MCwxMDZIMTg2VjQwYTIsMiwwLDAsMC0yLTJINzJhMiwyLDAsMCwwLTIsMlptODguNzEsOTQuODRhOTQsOTQsMCwwLDEtNjEuNDIsMEw5NCwyMjMuNzJhMiwyLDAsMCwwLC40NywxLjU5QTIsMiwwLDAsMCw5NiwyMjZoNjRhMiwyLDAsMCwwLDEuNTEtLjY5LDIsMiwwLDAsMCwuNDctMS41OVpNMjA5Ljc4LDExOEg0Ni4yMmE4Miw4MiwwLDAsMCwxNjMuNTYsMFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNjhhMTIsMTIsMCwwLDEtMTIsMTJIMTAwYTEyLDEyLDAsMCwxLDAtMjRoMTZBMTIsMTIsMCwwLDEsMTI4LDY4Wm00OC4xNSwxMjcuNjIsMy42NSwyNS41NUEyMCwyMCwwLDAsMSwxNjAsMjQ0SDk2YTIwLDIwLDAsMCwxLTE5LjgtMjIuODNsMy42NS0yNS41NUExMDAuMDgsMTAwLjA4LDAsMCwxLDI4LDEwOCwxMiwxMiwwLDAsMSw0MCw5Nkg1MlY0MEEyMCwyMCwwLDAsMSw3MiwyMEgxODRhMjAsMjAsMCwwLDEsMjAsMjBWOTZoMTJhMTIsMTIsMCwwLDEsMTIsMTJBMTAwLjA4LDEwMC4wOCwwLDAsMSwxNzYuMTUsMTk1LjYyWk03Niw5NkgxODBWNDRINzZabTc3LjIxLDEwOC43OGExMDAuMywxMDAuMywwLDAsMS01MC40MiwwTDEwMC42MSwyMjBoNTQuNzhaTTIwMy4wNSwxMjBINTNhNzYsNzYsMCwwLDAsMTUwLjEsMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02MCw4OEgxOTZhNCw0LDAsMCwwLDQtNFY0MGExNiwxNiwwLDAsMC0xNi0xNkg3MkExNiwxNiwwLDAsMCw1Niw0MFY4NEE0LDQsMCwwLDAsNjAsODhaTTg4LDQ4aDE1LjczQTguMTgsOC4xOCwwLDAsMSwxMTIsNTUuNDcsOCw4LDAsMCwxLDEwNCw2NEg4OC4yN0E4LjE4LDguMTgsMCwwLDEsODAsNTYuNTMsOCw4LDAsMCwxLDg4LDQ4Wm0xMzYsNjQuMDZhOCw4LDAsMCwwLTgtOC4wNkg0MGE4LDgsMCwwLDAtOCw4LjA2LDk2LjEsOTYuMSwwLDAsMCw1MS42OCw4NS4wOGwtMy40NywyNC4yN2ExNi40MywxNi40MywwLDAsMCwxLjYzLDEwQTE2LDE2LDAsMCwwLDk2LDI0MGg2My42NmExNi41MiwxNi41MiwwLDAsMCw5LjcyLTMsMTYsMTYsMCwwLDAsNi40Ni0xNS4yM2wtMy41Mi0yNC42QTk2LjEsOTYuMSwwLDAsMCwyMjQsMTEyLjA2Wk05NiwyMjRsMi45My0yMC41YTk2LjE1LDk2LjE1LDAsMCwwLDU4LjE0LDBMMTYwLDIyNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjcuOTIsMjIyLjg3QTgsOCwwLDAsMSwxNjAsMjMySDk2YTgsOCwwLDAsMS03LjkyLTkuMTNsNC4zNC0zMC4zNmgwYTg4LjIxLDg4LjIxLDAsMCwwLDcxLjE0LDBoMFpNMTg0LDMySDcyYTgsOCwwLDAsMC04LDh2NzJIMTkyVjQwQTgsOCwwLDAsMCwxODQsMzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTIwLDY0YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLDAtMTZoMTZBOCw4LDAsMCwxLDEyMCw2NFptNTIuMzIsMTMzLjE0LDMuNTIsMjQuNkExNiwxNiwwLDAsMSwxNjAsMjQwSDk2YTE2LDE2LDAsMCwxLTE1Ljg0LTE4LjI2bDMuNTItMjQuNkE5Ni4wOSw5Ni4wOSwwLDAsMSwzMiwxMTJhOCw4LDAsMCwxLDgtOEg1NlY0MEExNiwxNiwwLDAsMSw3MiwyNEgxODRhMTYsMTYsMCwwLDEsMTYsMTZ2NjRoMTZhOCw4LDAsMCwxLDgsOEE5Ni4wOSw5Ni4wOSwwLDAsMSwxNzIuMzIsMTk3LjE0Wk03MiwxMDRIMTg0VjQwSDcyWm04NS4wNyw5OS41YTk2LjE1LDk2LjE1LDAsMCwxLTU4LjE0LDBMOTYsMjI0aDY0Wk0yMDcuNiwxMjBINDguNGE4MCw4MCwwLDAsMCwxNTkuMiwwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Toilet";
export { I as Toilet }
