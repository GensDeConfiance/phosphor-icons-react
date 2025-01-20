
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Cheese";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzJhNy44MSw3LjgxLDAsMCwwLTIuMy4zNGwtMTYwLDQ4aDBBOCw4LDAsMCwwLDE2LDg4djI0YTgsOCwwLDAsMCw4LDhoOGExNi4wOCwxNi4wOCwwLDAsMSwxNiwxNS42OUExNS42LDE1LjYsMCwwLDEsNDMuNDIsMTQ3YTE2Ljg3LDE2Ljg3LDAsMCwxLTEyLDUuMDVIMjRhOCw4LDAsMCwwLTgsOHYzMmE4LDgsMCwwLDAsOCw4SDIyNGExNiwxNiwwLDAsMCwxNi0xNlY4OEE1Ni4wNiw1Ni4wNiwwLDAsMCwxODQsMzJabTEuMTIsMTZhNDAuMDYsNDAuMDYsMCwwLDEsMzguMDcsMzJINzguNTFaTTE5MiwxMDRhMjQsMjQsMCwxLDEtNDYuNjItOGg0NS4yNEEyMy44NiwyMy44NiwwLDAsMSwxOTIsMTA0Wk04OCwxODRhMjQsMjQsMCwwLDEsNDgsMFptMTM2LDBIMTUyYTQwLDQwLDAsMCwwLTgwLDBIMzJWMTY4YTMzLDMzLDAsMCwwLDIyLjg0LTkuODVBMzEuMzksMzEuMzksMCwwLDAsNjQsMTM1LjM4LDMyLjE1LDMyLjE1LDAsMCwwLDMyLDEwNFY5Nmg5Ni44MWE0MCw0MCwwLDEsMCw3OC4zOCwwSDIyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzZhNC4wNSw0LjA1LDAsMCwwLTEuMTUuMTdsLTE2MCw0OHYwQTQsNCwwLDAsMCwyMCw4OHYyNGE0LDQsMCwwLDAsNCw0aDhhMjAuMTEsMjAuMTEsMCwwLDEsMjAsMTkuNjEsMTkuNTksMTkuNTksMCwwLDEtNS43MiwxNC4xNEEyMC45MiwyMC45MiwwLDAsMSwzMS40NiwxNTZIMjRhNCw0LDAsMCwwLTQsNHYzMmE0LDQsMCwwLDAsNCw0SDIyNGExMiwxMiwwLDAsMCwxMi0xMlY4OEE1Mi4wNiw1Mi4wNiwwLDAsMCwxODQsMzZabS41Nyw4YTQ0LjA2LDQ0LjA2LDAsMCwxLDQzLjI0LDQwSDUxLjI1Wk0xOTYsMTA0YTI4LDI4LDAsMSwxLTUzLjI5LTEyaDUwLjU4QTI4LDI4LDAsMCwxLDE5NiwxMDRabS01Niw4NEg4NHYtNGEyOCwyOCwwLDAsMSw1NiwwWm04OC00YTQsNCwwLDAsMS00LDRIMTQ4di00YTM2LDM2LDAsMCwwLTcyLDB2NEgyOFYxNjRoMy40NkEyOSwyOSwwLDAsMCw1MiwxNTUuMzVhMjcuNTIsMjcuNTIsMCwwLDAsOC0xOS44OUEyOC4xNCwyOC4xNCwwLDAsMCwzMiwxMDhIMjhWOTJIMTM0LjA3YTM2LDM2LDAsMSwwLDY3Ljg2LDBIMjI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzRhNS45Miw1LjkyLDAsMCwwLTEuNzIuMjVsLTE2MCw0OGgwQTYsNiwwLDAsMCwxOCw4OHYyNGE2LDYsMCwwLDAsNiw2aDhhMTguMDksMTguMDksMCwwLDEsMTgsMTcuNjUsMTcuNTksMTcuNTksMCwwLDEtNS4xNSwxMi43QTE4LjkxLDE4LjkxLDAsMCwxLDMxLjQ2LDE1NEgyNGE2LDYsMCwwLDAtNiw2djMyYTYsNiwwLDAsMCw2LDZIMjI0YTE0LDE0LDAsMCwwLDE0LTE0Vjg4QTU0LjA2LDU0LjA2LDAsMCwwLDE4NCwzNFptLjg1LDEyYTQyLjA3LDQyLjA3LDAsMCwxLDQwLjcyLDM2SDY0Ljg4Wk0xOTQsMTA0YTI2LDI2LDAsMSwxLTUwLTEwaDQ4QTI1Ljg3LDI1Ljg3LDAsMCwxLDE5NCwxMDRabS01Niw4Mkg4NnYtMmEyNiwyNiwwLDAsMSw1MiwwWm04OC0yYTIsMiwwLDAsMS0yLDJIMTUwdi0yYTM4LDM4LDAsMCwwLTc2LDB2MkgzMFYxNjZoMS40NmEzMSwzMSwwLDAsMCwyMi05LjI1QTI5LjQ1LDI5LjQ1LDAsMCwwLDYyLDEzNS40MiwzMC4xNCwzMC4xNCwwLDAsMCwzMiwxMDZIMzBWOTRIMTMxLjM0YTM4LDM4LDAsMSwwLDczLjMyLDBIMjI2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjhhMTEuODYsMTEuODYsMCwwLDAtMy40NS41MWwtMTYwLDQ4aDBBMTIsMTIsMCwwLDAsMTIsODh2MjRhMTIsMTIsMCwwLDAsMTIsMTJoOGExMi4wNywxMi4wNywwLDAsMSwxMiwxMS43NiwxMS42LDExLjYsMCwwLDEtMy40Myw4LjM4QTEyLjg4LDEyLjg4LDAsMCwxLDMxLjQ2LDE0OEgyNGExMiwxMiwwLDAsMC0xMiwxMnYzMmExMiwxMiwwLDAsMCwxMiwxMkgyMjRhMjAsMjAsMCwwLDAsMjAtMjBWODhBNjAuMDcsNjAuMDcsMCwwLDAsMTg0LDI4Wm0xLjY0LDI0YTM2LjA2LDM2LjA2LDAsMCwxLDMyLjMsMjRIMTA1Ljc2Wk0xNTIsMTAwaDMydjRhMTYsMTYsMCwwLDEtMzIsMFpNOTYsMTgwYTE2LDE2LDAsMCwxLDMyLDBabTEyNCwwSDE1MmE0MCw0MCwwLDAsMC04MCwwSDM2di04LjI5QTM3LjA5LDM3LjA5LDAsMCwwLDU3LjcsMTYxLDM1LjM5LDM1LjM5LDAsMCwwLDY4LDEzNS4zMWEzNi4yMSwzNi4yMSwwLDAsMC0zMi0zNS4wOVYxMDBoOTJ2NGE0MCw0MCwwLDAsMCw4MCwwdi00aDEyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzJhNy44MSw3LjgxLDAsMCwwLTIuMy4zNGwtMTYwLDQ4aDBBOCw4LDAsMCwwLDE2LDg4djE2YTgsOCwwLDAsMCw4LDhoNy40NmMxMy40NSwwLDI0Ljc5LDExLDI0LjU0LDI0LjQ2QTI0LDI0LDAsMCwxLDMyLDE2MEgyNGE4LDgsMCwwLDAtOCw4djI0YTgsOCwwLDAsMCw4LDhIMjI0YTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTU2LjA2LDU2LjA2LDAsMCwwLDE4NCwzMlpNODAsMTg0YTMyLDMyLDAsMCwxLDY0LDBabTg4LTQ4YTMyLDMyLDAsMCwxLTMxLTQwaDYyYTMyLDMyLDAsMCwxLTMxLDQwWk03OC41MSw4MCwxODUuMTIsNDhhNDAuMDYsNDAuMDYsMCwwLDEsMzguMDcsMzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDAsMjQsODh2MjRoOGEyNCwyNCwwLDAsMSwyNCwyMy41NEM1Ni4yNSwxNDksNDQuOTEsMTYwLDMxLjQ2LDE2MEgyNHYzMkg4MHYtOGEzMiwzMiwwLDAsMSw2NCwwdjhoODBhOCw4LDAsMCwwLDgtOFY4OEE0OCw0OCwwLDAsMCwxODQsNDBabS0xNiw5NmEzMiwzMiwwLDAsMS0yNy43Mi00OGg1NS40NEEzMiwzMiwwLDAsMSwxNjgsMTM2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4NCwzMmE3LjgxLDcuODEsMCwwLDAtMi4zLjM0bC0xNjAsNDhoMEE4LDgsMCwwLDAsMTYsODh2MjRhOCw4LDAsMCwwLDgsOGg4YTE2LjA4LDE2LjA4LDAsMCwxLDE2LDE1LjY5QTE1LjYsMTUuNiwwLDAsMSw0My40MiwxNDdhMTYuODcsMTYuODcsMCwwLDEtMTIsNS4wNUgyNGE4LDgsMCwwLDAtOCw4djMyYTgsOCwwLDAsMCw4LDhIMjI0YTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTU2LjA2LDU2LjA2LDAsMCwwLDE4NCwzMlptMS4xMiwxNmE0MC4wNiw0MC4wNiwwLDAsMSwzOC4wNywzMkg3OC41MVpNMTkyLDEwNGEyNCwyNCwwLDEsMS00Ni42Mi04aDQ1LjI0QTIzLjg2LDIzLjg2LDAsMCwxLDE5MiwxMDRaTTg4LDE4NGEyNCwyNCwwLDAsMSw0OCwwWm0xMzYsMEgxNTJhNDAsNDAsMCwwLDAtODAsMEgzMlYxNjhhMzMsMzMsMCwwLDAsMjIuODQtOS44NUEzMS4zOSwzMS4zOSwwLDAsMCw2NCwxMzUuMzgsMzIuMTUsMzIuMTUsMCwwLDAsMzIsMTA0Vjk2aDk2LjgxYTQwLDQwLDAsMSwwLDc4LjM4LDBIMjI0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Cheese";
export { I as Cheese }
