
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ShieldPlus";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxMjhhOCw4LDAsMCwxLDgtOGgyNFY5NmE4LDgsMCwwLDEsMTYsMHYyNGgyNGE4LDgsMCwwLDEsMCwxNkgxMzZ2MjRhOCw4LDAsMCwxLTE2LDBWMTM2SDk2QTgsOCwwLDAsMSw4OCwxMjhaTTIyNCw1NnY1NmMwLDUyLjcyLTI1LjUyLDg0LjY3LTQ2LjkzLDEwMi4xOS0yMy4wNiwxOC44Ni00NiwyNS4yNy00NywyNS41M2E4LDgsMCwwLDEtNC4yLDBjLTEtLjI2LTIzLjkxLTYuNjctNDctMjUuNTNDNTcuNTIsMTk2LjY3LDMyLDE2NC43MiwzMiwxMTJWNTZBMTYsMTYsMCwwLDEsNDgsNDBIMjA4QTE2LDE2LDAsMCwxLDIyNCw1NlptLTE2LDBMNDgsNTZsMCw1NmMwLDM3LjMsMTMuODIsNjcuNTEsNDEuMDcsODkuODFBMTI4LjI1LDEyOC4yNSwwLDAsMCwxMjgsMjIzLjYyYTEyOS4zLDEyOS4zLDAsMCwwLDM5LjQxLTIyLjJDMTk0LjM0LDE3OS4xNiwyMDgsMTQ5LjA3LDIwOCwxMTJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsMTI4YTQsNCwwLDAsMS00LDRIMTMydjI4YTQsNCwwLDAsMS04LDBWMTMySDk2YTQsNCwwLDAsMSwwLThoMjhWOTZhNCw0LDAsMCwxLDgsMHYyOGgyOEE0LDQsMCwwLDEsMTY0LDEyOFptNTYtNzJ2NTZjMCw1MS4xNi0yNC43Myw4Mi4xMi00NS40Nyw5OS4xLTIyLjQsMTguMzItNDQuNTUsMjQuNS00NS40OCwyNC43NmE0LDQsMCwwLDEtMi4xLDBjLS45My0uMjYtMjMuMDgtNi40NC00NS40OC0yNC43NkM2MC43MywxOTQuMTIsMzYsMTYzLjE2LDM2LDExMlY1NkExMiwxMiwwLDAsMSw0OCw0NEgyMDhBMTIsMTIsMCwwLDEsMjIwLDU2Wm0tOCwwYTQsNCwwLDAsMC00LTRINDhhNCw0LDAsMCwwLTQsNHY1NmMwLDM4LjQ0LDE0LjIzLDY5LjYzLDQyLjI5LDkyLjcxQTEzMi4yMywxMzIuMjMsMCwwLDAsMTI4LDIyNy44MmExMzIuNDUsMTMyLjQ1LDAsMCwwLDQxLjcxLTIzLjExQzE5Ny43NywxODEuNjMsMjEyLDE1MC40NCwyMTIsMTEyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjYsMTI4YTYsNiwwLDAsMS02LDZIMTM0djI2YTYsNiwwLDAsMS0xMiwwVjEzNEg5NmE2LDYsMCwwLDEsMC0xMmgyNlY5NmE2LDYsMCwwLDEsMTIsMHYyNmgyNkE2LDYsMCwwLDEsMTY2LDEyOFptNTYtNzJ2NTZjMCw1MS45NC0yNS4xMiw4My40LTQ2LjIsMTAwLjY0LTIyLjczLDE4LjYtNDUuMjcsMjQuODktNDYuMjIsMjUuMTVhNiw2LDAsMCwxLTMuMTYsMGMtMS0uMjYtMjMuNDktNi41NS00Ni4yMi0yNS4xNUM1OS4xMiwxOTUuNCwzNCwxNjMuOTQsMzQsMTEyVjU2QTE0LDE0LDAsMCwxLDQ4LDQySDIwOEExNCwxNCwwLDAsMSwyMjIsNTZabS0xMiwwYTIsMiwwLDAsMC0yLTJINDhhMiwyLDAsMCwwLTIsMnY1NmMwLDM3Ljc1LDEzLjk0LDY4LjM5LDQxLjQ0LDkxLjA2QTEzMC44MywxMzAuODMsMCwwLDAsMTI4LDIyNS43MmExMzEuMDYsMTMxLjA2LDAsMCwwLDQwLjU2LTIyLjY2QzE5Ni4wNiwxODAuMzksMjEwLDE0OS43NSwyMTAsMTEyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCwxMjhhMTIsMTIsMCwwLDEsMTItMTJoMjBWOTZhMTIsMTIsMCwwLDEsMjQsMHYyMGgyMGExMiwxMiwwLDAsMSwwLDI0SDE0MHYyMGExMiwxMiwwLDAsMS0yNCwwVjE0MEg5NkExMiwxMiwwLDAsMSw4NCwxMjhaTTIyOCw1NnY1NmMwLDU0LjI5LTI2LjMyLDg3LjIyLTQ4LjQsMTA1LjI5LTIzLjcxLDE5LjM5LTQ3LjQ0LDI2LTQ4LjQ0LDI2LjI5YTEyLjEsMTIuMSwwLDAsMS02LjMyLDBjLTEtLjI4LTI0LjczLTYuOS00OC40NC0yNi4yOUM1NC4zMiwxOTkuMjIsMjgsMTY2LjI5LDI4LDExMlY1NkEyMCwyMCwwLDAsMSw0OCwzNkgyMDhBMjAsMjAsMCwwLDEsMjI4LDU2Wm0tMjQsNEg1MnY1MmMwLDM1LjcxLDEzLjA5LDY0LjY5LDM4LjkxLDg2LjE1QTEyNi4xNCwxMjYuMTQsMCwwLDAsMTI4LDIxOS4zOGExMjYuMjgsMTI2LjI4LDAsMCwwLDM3LjA5LTIxLjIzQzE5MC45MSwxNzYuNjksMjA0LDE0Ny43MSwyMDQsMTEyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMTYsMTYsMCwwLDAsMzIsNTZ2NTZjMCw1Mi43MiwyNS41Miw4NC42Nyw0Ni45MywxMDIuMTksMjMuMDYsMTguODYsNDYsMjUuMjcsNDcsMjUuNTNhOCw4LDAsMCwwLDQuMiwwYzEtLjI2LDIzLjkxLTYuNjcsNDctMjUuNTNDMTk4LjQ4LDE5Ni42NywyMjQsMTY0LjcyLDIyNCwxMTJWNTZBMTYsMTYsMCwwLDAsMjA4LDQwWm0tNDgsOTZIMTM2djI0YTgsOCwwLDAsMS0xNiwwVjEzNkg5NmE4LDgsMCwwLDEsMC0xNmgyNFY5NmE4LDgsMCwwLDEsMTYsMHYyNGgyNGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZ2NTZjMCw5Ni04OCwxMjAtODgsMTIwUzQwLDIwOCw0MCwxMTJWNTZhOCw4LDAsMCwxLDgtOEgyMDhBOCw4LDAsMCwxLDIxNiw1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik04OCwxMjhhOCw4LDAsMCwxLDgtOGgyNFY5NmE4LDgsMCwwLDEsMTYsMHYyNGgyNGE4LDgsMCwwLDEsMCwxNkgxMzZ2MjRhOCw4LDAsMCwxLTE2LDBWMTM2SDk2QTgsOCwwLDAsMSw4OCwxMjhaTTIyNCw1NnY1NmMwLDUyLjcyLTI1LjUyLDg0LjY3LTQ2LjkzLDEwMi4xOS0yMy4wNiwxOC44Ni00NiwyNS4yNy00NywyNS41M2E4LDgsMCwwLDEtNC4yLDBjLTEtLjI2LTIzLjkxLTYuNjctNDctMjUuNTNDNTcuNTIsMTk2LjY3LDMyLDE2NC43MiwzMiwxMTJWNTZBMTYsMTYsMCwwLDEsNDgsNDBIMjA4QTE2LDE2LDAsMCwxLDIyNCw1NlptLTE2LDBMNDgsNTZsMCw1NmMwLDM3LjMsMTMuODIsNjcuNTEsNDEuMDcsODkuODFBMTI4LjI1LDEyOC4yNSwwLDAsMCwxMjgsMjIzLjYyYTEyOS4zLDEyOS4zLDAsMCwwLDM5LjQxLTIyLjJDMTk0LjM0LDE3OS4xNiwyMDgsMTQ5LjA3LDIwOCwxMTJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ShieldPlus";
export { I as ShieldPlus }
