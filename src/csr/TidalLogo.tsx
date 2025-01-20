
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/TidalLogo";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTMuNjYsOTAuMzRsLTQwLTQwYTgsOCwwLDAsMC0xMS4zMiwwTDE2OCw4NC42OSwxMzMuNjYsNTAuMzRhOCw4LDAsMCwwLTExLjMyLDBMODgsODQuNjksNTMuNjYsNTAuMzRhOCw4LDAsMCwwLTExLjMyLDBsLTQwLDQwYTgsOCwwLDAsMCwwLDExLjMybDQwLDQwYTgsOCwwLDAsMCwxMS4zMiwwTDg4LDEwNy4zMSwxMTYuNjksMTM2LDgyLjM0LDE3MC4zNGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MGE4LDgsMCwwLDAsMC0xMS4zMkwxMzkuMzEsMTM2LDE2OCwxMDcuMzFsMzQuMzQsMzQuMzVhOCw4LDAsMCwwLDExLjMyLDBsNDAtNDBBOCw4LDAsMCwwLDI1My42Niw5MC4zNFpNNDgsMTI0LjY5LDE5LjMxLDk2LDQ4LDY3LjMxLDc2LjY5LDk2Wm04MCw4MEw5OS4zMSwxNzYsMTI4LDE0Ny4zMSwxNTYuNjksMTc2Wm0wLTgwTDk5LjMxLDk2LDEyOCw2Ny4zMSwxNTYuNjksOTZabTgwLDBMMTc5LjMxLDk2LDIwOCw2Ny4zMSwyMzYuNjksOTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTAuODMsOTMuMTdsLTQwLTQwYTQsNCwwLDAsMC01LjY2LDBMMTY4LDkwLjM0LDEzMC44Myw1My4xN2E0LDQsMCwwLDAtNS42NiwwTDg4LDkwLjM0LDUwLjgzLDUzLjE3YTQsNCwwLDAsMC01LjY2LDBsLTQwLDQwYTQsNCwwLDAsMCwwLDUuNjZsNDAsNDBhNCw0LDAsMCwwLDUuNjYsMEw4OCwxMDEuNjYsMTIyLjM0LDEzNiw4NS4xNywxNzMuMTdhNCw0LDAsMCwwLDAsNS42Nmw0MCw0MGE0LDQsMCwwLDAsNS42NiwwbDQwLTQwYTQsNCwwLDAsMCwwLTUuNjZMMTMzLjY2LDEzNiwxNjgsMTAxLjY2bDM3LjE3LDM3LjE3YTQsNCwwLDAsMCw1LjY2LDBsNDAtNDBBNCw0LDAsMCwwLDI1MC44Myw5My4xN1pNNDgsMTMwLjM0LDEzLjY2LDk2LDQ4LDYxLjY2LDgyLjM0LDk2Wm04MCw4MEw5My42NiwxNzYsMTI4LDE0MS42NiwxNjIuMzQsMTc2Wm0wLTgwTDkzLjY2LDk2LDEyOCw2MS42NiwxNjIuMzQsOTZabTgwLDBMMTczLjY2LDk2LDIwOCw2MS42NiwyNDIuMzQsOTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIuMjQsOTEuNzZsLTQwLTQwYTYsNiwwLDAsMC04LjQ4LDBMMTY4LDg3LjUyLDEzMi4yNCw1MS43NmE2LDYsMCwwLDAtOC40OCwwTDg4LDg3LjUyLDUyLjI0LDUxLjc2YTYsNiwwLDAsMC04LjQ4LDBsLTQwLDQwYTYsNiwwLDAsMCwwLDguNDhsNDAsNDBhNiw2LDAsMCwwLDguNDgsMEw4OCwxMDQuNDgsMTE5LjUyLDEzNiw4My43NiwxNzEuNzZhNiw2LDAsMCwwLDAsOC40OGw0MCw0MGE2LDYsMCwwLDAsOC40OCwwbDQwLTQwYTYsNiwwLDAsMCwwLTguNDhMMTM2LjQ4LDEzNiwxNjgsMTA0LjQ4bDM1Ljc2LDM1Ljc2YTYsNiwwLDAsMCw4LjQ4LDBsNDAtNDBBNiw2LDAsMCwwLDI1Mi4yNCw5MS43NlpNNDgsMTI3LjUxLDE2LjQ5LDk2LDQ4LDY0LjQ5LDc5LjUxLDk2Wm04MCw4MEw5Ni40OSwxNzYsMTI4LDE0NC40OSwxNTkuNTEsMTc2Wm0wLTgwTDk2LjQ5LDk2LDEyOCw2NC40OSwxNTkuNTEsOTZabTgwLDBMMTc2LjQ5LDk2LDIwOCw2NC40OSwyMzkuNTEsOTZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIuNDksODcuNTFsLTM4LTM4YTEyLDEyLDAsMCwwLTE3LDBMMTY4LDc5LDEzNi40OSw0Ny41MWExMiwxMiwwLDAsMC0xNywwTDg4LDc5LDU4LjQ5LDQ5LjUxYTEyLDEyLDAsMCwwLTE3LDBsLTM4LDM4YTEyLDEyLDAsMCwwLDAsMTdsMzgsMzhhMTIsMTIsMCwwLDAsMTcsMEw4OCwxMTNsMjMsMjNMNzkuNTEsMTY3LjUxYTEyLDEyLDAsMCwwLDAsMTdsNDAsNDBhMTIsMTIsMCwwLDAsMTcsMGw0MC00MGExMiwxMiwwLDAsMCwwLTE3TDE0NSwxMzZsMjMtMjMsMjkuNTEsMjkuNTJhMTIsMTIsMCwwLDAsMTcsMGwzOC0zOEExMiwxMiwwLDAsMCwyNTIuNDksODcuNTFaTTUwLDExNywyOSw5Niw1MCw3NSw3MSw5NlptNzgsODItMjMtMjMsMjMtMjMsMjMsMjNabTAtODBMMTA1LDk2bDIzLTIzLDIzLDIzWm03OC0yTDE4NSw5NmwyMS0yMSwyMSwyMVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTMuNjYsMTAxLjY2bC0zNiwzNmE4LDgsMCwwLDEtMTEuMzIsMGwtMzYtMzYtLjM0LS4zOC0uMzQuMzhMMTM1LjMxLDEzNmwzNC4zNSwzNC4zNGE4LDgsMCwwLDEsMCwxMS4zMmwtMzYsMzZhOCw4LDAsMCwxLTExLjMyLDBsLTM2LTM2YTgsOCwwLDAsMSwwLTExLjMyTDEyMC42OSwxMzYsODYuMzQsMTAxLjY2bC0uMzQtLjM4LS4zNC4zOC0zNiwzNmE4LDgsMCwwLDEtMTEuMzIsMGwtMzYtMzZhOCw4LDAsMCwxLDAtMTEuMzJsMzYtMzZhOCw4LDAsMCwxLDExLjMyLDBsMzYsMzYsLjM0LjM4LjM0LS4zOCwzNi0zNmE4LDgsMCwwLDEsMTEuMzIsMGwzNiwzNiwuMzQuMzguMzQtLjM4LDM2LTM2YTgsOCwwLDAsMSwxMS4zMiwwbDM2LDM2QTgsOCwwLDAsMSwyNTMuNjYsMTAxLjY2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCw1Niw4OCw5Niw0OCwxMzYsOCw5NlpNODgsOTZsNDAsNDAsNDAtNDBMMTI4LDU2Wm00MCwxMjAsNDAtNDAtNDAtNDBMODgsMTc2Wk0yMDgsNTYsMTY4LDk2bDQwLDQwLDQwLTQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI1My42Niw5MC4zNGwtNDAtNDBhOCw4LDAsMCwwLTExLjMyLDBMMTY4LDg0LjY5LDEzMy42Niw1MC4zNGE4LDgsMCwwLDAtMTEuMzIsMEw4OCw4NC42OSw1My42Niw1MC4zNGE4LDgsMCwwLDAtMTEuMzIsMGwtNDAsNDBhOCw4LDAsMCwwLDAsMTEuMzJsNDAsNDBhOCw4LDAsMCwwLDExLjMyLDBMODgsMTA3LjMxLDExNi42OSwxMzYsODIuMzQsMTcwLjM0YTgsOCwwLDAsMCwwLDExLjMybDQwLDQwYTgsOCwwLDAsMCwxMS4zMiwwbDQwLTQwYTgsOCwwLDAsMCwwLTExLjMyTDEzOS4zMSwxMzYsMTY4LDEwNy4zMWwzNC4zNCwzNC4zNWE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MEE4LDgsMCwwLDAsMjUzLjY2LDkwLjM0Wk00OCwxMjQuNjksMTkuMzEsOTYsNDgsNjcuMzEsNzYuNjksOTZabTgwLDgwTDk5LjMxLDE3NiwxMjgsMTQ3LjMxLDE1Ni42OSwxNzZabTAtODBMOTkuMzEsOTYsMTI4LDY3LjMxLDE1Ni42OSw5NlptODAsMEwxNzkuMzEsOTYsMjA4LDY3LjMxLDIzNi42OSw5NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TidalLogo";
export { I as TidalLogo }
