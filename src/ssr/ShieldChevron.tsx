
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ShieldChevron";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMTYsMTYsMCwwLDAsMzIsNTZ2NTZjMCw1Mi43MiwyNS41Miw4NC42Nyw0Ni45MywxMDIuMTksMjMuMDYsMTguODYsNDYsMjUuMjYsNDcsMjUuNTNhOCw4LDAsMCwwLDQuMiwwYzEtLjI3LDIzLjkxLTYuNjcsNDctMjUuNTNDMTk4LjQ4LDE5Ni42NywyMjQsMTY0LjcyLDIyNCwxMTJWNTZBMTYsMTYsMCwwLDAsMjA4LDQwWk0xNjcuNCwyMDEuNDJBMTI5LjMsMTI5LjMsMCwwLDEsMTI4LDIyMy42MmExMjguMjUsMTI4LjI1LDAsMCwxLTM4LjkyLTIxLjgxLDExMS44MiwxMTEuODIsMCwwLDEtMjQuNTEtMjcuNjRMMTI4LDEyOS43N2w2My40Myw0NC40QTExMS41NiwxMTEuNTYsMCwwLDEsMTY3LjQsMjAxLjQyWk0yMDgsMTEycTAsMjYuMzEtOS4xNCw0Ny44NGwtNjYuMjctNDYuMzlhOCw4LDAsMCwwLTkuMTgsMEw1Ny4xMywxNTkuODRDNTEuMDYsMTQ1LjUyLDQ4LDEyOS41NCw0OCwxMTJsMC01NiwxNjAsMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDRINDhBMTIsMTIsMCwwLDAsMzYsNTZ2NTZjMCw1MS4xNiwyNC43Myw4Mi4xMiw0NS40Nyw5OS4xLDIyLjQsMTguMzIsNDQuNTUsMjQuNSw0NS40OCwyNC43NmE0LDQsMCwwLDAsMi4xLDBjLjkzLS4yNiwyMy4wOC02LjQ0LDQ1LjQ4LTI0Ljc2LDIwLjc0LTE3LDQ1LjQ3LTQ3Ljk0LDQ1LjQ3LTk5LjFWNTZBMTIsMTIsMCwwLDAsMjA4LDQ0Wk0xNjkuNzEsMjA0LjcxQTEzMi40NSwxMzIuNDUsMCwwLDEsMTI4LDIyNy44MmExMzIuMjMsMTMyLjIzLDAsMCwxLTQxLjcxLTIzLjExQTExNS4wOCwxMTUuMDgsMCwwLDEsNTkuMjEsMTczTDEyOCwxMjQuODgsMTk2Ljc5LDE3M0ExMTUuMDgsMTE1LjA4LDAsMCwxLDE2OS43MSwyMDQuNzFaTTIxMiwxMTJjMCwyMC0zLjg1LDM4LTExLjQ2LDUzLjg5bC03MC4yNS00OS4xN2E0LDQsMCwwLDAtNC41OCwwTDU1LjQ2LDE2NS44OUM0Ny44NSwxNTAsNDQsMTMyLDQ0LDExMlY1NmE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDJINDhBMTQsMTQsMCwwLDAsMzQsNTZ2NTZjMCw1MS45NCwyNS4xMiw4My40LDQ2LjIsMTAwLjY0LDIyLjczLDE4LjYsNDUuMjcsMjQuODksNDYuMjIsMjUuMTVhNiw2LDAsMCwwLDMuMTYsMGMuOTUtLjI2LDIzLjQ5LTYuNTUsNDYuMjItMjUuMTVDMTk2Ljg4LDE5NS40LDIyMiwxNjMuOTQsMjIyLDExMlY1NkExNCwxNCwwLDAsMCwyMDgsNDJaTTE2OC41NiwyMDMuMDZBMTMxLjE3LDEzMS4xNywwLDAsMSwxMjgsMjI1LjcyYTEzMC45NCwxMzAuOTQsMCwwLDEtNDAuNTYtMjIuNjYsMTEzLjA5LDExMy4wOSwwLDAsMS0yNS41Ni0yOS40NUwxMjgsMTI3LjMybDY2LjEyLDQ2LjI5QTExMy4wOSwxMTMuMDksMCwwLDEsMTY4LjU2LDIwMy4wNlpNMjEwLDExMmMwLDE4Ljc1LTMuNDQsMzUuNzUtMTAuMjgsNTAuODhsLTY4LjI4LTQ3LjhhNiw2LDAsMCwwLTYuODgsMGwtNjguMjgsNDcuOEM0OS40NCwxNDcuNzUsNDYsMTMwLjc1LDQ2LDExMlY1NmEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMjAsMjAsMCwwLDAsMjgsNTZ2NTZjMCw1NC4yOSwyNi4zMiw4Ny4yMiw0OC40LDEwNS4yOSwyMy43MSwxOS4zOSw0Ny40NCwyNiw0OC40NCwyNi4yOWExMi4xLDEyLjEsMCwwLDAsNi4zMiwwYzEtLjI4LDI0LjczLTYuOSw0OC40NC0yNi4yOSwyMi4wOC0xOC4wNyw0OC40LTUxLDQ4LjQtMTA1LjI5VjU2QTIwLDIwLDAsMCwwLDIwOCwzNlpNNTIsNjBIMjA0djUyYTExOS41NCwxMTkuNTQsMCwwLDEtNyw0MS42NGwtNjIuMTEtNDMuNDdhMTIsMTIsMCwwLDAtMTMuNzYsMEw1OSwxNTMuNjRBMTE5LjU0LDExOS41NCwwLDAsMSw1MiwxMTJaTTE2NS4wOSwxOTguMTVBMTI2LjI4LDEyNi4yOCwwLDAsMSwxMjgsMjE5LjM4YTEyNi4xNCwxMjYuMTQsMCwwLDEtMzcuMDktMjEuMjNBMTA5LDEwOSwwLDAsMSw3MCwxNzUuMjNsNTgtNDAuNTgsNTgsNDAuNThBMTA5LDEwOSwwLDAsMSwxNjUuMDksMTk4LjE1WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMTYsMTYsMCwwLDAsMzIsNTZ2NTZjMCw1Mi43MiwyNS41Miw4NC42Nyw0Ni45MywxMDIuMTksMjMuMDYsMTguODYsNDYsMjUuMjYsNDcsMjUuNTNhOCw4LDAsMCwwLDQuMiwwYzEtLjI3LDIzLjkxLTYuNjcsNDctMjUuNTNDMTk4LjQ4LDE5Ni42NywyMjQsMTY0LjcyLDIyNCwxMTJWNTZBMTYsMTYsMCwwLDAsMjA4LDQwWm0wLDcycTAsMjYuMzEtOS4xNCw0Ny44NGwtNjYuMjctNDYuMzlhOCw4LDAsMCwwLTkuMTgsMEw1Ny4xMywxNTkuODRDNTEuMDYsMTQ1LjUyLDQ4LDEyOS41NCw0OCwxMTJsMC01NiwxNjAsMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDIsMTcxLjc4QzE3Ny4xMywyMTguNiwxMjgsMjMyLDEyOCwyMzJzLTQ5LjEzLTEzLjQtNzQtNjAuMjJMMTI4LDEyMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMTYsMTYsMCwwLDAsMzIsNTZ2NTZjMCw1Mi43MiwyNS41Miw4NC42Nyw0Ni45MywxMDIuMTksMjMuMDYsMTguODYsNDYsMjUuMjYsNDcsMjUuNTNhOCw4LDAsMCwwLDQuMiwwYzEtLjI3LDIzLjkxLTYuNjcsNDctMjUuNTNDMTk4LjQ4LDE5Ni42NywyMjQsMTY0LjcyLDIyNCwxMTJWNTZBMTYsMTYsMCwwLDAsMjA4LDQwWk0xNjcuNCwyMDEuNDJBMTI5LjMsMTI5LjMsMCwwLDEsMTI4LDIyMy42MmExMjguMjUsMTI4LjI1LDAsMCwxLTM4LjkyLTIxLjgxLDExMS44MiwxMTEuODIsMCwwLDEtMjQuNTEtMjcuNjRMMTI4LDEyOS43N2w2My40Myw0NC40QTExMS41NiwxMTEuNTYsMCwwLDEsMTY3LjQsMjAxLjQyWk0yMDgsMTEycTAsMjYuMzEtOS4xNCw0Ny44NGwtNjYuMjctNDYuMzlhOCw4LDAsMCwwLTkuMTgsMEw1Ny4xMywxNTkuODRDNTEuMDYsMTQ1LjUyLDQ4LDEyOS41NCw0OCwxMTJsMC01NiwxNjAsMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ShieldChevron";
export { I as ShieldChevron }
