
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/GlobeX";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRhMTA0LDEwNCwwLDAsMCwwLDIwOCw4LDgsMCwwLDAsNS0xNC4yM2gwYy0xLjEyLS45MS0yMC44OC0xNy4zMi0zMS4wNi00OS43N2gyNmE4LDgsMCwwLDAsMC0xNkg5OC4wOGExNDAuMTcsMTQwLjE3LDAsMCwxLDAtNDhoNTkuODhBMTM4LDEzOCwwLDAsMSwxNjAsMTI4YTgsOCwwLDAsMCwxNiwwLDE1NC43LDE1NC43LDAsMCwwLTEuODQtMjRoMzguNTFBODcuNjEsODcuNjEsMCwwLDEsMjE2LDEyOGE4LDgsMCwwLDAsMTYsMEExMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFpNMTA3LjU5LDQyLjRBMTM1LjI4LDEzNS4yOCwwLDAsMCw4NS4yOSw4OEg0OS42M0E4OC4yOSw4OC4yOSwwLDAsMSwxMDcuNTksNDIuNFptMCwxNzEuMmE4OC4yOSw4OC4yOSwwLDAsMS01OC00NS42SDg1LjI5QTEzNS4yOCwxMzUuMjgsMCwwLDAsMTA3LjU5LDIxMy42Wk04MS44NCwxNTJINDMuMzNhODguMTUsODguMTUsMCwwLDEsMC00OEg4MS44NGExNTcuNDQsMTU3LjQ0LDAsMCwwLDAsNDhaTTEwMiw4OGExMTUuMTEsMTE1LjExLDAsMCwxLDI2LTQ1LDExNS4yNywxMTUuMjcsMCwwLDEsMjYsNDVabTY4Ljc1LDBhMTM1LjI4LDEzNS4yOCwwLDAsMC0yMi4zLTQ1LjYsODguMjksODguMjksMCwwLDEsNTgsNDUuNlptNTAuOTUsODUuNjZMMjAzLjMxLDE5MmwxOC4zNSwxOC4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTkyLDIwMy4zMWwtMTguMzQsMTguMzVhOCw4LDAsMCwxLTExLjMyLTExLjMyTDE4MC42OSwxOTJsLTE4LjM1LTE4LjM0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxOTIsMTgwLjY5bDE4LjM0LTE4LjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhoMGExMDAsMTAwLDAsMCwwLDAsMjAwLDQsNCwwLDAsMCwyLjQ5LTcuMTFoMGMtLjMtLjI0LTIzLjU3LTE5LjQxLTMzLjc4LTU2Ljg4SDEyOGE0LDQsMCwwLDAsMC04SDk0LjgyYTE0MC40MiwxNDAuNDIsMCwwLDEsMC01Nmg2Ni4zNkExMzcuODksMTM3Ljg5LDAsMCwxLDE2NCwxMjhhNCw0LDAsMCwwLDgsMCwxNDkuMjMsMTQ5LjIzLDAsMCwwLTIuNTktMjhoNDYuMjNBOTEuNiw5MS42LDAsMCwxLDIyMCwxMjhhNCw0LDAsMCwwLDgsMEExMDAuMTEsMTAwLjExLDAsMCwwLDEyOCwyOFptLTEwLjQ2LDguNkExMjkuMzksMTI5LjM5LDAsMCwwLDg4LjM1LDkyaC00NUE5Mi4yNSw5Mi4yNSwwLDAsMSwxMTcuNTQsMzYuNlptMCwxODIuOEE5Mi4yNSw5Mi4yNSwwLDAsMSw0My4zNCwxNjRoNDVBMTI5LjM5LDEyOS4zOSwwLDAsMCwxMTcuNTQsMjE5LjRaTTg2LjU5LDE1Nkg0MC4zNmE5Mi4wOSw5Mi4wOSwwLDAsMSwwLTU2SDg2LjU5YTE1Mi42NSwxNTIuNjUsMCwwLDAsMCw1NlpNOTYuNzMsOTJDMTA1LDYxLjgsMTIxLjY3LDQzLjQ4LDEyOCwzNy4zOWM2LjMzLDYuMDksMjMsMjQuNDEsMzEuMjcsNTQuNjFabTcwLjkyLDBhMTI5LjM5LDEyOS4zOSwwLDAsMC0yOS4xOS01NS40QTkyLjI1LDkyLjI1LDAsMCwxLDIxMi42Niw5MlptNTEuMTgsNzguODNMMTk3LjY2LDE5MmwyMS4xNywyMS4xN2E0LDQsMCwwLDEtNS42Niw1LjY2TDE5MiwxOTcuNjZsLTIxLjE3LDIxLjE3YTQsNCwwLDAsMS01LjY2LTUuNjZMMTg2LjM0LDE5MmwtMjEuMTctMjEuMTdhNCw0LDAsMCwxLDUuNjYtNS42NkwxOTIsMTg2LjM0bDIxLjE3LTIxLjE3YTQsNCwwLDAsMSw1LjY2LDUuNjZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZhMTAyLDEwMiwwLDAsMCwwLDIwNCw2LDYsMCwwLDAsMy43Ni0xMC42N2gwYy0uMS0uMDctOS42LTcuODQtMTguOTUtMjIuOTVBMTI0LDEyNCwwLDAsMSw5OS4zNSwxNjZIMTI4YTYsNiwwLDAsMCwwLTEySDk2LjQ1YTEzOS4xOCwxMzkuMTgsMCwwLDEsMC01Mmg2My4xQTEzNy40NywxMzcuNDcsMCwwLDEsMTYyLDEyOGE2LDYsMCwwLDAsMTIsMCwxNTIuOTEsMTUyLjkxLDAsMCwwLTIuMTktMjZoNDIuMzZBODkuNyw4OS43LDAsMCwxLDIxOCwxMjhhNiw2LDAsMCwwLDEyLDBBMTAyLjEyLDEwMi4xMiwwLDAsMCwxMjgsMjZaTTExMi41NCwzOS4zM0ExMzIuNTgsMTMyLjU4LDAsMCwwLDg2LjgxLDkwSDQ2LjQzQTkwLjI5LDkwLjI5LDAsMCwxLDExMi41NCwzOS4zM1ptMCwxNzcuMzRBOTAuMjksOTAuMjksMCwwLDEsNDYuNDMsMTY2SDg2LjgxQTEzMi41OCwxMzIuNTgsMCwwLDAsMTEyLjU0LDIxNi42N1pNODQuMTksMTU0SDQxLjgzYTkwLjE3LDkwLjE3LDAsMCwxLDAtNTJIODQuMTlhMTU1LjQzLDE1NS40MywwLDAsMCwwLDUyWk05OS4zNSw5MGExMjQsMTI0LDAsMCwxLDEzLjQ2LTMwLjM3QTEwOS4xOSwxMDkuMTksMCwwLDEsMTI4LDQwLjE4YTEwOS4xOSwxMDkuMTksMCwwLDEsMTUuMTksMTkuNDVBMTI0LDEyNCwwLDAsMSwxNTYuNjUsOTBabTY5Ljg0LDBhMTMyLjU4LDEzMi41OCwwLDAsMC0yNS43My01MC42N0E5MC4yOSw5MC4yOSwwLDAsMSwyMDkuNTcsOTBabTUxLjA1LDgyLjI0TDIwMC40OSwxOTJsMTkuNzUsMTkuNzZhNiw2LDAsMSwxLTguNDgsOC40OEwxOTIsMjAwLjQ5bC0xOS43NiwxOS43NWE2LDYsMCwwLDEtOC40OC04LjQ4TDE4My41MSwxOTJsLTE5Ljc1LTE5Ljc2YTYsNiwwLDAsMSw4LjQ4LTguNDhMMTkyLDE4My41MWwxOS43Ni0xOS43NWE2LDYsMCwwLDEsOC40OCw4LjQ4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBhMTA4LDEwOCwwLDAsMCwwLDIxNiwxMiwxMiwwLDAsMCw3LjQ5LTIxLjM3aDBjLS4yNS0uMi0xNy41NS0xNC4zOS0yNy45LTQyLjYzSDEyOGExMiwxMiwwLDAsMCwwLTI0SDEwMS40OGExMzUuODgsMTM1Ljg4LDAsMCwxLDAtNDBoNTNBMTMzLjc3LDEzMy43NywwLDAsMSwxNTYsMTI4YTEyLDEyLDAsMCwwLDI0LDAsMTU5LDE1OSwwLDAsMC0xLjI1LTIwaDMwLjgyQTgzLjQ5LDgzLjQ5LDAsMCwxLDIxMiwxMjhhMTIsMTIsMCwwLDAsMjQsMEExMDguMTIsMTA4LjEyLDAsMCwwLDEyOCwyMFpNOTcuNzksNDkuNjRBMTQwLjgyLDE0MC44MiwwLDAsMCw4Mi4yOSw4NEg1Ni40OEE4NC40Niw4NC40NiwwLDAsMSw5Ny43OSw0OS42NFptMCwxNTYuNzJBODQuNDYsODQuNDYsMCwwLDEsNTYuNDgsMTcySDgyLjI5QTE0MC44MiwxNDAuODIsMCwwLDAsOTcuNzksMjA2LjM2Wk03Ny4yNSwxNDhINDYuNDNhODMuNTIsODMuNTIsMCwwLDEsMC00MEg3Ny4yNWExNjAuNjMsMTYwLjYzLDAsMCwwLDAsNDBabTMwLjM0LTY0YTExNi42MSwxMTYuNjEsMCwwLDEsMTAtMjAuNzdBMTA3Ljc1LDEwNy43NSwwLDAsMSwxMjgsNDlhMTEzLjIsMTEzLjIsMCwwLDEsMjAuMzksMzVabTY2LjEyLDBhMTQwLjgyLDE0MC44MiwwLDAsMC0xNS41LTM0LjM2QTg0LjQ2LDg0LjQ2LDAsMCwxLDE5OS41Miw4NFptNTAuNzgsOTIuNDlMMjA5LDE5MmwxNS41MiwxNS41MWExMiwxMiwwLDAsMS0xNywxN0wxOTIsMjA5bC0xNS41MSwxNS41MmExMiwxMiwwLDAsMS0xNy0xN0wxNzUsMTkybC0xNS41Mi0xNS41MWExMiwxMiwwLDAsMSwxNy0xN0wxOTIsMTc1bDE1LjUxLTE1LjUyYTEyLDEyLDAsMCwxLDE3LDE3WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRhMTA0LDEwNCwwLDAsMCwwLDIwOCw4LDgsMCwwLDAsNS0xNC4yMWwwLDBjLTEuMTItLjkxLTIwLjg4LTE3LjMyLTMxLjA2LTQ5Ljc3aDI2YTgsOCwwLDAsMCwwLTE2SDk4LjA4YTE0MC4xNywxNDAuMTcsMCwwLDEsMC00OGg1OS44OEExMzgsMTM4LDAsMCwxLDE2MCwxMjhhOCw4LDAsMCwwLDE2LDAsMTU0LjcsMTU0LjcsMCwwLDAtMS44NC0yNGgzOC41MUE4Ny42MSw4Ny42MSwwLDAsMSwyMTYsMTI4YTgsOCwwLDAsMCwxNiwwQTEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk0xMDIsODhhMTE1LjExLDExNS4xMSwwLDAsMSwyNi00NSwxMTUuMjcsMTE1LjI3LDAsMCwxLDI2LDQ1Wm02OC43NSwwYTEzNS4yOCwxMzUuMjgsMCwwLDAtMjIuMy00NS42LDg4LjI5LDg4LjI5LDAsMCwxLDU4LDQ1LjZabTUwLjk1LDg1LjY2TDIwMy4zMSwxOTJsMTguMzUsMTguMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDE5MiwyMDMuMzFsLTE4LjM0LDE4LjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxODAuNjksMTkybC0xOC4zNS0xOC4zNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTkyLDE4MC42OWwxOC4zNC0xOC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0YTEwNCwxMDQsMCwwLDAsMCwyMDgsOCw4LDAsMCwwLDUtMTQuMjNoMGMtMS4xMi0uOTEtMjAuODgtMTcuMzItMzEuMDYtNDkuNzdoMjZhOCw4LDAsMCwwLDAtMTZIOTguMDhhMTQwLjE3LDE0MC4xNywwLDAsMSwwLTQ4aDU5Ljg4QTEzOCwxMzgsMCwwLDEsMTYwLDEyOGE4LDgsMCwwLDAsMTYsMCwxNTQuNywxNTQuNywwLDAsMC0xLjg0LTI0aDM4LjUxQTg3LjYxLDg3LjYxLDAsMCwxLDIxNiwxMjhhOCw4LDAsMCwwLDE2LDBBMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsMjRaTTEwNy41OSw0Mi40QTEzNS4yOCwxMzUuMjgsMCwwLDAsODUuMjksODhINDkuNjNBODguMjksODguMjksMCwwLDEsMTA3LjU5LDQyLjRabTAsMTcxLjJhODguMjksODguMjksMCwwLDEtNTgtNDUuNkg4NS4yOUExMzUuMjgsMTM1LjI4LDAsMCwwLDEwNy41OSwyMTMuNlpNODEuODQsMTUySDQzLjMzYTg4LjE1LDg4LjE1LDAsMCwxLDAtNDhIODEuODRhMTU3LjQ0LDE1Ny40NCwwLDAsMCwwLDQ4Wk0xMDIsODhhMTE1LjExLDExNS4xMSwwLDAsMSwyNi00NSwxMTUuMjcsMTE1LjI3LDAsMCwxLDI2LDQ1Wm02OC43NSwwYTEzNS4yOCwxMzUuMjgsMCwwLDAtMjIuMy00NS42LDg4LjI5LDg4LjI5LDAsMCwxLDU4LDQ1LjZabTUwLjk1LDg1LjY2TDIwMy4zMSwxOTJsMTguMzUsMTguMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDE5MiwyMDMuMzFsLTE4LjM0LDE4LjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxODAuNjksMTkybC0xOC4zNS0xOC4zNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTkyLDE4MC42OWwxOC4zNC0xOC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "GlobeX";
export { I as GlobeX }
