
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/SteeringWheel";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTUyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxNTJabTEwNC0yNEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhaTTQwLDEyOHYuMzNhMTM1LjkzLDEzNS45MywwLDAsMSwxNzYsMFYxMjhhODgsODgsMCwwLDAtMTc2LDBabTY3LjUsODUuNThMOTAuNDUsMTY4SDQ5LjYzQTg4LjM1LDg4LjM1LDAsMCwwLDEwNy41LDIxMy41OFpNMTI4LDIxNmMuODMsMCwxLjY2LDAsMi40OSwwbDIwLjA3LTUzLjU3YTE2LjA3LDE2LjA3LDAsMCwxLDE1LTEwLjM5aDQ3LjEyYy4zOC0xLjMxLjcyLTIuNjQsMS00YTEyMCwxMjAsMCwwLDAtMTcxLjQsMGMuMzEsMS4zNC42NSwyLjY3LDEsNEg5MC40NWExNi4wOCwxNi4wOCwwLDAsMSwxNSwxMC40bDIwLDUzLjU2QzEyNi4zMSwyMTYsMTI3LjE1LDIxNiwxMjgsMjE2Wm03OC4zNy00OEgxNjUuNTVsLTE3LjA5LDQ1LjU5QTg4LjM0LDg4LjM0LDAsMCwwLDIwNi4zNywxNjhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTQ4YTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEyOCwxNDhabTEwMC0yMEExMDAsMTAwLDAsMSwxLDEyOCwyOCwxMDAuMTEsMTAwLjExLDAsMCwxLDIyOCwxMjhaTTM2LDEyOHEwLDQuNTMuNDQsOC45NGExMzEuOTQsMTMxLjk0LDAsMCwxLDE4My4xMiwwcS40NC00LjQxLjQ0LTguOTRhOTIsOTIsMCwwLDAtMTg0LDBabTc3Ljc1LDkwLjlMOTQuMiwxNjYuNmE0LDQsMCwwLDAtMy43NS0yLjZINDMuMzRBOTIuMzEsOTIuMzEsMCwwLDAsMTEzLjc1LDIxOC45Wk0xMjgsMjIwYzEuNzgsMCwzLjU1LS4wNiw1LjMtLjE2bDIxLTU2LjA1QTEyLDEyLDAsMCwxLDE2NS41NSwxNTZoNTAuMDlhOTEuNjEsOTEuNjEsMCwwLDAsMi40My05LjIxLDEyNCwxMjQsMCwwLDAtMTgwLjE0LDBBOTEuNjEsOTEuNjEsMCwwLDAsNDAuMzYsMTU2SDkwLjQ1YTEyLDEyLDAsMCwxLDExLjI0LDcuOGwyMSw1NkMxMjQuNDIsMjE5Ljk0LDEyNi4yLDIyMCwxMjgsMjIwWm04NC42Ni01NkgxNjUuNTVhNCw0LDAsMCwwLTMuNzUsMi42bC0xOS42LDUyLjNBOTIuMjYsOTIuMjYsMCwwLDAsMjEyLjY2LDE2NFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wk00Ni40MywxNjZoNDRhMiwyLDAsMCwxLDEuODcsMS4zbDE4LjMzLDQ5QTkwLjMsOTAuMywwLDAsMSw0Ni40MywxNjZabTk4Ljg3LDUwLjMyLDE4LjM3LTQ5YTIsMiwwLDAsMSwxLjg4LTEuM2g0NEE5MC4yOSw5MC4yOSwwLDAsMSwxNDUuMywyMTYuMzJaTTIxNC4xNywxNTRIMTY1LjU1YTE0LDE0LDAsMCwwLTEzLjExLDkuMDlsLTIwLjU1LDU0LjgyYy0xLjI5LjA2LTIuNTkuMDktMy44OS4wOXMtMi42MywwLTMuOTQtLjA5bC0yMC41LTU0LjgxQTE0LjA2LDE0LjA2LDAsMCwwLDkwLjQ1LDE1NEg0MS44M2MtLjY1LTIuMTctMS4yMy00LjM3LTEuNzItNi42MWExMjIsMTIyLDAsMCwxLDE3NS43OCwwQzIxNS40LDE0OS42MywyMTQuODIsMTUxLjgzLDIxNC4xNywxNTRaTTEyOCw5OGExMzQuMzgsMTM0LjM4LDAsMCwwLTg5Ljg4LDM0LjY0QzM4LDEzMS4xLDM4LDEyOS41NiwzOCwxMjhhOTAsOTAsMCwwLDEsMTgwLDBjMCwxLjU2LDAsMy4xLS4xMiw0LjY0QTEzNC4zOCwxMzQuMzgsMCwwLDAsMTI4LDk4Wm0xMCw0MmExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxMzgsMTQwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTQ0YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwxNDRabTkyLTE2QTEwOCwxMDgsMCwxLDEsMTI4LDIwLDEwOC4xMiwxMDguMTIsMCwwLDEsMjM2LDEyOFptLTcwLjQ1LDI4aDQxLjYzYy43OS0yLjIxLDEuNDktNC40NywyLjA5LTYuNzZhMTE2LDExNiwwLDAsMC0xNjIuNTQsMHEuOSwzLjQ0LDIuMDksNi43Nkg5MC40NWEyMC4wNywyMC4wNywwLDAsMSwxOC43MywxM2wxNi4wNiw0Mi45M2MuOTIsMCwxLjgzLjA3LDIuNzYuMDdzMS44MiwwLDIuNzItLjA3bDE2LjEtNDNBMjAuMDksMjAuMDksMCwwLDEsMTY1LjU1LDE1NlpNNDQuNDEsMTE5LjczYTEzOS44NSwxMzkuODUsMCwwLDEsMTY3LjE4LDAsODQsODQsMCwwLDAtMTY3LjE4LDBabTUzLjA4LDg2LjUxTDg3LjY4LDE4MEg2Mi4xQTg0LjQ2LDg0LjQ2LDAsMCwwLDk3LjQ5LDIwNi4yNFpNMTkzLjksMTgwSDE2OC4zMmwtOS44NCwyNi4yNUE4NC4zNSw4NC4zNSwwLDAsMCwxOTMuOSwxODBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk00OS42MywxNjhIOTAuNDVsMTcsNDUuNThBODguMzUsODguMzUsMCwwLDEsNDkuNjMsMTY4Wk0xMjgsMTU2YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDEyOCwxNTZabTIwLjQ2LDU3LjU5TDE2NS41NSwxNjhoNDAuODJBODguMzQsODguMzQsMCwwLDEsMTQ4LjQ2LDIxMy41OVpNMTI4LDk2YTEzNi4zOCwxMzYuMzgsMCwwLDAtODgsMzIuMzNWMTI4YTg4LDg4LDAsMCwxLDE3Niwwdi4zM0ExMzYuMzgsMTM2LjM4LDAsMCwwLDEyOCw5NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuNCwxNDUuNTVBOTYuNiw5Ni42LDAsMCwxLDIxOC41NCwxNjBoLTUzYTgsOCwwLDAsMC03LjUsNS4xOWwtMjEuOSw1OC40N2MtMi42OS4yMi01LjQxLjM0LTguMTUuMzRzLTUuNS0uMTItOC4yLS4zNUw5Ny45NCwxNjUuMmE4LDgsMCwwLDAtNy40OS01LjJoLTUzYTk2LjYsOTYuNiwwLDAsMS0zLjg2LTE0LjQ1LDEyOCwxMjgsMCwwLDEsMTg4LjgsMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMjgsMTUyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxNTJabTEwNC0yNEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhaTTQwLDEyOHYuMzNhMTM1LjkzLDEzNS45MywwLDAsMSwxNzYsMFYxMjhhODgsODgsMCwwLDAtMTc2LDBabTY3LjUsODUuNThMOTAuNDUsMTY4SDQ5LjYzQTg4LjM1LDg4LjM1LDAsMCwwLDEwNy41LDIxMy41OFpNMTI4LDIxNmMuODMsMCwxLjY2LDAsMi40OSwwbDIwLjA3LTUzLjU3YTE2LjA3LDE2LjA3LDAsMCwxLDE1LTEwLjM5aDQ3LjEyYy4zOC0xLjMxLjcyLTIuNjQsMS00YTEyMCwxMjAsMCwwLDAtMTcxLjQsMGMuMzEsMS4zNC42NSwyLjY3LDEsNEg5MC40NWExNi4wOCwxNi4wOCwwLDAsMSwxNSwxMC40bDIwLDUzLjU2QzEyNi4zMSwyMTYsMTI3LjE1LDIxNiwxMjgsMjE2Wm03OC4zNy00OEgxNjUuNTVsLTE3LjA5LDQ1LjU5QTg4LjM0LDg4LjM0LDAsMCwwLDIwNi4zNywxNjhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SteeringWheel";
export { I as SteeringWheel }
