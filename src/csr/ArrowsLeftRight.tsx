
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ArrowsLeftRight";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsMTgxLjY2bC0zMiwzMmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTg4LjY5LDE4NEg0OGE4LDgsMCwwLDEsMC0xNkgxODguNjlsLTE4LjM1LTE4LjM0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMmwzMiwzMkE4LDgsMCwwLDEsMjEzLjY2LDE4MS42NlptLTEzOS4zMi02NGE4LDgsMCwwLDAsMTEuMzItMTEuMzJMNjcuMzEsODhIMjA4YTgsOCwwLDAsMCwwLTE2SDY3LjMxTDg1LjY2LDUzLjY2QTgsOCwwLDAsMCw3NC4zNCw0Mi4zNGwtMzIsMzJhOCw4LDAsMCwwLDAsMTEuMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsMTczLjE3YTQsNCwwLDAsMSwwLDUuNjZsLTMyLDMyYTQsNCwwLDAsMS01LjY2LTUuNjZMMTk4LjM0LDE4MEg0OGE0LDQsMCwwLDEsMC04SDE5OC4zNGwtMjUuMTctMjUuMTdhNCw0LDAsMCwxLDUuNjYtNS42NlpNNzcuMTcsMTE0LjgzYTQsNCwwLDAsMCw1LjY2LTUuNjZMNTcuNjYsODRIMjA4YTQsNCwwLDAsMCwwLThINTcuNjZMODIuODMsNTAuODNhNCw0LDAsMCwwLTUuNjYtNS42NmwtMzIsMzJhNCw0LDAsMCwwLDAsNS42NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsMTcxLjc2YTYsNiwwLDAsMSwwLDguNDhsLTMyLDMyYTYsNiwwLDAsMS04LjQ4LTguNDhMMTkzLjUxLDE4Mkg0OGE2LDYsMCwwLDEsMC0xMkgxOTMuNTFsLTIxLjc1LTIxLjc2YTYsNiwwLDAsMSw4LjQ4LTguNDhaTTc1Ljc2LDExNi4yNGE2LDYsMCwwLDAsOC40OC04LjQ4TDYyLjQ5LDg2SDIwOGE2LDYsMCwwLDAsMC0xMkg2Mi40OUw4NC4yNCw1Mi4yNGE2LDYsMCwwLDAtOC40OC04LjQ4bC0zMiwzMmE2LDYsMCwwLDAsMCw4LjQ4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksMTg0LjQ5bC0zMiwzMmExMiwxMiwwLDAsMS0xNy0xN0wxNzksMTg4SDQ4YTEyLDEyLDAsMCwxLDAtMjRIMTc5bC0xMS41Mi0xMS41MWExMiwxMiwwLDAsMSwxNy0xN2wzMiwzMkExMiwxMiwwLDAsMSwyMTYuNDksMTg0LjQ5Wm0tMTQ1LTY0YTEyLDEyLDAsMCwwLDE3LTE3TDc3LDkySDIwOGExMiwxMiwwLDAsMCwwLTI0SDc3TDg4LjQ5LDU2LjQ5YTEyLDEyLDAsMCwwLTE3LTE3bC0zMiwzMmExMiwxMiwwLDAsMCwwLDE3WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00Mi4zNCw4NS42NmE4LDgsMCwwLDEsMC0xMS4zMmwzMi0zMkE4LDgsMCwwLDEsODgsNDhWNzJIMjA4YTgsOCwwLDAsMSwwLDE2SDg4djI0YTgsOCwwLDAsMS0xMy42Niw1LjY2Wm0xNzEuMzIsODQuNjgtMzItMzJBOCw4LDAsMCwwLDE2OCwxNDR2MjRINDhhOCw4LDAsMCwwLDAsMTZIMTY4djI0YTgsOCwwLDAsMCwxMy42Niw1LjY2bDMyLTMyQTgsOCwwLDAsMCwyMTMuNjYsMTcwLjM0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODB2OTZINDhWODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjEzLjY2LDE4MS42NmwtMzIsMzJhOCw4LDAsMCwxLTExLjMyLTExLjMyTDE4OC42OSwxODRINDhhOCw4LDAsMCwxLDAtMTZIMTg4LjY5bC0xOC4zNS0xOC4zNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJsMzIsMzJBOCw4LDAsMCwxLDIxMy42NiwxODEuNjZabS0xMzkuMzItNjRhOCw4LDAsMCwwLDExLjMyLTExLjMyTDY3LjMxLDg4SDIwOGE4LDgsMCwwLDAsMC0xNkg2Ny4zMUw4NS42Niw1My42NkE4LDgsMCwwLDAsNzQuMzQsNDIuMzRsLTMyLDMyYTgsOCwwLDAsMCwwLDExLjMyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowsLeftRight";
export { I as ArrowsLeftRight }
