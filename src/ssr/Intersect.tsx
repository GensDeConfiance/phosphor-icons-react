
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Intersect";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzQuNjMsODEuMzdhODAsODAsMCwxLDAtOTMuMjYsOTMuMjYsODAsODAsMCwxLDAsOTMuMjYtOTMuMjZaTTEwMC42OSwxMzYsMTIwLDE1NS4zMUE2My40OCw2My40OCwwLDAsMSw5NiwxNjAsNjMuNDgsNjMuNDgsMCwwLDEsMTAwLjY5LDEzNlptMzMuNzUsMTEuMTMtMjUuNTctMjUuNTdhNjQuNjUsNjQuNjUsMCwwLDEsMTIuNjktMTIuNjlsMjUuNTcsMjUuNTdBNjQuNjUsNjQuNjUsMCwwLDEsMTM0LjQ0LDE0Ny4xM1pNMTU1LjMxLDEyMCwxMzYsMTAwLjY5QTYzLjQ4LDYzLjQ4LDAsMCwxLDE2MCw5Niw2My40OCw2My40OCwwLDAsMSwxNTUuMzEsMTIwWk0zMiw5NmE2NCw2NCwwLDAsMSwxMjYtMTZBODAuMDgsODAuMDgsMCwwLDAsODAuMDUsMTU4LDY0LjExLDY0LjExLDAsMCwxLDMyLDk2Wk0xNjAsMjI0QTY0LjExLDY0LjExLDAsMCwxLDk4LDE3Niw4MC4wOCw4MC4wOCwwLDAsMCwxNzYsOTgsNjQsNjQsMCwwLDEsMTYwLDIyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEuMTcsODQuODNhNzYsNzYsMCwxLDAtODYuMzQsODYuMzQsNzYsNzYsMCwxLDAsODYuMzQtODYuMzRaTTI4LDk2QTY4LDY4LDAsMCwxLDE2Mi45Myw4NC4wN2MtMSwwLTItLjA3LTIuOTMtLjA3YTc2LjA4LDc2LjA4LDAsMCwwLTc2LDc2YzAsMSwwLDIsLjA3LDIuOTNBNjguMSw2OC4xLDAsMCwxLDI4LDk2Wm0xMzYsMGE2Ny41OSw2Ny41OSwwLDAsMS03LjQ1LDMwLjg5TDEyOS4xMSw5OS40NUE2Ny41OSw2Ny41OSwwLDAsMSwxNjAsOTJjMS4zLDAsMi42LDAsMy44OC4xMkMxNjQsOTMuNCwxNjQsOTQuNywxNjQsOTZaTTkyLDE2MGE2Ny41OSw2Ny41OSwwLDAsMSw3LjQ1LTMwLjg5bDI3LjQ0LDI3LjQ0QTY3LjU5LDY3LjU5LDAsMCwxLDk2LDE2NGMtMS4zLDAtMi42LS4wNS0zLjg4LS4xMkM5Mi4wNSwxNjIuNiw5MiwxNjEuMyw5MiwxNjBabTQyLTcuNjRMMTAzLjY0LDEyMkE2OC43NCw2OC43NCwwLDAsMSwxMjIsMTAzLjY0TDE1Mi4zNiwxMzRBNjguNzQsNjguNzQsMCwwLDEsMTM0LDE1Mi4zNlpNMTYwLDIyOGE2OC4xLDY4LjEsMCwwLDEtNjYuOTMtNTYuMDdjMSwwLDIsLjA3LDIuOTMuMDdhNzYuMDgsNzYuMDgsMCwwLDAsNzYtNzZjMC0xLDAtMi0uMDctMi45M0E2OCw2OCwwLDAsMSwxNjAsMjI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIuOTEsODMuMDlhNzgsNzgsMCwxLDAtODkuODIsODkuODIsNzgsNzgsMCwxLDAsODkuODItODkuODJaTTMwLDk2QTY2LDY2LDAsMCwxLDE2MC40OSw4MkgxNjBhNzguMDksNzguMDksMCwwLDAtNzgsNzhjMCwuMTcsMCwuMzMsMCwuNDlBNjYuMSw2Ni4xLDAsMCwxLDMwLDk2Wm02NCw2NGE2NS42Miw2NS42MiwwLDAsMSw2LTI3LjQ5TDEyMy40OSwxNTZBNjUuNjIsNjUuNjIsMCwwLDEsOTYsMTYyYy0uNjUsMC0xLjMsMC0yLS4wNUM5NCwxNjEuMyw5NCwxNjAuNjUsOTQsMTYwWm00MC4yMy0xMC4yNS0yOC0yOGE2Ni40Nyw2Ni40NywwLDAsMSwxNS41Mi0xNS41MmwyOCwyOEE2Ni40Nyw2Ni40NywwLDAsMSwxMzQuMjMsMTQ5Ljc1Wk0xNjIsOTZhNjUuNjIsNjUuNjIsMCwwLDEtNiwyNy40OUwxMzIuNTEsMTAwQTY1LjYyLDY1LjYyLDAsMCwxLDE2MCw5NGMuNjUsMCwxLjMsMCwxLjk1LDBDMTYyLDk0LjcsMTYyLDk1LjM1LDE2Miw5NlptLTIsMTMwYTY2LjEsNjYuMSwwLDAsMS02NC40OS01Mkg5NmE3OC4wOSw3OC4wOSwwLDAsMCw3OC03OGMwLS4xNywwLS4zMywwLS40OUE2Niw2NiwwLDAsMSwxNjAsMjI2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsNzhBODQsODQsMCwxLDAsNzgsMTc4LDg0LDg0LDAsMSwwLDE3OCw3OFptLTIyLjE5LDIyLjE5YTU5LjU3LDU5LjU3LDAsMCwxLTkuODEsMjguOUwxMjYuOTQsMTEwQTU5LjU3LDU5LjU3LDAsMCwxLDE1NS44NCwxMDAuMTZabS03OS41LDUyLjUxYTYwLDYwLDAsMSwxLDc2LjMzLTc2LjMzQTg0LjExLDg0LjExLDAsMCwwLDc2LjM0LDE1Mi42N1ptMjMuODIsMy4xN2E1OS41Nyw1OS41NywwLDAsMSw5LjgxLTI4LjlMMTI5LjA2LDE0NkE1OS41Nyw1OS41NywwLDAsMSwxMDAuMTYsMTU1Ljg0Wk0xNjAsMjIwYTYwLjA5LDYwLjA5LDAsMCwxLTU2LjY3LTQwLjM0LDg0LjExLDg0LjExLDAsMCwwLDc2LjMzLTc2LjMzQTYwLDYwLDAsMCwxLDE2MCwyMjBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzQuNjMsODEuMzdhODAsODAsMCwxLDAtOTMuMjYsOTMuMjYsODAsODAsMCwxLDAsOTMuMjYtOTMuMjZaTTMyLDk2YTY0LDY0LDAsMCwxLDEyNi0xNkE4MC4wOCw4MC4wOCwwLDAsMCw4MC4wNSwxNTgsNjQuMTEsNjQuMTEsMCwwLDEsMzIsOTZaTTE2MCwyMjRBNjQuMTEsNjQuMTEsMCwwLDEsOTgsMTc2LDgwLjA4LDgwLjA4LDAsMCwwLDE3Niw5OCw2NCw2NCwwLDAsMSwxNjAsMjI0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsOTZhNzIsNzIsMCwwLDEtNzIsNzIsNzMuMzcsNzMuMzcsMCwwLDEtNy42LS40QTczLjM3LDczLjM3LDAsMCwxLDg4LDE2MGE3Miw3MiwwLDAsMSw3Mi03Miw3My4zNyw3My4zNywwLDAsMSw3LjYuNEE3My4zNyw3My4zNywwLDAsMSwxNjgsOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc0LjYzLDgxLjM3YTgwLDgwLDAsMSwwLTkzLjI2LDkzLjI2LDgwLDgwLDAsMSwwLDkzLjI2LTkzLjI2Wk0zMiw5NmE2NCw2NCwwLDAsMSwxMjYtMTZBODAuMDgsODAuMDgsMCwwLDAsODAuMDUsMTU4LDY0LjExLDY0LjExLDAsMCwxLDMyLDk2Wm0xMjgsMGE2NC4wNyw2NC4wNywwLDAsMS02NCw2NEE2NC4wNyw2NC4wNywwLDAsMSwxNjAsOTZabTAsMTI4QTY0LjExLDY0LjExLDAsMCwxLDk4LDE3Niw4MC4wOCw4MC4wOCwwLDAsMCwxNzYsOTgsNjQsNjQsMCwwLDEsMTYwLDIyNFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Intersect";
export { I as Intersect }
