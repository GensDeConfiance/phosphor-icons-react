
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Gift";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzJIMTgwLjkyYy4zOS0uMzMuNzktLjY1LDEuMTctMUEyOS41MywyOS41MywwLDAsMCwxOTIsNDkuNTcsMzIuNjIsMzIuNjIsMCwwLDAsMTU4LjQ0LDE2LDI5LjUzLDI5LjUzLDAsMCwwLDEzNywyNS45MWE1NC45NCw1NC45NCwwLDAsMC05LDE0LjQ4LDU0Ljk0LDU0Ljk0LDAsMCwwLTktMTQuNDhBMjkuNTMsMjkuNTMsMCwwLDAsOTcuNTYsMTYsMzIuNjIsMzIuNjIsMCwwLDAsNjQsNDkuNTcsMjkuNTMsMjkuNTMsMCwwLDAsNzMuOTEsNzFjLjM4LjMzLjc4LjY1LDEuMTcsMUg0MEExNiwxNiwwLDAsMCwyNCw4OHYzMmExNiwxNiwwLDAsMCwxNiwxNnY2NGExNiwxNiwwLDAsMCwxNiwxNkgyMDBhMTYsMTYsMCwwLDAsMTYtMTZWMTM2YTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTE2LDE2LDAsMCwwLDIxNiw3MlpNMTQ5LDM2LjUxYTEzLjY5LDEzLjY5LDAsMCwxLDEwLTQuNWguNDlBMTYuNjIsMTYuNjIsMCwwLDEsMTc2LDQ5LjA4YTEzLjY5LDEzLjY5LDAsMCwxLTQuNSwxMGMtOS40OSw4LjQtMjUuMjQsMTEuMzYtMzUsMTIuNEMxMzcuNyw2MC44OSwxNDEsNDUuNSwxNDksMzYuNTFabS02NC4wOS4zNkExNi42MywxNi42MywwLDAsMSw5Ni41OSwzMmguNDlhMTMuNjksMTMuNjksMCwwLDEsMTAsNC41YzguMzksOS40OCwxMS4zNSwyNS4yLDEyLjM5LDM0LjkyLTkuNzItMS0yNS40NC00LTM0LjkyLTEyLjM5YTEzLjY5LDEzLjY5LDAsMCwxLTQuNS0xMEExNi42LDE2LjYsMCwwLDEsODQuODcsMzYuODdaTTQwLDg4aDgwdjMySDQwWm0xNiw0OGg2NHY2NEg1NlptMTQ0LDY0SDEzNlYxMzZoNjRabTE2LTgwSDEzNlY4OGg4MHYzMloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzZIMTY2LjgxYTUwLjU0LDUwLjU0LDAsMCwwLDEyLjYzLThBMjUuNTMsMjUuNTMsMCwwLDAsMTg4LDQ5LjQ0LDI4LjYyLDI4LjYyLDAsMCwwLDE1OC41NiwyMCwyNS41MywyNS41MywwLDAsMCwxNDAsMjguNTZjLTUuOTEsNi42Ny05LjYzLDE1LjM2LTEyLDIzLjY5LTIuMzUtOC4zMy02LjA3LTE3LTEyLTIzLjY5QTI1LjUzLDI1LjUzLDAsMCwwLDk3LjQ0LDIwLDI4LjYyLDI4LjYyLDAsMCwwLDY4LDQ5LjQ0LDI1LjUzLDI1LjUzLDAsMCwwLDc2LjU2LDY4YTUwLjU0LDUwLjU0LDAsMCwwLDEyLjYzLDhINDBBMTIsMTIsMCwwLDAsMjgsODh2MzJhMTIsMTIsMCwwLDAsMTIsMTJoNHY2OGExMiwxMiwwLDAsMCwxMiwxMkgyMDBhMTIsMTIsMCwwLDAsMTItMTJWMTMyaDRhMTIsMTIsMCwwLDAsMTItMTJWODhBMTIsMTIsMCwwLDAsMjE2LDc2Wk0xNDYsMzMuODZBMTcuNTksMTcuNTksMCwwLDEsMTU4LjgsMjhoLjYxQTIwLjYyLDIwLjYyLDAsMCwxLDE4MCw0OS4yLDE3LjYsMTcuNiwwLDAsMSwxNzQuMTQsNjJjLTEyLjA5LDEwLjctMzMuMDcsMTMuMjEtNDIsMTMuNzlDMTMyLjc2LDY2LjkzLDEzNS4yNiw0NiwxNDYsMzMuODZaTTc2LDQ5LjJBMjAuNjIsMjAuNjIsMCwwLDEsOTYuNTksMjhoLjYxQTE3LjU5LDE3LjU5LDAsMCwxLDExMCwzMy44NmMxMC43MSwxMi4wOSwxMy4yMSwzMy4wNywxMy43OSw0Mi04Ljg5LS41OC0yOS44Ny0zLjA5LTQyLTEzLjc5QTE3LjYsMTcuNiwwLDAsMSw3Niw0OS4yWk0zNiwxMjBWODhhNCw0LDAsMCwxLDQtNGg4NHY0MEg0MEE0LDQsMCwwLDEsMzYsMTIwWm0xNiw4MFYxMzJoNzJ2NzJINTZBNCw0LDAsMCwxLDUyLDIwMFptMTUyLDBhNCw0LDAsMCwxLTQsNEgxMzJWMTMyaDcyWm0xNi04MGE0LDQsMCwwLDEtNCw0SDEzMlY4NGg4NGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzRIMTc0Ljc0YTQ2LjQxLDQ2LjQxLDAsMCwwLDYtNC40OCwyNy41NiwyNy41NiwwLDAsMCw5LjIyLTIwQTMwLjYzLDMwLjYzLDAsMCwwLDE1OC41LDE4YTI3LjU2LDI3LjU2LDAsMCwwLTIwLDkuMjJBNTcuMSw1Ny4xLDAsMCwwLDEyOCw0NS43NmE1Ny4xLDU3LjEsMCwwLDAtMTAuNDgtMTguNTNBMjcuNTYsMjcuNTYsMCwwLDAsOTcuNSwxOCwzMC42MywzMC42MywwLDAsMCw2Niw0OS41MWEyNy41NiwyNy41NiwwLDAsMCw5LjIyLDIwLDQ1Ljc0LDQ1Ljc0LDAsMCwwLDYsNC40OEg0MEExNCwxNCwwLDAsMCwyNiw4OHYzMmExNCwxNCwwLDAsMCwxNCwxNGgydjY2YTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFYxMzRoMmExNCwxNCwwLDAsMCwxNC0xNFY4OEExNCwxNCwwLDAsMCwyMTYsNzRaTTEzNS43Nyw2M2MyLjI1LTEyLjEyLDYuMjktMjEuNzUsMTEuNjktMjcuODVBMTUuNjgsMTUuNjgsMCwwLDEsMTU4Ljg2LDMwaC41NUExOC42LDE4LjYsMCwwLDEsMTc4LDQ5LjE0YTE1LjY4LDE1LjY4LDAsMCwxLTUuMTgsMTEuNEMxNjIuMSw3MCwxNDMuOTIsNzIuODMsMTM0LjM0LDczLjY1LDEzNC41OSw3MC43NiwxMzUsNjcuMDgsMTM1Ljc3LDYzWk04My40NSwzNS40NUExOC42OSwxOC42OSwwLDAsMSw5Ni41OSwzMGguNTVhMTUuNjgsMTUuNjgsMCwwLDEsMTEuNCw1LjE4QzExOCw0NS45LDEyMC44Myw2NC4wOCwxMjEuNjUsNzMuNjZjLTIuODktLjI1LTYuNTctLjY4LTEwLjYxLTEuNDNDOTguOTIsNzAsODkuMjksNjUuOTQsODMuMTksNjAuNTNBMTUuNjQsMTUuNjQsMCwwLDEsNzgsNDkuMTQsMTguNjUsMTguNjUsMCwwLDEsODMuNDUsMzUuNDVaTTM4LDEyMFY4OGEyLDIsMCwwLDEsMi0yaDgydjM2SDQwQTIsMiwwLDAsMSwzOCwxMjBabTE2LDgwVjEzNGg2OHY2OEg1NkEyLDIsMCwwLDEsNTQsMjAwWm0xNDgsMGEyLDIsMCwwLDEtMiwySDEzNFYxMzRoNjhabTE2LTgwYTIsMiwwLDAsMS0yLDJIMTM0Vjg2aDgyYTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjhIMTkwLjA2QTMzLjgyLDMzLjgyLDAsMCwwLDE5Niw0OS42OSwzNi42MiwzNi42MiwwLDAsMCwxNTguMzEsMTIsMzMuNDQsMzMuNDQsMCwwLDAsMTM0LDIzLjI1YTU0LjY1LDU0LjY1LDAsMCwwLTYsOC4zLDU0LjY1LDU0LjY1LDAsMCwwLTYtOC4zQTMzLjQ0LDMzLjQ0LDAsMCwwLDk3LjY5LDEyLDM2LjYyLDM2LjYyLDAsMCwwLDYwLDQ5LjY5LDMzLjgyLDMzLjgyLDAsMCwwLDY1Ljk0LDY4SDQwQTIwLDIwLDAsMCwwLDIwLDg4djMyYTIwLDIwLDAsMCwwLDE2LDE5LjZWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFYxMzkuNkEyMCwyMCwwLDAsMCwyMzYsMTIwVjg4QTIwLDIwLDAsMCwwLDIxNiw2OFptLTQsNDhIMTQwVjkyaDcyWk0xNTIsMzkuMTdBOS41OSw5LjU5LDAsMCwxLDE1OSwzNmguMzVBMTIuNjIsMTIuNjIsMCwwLDEsMTcyLDQ5LDkuNTksOS41OSwwLDAsMSwxNjguODMsNTZjLTYuOSw2LjEyLTE4LjI1LDkuMjYtMjcuNjMsMTAuNzZDMTQyLjcsNTcuNDIsMTQ1Ljg0LDQ2LjA3LDE1MiwzOS4xN1pNODcuNywzOS43QTEyLjgsMTIuOCwwLDAsMSw5Ni42MSwzNkg5N0E5LjU5LDkuNTksMCwwLDEsMTA0LDM5LjE3YzYuMTIsNi45LDkuMjYsMTguMjQsMTAuNzUsMjcuNjFDMTA1LjQ1LDY1LjI3LDk0LDYyLjEzLDg3LjE3LDU2QTkuNTksOS41OSwwLDAsMSw4NCw0OSwxMi43MiwxMi43MiwwLDAsMSw4Ny43LDM5LjdaTTQ0LDkyaDcydjI0SDQ0Wm0xNiw0OGg1NnY1Nkg2MFptODAsNTZWMTQwaDU2djU2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzJIMTgwLjkyYy4zOS0uMzMuNzktLjY1LDEuMTctMUEyOS41MywyOS41MywwLDAsMCwxOTIsNDkuNTcsMzIuNjIsMzIuNjIsMCwwLDAsMTU4LjQ0LDE2LDI5LjUzLDI5LjUzLDAsMCwwLDEzNywyNS45MWE1NC45NCw1NC45NCwwLDAsMC05LDE0LjQ4LDU0Ljk0LDU0Ljk0LDAsMCwwLTktMTQuNDhBMjkuNTMsMjkuNTMsMCwwLDAsOTcuNTYsMTYsMzIuNjIsMzIuNjIsMCwwLDAsNjQsNDkuNTcsMjkuNTMsMjkuNTMsMCwwLDAsNzMuOTEsNzFjLjM4LjMzLjc4LjY1LDEuMTcsMUg0MEExNiwxNiwwLDAsMCwyNCw4OHYzMmExNiwxNiwwLDAsMCwxNiwxNnY2NGExNiwxNiwwLDAsMCwxNiwxNmg2MGE0LDQsMCwwLDAsNC00VjEyMEg0MFY4OGg4MHYzMmgxNlY4OGg4MHYzMkgxMzZ2OTJhNCw0LDAsMCwwLDQsNGg2MGExNiwxNiwwLDAsMCwxNi0xNlYxMzZhMTYsMTYsMCwwLDAsMTYtMTZWODhBMTYsMTYsMCwwLDAsMjE2LDcyWk04NC41MSw1OWExMy42OSwxMy42OSwwLDAsMS00LjUtMTBBMTYuNjIsMTYuNjIsMCwwLDEsOTYuNTksMzJoLjQ5YTEzLjY5LDEzLjY5LDAsMCwxLDEwLDQuNWM4LjM5LDkuNDgsMTEuMzUsMjUuMiwxMi4zOSwzNC45MkMxMDkuNzEsNzAuMzksOTQsNjcuNDMsODQuNTEsNTlabTg3LDBjLTkuNDksOC40LTI1LjI0LDExLjM2LTM1LDEyLjRDMTM3LjcsNjAuODksMTQxLDQ1LjUsMTQ5LDM2LjUxYTEzLjY5LDEzLjY5LDAsMCwxLDEwLTQuNWguNDlBMTYuNjIsMTYuNjIsMCwwLDEsMTc2LDQ5LjA4LDEzLjY5LDEzLjY5LDAsMCwxLDE3MS40OSw1OVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTI4djcyYTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLTgtOFYxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDcySDE4MC45MmMuMzktLjMzLjc5LS42NSwxLjE3LTFBMjkuNTMsMjkuNTMsMCwwLDAsMTkyLDQ5LjU3LDMyLjYyLDMyLjYyLDAsMCwwLDE1OC40NCwxNiwyOS41MywyOS41MywwLDAsMCwxMzcsMjUuOTFhNTQuOTQsNTQuOTQsMCwwLDAtOSwxNC40OCw1NC45NCw1NC45NCwwLDAsMC05LTE0LjQ4QTI5LjUzLDI5LjUzLDAsMCwwLDk3LjU2LDE2LDMyLjYyLDMyLjYyLDAsMCwwLDY0LDQ5LjU3LDI5LjUzLDI5LjUzLDAsMCwwLDczLjkxLDcxYy4zOC4zMy43OC42NSwxLjE3LDFINDBBMTYsMTYsMCwwLDAsMjQsODh2MzJhMTYsMTYsMCwwLDAsMTYsMTZ2NjRhMTYsMTYsMCwwLDAsMTYsMTZIMjAwYTE2LDE2LDAsMCwwLDE2LTE2VjEzNmExNiwxNiwwLDAsMCwxNi0xNlY4OEExNiwxNiwwLDAsMCwyMTYsNzJaTTE0OSwzNi41MWExMy42OSwxMy42OSwwLDAsMSwxMC00LjVoLjQ5QTE2LjYyLDE2LjYyLDAsMCwxLDE3Niw0OS4wOGExMy42OSwxMy42OSwwLDAsMS00LjUsMTBjLTkuNDksOC40LTI1LjI0LDExLjM2LTM1LDEyLjRDMTM3LjcsNjAuODksMTQxLDQ1LjUsMTQ5LDM2LjUxWm0tNjQuMDkuMzZBMTYuNjMsMTYuNjMsMCwwLDEsOTYuNTksMzJoLjQ5YTEzLjY5LDEzLjY5LDAsMCwxLDEwLDQuNWM4LjM5LDkuNDgsMTEuMzUsMjUuMiwxMi4zOSwzNC45Mi05LjcyLTEtMjUuNDQtNC0zNC45Mi0xMi4zOWExMy42OSwxMy42OSwwLDAsMS00LjUtMTBBMTYuNiwxNi42LDAsMCwxLDg0Ljg3LDM2Ljg3Wk00MCw4OGg4MHYzMkg0MFptMTYsNDhoNjR2NjRINTZabTE0NCw2NEgxMzZWMTM2aDY0Wm0xNi04MEgxMzZWODhoODB2MzJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Gift";
export { I as Gift }
