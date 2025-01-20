
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/WifiLow";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsMjA0YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwyMDRabTMyLjcxLTQ1LjQ3YTc2LjA1LDc2LjA1LDAsMCwwLTg5LjQyLDAsOCw4LDAsMCwwLDkuNDIsMTIuOTQsNjAsNjAsMCwwLDEsNzAuNTgsMCw4LDgsMCwxLDAsOS40Mi0xMi45NFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMjA0YTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDEzNiwyMDRabTM0LjM1LTQyLjIzYTcyLDcyLDAsMCwwLTg0LjcsMCw0LDQsMCwxLDAsNC43MSw2LjQ2LDY0LDY0LDAsMCwxLDc1LjI4LDAsNCw0LDAsMSwwLDQuNzEtNi40NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzgsMjA0YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzOCwyMDRabTMzLjUzLTQzLjg1YTc0LDc0LDAsMCwwLTg3LjA2LDAsNiw2LDAsMCwwLDcuMDYsOS43LDYyLDYyLDAsMCwxLDcyLjk0LDAsNiw2LDAsMCwwLDguMzgtMS4zMkE2LDYsMCwwLDAsMTcxLjUzLDE2MC4xNVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMjA0YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwyMDRabTMxLjA2LTQ4LjdhODAsODAsMCwwLDAtOTQuMTIsMCwxMiwxMiwwLDEsMCwxNC4xMywxOS40LDU2LDU2LDAsMCwxLDY1Ljg2LDAsMTIsMTIsMCwxLDAsMTQuMTMtMTkuNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDcuODksODAuOTFhMTUuOTMsMTUuOTMsMCwwLDAtNi4xNy0xMC44MUExODYuNjcsMTg2LjY3LDAsMCwwLDEyOCwzMiwxODYuNjcsMTg2LjY3LDAsMCwwLDE0LjI4LDcwLjEsMTUuOTMsMTUuOTMsMCwwLDAsOC4xMSw4MC45MSwxNS42NSwxNS42NSwwLDAsMCwxMS42NSw5Mi44bDEwNCwxMjUuNDNBMTUuOTMsMTUuOTMsMCwwLDAsMTI4LDIyNGgwYTE1LjkzLDE1LjkzLDAsMCwwLDEyLjMxLTUuNzdoMGwxMDQtMTI1LjQzQTE1LjY1LDE1LjY1LDAsMCwwLDI0Ny44OSw4MC45MVptLTc3LjUyLDc2YTc1Ljg5LDc1Ljg5LDAsMCwwLTg0Ljc0LDBMMjQuMDksODIuNzRBMTcwLjc2LDE3MC43NiwwLDAsMSwxMjgsNDgsMTcwLjc2LDE3MC43NiwwLDAsMSwyMzEuOTEsODIuNzRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEuNjgsMTY3Ljg4bC0zNy41Myw0NS4yNGE4LDgsMCwwLDEtMTIuMywwTDg0LjMyLDE2Ny44OGE2OCw2OCwwLDAsMSw4Ny4zNiwwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0Ny44OSw4MC45MWExNS45MywxNS45MywwLDAsMC02LjE3LTEwLjgxQTE4Ni42NywxODYuNjcsMCwwLDAsMTI4LDMyLDE4Ni42NywxODYuNjcsMCwwLDAsMTQuMjgsNzAuMSwxNS45MywxNS45MywwLDAsMCw4LjExLDgwLjkxLDE1LjY1LDE1LjY1LDAsMCwwLDExLjY1LDkyLjhsMTA0LDEyNS40M0ExNS45MywxNS45MywwLDAsMCwxMjgsMjI0aDBhMTUuOTMsMTUuOTMsMCwwLDAsMTIuMzEtNS43N2gwbDEwNC0xMjUuNDNBMTUuNjUsMTUuNjUsMCwwLDAsMjQ3Ljg5LDgwLjkxWk0xMjgsMjA4bC0zMi4xLTM4LjdhNjAsNjAsMCwwLDEsNjQuMiwwWm00Mi4zNy01MS4wOGE3NS44OSw3NS44OSwwLDAsMC04NC43NCwwTDI0LjA5LDgyLjc0QTE3MC43NiwxNzAuNzYsMCwwLDEsMTI4LDQ4LDE3MC43NiwxNzAuNzYsMCwwLDEsMjMxLjkxLDgyLjc0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "WifiLow";
export { I as WifiLow }
