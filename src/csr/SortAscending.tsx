
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/SortAscending";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTI4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLDAtMTZoNzJBOCw4LDAsMCwxLDEyOCwxMjhaTTQ4LDcySDE4NGE4LDgsMCwwLDAsMC0xNkg0OGE4LDgsMCwwLDAsMCwxNlptNTYsMTEySDQ4YTgsOCwwLDAsMCwwLDE2aDU2YTgsOCwwLDAsMCwwLTE2Wm0xMjUuNjYtMjEuNjZhOCw4LDAsMCwwLTExLjMyLDBMMTkyLDE4OC42OVYxMTJhOCw4LDAsMCwwLTE2LDB2NzYuNjlsLTI2LjM0LTI2LjM1YTgsOCwwLDAsMC0xMS4zMiwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MEE4LDgsMCwwLDAsMjI5LjY2LDE2Mi4zNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjQsMTI4YTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLDAtOGg3MkE0LDQsMCwwLDEsMTI0LDEyOFpNNDgsNjhIMTg0YTQsNCwwLDAsMCwwLThINDhhNCw0LDAsMCwwLDAsOFptNTYsMTIwSDQ4YTQsNCwwLDAsMCwwLDhoNTZhNCw0LDAsMCwwLDAtOFptMTIyLjgzLTIyLjgzYTQsNCwwLDAsMC01LjY2LDBMMTg4LDE5OC4zNFYxMTJhNCw0LDAsMCwwLTgsMHY4Ni4zNGwtMzMuMTctMzMuMTdhNCw0LDAsMCwwLTUuNjYsNS42Nmw0MCw0MGE0LDQsMCwwLDAsNS42NiwwbDQwLTQwQTQsNCwwLDAsMCwyMjYuODMsMTY1LjE3WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjYsMTI4YTYsNiwwLDAsMS02LDZINDhhNiw2LDAsMCwxLDAtMTJoNzJBNiw2LDAsMCwxLDEyNiwxMjhaTTQ4LDcwSDE4NGE2LDYsMCwwLDAsMC0xMkg0OGE2LDYsMCwwLDAsMCwxMlptNTYsMTE2SDQ4YTYsNiwwLDAsMCwwLDEyaDU2YTYsNiwwLDAsMCwwLTEyWm0xMjQuMjQtMjIuMjRhNiw2LDAsMCwwLTguNDgsMEwxOTAsMTkzLjUxVjExMmE2LDYsMCwwLDAtMTIsMHY4MS41MWwtMjkuNzYtMjkuNzVhNiw2LDAsMCwwLTguNDgsOC40OGw0MCw0MGE2LDYsMCwwLDAsOC40OCwwbDQwLTQwQTYsNiwwLDAsMCwyMjguMjQsMTYzLjc2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDQ4YTEyLDEyLDAsMCwxLDAtMjRoNjhBMTIsMTIsMCwwLDEsMTI4LDEyOFpNNDgsNzZIMTgwYTEyLDEyLDAsMCwwLDAtMjRINDhhMTIsMTIsMCwwLDAsMCwyNFptNTIsMTA0SDQ4YTEyLDEyLDAsMCwwLDAsMjRoNTJhMTIsMTIsMCwwLDAsMC0yNFptMTMyLjQ5LTIwLjQ5YTEyLDEyLDAsMCwwLTE3LDBMMTk2LDE3OVYxMTJhMTIsMTIsMCwwLDAtMjQsMHY2N2wtMTkuNTEtMTkuNTJhMTIsMTIsMCwwLDAtMTcsMTdsNDAsNDBhMTIsMTIsMCwwLDAsMTcsMGw0MC00MEExMiwxMiwwLDAsMCwyMzIuNDksMTU5LjUxWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTcyLDcyaDk2YTgsOCwwLDAsMSwwLDE2SDcyYTgsOCwwLDAsMSwwLTE2Wm00MCwxMTJINzJhOCw4LDAsMCwxLDAtMTZoNDBhOCw4LDAsMCwxLDAsMTZabTgtNDhINzJhOCw4LDAsMCwxLDAtMTZoNDhhOCw4LDAsMCwxLDAsMTZabTc3LjY2LDI5LjY2LTI0LDI0YTgsOCwwLDAsMS0xMS4zMiwwbC0yNC0yNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTYwLDE2NC42OVYxMjBhOCw4LDAsMCwxLDE2LDB2NDQuNjlsMTAuMzQtMTAuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsODB2ODhsLTI0LDI0SDQ4VjY0SDIwOEExNiwxNiwwLDAsMSwyMjQsODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDEyOGE4LDgsMCwwLDEtOCw4SDQ4YTgsOCwwLDAsMSwwLTE2aDcyQTgsOCwwLDAsMSwxMjgsMTI4Wk00OCw3MkgxODRhOCw4LDAsMCwwLDAtMTZINDhhOCw4LDAsMCwwLDAsMTZabTU2LDExMkg0OGE4LDgsMCwwLDAsMCwxNmg1NmE4LDgsMCwwLDAsMC0xNlptMTI1LjY2LTIxLjY2YTgsOCwwLDAsMC0xMS4zMiwwTDE5MiwxODguNjlWMTEyYTgsOCwwLDAsMC0xNiwwdjc2LjY5bC0yNi4zNC0yNi4zNWE4LDgsMCwwLDAtMTEuMzIsMTEuMzJsNDAsNDBhOCw4LDAsMCwwLDExLjMyLDBsNDAtNDBBOCw4LDAsMCwwLDIyOS42NiwxNjIuMzRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SortAscending";
export { I as SortAscending }
