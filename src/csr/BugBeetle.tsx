
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/BugBeetle";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTUyaDE2YTgsOCwwLDAsMCwwLTE2SDIwOFYxMjBoMTZhOCw4LDAsMCwwLDAtMTZIMjA3LjZhNzkuNzYsNzkuNzYsMCwwLDAtMjEuNDQtNDYuODVsMTkuNS0xOS40OWE4LDgsMCwwLDAtMTEuMzItMTEuMzJsLTIwLjI5LDIwLjNhNzkuNzQsNzkuNzQsMCwwLDAtOTIuMSwwTDYxLjY2LDI2LjM0QTgsOCwwLDAsMCw1MC4zNCwzNy42NmwxOS41LDE5LjQ5QTc5Ljc2LDc5Ljc2LDAsMCwwLDQ4LjQsMTA0SDMyYTgsOCwwLDAsMCwwLDE2SDQ4djE2SDMyYTgsOCwwLDAsMCwwLDE2SDQ4djhjMCwyLjcuMTQsNS4zNy40LDhIMzJhOCw4LDAsMCwwLDAsMTZINTEuNjhhODAsODAsMCwwLDAsMTUyLjY0LDBIMjI0YTgsOCwwLDAsMCwwLTE2SDIwNy42Yy4yNi0yLjYzLjQtNS4zLjQtOFpNMTI4LDQ4YTY0LjA3LDY0LjA3LDAsMCwxLDYzLjQ4LDU2aC0xMjdBNjQuMDcsNjQuMDcsMCwwLDEsMTI4LDQ4Wm04LDE3NS40OFYxNDRhOCw4LDAsMCwwLTE2LDB2NzkuNDhBNjQuMDcsNjQuMDcsMCwwLDEsNjQsMTYwVjEyMEgxOTJ2NDBBNjQuMDcsNjQuMDcsMCwwLDEsMTM2LDIyMy40OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMTQ4aDIwYTQsNCwwLDAsMCwwLThIMjA0VjExNmgyMGE0LDQsMCwwLDAsMC04SDIwMy44OWE3NS44LDc1LjgsMCwwLDAtMjMuMzctNTAuODZsMjIuMzEtMjIuMzFhNCw0LDAsMSwwLTUuNjYtNS42NkwxNzQuNDQsNTEuOWE3NS43Nyw3NS43NywwLDAsMC05Mi44OCwwTDU4LjgzLDI5LjE3YTQsNCwwLDAsMC01LjY2LDUuNjZMNzUuNDgsNTcuMTRBNzUuOCw3NS44LDAsMCwwLDUyLjExLDEwOEgzMmE0LDQsMCwwLDAsMCw4SDUydjI0SDMyYTQsNCwwLDAsMCwwLDhINTJ2MTJhNzUuNDEsNzUuNDEsMCwwLDAsMSwxMkgzMmE0LDQsMCwwLDAsMCw4SDU0LjY5YTc2LDc2LDAsMCwwLDE0Ni42MiwwSDIyNGE0LDQsMCwwLDAsMC04SDIwM2E3NS40MSw3NS40MSwwLDAsMCwxLTEyWk0xMjgsNDRhNjguMDgsNjguMDgsMCwwLDEsNjcuODcsNjRINjAuMTNBNjguMDgsNjguMDgsMCwwLDEsMTI4LDQ0Wm00LDE4My44N1YxNDRhNCw0LDAsMCwwLTgsMHY4My44N0E2OC4wOCw2OC4wOCwwLDAsMSw2MCwxNjBWMTE2SDE5NnY0NEE2OC4wOCw2OC4wOCwwLDAsMSwxMzIsMjI3Ljg3WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsMTUwaDE4YTYsNiwwLDAsMCwwLTEySDIwNlYxMThoMThhNiw2LDAsMCwwLDAtMTJIMjA1Ljc1YTc3LjgxLDc3LjgxLDAsMCwwLTIyLjM4LTQ4Ljg4bDIwLjg3LTIwLjg4YTYsNiwwLDEsMC04LjQ4LTguNDhMMTc0LjI3LDQ5LjI1YTc3LjgsNzcuOCwwLDAsMC05Mi41MywwTDYwLjI0LDI3Ljc2YTYsNiwwLDAsMC04LjQ4LDguNDhMNzIuNjQsNTcuMTJBNzcuNzYsNzcuNzYsMCwwLDAsNTAuMjUsMTA2SDMyYTYsNiwwLDAsMCwwLDEySDUwdjIwSDMyYTYsNiwwLDAsMCwwLDEySDUwdjEwYTc4LjYsNzguNiwwLDAsMCwuNjYsMTBIMzJhNiw2LDAsMCwwLDAsMTJINTMuMThhNzgsNzgsMCwwLDAsMTQ5LjY0LDBIMjI0YTYsNiwwLDAsMCwwLTEySDIwNS4zNGE3OC42LDc4LjYsMCwwLDAsLjY2LTEwWk0xMjgsNDZhNjYuMDcsNjYuMDcsMCwwLDEsNjUuNzEsNjBINjIuMjlBNjYuMDcsNjYuMDcsMCwwLDEsMTI4LDQ2Wm02LDE3OS43MVYxNDRhNiw2LDAsMCwwLTEyLDB2ODEuNzFBNjYuMDcsNjYuMDcsMCwwLDEsNjIsMTYwVjExOEgxOTR2NDJBNjYuMDcsNjYuMDcsMCwwLDEsMTM0LDIyNS43MVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYwYTEyLDEyLDAsMCwwLDAtMjRIMjEyVjEyMGgxMmExMiwxMiwwLDAsMCwwLTI0SDIxMC40NWE4My43LDgzLjcsMCwwLDAtMTguNzgtMzguN2wxNi44Mi0xNi44MWExMiwxMiwwLDEsMC0xNy0xN2wtMTgsMThhODMuNyw4My43LDAsMCwwLTkxLjEsMGwtMTgtMThhMTIsMTIsMCwwLDAtMTcsMTdMNjQuMzMsNTcuM0E4My43LDgzLjcsMCwwLDAsNDUuNTUsOTZIMzJhMTIsMTIsMCwwLDAsMCwyNEg0NHYxNkgzMmExMiwxMiwwLDAsMCwwLDI0SDQ0YTgzLjU1LDgzLjU1LDAsMCwwLDEuNTUsMTZIMzJhMTIsMTIsMCwwLDAsMCwyNEg1NC4xNWE4NCw4NCwwLDAsMCwxNDcuNywwSDIyNGExMiwxMiwwLDAsMCwwLTI0SDIxMC40NUE4My41NSw4My41NSwwLDAsMCwyMTIsMTYwWk0xMjgsNTJhNjAuMSw2MC4xLDAsMCwxLDU3LjgyLDQ0SDcwLjE4QTYwLjEsNjAuMSwwLDAsMSwxMjgsNTJabTEyLDE2Ni43OVYxNDhhMTIsMTIsMCwwLDAtMjQsMHY3MC43OUE2MC4wOSw2MC4wOSwwLDAsMSw2OCwxNjBWMTIwSDE4OHY0MEE2MC4wOSw2MC4wOSwwLDAsMSwxNDAsMjE4Ljc5WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTIwSDIwOFYxMDRoMTZhOCw4LDAsMCwxLDAsMTZaTTMyLDEwNGE4LDgsMCwwLDAsMCwxNkg0OFYxMDRabTE3Niw1NmMwLDIuNy0uMTQsNS4zNy0uNCw4SDIyNGE4LDgsMCwwLDEsMCwxNkgyMDQuMzJhODAsODAsMCwwLDEtMTUyLjY0LDBIMzJhOCw4LDAsMCwxLDAtMTZINDguNGMtLjI2LTIuNjMtLjQtNS4zLS40LTh2LThIMzJhOCw4LDAsMCwxLDAtMTZINDhWMTIwSDIwOHYxNmgxNmE4LDgsMCwwLDEsMCwxNkgyMDhabS03Mi0xNmE4LDgsMCwwLDAtMTYsMHY2NGE4LDgsMCwwLDAsMTYsMFpNNjkuODQsNTcuMTVBNzkuNzYsNzkuNzYsMCwwLDAsNDguNCwxMDRIMjA3LjZhNzkuNzYsNzkuNzYsMCwwLDAtMjEuNDQtNDYuODVsMTkuNS0xOS40OWE4LDgsMCwwLDAtMTEuMzItMTEuMzJsLTIwLjI5LDIwLjNhNzkuNzQsNzkuNzQsMCwwLDAtOTIuMSwwTDYxLjY2LDI2LjM0QTgsOCwwLDAsMCw1MC4zNCwzNy42NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTEydjQ4YTcyLDcyLDAsMCwxLTcyLDcyaDBhNzIsNzIsMCwwLDEtNzItNzJWMTEyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwxNTJoMTZhOCw4LDAsMCwwLDAtMTZIMjA4VjEyMGgxNmE4LDgsMCwwLDAsMC0xNkgyMDcuNmE3OS43Niw3OS43NiwwLDAsMC0yMS40NC00Ni44NWwxOS41LTE5LjQ5YTgsOCwwLDAsMC0xMS4zMi0xMS4zMmwtMjAuMjksMjAuM2E3OS43NCw3OS43NCwwLDAsMC05Mi4xLDBMNjEuNjYsMjYuMzRBOCw4LDAsMCwwLDUwLjM0LDM3LjY2bDE5LjUsMTkuNDlBNzkuNzYsNzkuNzYsMCwwLDAsNDguNCwxMDRIMzJhOCw4LDAsMCwwLDAsMTZINDh2MTZIMzJhOCw4LDAsMCwwLDAsMTZINDh2OGMwLDIuNy4xNCw1LjM3LjQsOEgzMmE4LDgsMCwwLDAsMCwxNkg1MS42OGE4MCw4MCwwLDAsMCwxNTIuNjQsMEgyMjRhOCw4LDAsMCwwLDAtMTZIMjA3LjZjLjI2LTIuNjMuNC01LjMuNC04Wk0xMjgsNDhhNjQuMDcsNjQuMDcsMCwwLDEsNjMuNDgsNTZoLTEyN0E2NC4wNyw2NC4wNywwLDAsMSwxMjgsNDhabTgsMTc1LjQ4VjE0NGE4LDgsMCwwLDAtMTYsMHY3OS40OEE2NC4wNyw2NC4wNywwLDAsMSw2NCwxNjBWMTIwSDE5MnY0MEE2NC4wNyw2NC4wNywwLDAsMSwxMzYsMjIzLjQ4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "BugBeetle";
export { I as BugBeetle }
