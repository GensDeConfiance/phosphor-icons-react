
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CloudSun";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNzJhNzYuMiw3Ni4yLDAsMCwwLTIwLjI2LDIuNzMsNTUuNjMsNTUuNjMsMCwwLDAtOS40MS0xMS41NGw5LjUxLTEzLjU3YTgsOCwwLDEsMC0xMy4xMS05LjE4TDEyMS4yMiw1NEE1NS45LDU1LjksMCwwLDAsOTYsNDhjLS41OCwwLTEuMTYsMC0xLjc0LDBMOTEuMzcsMzEuNzFhOCw4LDAsMSwwLTE1Ljc1LDIuNzdMNzguNSw1MC44MkE1Ni4xLDU2LjEsMCwwLDAsNTUuMjMsNjUuNjdMNDEuNjEsNTYuMTRhOCw4LDAsMSwwLTkuMTcsMTMuMTFMNDYsNzguNzdBNTUuNTUsNTUuNTUsMCwwLDAsNDAsMTA0YzAsLjU3LDAsMS4xNSwwLDEuNzJMMjMuNzEsMTA4LjZhOCw4LDAsMCwwLDEuMzgsMTUuODgsOC4yNCw4LjI0LDAsMCwwLDEuMzktLjEybDE2LjMyLTIuODhhNTUuNzQsNTUuNzQsMCwwLDAsNS44NiwxMi40MkE1Miw1MiwwLDAsMCw4NCwyMjRoODBhNzYsNzYsMCwwLDAsMC0xNTJaTTU2LDEwNGE0MCw0MCwwLDAsMSw3Mi41NC0yMy4yNCw3Ni4yNiw3Ni4yNiwwLDAsMC0zNS42Miw0MCw1Mi4xNCw1Mi4xNCwwLDAsMC0zMSw0LjE3QTQwLDQwLDAsMCwxLDU2LDEwNFpNMTY0LDIwOEg4NGEzNiwzNiwwLDEsMSw0Ljc4LTcxLjY5Yy0uMzcsMi4zNy0uNjMsNC43OS0uNzcsNy4yM2E4LDgsMCwwLDAsMTYsLjkyLDU4LjkxLDU4LjkxLDAsMCwxLDEuODgtMTEuODFjMC0uMTYuMDktLjMyLjEyLS40OEE2MC4wNiw2MC4wNiwwLDEsMSwxNjQsMjA4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNzZhNzEuODUsNzEuODUsMCwwLDAtMjIuMTQsMy40OEE1MS43OCw1MS43OCwwLDAsMCwxMjksNjMuODNsMTEuNTYtMTYuNTFBNCw0LDAsMCwwLDEzNCw0Mi43M0wxMjIuNDUsNTkuMjRBNTIsNTIsMCwwLDAsOTYsNTJjLTEuNzEsMC0zLjQuMDktNS4wNi4yNUw4Ny40NCwzMi40YTQsNCwwLDAsMC03Ljg4LDEuMzlsMy41LDE5Ljg0QTUyLjE5LDUyLjE5LDAsMCwwLDU1Ljg1LDcxTDM5LjMyLDU5LjQyQTQsNCwwLDAsMCwzNC43Myw2Nkw1MS4yNiw3Ny41NEE1MS42Myw1MS42MywwLDAsMCw0NCwxMDRjMCwxLjY5LjA5LDMuMzcuMjUsNWwtMTkuODUsMy41YTQsNCwwLDAsMCwuNjksNy45NCw0LjIzLDQuMjMsMCwwLDAsLjctLjA2bDE5Ljg1LTMuNUE1Mi4wNyw1Mi4wNywwLDAsMCw1NCwxMzQuNiw0OCw0OCwwLDAsMCw4NCwyMjBoODBhNzIsNzIsMCwwLDAsMC0xNDRaTTUyLDEwNGE0NCw0NCwwLDAsMSw4Mi4zMy0yMS42MSw3Mi4yMyw3Mi4yMywwLDAsMC0zOC44Miw0M0E0OC4yOCw0OC4yOCwwLDAsMCw4NCwxMjRhNDcuNzYsNDcuNzYsMCwwLDAtMjMuNCw2LjExQTQ0LDQ0LDAsMCwxLDUyLDEwNFpNMTY0LDIxMkg4NGE0MCw0MCwwLDEsMSw5LjQzLTc4Ljg4QTcxLjYzLDcxLjYzLDAsMCwwLDkyLDE0My43N2E0LDQsMCwwLDAsOCwuNDYsNjQuMyw2NC4zLDAsMCwxLDItMTIuNjdjMC0uMTIuMDctLjI0LjA5LS4zNkE2NC4wNiw2NC4wNiwwLDEsMSwxNjQsMjEyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNzRhNzQuMTUsNzQuMTUsMCwwLDAtMjEuMTgsMy4wOSw1NC4wOCw1NC4wOCwwLDAsMC0xMS4xNC0xMy42MWwxMC41Mi0xNWE2LDYsMCwxLDAtOS44My02Ljg5bC0xMC41MiwxNUE1My45LDUzLjksMCwwLDAsOTYsNTBjLTEuMTUsMC0yLjI4LDAtMy40MS4xMkw4OS40LDMyLjA1YTYsNiwwLDEsMC0xMS44MSwyLjA5TDgwLjc3LDUyLjJBNTQsNTQsMCwwLDAsNTUuNTIsNjguMzJMNDAuNDcsNTcuNzhhNiw2LDAsMCwwLTYuODksOS44M2wxNSwxMC41MkE1My43LDUzLjcsMCwwLDAsNDIsMTA0YzAsMS4xMywwLDIuMjYuMTIsMy4zOWwtMTguMDcsMy4xOGE2LDYsMCwwLDAsMSwxMS45MSw2LjM4LDYuMzgsMCwwLDAsMS4wNS0uMDlMNDQuMiwxMTkuMmE1My41MSw1My41MSwwLDAsMCw3LjA4LDE1QTUwLDUwLDAsMCwwLDg0LDIyMmg4MGE3NCw3NCwwLDAsMCwwLTE0OFpNNTQsMTA0YTQyLDQyLDAsMCwxLDc3LjQ4LTIyLjQ5QTc0LjI5LDc0LjI5LDAsMCwwLDk0LjIsMTIzLDUwLjM2LDUwLjM2LDAsMCwwLDg0LDEyMmE0OS42NSw0OS42NSwwLDAsMC0yMi43OSw1LjUyQTQyLDQyLDAsMCwxLDU0LDEwNFpNMTY0LDIxMEg4NGEzOCwzOCwwLDEsMSw3LjA4LTc1LjM0LDc1Ljg0LDc1Ljg0LDAsMCwwLTEuMDcsOSw2LDYsMCwwLDAsMTIsLjcsNjEuNTQsNjEuNTQsMCwwLDEsMi0xMi4yNGMwLS4xNS4wOC0uMjkuMTEtLjQzQTYyLjA2LDYyLjA2LDAsMSwxLDE2NCwyMTBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNjhhODAuMzksODAuMzksMCwwLDAtMTguNDYsMi4xNSw1OS44Nyw1OS44NywwLDAsMC02LTcuNDJsNy41Ny0xMC44MmExMiwxMiwwLDAsMC0xOS42Ni0xMy43N0wxMTkuODcsNDlBNTkuODUsNTkuODUsMCwwLDAsOTcuNjEsNDRsLTIuMy0xM2ExMiwxMiwwLDAsMC0yMy42Myw0LjE3bDIuMywxM0E2MCw2MCwwLDAsMCw1NC43Nyw2MC40N0w0My45MSw1Mi44NkExMiwxMiwwLDAsMCwzMC4xNCw3Mi41Mkw0MSw4MC4xMUE1OS40NSw1OS40NSwwLDAsMCwzNiwxMDIuMzZsLTEzLDIuM2ExMiwxMiwwLDAsMCwyLjA3LDIzLjgyLDEyLjU5LDEyLjU5LDAsMCwwLDIuMS0uMThsMTMtMi4zYTU5LjI5LDU5LjI5LDAsMCwwLDMuNDQsNy4yNUE1Niw1NiwwLDAsMCw4NCwyMjhoODBhODAsODAsMCwwLDAsMC0xNjBaTTk2LDY4YTM2LDM2LDAsMCwxLDI2LjQ1LDExLjYxLDgwLjM3LDgwLjM3LDAsMCwwLTMyLjA2LDM2Ljc1QTU2LjUsNTYuNSwwLDAsMCw4NCwxMTZhNTUuODQsNTUuODQsMCwwLDAtMjAuMzMsMy44M0EzNiwzNiwwLDAsMSw5Niw2OFptNjgsMTM2SDg0YTMyLDMyLDAsMCwxLDAtNjRoLjI4Yy0uMTEsMS4xLS4yLDIuMi0uMjYsMy4zYTEyLDEyLDAsMCwwLDI0LDEuNCw1NS43OCw1NS43OCwwLDAsMSwxLjc0LTExbC4xNS0uNTVBNTYuMDYsNTYuMDYsMCwxLDEsMTY0LDIwNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNzJhNzYuMiw3Ni4yLDAsMCwwLTIwLjI2LDIuNzMsNTUuNjMsNTUuNjMsMCwwLDAtOS40MS0xMS41NGw5LjUxLTEzLjU3YTgsOCwwLDEsMC0xMy4xMS05LjE4TDEyMS4yMiw1NEE1NS45LDU1LjksMCwwLDAsOTYsNDhjLS41OSwwLTEuMTYsMC0xLjc0LDBMOTEuMzcsMzEuNzFhOCw4LDAsMSwwLTE1Ljc1LDIuNzdMNzguNSw1MC44MkE1Ni4xLDU2LjEsMCwwLDAsNTUuMjMsNjUuNjdMNDEuNjEsNTYuMTRhOCw4LDAsMSwwLTkuMTcsMTMuMTFMNDYsNzguNzdBNTUuNTUsNTUuNTUsMCwwLDAsNDAsMTA0YzAsLjU3LDAsMS4xNSwwLDEuNzJMMjMuNzEsMTA4LjZhOCw4LDAsMCwwLDEuMzgsMTUuODgsOC4yNCw4LjI0LDAsMCwwLDEuMzktLjEybDE2LjMyLTIuODhhNTUuNzQsNTUuNzQsMCwwLDAsNS44NiwxMi40MkE1Miw1MiwwLDAsMCw4NCwyMjRoODBhNzYsNzYsMCwwLDAsMC0xNTJaTTkyLjkyLDEyMC43NmE1Mi4xNCw1Mi4xNCwwLDAsMC0zMSw0LjE3LDQwLDQwLDAsMCwxLDY2LjYyLTQ0LjE3QTc2LjI2LDc2LjI2LDAsMCwwLDkyLjkyLDEyMC43NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzkuODQsODQuNDF2MGE2OC4yMiw2OC4yMiwwLDAsMC00MS42NSw0NnYtLjExYTQ0LjA4LDQ0LjA4LDAsMCwwLTM4LjU0LDVoMGE0OCw0OCwwLDEsMSw4MC4xOS01MC45NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNjQsNzJhNzYuMiw3Ni4yLDAsMCwwLTIwLjI2LDIuNzMsNTUuNjMsNTUuNjMsMCwwLDAtOS40MS0xMS41NGw5LjUxLTEzLjU3YTgsOCwwLDEsMC0xMy4xMS05LjE4TDEyMS4yMiw1NEE1NS45LDU1LjksMCwwLDAsOTYsNDhjLS41OCwwLTEuMTYsMC0xLjc0LDBMOTEuMzcsMzEuNzFhOCw4LDAsMSwwLTE1Ljc1LDIuNzdMNzguNSw1MC44MkE1Ni4xLDU2LjEsMCwwLDAsNTUuMjMsNjUuNjdMNDEuNjEsNTYuMTRhOCw4LDAsMSwwLTkuMTcsMTMuMTFMNDYsNzguNzdBNTUuNTUsNTUuNTUsMCwwLDAsNDAsMTA0YzAsLjU3LDAsMS4xNSwwLDEuNzJMMjMuNzEsMTA4LjZhOCw4LDAsMCwwLDEuMzgsMTUuODgsOC4yNCw4LjI0LDAsMCwwLDEuMzktLjEybDE2LjMyLTIuODhhNTUuNzQsNTUuNzQsMCwwLDAsNS44NiwxMi40MkE1Miw1MiwwLDAsMCw4NCwyMjRoODBhNzYsNzYsMCwwLDAsMC0xNTJaTTU2LDEwNGE0MCw0MCwwLDAsMSw3Mi41NC0yMy4yNCw3Ni4yNiw3Ni4yNiwwLDAsMC0zNS42Miw0MCw1Mi4xNCw1Mi4xNCwwLDAsMC0zMSw0LjE3QTQwLDQwLDAsMCwxLDU2LDEwNFpNMTY0LDIwOEg4NGEzNiwzNiwwLDEsMSw0Ljc4LTcxLjY5Yy0uMzcsMi4zNy0uNjMsNC43OS0uNzcsNy4yM2E4LDgsMCwwLDAsMTYsLjkyLDU4LjkxLDU4LjkxLDAsMCwxLDEuODgtMTEuODFjMC0uMTYuMDktLjMyLjEyLS40OEE2MC4wNiw2MC4wNiwwLDEsMSwxNjQsMjA4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CloudSun";
export { I as CloudSun }
